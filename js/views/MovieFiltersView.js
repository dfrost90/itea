(function () {
    function MovieFiltersView(container) {
        this.container = container || document.querySelector('.filters-container');
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'list-group filters');
        this.filteredBy = [];
    }

    MovieFiltersView.prototype.render = function () {
        // unique filters via set
        var genreList = Array.from(new Set(window.movieListData.map(movie => movie.Genred)));
        var filtersHtml = '';

        genreList.forEach(filter => {
            filtersHtml += `
                <a class="list-group-item list-group-item-action filters__item" href="#" role="button">${filter}</a>
            `;
        });

        this.element.insertAdjacentHTML('beforeend', filtersHtml);

        this.container.append(this.element);

        this.container.addEventListener('click', (e) => {
            if (!e.target.closest('.filters__item')) return;
            e.preventDefault();

            e.target.closest('.filters__item').classList.toggle('active');

            if (this.filteredBy.includes(e.target.text)) {
                this.filteredBy = this.filteredBy.filter(item => item !== e.target.text);
            } else {
                this.filteredBy.push(e.target.text);
            }

            if (this.filteredBy.length > 0) {
                window.movieList.filter(this.filteredBy, function(data) {
                    movieListView.render(data);
                });
            } else {
                movieListView.render(window.movieListData);
            }
        });
    }

    window.MovieFiltersView = MovieFiltersView;
})()