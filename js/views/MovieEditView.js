(function() {
    function MovieEditView(movie) {
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'movie-edit');

        // get available fields from data
        var moviePropsNew = ['title', 'originalTitle', 'rating', 'url', 'image', 'year', 'genre', 'director', 'country', 'cast', 'info'];

        var rowsHtml = '';
        var formTitle = '';

        if (movie) {
            var movieProps = Object.entries(movie);
            formTitle = 'Edit Movie';

            movieProps.forEach(element => {
                if (element[0] === 'id' || element[0] === 'views') return;

                var row = `
                    <div class="form-group">
                        <label for="movie-${element[0]}-${movie.id}" class="form-row-label">${element[0]}</label>
                        <input id="movie-${element[0]}-${movie.id}" class="form-control"" type="text" value="${element[1]}" />
                    </div>
                `;
                if (element[0] === 'info') {
                    row = `
                        <div class="form-group">
                            <label for="movie-${element[0]}-${movie.id}" class="form-row-label">${element[0]}</label>
                            <textarea id="movie-${element[0]}-${movie.id}" class="form-control">${element[1]}</textarea>
                        </div>
                    `;
                }
                rowsHtml += row;
            });
        } else {
            formTitle = 'New Movie';

            moviePropsNew.forEach(element => {
                var row = `
                    <div class="form-group">
                        <label for="movie-${element}" class="form-row-label">${element}</label>
                        <input id="movie-${element}" class="form-control"" type="text" placeholder="Enter ${element}"/>
                    </div>
                `;
                if (element === 'info') {
                    row = `
                        <div class="form-group">
                            <label for="movie-${element}" class="form-row-label">${element}</label>
                            <textarea id="movie-${element}" class="form-control" placeholder="Enter ${element}"></textarea>
                        </div>
                    `;
                }
                rowsHtml += row;
            });
        }

        var formHtml = `
            <h2 class="movie__title">${formTitle}</h2>
            <form action="" method="" id="edit-form" class="edit-form">
                ${rowsHtml}
                <div class="form-group text-center">
                    <button class="btn btn-lg btn-primary px-4" type="submit">Submit</button>
                    <button class="btn btn-lg btn-secondary ml-4 px-4" type="button">Cancel</button>
                </div>
            </form>
        `;

        this.element.insertAdjacentHTML('beforeend', formHtml);
    }

    MovieEditView.prototype.render = function() {
        return this.element;
    }

    MovieEditView.prototype.renderModal = function() {
        var modal = new window.ModalView(this.render());
        modal.showModal();
    }

    window.MovieEditView = MovieEditView;
})()