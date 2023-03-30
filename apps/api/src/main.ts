import express from 'express';
import { createHomeRouter, createQuestionRouter } from './routes'
import { homeController, questionController } from './controllers';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use('/home', createHomeRouter())
app.use('/question', createQuestionRouter())

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
