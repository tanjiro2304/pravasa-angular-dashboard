import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {UserDetails} from '../../models/UserDetails';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  imports: [
    Button,
    DropdownModule,
    FormsModule,
    InputText,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  userService: UserService;
  userDetails : UserDetails = new UserDetails();
  router: Router;
  constructor(userService:UserService, router: Router) {
    this.userService = userService;
    this.router = router;
  }
  submitForm() {
    this.userService.login(this.userDetails).subscribe({
      next : (value) => {
        this.setUserDetails(value)
        sessionStorage.setItem('userDetails', JSON.stringify(this.userDetails))
        this.router.navigateByUrl('/admin-dashboard').then(r => alert("Login successfully"));
      },
      error : (error) => alert("Error occurred")
    });
  }

  setUserDetails(userDetails: UserDetails) {
    this.userDetails = userDetails;
  }


}
