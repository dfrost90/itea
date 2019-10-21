// var movieDetails1 = new MovieDetailsView();
// movieDetails1.render();

var movieListView = new window.MovieListView(movieListData);
var popupView = new window.PopupView();

movieListView.render(document.querySelector('.movielist-container'));

popupView.init(document.querySelector('[data-popup-toggle]'));
