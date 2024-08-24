import { Component, OnInit, OnChanges, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users-service.service';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-projects-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all-projects-list.component.html',
  styleUrl: './all-projects-list.component.scss',
})
export class AllProjectsListComponent implements OnInit {

  @ViewChild('editProjectData') editProjectData : any;
  selectedProject: any = {};

  public userEmail : 'test@gmail.com'

  projects = [
    { projectName: 'Task Organizer', projectManager: 'Alice', projectStatus: 'Active', projectCategory: 'Software Development', projectContactInformation: '9900990090'},
    { projectName: 'Workflow Manager', projectManager: 'Bob', projectStatus: 'Completed', projectCategory: 'Marketing', projectContactInformation: '8877667789'},
    { projectName: 'Project Tracker', projectManager: 'Charlie', projectStatus: 'Pending', projectCategory: 'Design', projectContactInformation: '7766554456'},
  ];

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

   this.projectService.getAllProjects().subscribe((resp : any) => {
     this.projects = [...this.projects, ...resp]
     console.log("DATAINLIST",this.projects);
   })

  }

  ngOnChanges() {}

  editProject(project: any) {
    this.selectedProject = { ...project }; // Clone the project to be edited
    let modalRef = this.modalService.open(this.editProjectData, { size: 'lg' });
  }

  saveProject(){
    const index = this.projects.findIndex(project => project.projectName === this.selectedProject.projectName);

    // If the project is found, update it with the selectedProject details
    if (index !== -1) {
      this.projects[index] = { ...this.selectedProject };
    }

    console.log(this.projects);

  }

  deleteProject(data: any) {
    console.log(data);
  }

  addProject(){
    this.route.navigate(['/addProject'])
  }
}
