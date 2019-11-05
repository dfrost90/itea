var movieListView = new window.MovieListView();
var filters = new MovieFiltersView();

window.movieList.getAll(function(data) {
    window.movieListData = data;
    movieListView.render(data, document.querySelector('.movielist-container'));
    filters.render();
});
