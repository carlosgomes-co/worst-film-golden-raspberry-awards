import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ListMoviesComponent } from './list-movies.component';
import { MoviesService } from '../../../shared/services/movies.service';
import { moviesMock } from '../../../shared/mocks/services/movies-mock';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;
  let service: MoviesService;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMoviesComponent],
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

    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
  });

  it('should load the list of movies and display the list component', () => {
    /**
     * Arrange
    */
    component.ngOnInit();

    /**
     * Act
    */
    const request = httpTesting.expectOne(`${service.baseUrl}?page=0&size=5`);
    request.flush(moviesMock);
    fixture.detectChanges();

    /**
     * Assert
    */
    expect(component.movies.length).toBeGreaterThan(0);
  });
});
