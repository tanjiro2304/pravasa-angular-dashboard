export class Filter {
  depotIds?: number[];
  companyIds?: number[];
  companyId?: number;
  depotId?: number;
  routeId?: number;
  typeId?: number;

    constructor() {
      this.depotIds = [];
      this.companyIds = [];
      this.companyId = 0;
      this.depotId = 0;
      this.routeId = 0;
      this.typeId = 0;
  }
}
