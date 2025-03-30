import {AfterViewInit, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DepotDto} from '../../models/DepotDto';
import {DepotService} from '../../service/depot.service';
import {CompanyDto} from '../../models/CompanyDto';
import {CompanyService} from '../../service/company.service';
import {Filter} from '../../models/Filter';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {TableModule} from 'primeng/table';
import {Select} from 'primeng/select';

@Component({
  selector: 'app-add-new-depot',
  imports: [
    FormsModule,
    Button,
    InputText,
    DropdownModule,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TableModule,
    Select,

  ],
  templateUrl: './add-new-depot.component.html',
  styleUrl: './add-new-depot.component.css'
})
export class AddNewDepotComponent implements AfterViewInit{

  constructor(private depotService: DepotService, private companyService: CompanyService,) { }
  newDepot = new DepotDto();
  companies: CompanyDto[] = [];
  depots: DepotDto[] = [];
  company: CompanyDto = new CompanyDto();
  filter: Filter = new Filter();

  submitForm() {
    this.depotService.saveDepot(this.newDepot).subscribe({
      next: () => {
        console.log('Depot saved successfully!');
        alert('Depot saved successfully!');
        this.newDepot = new DepotDto();
      },
      error: (err) => {
        console.error('Error saving depot:', err);
        alert('Failed to save depot. Check console for details.');
      }
    })
  }

  fetchAllDepots(event: any) {
    this.depotService.findAllDepots(this.filter).subscribe(
      value => {
        this.depots = value;
        console.log(this.depots);
      }
    )
  }



  ngAfterViewInit(): void {
    this.companyService.findAllCompanies().subscribe(
      value => {
        this.companies = value;

      }
    )
  }
}
