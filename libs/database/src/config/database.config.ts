import { Dialect } from 'sequelize/types';

interface DatabaseConfigAttributes {
  readonly dialect: Dialect;
  readonly storage: string;
}

const development: DatabaseConfigAttributes = {
  dialect: 'sqlite',
  storage: './libs/database/consider_development.db',
};

const test: DatabaseConfigAttributes = {
  dialect: 'sqlite',
  storage: './libs/database/consider_test.db',
};

const production: DatabaseConfigAttributes = {
  dialect: 'sqlite',
  storage: './libs/database/consider_production.db',
};

export { development, test, production };

