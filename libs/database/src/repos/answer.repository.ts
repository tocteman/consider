import { AnswerModel } from '../models/answer.model';
import { UserModel } from '../models/user.model';
import { Answer } from '@consider/interfaces';

export class AnswerRepository {

  async create(answer: Omit<Answer, 'id' | 'created_at' | 'updated_at'>): Promise<Answer> {

      const user = await UserModel.findByPk(answer.user_id);
  if (!user || (user.type !== 'client' && user.type !== 'teammate')) {

    throw new Error('Only clients and teammates can provide answers.');
  }
    const newAnswer = await AnswerModel.create(answer);
    return newAnswer.get();
  }

  async getAll(): Promise<AnswerModel[]> {
    return AnswerModel.findAll({ include: [AnswerModel.associations.question] });
  }

  async getById(id: number): Promise<AnswerModel | null> {
    return AnswerModel.findOne({ where: { id }, include: [AnswerModel.associations.question] });
  }

  async update(id: number, updates: Partial<Answer>): Promise<AnswerModel | null> {
    const answer = await AnswerModel.findOne({ where: { id } });

    if (answer) {
      return answer.update(updates);
    }

    return null;
  }

  async delete(id: number): Promise<number> {
    return AnswerModel.destroy({ where: { id } });
  }
}

