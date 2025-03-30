export class StopDto {
  stopId: number;
  stopName: string;
  longitude: number;
  latitude: number;
  companyId: number;
  routeId: number;

  constructor() {
    this.stopId = 0;
    this.stopName = '';
    this.longitude = 0;
    this.latitude = 0;
    this.companyId = 0;
    this.routeId = 0;
  }
}
