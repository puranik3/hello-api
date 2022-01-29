import express from 'express';
import { getUsers, postUsers } from '../controllers/users-controller';

const router = express.Router();

router.get( '/users', getUsers );
router.post( '/users', postUsers );

export {
    router as default
};