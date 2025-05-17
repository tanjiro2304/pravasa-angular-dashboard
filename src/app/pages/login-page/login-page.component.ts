import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {UserDetails} from '../../models/UserDetails';


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

  userDetails : UserDetails = new UserDetails();

  submitForm() {
    console.log(this.userDetails);
  }


}
