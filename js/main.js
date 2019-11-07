var movieListView = new window.MovieListView();
var filters = new MovieFiltersView();
var sorting = new SortingView();
var search = new SearchView();

window.movieList.getAll(function(data) {
    window.movieListData = data;
    movieListView.render(data, document.querySelector('.movielist-container'));
    filters.render();
    sorting.render();
    search.render();
});
