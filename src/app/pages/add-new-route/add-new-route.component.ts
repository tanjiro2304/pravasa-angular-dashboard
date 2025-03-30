import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-new-route',
  imports: [
    FormsModule
  ],
  templateUrl: './add-new-route.component.html',
  styleUrl: './add-new-route.component.css'
})
export class AddNewRouteComponent {
  routeNo: string = '';
  source: string = '';
  destination: string = '';
  isAirConditioned: boolean = false;
  routeType: string = '';
  companyId: number | null = null;
  fare: number | null = null;
  distance: number | null = null;
  routeTypeId: number | null = null;

  companies = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
    { id: 3, name: 'Company C' }
  ];

  submitForm() {
    console.log({
      routeNo: this.routeNo,
      source: this.source,
      destination: this.destination,
      isAirConditioned: this.isAirConditioned,
      routeType: this.routeType,
      companyId: this.companyId,
      fare: this.fare,
      distance: this.distance,
      routeTypeId: this.routeTypeId
    });
  }
}
