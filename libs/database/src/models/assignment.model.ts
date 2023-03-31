import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { UserModel } from './user.model';
import { QuestionnaireModel } from './questionnaire.model';

@Table({ tableName: 'assignments' })
export class AssignmentModel extends Model {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  id: number;

  @ForeignKey(() => UserModel)
  @Column({ field: 'user_id', type: DataType.INTEGER })
  user_id: number;

  @ForeignKey(() => QuestionnaireModel)
  @Column({ field: 'questionnaire_id', type: DataType.INTEGER })
  questionnaire_id: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  completed: boolean;

  @CreatedAt
  @Column({ field: 'created_at', type: DataType.DATE })
  created_at: Date;

  @UpdatedAt
  @Column({ field: 'updated_at', type: DataType.DATE })
  updated_at: Date;

  @BelongsTo(() => UserModel)
  user: UserModel;

  @BelongsTo(() => QuestionnaireModel)
  questionnaire: QuestionnaireModel;
}

