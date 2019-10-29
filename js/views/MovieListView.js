(function () {
    function MovieListView(movies) {
        this.movies = movies;
    }
    
    MovieListView.prototype.render = function (container) {
        this.moviesContainer = document.createElement('ul');
        this.moviesContainer.setAttribute('class', 'movies-container row');
        this.counter = document.querySelector('.movielist-info__value');

        var addTile = `
            <li class="movies-container__item add col-6 col-md-3">
                <button type="button" class="add__button" id="add-movie"><span class="add__button-text">+</span></button>
                <div class="tile__title">Add Movie</div>
            </li>
        `;

        if (this.movies.length > 1) {
            this.counter.textContent = this.movies.length + ' items';
        }

        this.movies.forEach(movie => {
            var movie = new window.MovieTileView(movie);
            this.moviesContainer.append(movie.getElement());
        });

        container.append(this.moviesContainer);

        this.moviesContainer.insertAdjacentHTML('beforeend', addTile);

        container.addEventListener('click', function (e) {
            if (e.target.closest('.add')) {
                var newMovieModal = new window.MovieEditView();
                newMovieModal.renderModal();
            };

            if (!e.target.closest('.tile')) return;

            var id = e.target.closest('.tile').dataset.modalToggle;
            var movieDetails = new window.MovieView(id);

            movieDetails.renderModal();
        });
    }

    window.MovieListView = MovieListView;
})()
