(function () {
    function MovieEditView(movie) {
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'movie-edit');

        var movieProps = movie ? Object.entries(movie) : ['title', 'originalTitle', 'rating', 'url', 'image', 'year', 'genre', 'director', 'country', 'cast', 'info'];

        var rowsHtml = '';
        this.title = movie ? 'Edit Movie' : 'New Movie';
        this.id = movie ? movie.ID : 'new';

        movieProps.forEach(element => {
            if (element[0] === 'id' || element[0] === 'views') return;

            var placeholder = Array.isArray(element) ? 'Enter ' + element[0] : 'Enter ' + element;
            var key = Array.isArray(element) ? element[0] : element;
            var value = Array.isArray(element) ? element[1] : '';

            var row = `
                <div class="form-group edit-form-row">
                    <label for="movie-${key}-${this.id}" class="form-row-label">${key}</label>
                    <input id="movie-${key}-${this.id}" class="form-control"" type="text" placeholder="${placeholder}" value="${value}" />
                </div>
            `;
            if (element[0] === 'info') {
                row = `
                    <div class="form-group edit-form-row">
                        <label for="movie-${key}-${this.id}" class="form-row-label">${key}</label>
                        <textarea rows="4" id="movie-${key}-${this.id}" class="form-control">${value}</textarea>
                    </div>
                `;
            }
            rowsHtml += row;
        });

        var formHtml = `
            <form action="" method="" id="edit-form" class="edit-form">
                ${rowsHtml}
                <div class="edit-form-footer form-group edit-form-row text-center py-4">
                    <button class="btn btn-lg btn-primary px-4" type="submit">Submit</button>
                    <button class="btn btn-lg btn-secondary ml-4 px-4" type="button">Cancel</button>
                </div>
            </form>
        `;

        this.element.insertAdjacentHTML('beforeend', formHtml);
    }

    MovieEditView.prototype.render = function () {
        return this.element;
    }

    MovieEditView.prototype.renderModal = function () {
        var modal = new window.ModalView(this.render(), this.title);
        modal.showModal();
    }

    window.MovieEditView = MovieEditView;
})()