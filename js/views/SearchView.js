(function () {
    function SearchView() {
        this.element = document.querySelector('.search');
        this.input = this.element.querySelector('.search-input');
        this.button = this.element.querySelector('#search-button');
    }

    SearchView.prototype.render = function () {
        this.input.addEventListener('keyup', (e) => {
            var searchValue = e.target.value;
            if(searchValue.length > 0) {
                movieListView.render(movieList.search(searchValue.toUpperCase()));
            } else {
                movieListView.render(window.movieListData);
            }
        });
        this.input.addEventListener('search', (e) => {
            movieListView.render(window.movieListData);
        });
        this.button.addEventListener('click', (e) => {
            var searchValue = e.target.closest('.input-group').querySelector('.search-input').value;
            if(searchValue.length > 0) {
                movieListView.render(movieList.search(searchValue.toUpperCase()));
            } else {
                movieListView.render(window.movieListData);
            }
        });
    }

    window.SearchView = SearchView;
})()