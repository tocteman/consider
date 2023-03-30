import { Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { Project } from '@consider/interfaces'

@Table({ tableName: 'projects' })
export class ProjectModel extends Model{
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  declare id: number;

  @Column({
    field: "name", 
    type: DataType.STRING,
    allowNull: false
  })
  name: string;

  @Column({field: "description", type: DataType.STRING})
  description: string;

  @Column({
    field: "status",
    type: DataType.ENUM('draft', 'active', 'archived'),
    defaultValue: "draft",
    allowNull: false
  })
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


