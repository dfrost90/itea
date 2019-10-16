// data
var movieListData = [
    {
        id: 1,
        title: 'Rambo: Last Blood',
        rating: 6.8,
        year: 2019,
        genre: 'Action, Adventure, Thriller',
        director: 'Adrian Grunberg',
        cast: 'Sylvester Stallone, Paz Vega, Sergio Peris-Mencheta, ...',
        info: 'Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission.'
    },
    {
        id: 2,
        title: 'El Camino: A Breaking Bad Movie',
        rating : 9.8,
        genre: 'Action, Drama',
        year: 2019,
        director: 'Vince Gilligan',
        cast: 'Aaron Paul, Matt Jones, Charles Baker, ...',
        info: 'After escaping Jack and his gang, Jesse Pinkman goes on the run from the police and tries to escape his own inner turmoil.'
    },
    {
        id: 3,
        title: 'Action movie example',
        rating : 6,
        genre: 'Action, Drama',
        year: 2015,
        director: 'example director',
        cast: 'lorem cast',
        info: 'test info'
    }
];

function MovieList(data) {
    this.list = data.map(function (el) {
        return new Movie(el);
    });
}

MovieList.prototype = {
    search: function (title) {
        return this.list.find(item => item.title === title);
    },
    edit: function (ID, newData) {
        this.list[this.list.findIndex(item => item.id === ID)] = newData;
    },
    add: function (newData) {
        this.list.push(newData);
    },
    getById: function (ID) {
        return this.list.find(item => item.id === ID);
    },
    deleteById: function (ID) {
        this.list.splice(this.list.findIndex(item => item.id === ID), 1);
    },
    getAll: function () {
        return this.list;
    },
    sortBy: function (sort) {
        var sort = sort || 'year'; // default sorting

        return this.list.sort((a, b) => (a[sort] > b[sort]) ? 1 : -1);
    },
    filterBy: function (filter) {
        return this.list.filter(item => item.genre === filter);
    },
    render: function () {
        this.list.map(function (el) {
            return this.list[i].title + ', ';
        });
    }
}

// Movie.js

function Movie(options) {
    if (options) {
        this.id = options.id || 'id error';
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

// exec

var movieList1 = new MovieList(movieListData);

// console.log(movieList1.getAll());

// movieList1.deleteById(2);

// console.log(movieList1.getAll());

var newMovie = {
    id: 4,
    title: 'Action movie example',
    rating : 6,
    genre: 'Action, Drama',
    year: 2015,
    director: 'example director',
    cast: 'lorem cast',
    info: 'test info'
};

var newMovie2 = {
    id: 5,
    title: 'new movie 2',
    rating : 7,
    genre: 'Action, Drama',
    year: 2010,
    director: 'example director',
    cast: 'lorem cast',
    info: 'test info'
};

//movieList1.add(newMovie);

//console.log(movieList1.getAll());

//movieList1.edit(4, newMovie2)

//console.log(movieList1.getAll());

//console.log(movieList1.search('Action movie example'));

console.log(movieList1.sortBy());

console.log(movieList1.sortBy('rating'));
