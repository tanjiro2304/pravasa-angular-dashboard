import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {UserDetails} from '../../models/UserDetails';
import {UserService} from '../../service/user.service';


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
  constructor(userService:UserService) {
    this.userService = userService;
  }
  submitForm() {
    console.log(this.userDetails);
    let user = this.userService.login(this.userDetails);
    user.subscribe(value => console.log(value));
  }


}
