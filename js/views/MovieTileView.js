(function () {
    function MovieTileView(movie) {
        this.element = document.createElement('li');
        this.element.setAttribute('class', 'movies-container__item col-6 col-md-3');

        /* old
        this.tile = document.createElement('div');
        this.tile.setAttribute('class', 'tile');

        this.link = document.createElement('a');
        this.link.setAttribute('href', movie.url);

        this.image = document.createElement('img');
        this.image.setAttribute('class', 'img-thumbnail tile__image');
        this.image.setAttribute('src', movie.image);
        this.image.setAttribute('alt', movie.title);

        this.title = document.createElement('h5');
        this.title.setAttribute('class', 'tile__title');
        this.title.textContent = movie.title;

        this.link.append(this.image);
        this.link.append(this.title);
        this.tile.append(this.link);
        this.element.append(this.tile);
        */

        // es6
        var tile = `
            <div class="tile" data-modal-toggle="${movie.ID}">
                <img class="img-thumbnail tile__image" src="${movie.srcImage}" alt="${movie.Title}">
                <h5 class="tile__title">${movie.Title}</h5>
            </div>
        `;

        this.element.insertAdjacentHTML('beforeend', tile);
    }

    MovieTileView.prototype.getElement = function () {
        return this.element;
    }

    window.MovieTileView = MovieTileView; // "export"
})()