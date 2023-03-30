import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Answer, User } from '@consider/interfaces';
import { QuestionModel } from './question.model';
import { UserModel } from './user.model';
import { QuestionnaireModel } from './questionnaire.model';

@Table({ tableName: 'answers' })
export class AnswerModel extends Model implements Answer {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  id: number;

  @Column(DataType.INTEGER)
  numeric_answer: number | null;

  @Column(DataType.STRING)
  string_answer: string | null;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER })
  user_id: number;

  @ForeignKey(() => QuestionModel)
  @Column({ type: DataType.INTEGER })
  question_id: number;

  @ForeignKey(() => QuestionnaireModel)
  @Column({ type: DataType.INTEGER, allowNull: true })
  questionnaire_id?: number;

  @CreatedAt
  @Column({ field: 'created_at', type: DataType.DATE })
  created_at: Date;

  @BelongsTo(() => UserModel)
  user: UserModel;

  @BelongsTo(() => QuestionModel)
  question: QuestionModel;

  @BelongsTo(() => QuestionnaireModel)
  questionnaire: QuestionnaireModel;

}

