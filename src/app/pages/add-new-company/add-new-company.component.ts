import {AfterViewInit, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CompanyDto} from '../../models/CompanyDto';
import {CompanyService} from '../../service/company.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-add-new-company',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './add-new-company.component.html',
  styleUrl: './add-new-company.component.css'
})
export class AddNewCompanyComponent implements AfterViewInit {

  constructor(private companyService: CompanyService) {
  }

  newCompany = new CompanyDto();
  companies: CompanyDto[] = [];

  submitForm() {
    this.companyService.saveCompany(this.newCompany).subscribe({
      next: () => {
        console.log('Company saved successfully!');
        alert('Company saved successfully!');
        this.newCompany = new CompanyDto();
      },
      error: (err) => {
        console.error('Error saving company:', err);
        alert('Failed to save company. Check console for details.');
      }
    });
  }

  ngAfterViewInit(): void {
    this.companyService.findAllCompanies().subscribe(value => {
      this.companies = value;
    })
  }
}
