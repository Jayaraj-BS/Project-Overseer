import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from '../../services/projects.service';
import { UsersService } from '../../services/users-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-all-tasks-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './all-tasks-list.component.html',
  styleUrl: './all-tasks-list.component.scss'
})
export class AllTasksListComponent {
  @ViewChild('editProjectData') editProjectData : any;
  selectedTask: any = {};

  public userEmail : 'test@gmail.com'

  tasks = [
    { taskName: 'Task Organizer', project: 'Mediomix', taskStatus: 'Bug', taskDetails: 'Fix Dashboard Issue'},
    { taskName: 'Workflow Manager', project: 'Loan System', taskStatus: 'Story', taskDetails: 'Implement Payment Gateway'},
    { taskName: 'Project Tracker', project: 'CD', taskStatus: 'Task', taskDetails: 'Authentication and Authorization'},
  ];

  status = [
    { label: 'Task', value: 'Task'},
    { label: 'Bug', value: 'Bug'},
    { label: 'Story', value: 'Story'},
  ]

  constructor(
    private activatedRoute : ActivatedRoute,
    private userService : UsersService,
    private route : Router,
    private projectService : ProjectsService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
   this.activatedRoute.queryParams.subscribe((getURLdata : any) => {
    this.userEmail = getURLdata.userEmail
   })
  //  console.log(this.userEmail,"GOTEMAILLL");

   if(this.userEmail){
    // this.userService.getLoggedinUserDetails(this.userEmail).subscribe((resp:any) => {
    //   // console.log(resp,"gotuserdetailsssss");
    // })
   }

   this.projectService.getAllTasks().subscribe((resp : any) => {
     this.tasks = [...this.tasks, ...resp]
     console.log("DATAINLIST",this.tasks);
   })

  }

  getIcon(statusValue: string): string {
    switch (statusValue) {
      case 'todo':
        return 'fa fa-list'; // FontAwesome class for list icon
      case 'inprogress':
        return 'fa fa-spinner'; // FontAwesome class for spinner icon
      case 'readyToDeploy':
        return 'fa fa-rocket'; // FontAwesome class for rocket icon
      case 'qa':
        return 'fa fa-check-circle'; // FontAwesome class for check-circle icon
      case 'done':
        return 'fa fa-check'; // FontAwesome class for check icon
      default:
        return ''; // Default icon if needed
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  ngOnChanges() {}

  editProject(project: any) {
    this.selectedTask = { ...project }; // Clone the project to be edited
    let modalRef = this.modalService.open(this.editProjectData, { size: 'lg' });
  }

  saveProject(){

  }

  deleteProject(data: any) {
    console.log(data);
  }

  addProject(){
    this.route.navigate(['/addTask'])
  }

}
