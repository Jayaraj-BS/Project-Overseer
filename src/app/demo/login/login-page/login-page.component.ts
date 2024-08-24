import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginAndRegisterService } from '../../services/login-and-register.service';
import { SettingsService } from '../../services/settings-service.service';
import { ToastContainerDirective, ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { availableUsers } from '../../services/users-service.service'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, HttpClientModule, ToastrModule, ToastNoAnimationModule,
    ToastContainerDirective],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {

  email: any;
  password: any

  showToastMessage: boolean = false
  showErrMsg: boolean = false
  showEmailErrorMessage: boolean = false;
  showPassword : boolean = false


  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private loginAndRegisterService: LoginAndRegisterService,
    private settingServices : SettingsService
  ) {}

  ngOnInit(){
    // console.log(availableUsers,"aaaaaa");

  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  async login() {
    if ((this.email == "test@gmail.com" || this.email == 'rajiBujji@gmail.com') &&
    (this.password == "test@2024" || this.password == 'rajibujji@0828')) {
      this.settingServices.showSuccess('Login Successful')
      this.cdr.detectChanges();
      setTimeout(() => {
        this.router.navigate(['/allProjects'],
          { queryParams: { userEmail: this.email } }
        );
      }, 2000);

      let data = availableUsers.filter((userData : any) => {
        return userData.email == this.email
      })

     let loggedinUserData = data[0]

     localStorage.setItem('userDetails', JSON.stringify(loggedinUserData));

      return
    } else {
        this.settingServices.showError('Invalid Credentials')
    }

    // let params = {
    //   email: this.email,
    //   password: this.password
    // }

    // console.log(params, "LOGINPARAMS");


    // this.loginAndRegisterService.login(params).subscribe((resp: any) => {
    //   if (resp && resp.status) {
    //     this.showToastMessage = true
    //     this.showErrMsg = false
    //     setTimeout(() => {
    //       this.router.navigate(['/allProjects']);
    //     }, 2000);
    //     return
    //   } else {
    //     this.showErrMsg = true
    //     this.showToastMessage = false
    //     // window.location.reload()
    //   }
    // })

  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  showOrHidePassword(){
    this.showPassword = !this.showPassword;
  }


  validateEmail (event : any) {
    let inputEmail = event.target.value
    // console.log(inputEmail);

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
