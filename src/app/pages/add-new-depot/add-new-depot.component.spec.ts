import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDepotComponent } from './add-new-depot.component';

describe('AddNewDepotComponent', () => {
  let component: AddNewDepotComponent;
  let fixture: ComponentFixture<AddNewDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewDepotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
