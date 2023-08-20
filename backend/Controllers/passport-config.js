const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { db } = require('../db.config.js'); // Import the DynamoDB configuration

passport.use(new LocalStrategy(
    async (email, password, done) => {
        // Fetch user from DynamoDB based on email
        const params = {
          TableName: 'users', // Replace with your table name
          FilterExpression: 'email = :email',
          ExpressionAttributeValues: {
            ':email': email,
          },
        };
    
        try {
          const result = await db.scan(params).promise();
          const user = result.Items[0];
    
          if (!user || user.password !== password) {
            return done(null, false, { message: 'Invalid email or password' });
          }
    
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
));

passport.serializeUser((user, done) => {
    done(null, user.email);
});

passport.deserializeUser(async (email, done) => {
   // Fetch user from DynamoDB based on email
   const params = {
    TableName: 'users', // Replace with your table name
    FilterExpression: 'email = :email',
    ExpressionAttributeValues: {
      ':email': email,
    },
  };
  
  try {
    const result = await db.scan(params).promise();
    const user = result.Items[0];
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
