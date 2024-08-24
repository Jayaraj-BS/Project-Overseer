import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { SettingsService } from '../../services/settings-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  public task: any = {
    taskName: '',
    taskStatus: '',
    taskDetails: '',
    project: '',
  }

  status = [
    { label: 'Task', value: 'Task'},
    { label: 'Bug', value: 'Bug'},
    { label: 'Story', value: 'Story'},
  ]


  constructor(
    private route: Router,
    private settingsService: SettingsService,
    private projectService: ProjectsService
  ) { }


  allTasks() {
    this.route.navigate(['/allTasks'])
  }

  addTask() {
    let checkField = false
    for (let key in this.task) {
      if (this.task.hasOwnProperty(key)) {
        const value = this.task[key]?.trim(); // Remove any leading/trailing spaces
        if (!value) {
          checkField = true;
          break;
        }
      }
    }
    if (checkField) {
      this.settingsService.showError("Please fill all the details")
    } else {
      const taskClone = { ...this.task };
      this.projectService.addTasksToArray(taskClone).subscribe((resp: any) => {
        console.log(resp, "PROJECARRAY");
        this.settingsService.showSuccess("Task Added Successfully")
        this.route.navigate(['/allTasks'])
      })

      this.task = {
        taskName: '',
        taskStatus: '',
        project: '',
        taskDetails: '',
      };
    }
  }

}
