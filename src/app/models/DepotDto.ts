export class DepotDto {
  id: number;
  depotName: string;
  depotCode: string;
  depotLocation: string;
  depotContact: string;
  fleetCapacity: number;
  fleetSize: number;
  cngRefuelling: boolean;
  dieselRefuelling: boolean;
  chargingStation: boolean;
  companyId: number;
  latitude: number;
  longitude: number;
  cngBuses: number;
  dieselBuses: number;
  electricBuses: number;
  busTypes: number[];

  constructor() {
    this.id = 0;
    this.depotName = '';
    this.depotCode = '';
    this.depotLocation = '';
    this.depotContact = '';
    this.fleetCapacity = 0;
    this.fleetSize = 0;
    this.cngRefuelling = false;
    this.dieselRefuelling = false;
    this.chargingStation = false;
    this.companyId = 0;
    this.latitude = 0;
    this.longitude = 0;
    this.cngBuses = 0;
    this.dieselBuses = 0;
    this.electricBuses = 0;
    this.busTypes = [];
  }
}
