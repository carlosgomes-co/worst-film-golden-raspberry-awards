import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviesComponent } from './list-movies.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMoviesComponent],
      providers: [provideAnimations()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
