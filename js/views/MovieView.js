(function() {
    function MovieView(id) {
        this.id = parseInt(id);
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'movie');

        this.movie = movieList.getById(this.id);

        var movieHtml = `
            <div class="row">
                <div class="col-12 col-md-3">
                    <div class="movie__img">
                        <img src="${this.movie.image}" class="img-thumbnail" alt="${this.movie.title}">
                    </div>
                </div>
                <div class="col-12 col-md-9">
                    <div class="movie__content">
                        <h1 class="movie__title">${this.movie.title}</h1>
                        <div class="movie__row"><span class="movie__row-title">Director: </span><span class="movie__row-text">${this.movie.director}</span></div>
                        <div class="movie__row"><span class="movie__row-title">Stars: </span><span class="movie__row-text">${this.movie.cast}</span></div>
                        <div class="movie__row"><span class="movie__row-title">Rating: </span><span class="movie__row-text">${this.movie.rating}</span></div>
                        <p class="movie__info mt-4 mb-4">${this.movie.info}</p>
                        <button type="button" id="play-button" class="btn btn-promo btn-lg pl-4 pr-4"><span>Play</span></button>
                        <a href="${this.movie.url}" target="_blank" role="button" id="trailer-button" class="btn btn-casual btn-lg pl-4 pr-4 movie__trailer-button"><span>Watch trailer</span></a>
                    </div>
                </div>
            </div>
        `;

        this.element.insertAdjacentHTML('beforeend', movieHtml);
    }

    MovieView.prototype.render = function() {
        return this.element;
    }

    window.MovieView = MovieView;
})()
