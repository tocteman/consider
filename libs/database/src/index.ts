import { Sequelize } from 'sequelize-typescript';
import { ProjectModel } from './models/project.model'
import { ProjectRepository } from './repos/project.repository';
import * as databaseConfig from './config/database.config';
import {UserRepository} from './repos/user.repository';
import {UserModel} from './models/user.model';
import {ParticipationModel} from './models/participation.model';
import {AssignmentModel} from './models/assignment.model';
import {QuestionModel} from './models/question.model';
import {QuestionnaireModel} from './models/questionnaire.model';
import {AnswerModel} from './models/answer.model';
import {QuestionQuestionnaireRelationModel} from './models/question_questionnaire_relation.model';

const environment = process.env.NODE_ENV || 'development';
const config = databaseConfig[environment];
const sequelize = new Sequelize({ 
  ...config, 
  models: [
    ProjectModel,
    UserModel,
    ParticipationModel,
    AssignmentModel,
    QuestionModel,
    QuestionnaireModel,
    AnswerModel,
    QuestionQuestionnaireRelationModel
  ],
});

sequelize.authenticate()
  .then(() => console.log('Database connection established.'))
  .catch((error) => console.error('Error connecting to the database:', error));


function createProjectRepository(): ProjectRepository {
  const repo = new ProjectRepository();
  repo['sequelize'] = sequelize;
  return repo;
}
function createUsersRepository(): UserRepository {
  const repo = new UserRepository();
  repo['sequelize'] = sequelize;
  return repo;
}

export {
  createProjectRepository,
  createUsersRepository
}
