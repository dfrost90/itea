var movieListView = new window.MovieListView();
window.movieList.getAll(function(data) {
    movieListView.render(data, document.querySelector('.movielist-container'));
    window.movieListData = data;
});
