var movieDetails1 = new MovieDetailsView();
movieDetails1.render();

function MovieEditView() {

}

var movieListView = new MovieListView(movieListData);
movieListView.render(document.querySelector('.movielist-container'));