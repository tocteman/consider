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
import { ProjectModel } from './project.model';

@Table({ tableName: 'participations' })
export class ParticipationModel extends Model {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  id: number;

  @ForeignKey(() => UserModel)
  @Column({ field: 'user_id', type: DataType.INTEGER })
  user_id: number;

  @ForeignKey(() => ProjectModel)
  @Column({ field: 'project_id', type: DataType.INTEGER })
  project_id: number;

  @Column(DataType.ENUM('client', 'teammate'))
  role: 'client' | 'teammate';

  @CreatedAt
  @Column({ field: 'created_at', type: DataType.DATE })
  created_at: Date;

  @UpdatedAt
  @Column({ field: 'updated_at', type: DataType.DATE })
  updated_at: Date;

  @BelongsTo(() => UserModel)
  user: UserModel;

  @BelongsTo(() => ProjectModel)
  project: ProjectModel;
}

