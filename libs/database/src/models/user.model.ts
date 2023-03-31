import { Column, CreatedAt, DataType, HasMany, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { User } from '@consider/interfaces';
import { AssignmentModel } from './assignment.model';
import { ParticipationModel } from './participation.model';

@Table({ tableName: 'users', timestamps: false })
export class UserModel extends Model implements User {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  id: number;

  @Column(DataType.ENUM('client', 'teammate', 'manager'))
  type: 'client' | 'teammate' | 'manager';

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  phone: string;

  @Column({ field: 'created_at', type: DataType.DATE })
  created_at: Date;

  @Column({ field: 'updated_at', type: DataType.DATE })
  updated_at: Date;

  @HasMany(() => AssignmentModel)
  assignments: AssignmentModel[];

  @HasMany(() => ParticipationModel)
  participations: ParticipationModel[];
}

