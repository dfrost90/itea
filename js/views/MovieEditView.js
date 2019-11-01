(function () {
    function MovieEditView(movie) {
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'movie-edit');

        var movieProps = movie ? Object.entries(movie) : ['title', 'originalTitle', 'rating', 'url', 'image', 'year', 'genre', 'director', 'country', 'cast', 'info'];

        var rowsHtml = '';
        this.title = movie ? 'Edit Movie' : 'New Movie';
        this.id = movie ? movie.ID : 'new';

        this.modal = new window.ModalView(this.render(), this.title);

        movieProps.forEach(element => {
            if (element[0] === 'ID' || element[0] === 'views') return;

            var placeholder = Array.isArray(element) ? 'Enter ' + element[0] : 'Enter ' + element;
            var key = Array.isArray(element) ? element[0] : element;
            var value = Array.isArray(element) ? element[1] : '';

            var row = `
                <div class="form-group edit-form-row">
                    <label for="movie-${key}-${this.id}" class="form-row-label">${key}</label>
                    <input id="movie-${key}-${this.id}" name="movie-${key}-${this.id}" class="form-control"" type="text" placeholder="${placeholder}" value="${value}" />
                </div>
            `;
            if (element[0] === 'info') {
                row = `
                    <div class="form-group edit-form-row">
                        <label for="movie-${key}-${this.id}" class="form-row-label">${key}</label>
                        <textarea rows="4" id="movie-${key}-${this.id}" name="movie-${key}-${this.id}" class="form-control">${value}</textarea>
                    </div>
                `;
            }
            rowsHtml += row;
        });

        if (movie) {
            rowsHtml += `
                <div class="form-group edit-form-row text-center">
                    <button id="delete-movie" class="btn btn-lg btn-danger" type="button">Delete</button>
                </div>
            `;
        }

        var formHtml = `
            <form action="" method="" id="edit-form" class="edit-form">
                ${rowsHtml}
                <div class="edit-form-footer form-group edit-form-row text-center py-4">
                    <button id="movie-edit-submit" class="btn btn-lg btn-primary px-4" type="submit">Submit</button>
                    <button id="movie-edit-cancel" data-popup-close class="btn btn-lg btn-secondary ml-4 px-4" type="button">Cancel</button>
                </div>
            </form>
        `;

        this.element.insertAdjacentHTML('beforeend', formHtml);
    }

    MovieEditView.prototype.controls = function () {
        var submitBtn = document.querySelector('#movie-edit-submit');
        var deleteBtn = document.querySelector('#delete-movie');
        var cancelBtn = document.querySelector('#movie-edit-cancel');
        var formElm = this.element.querySelector('#edit-form');

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();

            var formData = new FormData(formElm);
            console.log(formData.entries());

            if (movie) {
                // window.movieList.edit(id, data);
            } else {
                // window.movieList.add(data);
            }
        });

        deleteBtn.addEventListener('click', (e) => {
            var id = this.id;

            window.movieList.deleteById(id);

            window.movieList.getAll(function(data) {
                movieListView.render(data, document.querySelector('.movielist-container'));
                window.movieListData = data;
            });

            this.modal.hideModal(e, '-force');
        });

        cancelBtn.addEventListener('click', (e) => {
            this.modal.hideModal(e, '-force');
        });
    }

    MovieEditView.prototype.render = function () {
        return this.element;
    }

    MovieEditView.prototype.renderModal = function () {
        this.modal.showModal();
        this.controls();
    }

    window.MovieEditView = MovieEditView;
})()