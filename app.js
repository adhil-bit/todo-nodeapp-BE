import  express  from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';

// app
const app =express();

//body parser
app.use(express.json());

//mysql
const myDB = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'adhil',
    password:'password123',
    database:'todoapp',
})


// server
let PORT = process.env.PORT|| 3003;
app.listen(PORT,()=> console.log(`server hosting on port ${PORT}`));
