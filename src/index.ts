import { config } from 'dotenv';
config();

// connect to the DB (simply running the script)
import './data/init';

// const express = require( 'express' );
import express from 'express';
import usersRouter from './routes/users-route';

const app = express();

// setup to extract body from incoming request (JSON data)
app.use( express.json() );

// setup to extract body from incoming request (form data)
app.use( express.urlencoded() );

app.use( usersRouter );

const PORT = process.env.PORT || 5555;

app.listen( PORT, () => {
    console.log( `Successfully started on http://localhost:${PORT}` );
});

app.on( 'error', ( err ) => {
    console.error( err );
});