import { UserModel } from '../models/user.model';
import { User } from '@consider/interfaces';

export class UserRepository {
  async create(input: User): Promise<UserModel> {
    return UserModel.create(input);
  }

  async getAll(): Promise<UserModel[]> {
    return UserModel.findAll();
  }

  async getById(id: number): Promise<UserModel | null> {
    return UserModel.findOne({ where: { id } });
  }

  async update(id: number, updates: Partial<User>): Promise<UserModel | null> {
    const user = await UserModel.findOne({ where: { id } });

    if (user) {
      return user.update(updates);
    }

    return null;
  }

  async delete(id: number): Promise<number> {
    return UserModel.destroy({ where: { id } });
  }
}
