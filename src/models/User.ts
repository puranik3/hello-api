import mongoose, { Schema, model, connect } from 'mongoose';

export interface User {
    username: string,
    password: string
};

const usersSchema = new Schema<User>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

model<User>( 'User', usersSchema );