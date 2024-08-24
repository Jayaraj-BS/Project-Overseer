import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../../services/settings-service.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent {

  public project: any = {
    projectName: '',
    projectManager: '',
    projectStatus: '',
    projectCategory: '',
    projectContactInformation: ''
  }
  categories = ['Software Development', 'Marketing', 'Design'];


  constructor(
    private route: Router,
    private settingsService: SettingsService,
    private projectService: ProjectsService
  ) { }


  allProjects() {
    this.route.navigate(['/allProjects'])
  }

  addProject() {
    let checkField = false
    for (let key in this.project) {
      if (this.project.hasOwnProperty(key)) {
        if (this.project[key] == '' || this.project[key] == null || this.project[key] == undefined) {
          checkField = true
          break;
        }
      }
    }
    if (checkField) {
      this.settingsService.showError("Please fill all the details")
    } else {
      const projectClone = { ...this.project };
      this.projectService.addProjectsToArray(projectClone).subscribe((resp: any) => {
        console.log(resp, "PROJECARRAY");
        this.settingsService.showSuccess("Project Added Successfully")
        this.route.navigate(['/allProjects'])
      })

      this.project = {
        projectName: '',
        projectManager: '',
        projectStatus: '',
        projectCategory: '',
        projectContactInformation: ''
      };
    }
  }
}
