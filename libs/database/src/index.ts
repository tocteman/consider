import { Sequelize } from 'sequelize-typescript';
import * as databaseConfig from './config/database.config';

const environment = process.env.NODE_ENV || 'development';
const config = databaseConfig[environment];
const sequelize = new Sequelize({ ...config, models: [] }); 

sequelize.authenticate()
  .then(() => console.log('Database connection established.'))
  .catch((error) => console.error('Error connecting to the database:', error));


