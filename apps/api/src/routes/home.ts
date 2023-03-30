import express from 'express';
import { homeController } from '../controllers'

export function createHomeRouter(): express.Router {
  const router = express.Router();

  // Define routes and map them to controller methods
  router.get('/', homeController.showHome);

  return router;
}

