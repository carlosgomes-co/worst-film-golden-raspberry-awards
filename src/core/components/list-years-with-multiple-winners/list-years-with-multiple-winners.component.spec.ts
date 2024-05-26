import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYearsWithMultipleWinnersComponent } from './list-years-with-multiple-winners.component';

describe('ListYearsWithMultipleWinnersComponent', () => {
  let component: ListYearsWithMultipleWinnersComponent;
  let fixture: ComponentFixture<ListYearsWithMultipleWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListYearsWithMultipleWinnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListYearsWithMultipleWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
