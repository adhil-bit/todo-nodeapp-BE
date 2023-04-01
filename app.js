import  express  from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';

// app
const app =express();

//body parser
app.use(express.json());

// server
let PORT = process.env.PORT|| 3003;
app.listen(PORT,()=> console.log(`server hosting on port ${PORT}`));
