(function() {
    function PopupView(movies) {
        this.movies = movies;
        this.wrapper = document.querySelector('.overlay-wrapper');
        this.popup = document.querySelector('.popup');
        this.content = document.querySelector('.popup-content');
        this.closeButton = document.querySelector('.popup-close');
    }

    PopupView.prototype.showModal = function(e) {
        e.preventDefault();

        var id = e.target.closest('[data-popup-toggle]').dataset.popupToggle;
        var movie = new window.MovieView(id);

        this.content.append(movie.render());

        this.wrapper.classList.remove('hidden');

        this.closeButton.addEventListener('click', this.hideModal.bind(this));
        this.wrapper.addEventListener('click', this.hideModal.bind(this));
    }

    PopupView.prototype.hideModal = function(e) {
        // click outside popup
        if (this.popup.contains(e.target) && e.target !== this.closeButton) {
            return;
        }

        this.wrapper.classList.add('hidden');

        // empty content
        while (this.content.firstChild) this.content.removeChild(this.content.firstChild);

        this.closeButton.removeEventListener('click', this.hideModal.bind(this));
        this.wrapper.removeEventListener('click', this.hideModal.bind(this));
    }

    PopupView.prototype.init = function(popupToggle) {
        popupToggle.forEach(element => {
            element.addEventListener('click', this.showModal.bind(this));  
        });
    }

    window.PopupView = PopupView;
})()