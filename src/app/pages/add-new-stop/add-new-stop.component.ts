import {AfterViewInit, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {StopDto} from '../../models/StopDto';
import {Button} from 'primeng/button';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {DropdownModule} from 'primeng/dropdown';
import {CompanyDto} from '../../models/CompanyDto';
import {StopService} from '../../service/stop.service';
import {CompanyService} from '../../service/company.service';

@Component({
  selector: 'app-add-new-stop',
  imports: [
    FormsModule,
    InputText,
    TabPanel,
    TabPanels,
    TabList,
    Tabs,
    Tab,
    Button,
    DropdownModule
  ],
  templateUrl: './add-new-stop.component.html',
  styleUrl: './add-new-stop.component.css'
})
export class AddNewStopComponent implements AfterViewInit{

  stop: StopDto = new StopDto();
  companies: CompanyDto[] = [];
  constructor(private stopService: StopService, private companyService: CompanyService) {
  }

  fetchAllDepots() {
    this.companyService.findAllCompanies().subscribe(
      value => {
        this.companies = value;
      }
    )
  }
  ngAfterViewInit(): void {
    this.fetchAllDepots()
  }

  submitForm() {
    this.stopService.save(this.stop).subscribe({
      next: () => {
        console.log('Stop saved successfully!');
        alert('Stop saved successfully!');
        this.stop = new StopDto();
      },
      error: (err) => {
        console.error('Error saving stop:', err);
        alert('Failed to save stop. Check console for details.');
      }
    })
  }
}
