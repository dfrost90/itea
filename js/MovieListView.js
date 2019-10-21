(function() {
    function MovieListView(movies) {
        this.movies = movies;
    }
    
    MovieListView.prototype.render = function(container) {
        this.moviesContainer = document.createElement('ul');
        this.moviesContainer.setAttribute('class', 'movies-container row');
    
        this.movies.forEach(movie => {
            var movie = new MovieView(movie);
            this.moviesContainer.append(movie.getElement());
        });
    
        container.append(this.moviesContainer);
    }

    window.movielistview = MovieListView;
})()
