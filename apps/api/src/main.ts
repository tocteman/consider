import express from 'express';
import { createHomeRouter, createProjectRouter, createQuestionRouter, createUserRouter } from './routes'
import morgan from 'morgan'
import session from 'express-session'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(morgan('combined'))
app.use(express.json())
app.use(session({
  secret: 'secret-key',
  resave: true,
  saveUninitialized: false,
}))

app.use('/home', createHomeRouter())
app.use('/question', createQuestionRouter())
app.use('/project', createProjectRouter())
app.use('/user', createUserRouter())

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
