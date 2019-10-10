function MovieList(movies) {
    this.listOfMovies = movies;
}

MovieList.prototype = {
    search: function () {
        console.log('search function');
    },
    remove: function (id) {
        return id + ' has been removed.';
    },
    edit: function () {
        return id + ' editing.';
    },
    add: function () {

    },
    getAll: function () {
        
    },
    sortBy: function () {
        return 'sort by name/rating/views/date';
    },
    filter: function (filterBy) {
        for(var i = 0; i < this.listOfMovies.length; i++) {
            if (this.listOfMovies[i].genre === filterBy) {
                console.log('filtered by ' + filterBy +' movies: ' + this.listOfMovies[i].title);
            }
        }
    },
    render: function () {
        for(var i = 0; i < this.listOfMovies.length; i++) {
            console.log('rendering movies: ' + this.listOfMovies[i].title);
        }
    }
}

var movieListData = [
    {
        id: 1,
        title: 'Rambo: Last Blood',
        rating: 6.8,
        year: 2019,
        genre: 'Action, Adventure, Thriller'
    },
    {
        id: 2,
        title: 'El Camino: A Breaking Bad Movie',
        rating : 9.8,
        genre: 'Action, Drama',
        year: 2019
    },
    {
        id: 3,
        title: 'Action movie example',
        rating : 6,
        genre: 'Action, Drama',
        year: 2015
    }
];

var movieList = new MovieList(movieListData);

console.log(movieList.remove(1));
