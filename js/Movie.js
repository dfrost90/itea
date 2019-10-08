function Movie(options) {
    if (options) {
        this.title = options.title || 'default';
        this.genre = options.genre || 'other';
        this.rating = options.rating || 0;
        this.year = options.year || 'not set';
        this.director = options.director || 'noname';
        this.cast = options.cast || 'John Doe, Jane Doe';
        this.info = options.info || 'some text';
        this.views = options.views || 0;

        this.setViews = function () {
            this.views++;
        }
        this.setRating = function (rating, newRating) {
            this.rating = (rating + newRating) / 2;
        }
    }
}

var movie1Options = {
    title: 'El Camino: A Breaking Bad Movie',
    rating : 9.8,
    genre: 'Action, Drama',
    year: 2019,
    director: 'Vince Gilligan',
    cast: 'Aaron Paul, Matt Jones, Charles Baker, ...',
    info: 'After escaping Jack and his gang, Jesse Pinkman goes on the run from the police and tries to escape his own inner turmoil.'
};

var movie2Options = {
    title: 'Rambo: Last Blood',
    rating: 6.8,
    year: 2019,
    genre: 'Action, Adventure, Thriller',
    director: 'Adrian Grunberg',
    cast: 'Sylvester Stallone, Paz Vega, Sergio Peris-Mencheta, ...',
    info: 'Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission.'
}

var movie1 = new Movie(movie1Options);
var movie2 = new Movie(movie2Options);

console.log({'movie1': movie1, 'movie2': movie2});
