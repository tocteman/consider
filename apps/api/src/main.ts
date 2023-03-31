import express from 'express';
import { createProjectRouter, createQuestionRouter, createUserRouter, createQuestionnaireRouter } from './routes'
import cors from 'cors'
import morgan from 'morgan'
import session from 'express-session'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(session({
  secret: 'secret-key',
  resave: true,
  saveUninitialized: false,
}))

app.use('/questions', createQuestionRouter())
app.use('/questionnaires', createQuestionnaireRouter())
app.use('/projects', createProjectRouter())
app.use('/user', createUserRouter())

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
