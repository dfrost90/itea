(function () {
    function SearchView() {
        this.element = document.querySelector('.search');
        this.input = this.element.querySelector('.search-input');
        this.button = this.element.querySelector('#search-button');
    }

    SearchView.prototype.render = function () {
        function listRender(searchValue) {
            if(searchValue.length > 0) {
                window.movieListFiltered = movieList.search(searchValue.toUpperCase(), window.movieListData);
            } else {
                window.movieListFiltered = window.movieListData;
            }
            filters.render(window.movieListFiltered);
            movieListView.render(window.movieListFiltered);
        }

        this.input.addEventListener('keyup', (e) => {
            listRender(e.target.value);
        });
        this.input.addEventListener('search', (e) => {
            window.movieListFiltered = window.movieListData;
            filters.render(window.movieListFiltered);
            movieListView.render(window.movieListFiltered);
        });
        this.button.addEventListener('click', (e) => {
            listRender(e.target.closest('.input-group').querySelector('.search-input').value);
        });
    }

    window.SearchView = SearchView;
})()