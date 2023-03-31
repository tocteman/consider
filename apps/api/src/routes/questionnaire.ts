import express from 'express';
import { questionnaireController } from '../controllers'

export function createQuestionnaireRouter(): express.Router {
  const router = express.Router();
  router.get('/:id', questionnaireController.getQuestionnaire)
  router.get('/', questionnaireController.getAllQuestionnaires);
  router.post('/', questionnaireController.createQuestionnaire)

  return router;
}


