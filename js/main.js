var movieList = new window.MovieList(movieListData);
var movieListView = new window.MovieListView(movieListData);

movieListView.render(document.querySelector('.movielist-container'));
