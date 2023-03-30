
import { Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { QuestionModel } from './question.model';
import { QuestionnaireModel } from './questionnarie.model';

@Table({ tableName: 'question_questionnaire_relations' })
export class QuestionQuestionnaireRelationModel extends Model {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  id: number;

  @ForeignKey(() => QuestionModel)
  @Column({ field: 'question_id', type: DataType.INTEGER })
  question_id: number;

  @ForeignKey(() => QuestionnaireModel)
  @Column({ field: 'questionnaire_id', type: DataType.INTEGER })
  questionnaire_id: number;
}

