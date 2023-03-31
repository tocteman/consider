import { Questionnaire } from '@consider/interfaces';
import { QuestionnaireModel } from '../models/questionnaire.model';
import { QuestionModel } from '../models/question.model';
import { UserModel } from '../models/user.model';
import { QuestionQuestionnaireRelationModel } from '../models/question_questionnaire_relation.model'

export class QuestionnaireRepository {

  async create(input: Questionnaire & { questions?: (number | { content: string })[] }): Promise<QuestionnaireModel> {
    const { questions, ...questionnaire } = input;
    const createdQuestionnaire = await QuestionnaireModel.create(questionnaire);

    const user = await UserModel.findByPk(questionnaire.created_by);
    if (!user || user.type !== 'manager') {
      throw new Error('Only managers can create questionnaires.');
    }

    if (questions && questions.length > 0) {
      const questionIds = [];

      for (const question of questions) {
        if (typeof question === 'number') {
          questionIds.push(question);
        } else {
          const createdQuestion = await QuestionModel.create(question);
          questionIds.push(createdQuestion.id);
        }
      }

      await createdQuestionnaire.$set('questions', questionIds);
      const relations = questionIds.map((questionId, i) => ({
        question_id: questionId,
        questionnaire_id: createdQuestionnaire.id,
        order: i
      }));
      await QuestionQuestionnaireRelationModel.bulkCreate(relations);
    }
    return createdQuestionnaire;
  }

  async getAll(): Promise<QuestionnaireModel[]> {
    return QuestionnaireModel.findAll({
      include: [
        {
          model: QuestionModel,
          through: { attributes: [] },
        },
      ],
    });
  }

  async getById(id: number): Promise<QuestionnaireModel | null> {
    return QuestionnaireModel.findOne({
      where: { id },
      include: [
        {
          model: QuestionModel,
          through: { attributes: [] },
        },
      ],
    });
  }


  async update(id: number, questionnaire: Partial<Questionnaire> & { questions?: number[] }): Promise<[number, QuestionnaireModel[]]> {
    const [affectedCount, affectedRows] = await QuestionnaireModel.update(questionnaire, {
      where: { id },
      returning: true,
    });

    if (questionnaire.questions) {
      const updatedQuestionnaire = affectedRows[0];
      await updatedQuestionnaire.$set('questions', questionnaire.questions);
    }

    return [affectedCount, affectedRows];
  }

  async delete(id: number): Promise<number> {
    return QuestionnaireModel.destroy({ where: { id } });
  }
}

