import { createProjectRepository } from '@consider/database';

const projectRepo = createProjectRepository()

async function createProject(req, res) {
  const projectData = req.body;
  try {
    const createdProject = await projectRepo.create(projectData);
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllProjects(req, res) {
  try {
    const projects = await projectRepo.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const projectController = {
  createProject,
  getAllProjects,
}
