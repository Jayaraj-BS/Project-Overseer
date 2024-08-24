import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginAndRegisterService } from '../../services/login-and-register.service';
import { SettingsService } from '../../services/settings-service.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkActive, HttpClientModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  firstName : any
  lastName : any
  email : any
  password : any
  confirmPassword : any

  showToastMessage: boolean = false
  showErrMsg : boolean = false
  showEmailErrorMessage: boolean = false;



  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private loginAndRegisterService: LoginAndRegisterService,
    private settigsService : SettingsService
  ) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  signup() {
      if(this.password !== this.confirmPassword){
        this.settigsService.showWarning('Passwords did not matched')
        return
      }
    let params = {
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email,
      password : this.password
    }
    console.log(params);

    // this.loginAndRegisterService.register(params).subscribe((resp : any) => {
    //   console.log(resp);
    //   if(resp.status) {
    //     this.showToastMessage = true
    //     this.showErrMsg = false
    //     this.cdr.detectChanges();
    //     setTimeout(() => {
    //       this.router.navigate(['/allProjects']);
    //     }, 2000);
    //   }
    // })

  }

  validateEmail (event : any) {
    let inputEmail = event.target.value
    console.log(inputEmail);

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputEmail === '') {
      this.showEmailErrorMessage = false;
    } else if (!emailFormat.test(inputEmail)) {
      this.showEmailErrorMessage = true;
    } else {
      this.showEmailErrorMessage = false;
    }

  }

}
