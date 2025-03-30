export class RouteDto {
  routeId: number;
  routeNo: string;
  source: string;
  destination: string;
  isAirConditioned: boolean;
  routeType: string;
  depotName: string;
  fare: number;
  distance: number;
  routeTypeId: number;

  constructor() {
    this.routeId = 0;
    this.routeNo = '';
    this.source = '';
    this.destination = '';
    this.isAirConditioned = false;
    this.routeType = '';
    this.depotName = '';
    this.fare = 0;
    this.distance = 0;
    this.routeTypeId = 0;
  }
}
