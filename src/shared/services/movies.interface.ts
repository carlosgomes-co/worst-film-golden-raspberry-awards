export interface Movie {
  year: number;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
  _links: {
    self: {
      href: string;
    };
    movie: {
      href: string;
    };
  };
}

export interface Movies {
  _embedded: {
    movies: Movie[];
  };
  _links: {
    first: {
      href: string;
    };
    self: {
      href: string;
      templated: boolean;
    };
    next: {
      href: string;
    };
    last: {
      href: string;
    };
    profile: {
      href: string;
    };
    search: {
      href: string;
    };
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}