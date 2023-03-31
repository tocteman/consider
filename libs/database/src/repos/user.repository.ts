import { UserModel } from '../models/user.model';
import { User } from '@consider/interfaces';
import bcrypt from 'bcrypt'

export class UserRepository {
  async create(user: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<UserModel> {

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, salt)
    const newUser = {...user, password: hashedPassword}
    return UserModel.create(newUser);
  }

  async getAll(): Promise<UserModel[]> {
    return UserModel.findAll();
  }

  async getById(id: number): Promise<UserModel | null> {
    return UserModel.findOne({ where: { id } });
  }

  async getByEmail(email: string): Promise<UserModel | null>{
    return UserModel.findOne({where: {email}})
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
