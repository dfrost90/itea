(function() {
    function PopupView() {
        this.wrapper = document.querySelector('.overlay-wrapper');
        this.closeButton = document.querySelector('.popup-close');
    }

    PopupView.prototype.showModal = function(e) {
        e.preventDefault();

        this.wrapper.classList.remove('hidden');
        this.closeButton.addEventListener('click', this.hideModal.bind(this));
    }

    PopupView.prototype.hideModal = function() {
        this.wrapper.classList.add('hidden');
        this.closeButton.removeEventListener('click', this.hideModal.bind(this));
    }

    PopupView.prototype.init = function(container) {
        container.addEventListener('click', this.showModal.bind(this));
    }

    window.PopupView = PopupView;
})()