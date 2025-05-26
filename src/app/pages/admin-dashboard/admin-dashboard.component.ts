import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  router: Router;

  constructor(router: Router){
    this.router = router;
  }
  onAddDepotClick(){
    this.router.navigateByUrl('/add-depot').then(r => {});
  };

  onAddStopClick(){
    this.router.navigateByUrl('/add-stop').then(r => {});
  };

  onAddRouteClick(){
    this.router.navigateByUrl('/add-route').then(r => {});
  };

}
