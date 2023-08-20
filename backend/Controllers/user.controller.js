

const { db, table } = require('../db.config.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const passport = require('./passport-config');


// Create users
const SignupUser = async (req, res) => {
    const { firstname, lastname, email, password, id } = req.body;
    try {
        const scanParams = {
            TableName: table,
            FilterExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email': email,
            },
        };
        const existingUser = await db.scan(scanParams).promise();
        if (existingUser.Items.length > 0) {
            res.status(400).json({ error: 'Email already exists' });
        } else {
            const params = {
                TableName: table,
                Item: {
                    id,
                    firstname,
                    lastname,
                    email,
                    password,
                },
            };
            await db.put(params).promise();
            res.json({ message: 'User registered successfully' });
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
}

//loginuser
const LoginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email && !password) {
        res.send({ msg: "invalid" })
    }
    const params = {
        TableName: 'users',
    };

    try {
        const result = await db.scan(params).promise();
        const user = result.Items.find(item => item.email === email);
        if (user && user.password === password) {
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '7h' });
            res.json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Failed to process login' });
    }
}

// getAllusers
const ReadAllUsers = async (req, res) => {
    const params = {
        TableName: table
    }
    try {
        const result = await db.scan(params).promise();
        res.json(result.Items);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

module.exports = {
    SignupUser, LoginUser, ReadAllUsers
}