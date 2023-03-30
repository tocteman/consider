import { Sequelize } from 'sequelize-typescript';
import { ProjectModel } from './models/project.model'
import { ProjectRepository } from './repos/project.repository';
import * as databaseConfig from './config/database.config';

const environment = process.env.NODE_ENV || 'development';
const config = databaseConfig[environment];
const sequelize = new Sequelize({ 
  ...config, 
  models: [ProjectModel],
});

sequelize.authenticate()
  .then(() => console.log('Database connection established.'))
  .catch((error) => console.error('Error connecting to the database:', error));


function createProjectRepository(): ProjectRepository {
  const repo = new ProjectRepository();
  repo['sequelize'] = sequelize;
  return repo;
}

export {
  createProjectRepository
}
