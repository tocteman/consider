import express from 'express';
import { projectController } from '../controllers'

export function createProjectRouter(): express.Router {
  const router = express.Router();

  // Define routes and map them to controller methods
  router.get('/', projectController.getAllProjects);
  router.post('/', projectController.createProject)

  return router;
}

