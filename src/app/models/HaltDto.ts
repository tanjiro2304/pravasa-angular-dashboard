export class HaltDto {
  id: number;
  position: number;
  stopName: string;
  stopId: number;
  routeId: number;
  routeNo: string;

  constructor() {
    this.id = 0;
    this.position = 0;
    this.stopName = '';
    this.stopId = 0;
    this.routeId = 0;
    this.routeNo = '';
  }
}
