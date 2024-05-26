import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3StudiosWithWinnersComponent } from './top-3-studios-with-winners.component';

describe('Top3StudiosWithWinnersComponent', () => {
  let component: Top3StudiosWithWinnersComponent;
  let fixture: ComponentFixture<Top3StudiosWithWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top3StudiosWithWinnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top3StudiosWithWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
