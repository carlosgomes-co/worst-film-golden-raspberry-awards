import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducersWithLongestAndShortestIntervalBetweenWinsComponent } from './producers-with-longest-and-shortest-interval-between-wins.component';

describe('ProducersWithLongestAndShortestIntervalBetweenWinsComponent', () => {
  let component: ProducersWithLongestAndShortestIntervalBetweenWinsComponent;
  let fixture: ComponentFixture<ProducersWithLongestAndShortestIntervalBetweenWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducersWithLongestAndShortestIntervalBetweenWinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducersWithLongestAndShortestIntervalBetweenWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
