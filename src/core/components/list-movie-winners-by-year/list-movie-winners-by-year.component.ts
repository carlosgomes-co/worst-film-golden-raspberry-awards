import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Movie, Movies } from '../../../shared/services/movies.interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface Item {
  id: number;
  year: number;
  title: string;
}

@Component({
  selector: 'app-list-movie-winners-by-year',
  standalone: true,
  imports: [MatTableModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './list-movie-winners-by-year.component.html',
  styleUrl: './list-movie-winners-by-year.component.scss'
})
export class ListMovieWinnersByYearComponent implements OnChanges {
  @Input() public movies: Movies = {} as Movies;

  displayedColumns = ['id', 'year', 'title'];
  dataSource = new MatTableDataSource<Item>([]);
  input = new FormControl('');

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['movies']?.currentValue) {
      this.dataSource = new MatTableDataSource<Item>(this.movies._embedded.movies.reduce((result: Item[], movie: Movie) => {
        const id = parseInt(movie._links.movie.href.split('/').pop() || '');

        result.push({ id, year: movie.year, title: movie.title });

        return result;
      }, []).sort((a, b) => a.id - b.id));
      this.dataSource.filterPredicate = (data: Item, filter: any) => {
        const input = !!this.input.value;
        let inputFiltered = false;
        const year = data.year.toString();
  
        inputFiltered = this.input.value ? year.includes(this.input.value) : year.includes(filter) || filter.includes(year);
        if (input) {
          return inputFiltered;
        }
  
        return false;
      };
    }
  }

  applyInputFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim();

    if (!filterValue) {
      this.applyFilter('');
      return;
    }

    this.applyFilter(filterValue);
  }

  private applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
