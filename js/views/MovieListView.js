(function() {
    function MovieListView(movies) {
        this.movies = movies;
    }
    
    MovieListView.prototype.render = function(container) {
        this.moviesContainer = document.createElement('ul');
        this.moviesContainer.setAttribute('class', 'movies-container row');
        this.counter = document.querySelector('.movielist-info__value');

        if (this.movies.length > 1) {
            this.counter.textContent = this.movies.length + ' items';
        }
    
        this.movies.forEach(movie => {
            var movie = new window.MovieTileView(movie);
            this.moviesContainer.append(movie.getElement());
        });
    
        container.append(this.moviesContainer);
    }

    window.MovieListView = MovieListView;
})()
