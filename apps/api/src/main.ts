import express from 'express';
import { createHomeRouter, createProjectRouter, createQuestionRouter } from './routes'
import morgan from 'morgan'
import { homeController, questionController } from './controllers';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(morgan('combined'))
app.use(express.json())

app.use('/home', createHomeRouter())
app.use('/question', createQuestionRouter())
app.use('/project', createProjectRouter())

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
