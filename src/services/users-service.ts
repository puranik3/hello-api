import mongoose from 'mongoose';

const User = mongoose.model( 'User' );

const getUsers = () => {
    // find() gets users
    return User.find()
};

const createUsers = ( newUser : any ) => {
    return User.create( newUser );
};

export {
    getUsers,
    createUsers
};