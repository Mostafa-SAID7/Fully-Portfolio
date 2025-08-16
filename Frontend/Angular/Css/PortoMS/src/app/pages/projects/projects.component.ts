import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Personal Portfolio',
      description: 'A modern portfolio website built with Angular and SCSS.',
      technologies: ['Angular', 'SCSS', 'Responsive Design'],
      github: '',
      live: ''
    },
    {
      title: 'Task Manager App',
      description: 'A to-do/task management app with login and storage features.',
      technologies: ['Angular', 'Firebase', 'Material UI'],
      github: '',
      live: ''
    },
    {
      title: 'E-Commerce Template',
      description: 'Frontend UI for an e-commerce platform.',
      technologies: ['Angular', 'Bootstrap'],
      github: '',
      live: ''
    }
  ];
}
