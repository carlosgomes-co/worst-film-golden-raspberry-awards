import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { moviesMock } from '../mocks/services/movies-mock';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    });
    httpTesting = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MoviesService);
  });

  afterEach(() => {
    TestBed.inject(HttpTestingController).verify();
  });

  it('should return a list of movies', () => {
    /**
     * Arrange
     */
    service.baseUrl = window.location.origin + '/movies';
    expect(service.loading()).toBeTruthy();

    /**
     * Act
    */
    service.getDashboardMovies().subscribe();
    const request = httpTesting.expectOne(`${service.baseUrl}?size=206`);
    request.flush(moviesMock);

    /**
     * Assert
    */
    expect(service.dashboardMovies._embedded.movies.length).toBeGreaterThan(0);
    expect(service.loading()).toBeFalse();
  });
});
