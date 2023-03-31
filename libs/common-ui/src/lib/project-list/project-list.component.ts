import { Component, OnInit } from '@angular/core';
import {Project} from '@consider/interfaces';
import { ProjectService } from '@consider/shared-services';

@Component({
  selector: 'consider-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = []
  constructor(
    private projectService: ProjectService
  ){}

  ngOnInit(): void {
    this.projectService.getProjects()
    .subscribe(projects => {
        this.projects = projects
      })
  }

}
