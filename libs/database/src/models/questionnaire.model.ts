import { BelongsToMany, Column, CreatedAt, DataType, HasMany, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { Questionnaire} from '@consider/interfaces';
import {SubmissionModel} from './submission.model';
import {QuestionModel} from './question.model';
import {QuestionQuestionnaireRelationModel} from './question_questionnaire_relation.model';

@Table({ tableName: 'questionnaires', timestamps: false })
export class QuestionnaireModel extends Model implements Questionnaire {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column({ field: 'project_id', type: DataType.INTEGER })
  project_id: number;

  @Column({ field: 'created_by', type: DataType.STRING })
  created_by: number;

  @Column({ field: 'created_at', type: DataType.DATE })
  created_at: Date;

  @Column({ field: 'updated_at', type: DataType.DATE })
  updated_at: Date;

  @BelongsToMany(() => QuestionModel, () => QuestionQuestionnaireRelationModel)
  questions: QuestionModel[];

  @HasMany(() => SubmissionModel)
  submissions: SubmissionModel
}
