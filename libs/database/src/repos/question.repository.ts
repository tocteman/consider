import { QuestionModel } from '../models/question.model';
import { UserModel } from '../models/user.model';
import { Question } from '@consider/interfaces';
import { QuestionnaireModel } from '../models/questionnaire.model';

export class QuestionRepository {

  async create(question: Omit<Question, 'id' | 'created_at' | 'updated_at'>): Promise<Question> {

  const user = await UserModel.findByPk(question.created_by);
    if (!user || user.type !== 'manager') {
      throw new Error('Only managers can create questions.');
    }

    const newQuestion = await QuestionModel.create(question);
    return newQuestion.get();
  }

  async getAll(): Promise<QuestionModel[]> {
    return QuestionModel.findAll();
  }

  async getById(id: number): Promise<QuestionModel | null> {
    return QuestionModel.findOne({
      where: { id },
      include: [
        {
          model: QuestionnaireModel,
          through: { attributes: [] },
        },
      ],
    });
  }

  async update(id: number, updates: Partial<Question>): Promise<QuestionModel | null> {
    const question = await QuestionModel.findOne({ where: { id } });

    if (question) {
      return question.update(updates);
    }

    return null;
  }

  async delete(id: number): Promise<number> {
    return QuestionModel.destroy({ where: { id } });
  }
}

