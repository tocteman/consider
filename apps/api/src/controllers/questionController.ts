import { createQuestionRepository } from '@consider/database';

const questionRepo = createQuestionRepository();

async function createQuestion(req, res) {
  const questionData = req.body;
  try {
    const createdQuestion = await questionRepo.create(questionData);
    res.status(201).json(createdQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllQuestions(req, res) {
  try {
    const questions = await questionRepo.getAll();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const questionController = {
  createQuestion,
  getAllQuestions,
};


