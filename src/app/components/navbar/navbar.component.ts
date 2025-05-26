import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {UserDetails} from '../../models/UserDetails';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showUser = false;
  userName: string | null = "";
  userDetails: UserDetails = new UserDetails();
  ngOnInit(): void {
    console.log('ngOnInit');
    this.showUserName()
  }

  showUserName(){
    const data = sessionStorage.getItem('userDetails');
    if (data) {
      this.userDetails = JSON.parse(data);
      console.log('User Details:', this.userDetails);
    }

    this.showUser = this.userDetails.token != null;
  }
}
