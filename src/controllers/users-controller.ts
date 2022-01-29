import { Request, Response, NextFunction } from "express";
import { getUsers as getUsersSvc, createUsers as createUsersSvc } from '../services/users-service';
import { User } from '../models/User';

const getUsers = ( req : Request, res : Response, next : NextFunction ) => {
    getUsersSvc()
        .then(users => {
            res.json( users );
        })
        .catch(err => {
            res.status( 500 ).json({
                success: false,
                message: err.message
            });
        });
};

const postUsers = ( req : Request, res : Response, next : NextFunction ) => {
    const { body : newUser } = req;

    createUsersSvc( newUser )
        .then(( user : any )  => {
            res.json( user );
        })
        .catch(( err : Error ) => {
            res.status( 500 ).json({
                success: false,
                message: err.message
            });
        });
};

export {
    getUsers,
    postUsers
};