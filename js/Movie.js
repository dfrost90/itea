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

var tvShow1Options = {
    title: 'Tv Show',
    rating: 4,
    year: 2010-2015,
    genre: 'Comedy',
    numberOfSeasons: 5,
    statusOnAir: false
}

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
    }
}

function TvShow(options) {
    Movie.apply(this, arguments);

    if (options) {
        this.numberOfSeasons = options.numberOfSeasons || '1';
        this.statusOnAir = options.statusOnAir || false;
    }
}

Movie.prototype = {
    add: function (key, value) {
        this[key] = value;
    },
    edit: function (key, value) {
        this[key] = value;
    },
    remove: function (key) {
        delete this[key];
    },
    getTitle: function () {
        return this.title;
    },
    setScore: function () {
        return 'set score function for ' + this.title;
    },
    playVideo: function() {
        return 'play function for ' + this.title;
    },
    render: function () {
        return 'render function for ' + this.title;
    }
}

TvShow.prototype = Object.create(Movie.prototype);
TvShow.prototype.constructor = Movie;

TvShow.prototype.isOnAir = function () {
    return this.statusOnAir ? 'yes' : 'cancelled';
}

TvShow.prototype.playListOfEpisodes = function () {
    return 'play list of episodes';
}

TvShow.prototype.setSeasonScore = function () {
    return 'rate season';
}

TvShow.prototype.render = function () {
    return 'render tvshow';
}

// var movie1 = new Movie(movie1Options);
// var movie2 = new Movie(movie2Options);

// var tvshow1 = new TvShow(tvShow1Options);

// movie1.setScore();
// movie1.playVideo();
// movie1.render();

//console.log(tvshow1.getTitle());

// movie2.playVideo();

// tvshow1.playListOfEpisodes();

// tvshow1.setScore();

//console.log(tvshow1.isOnAir());
