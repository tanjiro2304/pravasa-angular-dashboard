import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStopComponent } from './add-new-stop.component';

describe('AddNewStopComponent', () => {
  let component: AddNewStopComponent;
  let fixture: ComponentFixture<AddNewStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewStopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
