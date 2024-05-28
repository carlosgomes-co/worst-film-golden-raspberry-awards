import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MoviesService } from '../shared/services/movies.service';
import { moviesMock } from '../shared/mocks/services/movies-mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: MoviesService;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimations(),
      ],
    }).compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MoviesService);
    service.baseUrl = window.location.origin + '/movies';

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should load the list of movies with a loading screen', () => {
    /**
     * Arrange
     */
    service.getMovies().subscribe();
    expect(component.loading).toBeTrue();

    /**
     * Act
     */
    const request = httpTesting.expectOne(`${service.baseUrl}?size=206`);
    request.flush(moviesMock);
    fixture.detectChanges();

    /**
     * Assert
     */
    expect(service.movies._embedded.movies.length).toBe(2);
    expect(component.loading).toBeFalse();
  });
});
