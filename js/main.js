var movieListView = new window.MovieListView();
var filters = new MovieFiltersView();
var sorting = new SortingView();

window.movieList.getAll(function(data) {
    window.movieListData = data;
    movieListView.render(data, document.querySelector('.movielist-container'));
    filters.render();
    sorting.render();
});
