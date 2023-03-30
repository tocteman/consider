import { ProjectModel } from '../models/project.model';
import { Project } from '@consider/interfaces';

export class ProjectRepository {
  async create(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<Project> {
    const newProject = await ProjectModel.create(project);
    return newProject.get();
  }

  async findAll(): Promise<Project[]> {
    return ProjectModel.findAll();
  }

  async findById(id: number): Promise<Project | null> {
    return ProjectModel.findByPk(id);
  }

    async update(id: number, project: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>): Promise<number> {
    const [affectedCount] = await ProjectModel.update(project, { where: { id } });
    return affectedCount;
  }

  async delete(id: number): Promise<number> {
    return ProjectModel.destroy({ where: { id } });
  }
}
