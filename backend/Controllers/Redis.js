const redis = require('redis');
const redisClient = redis.createClient({
    host: 'localhost', // Change this to your Redis host
    port: 6379,        // Change this to your Redis port
});