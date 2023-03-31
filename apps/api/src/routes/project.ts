import express from 'express';
import { projectController } from '../controllers'

export function createProjectRouter(): express.Router {
  const router = express.Router();
  router.get('/', projectController.getAllProjects);
  router.post('/', projectController.createProject)

  return router;
}

