(function () {
    function MovieFiltersView(container) {
        this.container = container || document.querySelector('.filters-container');
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'list-group filters');

        this.genreList = [];
        this.filteredBy = [];
    }

    MovieFiltersView.prototype.clear = function (container) {
        while (container.firstChild) container.removeChild(container.firstChild);
    }

    MovieFiltersView.prototype.update = function (data) {
        this.container.addEventListener('click', (e) => {
            if (!e.target.closest('.filters__item')) return;
            e.preventDefault();

            // document.querySelector('.search-input').value = ''; // clearing search input

            e.target.closest('.filters__item').classList.toggle('active');

            if (this.filteredBy.includes(e.target.text)) {
                this.filteredBy = this.filteredBy.filter(item => item !== e.target.text);
            } else {
                this.filteredBy.push(e.target.text);
            }

            if (this.filteredBy.length > 0) {
                window.movieList.filter(this.filteredBy, function(data) {
                    movieListView.render(data);
                    window.movieListFiltered = data;
                });
            } else {
                movieListView.render(window.movieListData);
                window.movieListFiltered = window.movieListData;
            }
        });
    }

    MovieFiltersView.prototype.render = function (data) {
        var filtersHtml = '';

        this.genreList = Array.from(new Set(window.movieListFiltered.map(movie => movie.Genred))); // unique filters via set
        this.genreList.forEach(filter => {
            filtersHtml += `
                <a class="list-group-item list-group-item-action filters__item" href="#" role="button">${filter}</a>
            `;
        });

        this.clear(this.element);

        this.element.insertAdjacentHTML('beforeend', filtersHtml);

        this.container.append(this.element);

        this.update(data);
    }

    window.MovieFiltersView = MovieFiltersView;
})()