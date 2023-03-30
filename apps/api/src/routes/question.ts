import express from 'express';
import { questionController } from '../controllers';

export function createQuestionRouter(): express.Router {
  const router = express.Router();

  // Define routes and map them to controller methods
  router.get('/', questionController.showQuestion);

  return router;
}


