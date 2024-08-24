import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'page',
    title: 'Pages',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'listPages',
        title: 'All Lists',
        type: 'collapse',
        icon: 'fa-solid fa-list',
        children: [
          {
            id: 'allProjects',
            title: 'All Projects',
            type: 'item',
            url: '/allProjects',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'allTasks',
            title: 'All Tasks',
            type: 'item',
            url: '/allTasks',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  {
    id: 'addings',
    title: 'Addings',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'addProjectsOrTasks',
        title: 'Add Project or Tasks',
        type: 'collapse',
        icon: 'fa-solid fa-plus',
        children: [
          {
            id: 'addProjects',
            title: 'Add Project',
            type: 'item',
            url: '/addProject',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'addTasks',
            title: 'Add Task',
            type: 'item',
            url: '/addTask',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  {
    id: 'users',
    title: 'Users',
    type: 'group',
    icon: 'icon-navigation',
    children: [
          {
            id: 'allUsers',
            title: 'Available Users',
            icon: 'fa-solid fa-user-group',
            type: 'item',
            url: '/allUsers',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'adduser',
            title: 'Add User',
            icon: 'fa-solid fa-user',
            type: 'item',
            url: '/addUser',
            target: true,
            breadcrumbs: false
          }
    ]
  },
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
