(function () {
    function MovieListView() {
        this.movies;
    }

    MovieListView.prototype.clear = function (container) {
        while (container.firstChild) container.removeChild(container.firstChild);
    }

    MovieListView.prototype.render = function (container) {
        var container = container || document.querySelector('.movielist-container');
        this.clear(container);

        this.moviesContainer = document.createElement('ul');
        this.moviesContainer.setAttribute('class', 'movies-container row');
        this.counter = document.querySelector('.movielist-info__row');

        var addTile = `
            <li class="movies-container__item add col-6 col-md-3">
                <button type="button" class="add__button" id="add-movie"><span class="add__button-text">+</span></button>
                <div class="tile__title">Add Movie</div>
            </li>
        `;
        
        while (this.counter.firstChild) this.counter.removeChild(this.counter.firstChild);
        if (this.movies.length > 1) {
            this.counter.insertAdjacentHTML('beforeend', `Showing <span class="movielist-info__value">${this.movies.length} items</span>`);
        } else {
            this.counter.insertAdjacentHTML('beforeend', `Showing <span class="movielist-info__value">1 item</span>`);
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
