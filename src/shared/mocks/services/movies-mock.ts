export const moviesMock = {
  _embedded: {
    movies: [
      { title: 'Movie 1', studios: ['s1'], producers: ['p1'], year: 1999, _links: { movie: { href: 'm/1' } } },
      { title: 'Movie 2', studios: ['s2'], producers: ['p2'], year: 1999, _links: { movie: { href: 'm/2' } } }
    ]
  }
};