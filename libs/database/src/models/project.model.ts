// libs/database/src/models/project.model.ts

import { Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { Project } from '@consider/interfaces'

@Table({ tableName: 'projects' })
export class ProjectModel extends Model implements Project {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  description: string;

  @Column(DataType.ENUM('draft', 'active', 'archived'))
  status: 'draft' | 'active' | 'archived';

  @Column({ field: 'owner_id', type: DataType.INTEGER })
  owner_id: number;

  @Column({ field: 'start_date', type: DataType.DATE })
  start_date: Date;

  @Column({ field: 'end_date', type: DataType.DATE })
  end_date: Date;

  @CreatedAt
  @Column({ field: 'created_at', type: DataType.DATE })
  created_at: Date;

  @UpdatedAt
  @Column({ field: 'updated_at', type: DataType.DATE })
  updated_at: Date;
}
