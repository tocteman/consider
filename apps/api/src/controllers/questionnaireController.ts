import { createQuestionnaireRepository } from '@consider/database';

const questionnaireRepo = createQuestionnaireRepository();

async function createQuestionnaire(req, res) {
  const questionnaireData = req.body;
  try {
    const createdQuestionnaire = await questionnaireRepo.create(questionnaireData);
    res.status(201).json(createdQuestionnaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getQuestionnaire(req, res) {
  try {
    const questionnaire = await questionnaireRepo.getById(req.params.id);
    res.status(200).json(questionnaire)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllQuestionnaires(req, res) {
  try {
    const questionnaires = await questionnaireRepo.getAll();
    res.status(200).json(questionnaires);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const questionnaireController = {
  createQuestionnaire,
  getAllQuestionnaires,
  getQuestionnaire
};

