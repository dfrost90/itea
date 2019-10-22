// var movieDetails1 = new MovieDetailsView();
// movieDetails1.render();

var movieList = new window.MovieList(movieListData);
var movieListView = new window.MovieListView(movieListData);
var popupView = new window.PopupView(movieListData);

movieListView.render(document.querySelector('.movielist-container'));

popupView.init(document.querySelectorAll('[data-popup-toggle]'));
