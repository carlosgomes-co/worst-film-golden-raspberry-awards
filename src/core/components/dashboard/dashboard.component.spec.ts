import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component';
import { MoviesService } from '../../../shared/services/movies.service';
import { moviesMock } from '../../../shared/mocks/services/movies-mock';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: MoviesService;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimations(),
      ],
    })
      .compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MoviesService);
    service.baseUrl = window.location.origin + '/movies';

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should load the list of movies and display the dashboard cards', () => {
    /**
     * Arrange
    */
    service.getMovies().subscribe();

    /**
     * Act
    */
    const request = httpTesting.expectOne(`${service.baseUrl}?size=206`);
    request.flush(moviesMock);
    fixture.detectChanges();

    /**
     * Assert
    */
    expect(component.movies._embedded.movies.length).toBeGreaterThan(0);
    const cards = fixture.nativeElement.querySelectorAll('app-card mat-card-title');
    expect(cards.length).toBe(4)
  });
});
