import { Component } from '@angular/core';
import { exampleProjects } from '@consider/projects'

@Component({
  selector: 'consider-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'surveys';
  products = exampleProjects
}
