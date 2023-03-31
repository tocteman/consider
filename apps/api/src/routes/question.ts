import express from 'express';
import { questionController } from '../controllers';

export function createQuestionRouter(): express.Router {
  const router = express.Router();

  router.get('/', questionController.getAllQuestions);
  router.post('/', questionController.createQuestion)
  return router;
}


