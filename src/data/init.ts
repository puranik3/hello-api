import mongoose from 'mongoose';

// create models
import '../models/User';

const { DB_PORT, DB_NAME }  = process.env;

mongoose.connect( `mongodb://localhost:${DB_PORT}/${DB_NAME}` )
    .then(() => {
        console.log( `Successfully connected` );
    })
    .catch(err => {
        console.error( err.message );
    });