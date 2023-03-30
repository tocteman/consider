import { BelongsTo, BelongsToMany, Column, CreatedAt, DataType, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { Question } from '@consider/interfaces';
import { QuestionnaireModel } from './questionnaire.model'
import { QuestionQuestionnaireRelationModel } from './question_questionnaire_relation.model'
import { UserModel } from './user.model'

@Table({ tableName: 'questions' })
export class QuestionModel extends Model implements Question {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  id: number;

  @Column(DataType.STRING)
  question: string;

  @Column({ field: 'response_type', type: DataType.ENUM('numeric', 'string') })
  response_type: 'numeric' | 'string';

  @Column({ field: 'intended_for', type: DataType.ENUM('clients', 'teammates', 'general') })
  intended_for: 'clients' | 'teammates' | 'general';

  @Column(DataType.INTEGER)
  order: number;
  @ForeignKey(() => UserModel)
  @Column({ field: 'created_by', type: DataType.INTEGER })
  created_by: number;

  @BelongsTo(() => UserModel)
  createdByUser: UserModel;

  @CreatedAt
  @Column({ field: 'created_at', type: DataType.DATE })
  created_at: Date;

  @UpdatedAt
  @Column({ field: 'updated_at', type: DataType.DATE })
  updated_at: Date;

  @BelongsToMany(() => QuestionnaireModel, () => QuestionQuestionnaireRelationModel)
  questionnaires: QuestionnaireModel[];
}

