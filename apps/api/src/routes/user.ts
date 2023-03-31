import express from 'express';
import { userController } from '../controllers';

export function createUserRouter(): express.Router {
  const router = express.Router();

  router.post('/signin', userController.signIn);
  router.post('/signup', userController.signUp);
  router.post('/signout', userController.signOut);

  return router;
}
