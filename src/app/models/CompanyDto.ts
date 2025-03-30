export class CompanyDto {
  id: string;
  companyName: string;
  address: string;
  helpline: string;
  email: string;
  fleetSize: number;
  noOfEmployees: number;

  constructor() {
    this.id = '';
    this.companyName = '';
    this.address = '';
    this.helpline = '';
    this.email = '';
    this.fleetSize = 0;
    this.noOfEmployees = 0;
  }
}
