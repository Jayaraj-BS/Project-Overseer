import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';

const routes: Routes = [
  {
    path : '',
    loadComponent: () => import('./demo/login/login-page/login-page.component').then((c) => c.LoginPageComponent)
  },
  {
    path : 'login',
    loadComponent: () => import('./demo/login/login-page/login-page.component').then((c) => c.LoginPageComponent)
  },
  {
    path : 'register',
    loadComponent: () => import('./demo/login/register-page/register-page.component').then((c) => c.RegisterPageComponent)
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/lists/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'allProjects',
        loadComponent: () => import('./demo/lists/all-projects-list/all-projects-list.component').then((c) => c.AllProjectsListComponent)
      },
      {
        path: 'allTasks',
        loadComponent: () => import('./demo/lists/all-tasks-list/all-tasks-list.component').then((c) => c.AllTasksListComponent)
      },
      {
        path: 'allUsers',
        loadComponent: () => import('./demo/lists/all-users-list/all-users-list.component').then((c) => c.AllUsersListComponent)
      },
      {
        path: 'addProject',
        loadComponent: () => import('./demo/addings/add-project/add-project.component').then((c) => c.AddProjectComponent)
      },
      {
        path: 'addTask',
        loadComponent: () => import('./demo/addings/add-task/add-task.component').then((c) => c.AddTaskComponent)
      },
      {
        path: 'addUser',
        loadComponent: () => import('./demo/addings/add-user/add-user.component').then((c) => c.AddUserComponent)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
