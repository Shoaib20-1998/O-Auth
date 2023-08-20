const express = require('express')
const { Routes } = require('./Routes/user.routes')
const passport = require('./Controllers/passport-config');
const app=express()
app.use(express.json())
app.use('/',Routes)
app.use(passport.initialize());
app.use(passport.session());

app.listen(process.env.port,()=>{
    console.log('server is running')
})