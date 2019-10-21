(function() {
    function MovieView(movie) {
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'movie-details');
    }
    
    MovieView.prototype.render = function() {
        return this.element;
    }

    window.movieview = MovieView;
})()
