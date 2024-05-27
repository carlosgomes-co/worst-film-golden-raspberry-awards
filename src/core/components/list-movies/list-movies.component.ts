import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Movie, Movies } from '../../../shared/services/movies.interface';

export interface Item {
  id: number;
  year: number;
  title: string;
  winner: string;
}

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent implements OnChanges, AfterViewInit {
  @Input() public movies: Movies = {} as Movies;
  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  displayedColumns = ['id', 'year', 'title', 'winner'];
  dataSource = new MatTableDataSource<Item>([]);
  input = new FormControl('');
  select = new FormControl('');
  selectOptions: string[] = ['Yes', 'No'];
  private filters = { input: false, select: false };

  constructor() { }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['movies']?.currentValue) {
      this.dataSource = new MatTableDataSource<Item>(this.movies._embedded.movies.reduce((result: Item[], movie: Movie) => {
        const id = parseInt(movie._links.movie.href.split('/').pop() || '');
        const winner = movie.winner ? this.selectOptions[0] : this.selectOptions[1];

        result.push({ id, year: movie.year, title: movie.title, winner });

        return result;
      }, []).sort((a, b) => a.id - b.id));
    }
  }

  ngAfterViewInit() {
    this.dataSource.filterPredicate = (data: Item, filter: any) => {
      const input = !!this.input.value;
      const select = !!this.select.value?.length;
      let inputFiltered = false;
      let selectFiltered = false;
      const year = data.year.toString();

      if (this.filters.input) {
        inputFiltered = this.input.value ? year.includes(this.input.value) : year.includes(filter) || filter.includes(year);
      }

      if (this.filters.select) {
        selectFiltered = this.select.value ? this.select.value.includes(data.winner) : filter.includes(data.winner);
      }

      if (input && select) {
        return inputFiltered && selectFiltered;
      } else if (input) {
        return inputFiltered;
      } else if (select) {
        return selectFiltered;
      }

      return false;
    };
    this.dataSource.paginator = this.paginator;
  }

  applyInputFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim();

    if (!filterValue) {
      this.filters.input = false;
      this.applyFilter('');
      return;
    }

    this.filters.input = true;
    this.applyFilter(filterValue);
  }

  applySelectFilter(event: MatSelectChange) {
    const filterValue = event.source.value.toString();

    if (!filterValue) {
      this.filters.select = false;
      this.applyFilter('');
      return;
    }

    this.filters.select = true;
    this.applyFilter(filterValue);
  }

  private applyFilter(filterValue: string) {
    if (!this.dataSource.filter) {
      this.dataSource.filter = filterValue;
    } else if (this.dataSource.filter) {
      this.dataSource.filter += filterValue;
    }

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}