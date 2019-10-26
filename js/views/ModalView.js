(function() {
    function ModalView(content) {
        this.content = content;
        this.wrapper = document.querySelector('.overlay-wrapper');
        this.popup = document.querySelector('.popup');
        this.popupContent = document.querySelector('.popup-content');
        this.closeButton = document.querySelector('.popup-close');
    }

    ModalView.prototype.emptyModal = function() {
        // empty content
        while (this.popupContent.firstChild) this.popupContent.removeChild(this.popupContent.firstChild);
    }

    ModalView.prototype.showModal = function(e) {
        this.emptyModal();

        this.popupContent.append(this.content);

        this.wrapper.classList.remove('hidden');

        this.closeButton.addEventListener('click', this.hideModal.bind(this));
        // this.wrapper.addEventListener('click', this.hideModal.bind(this));
    }

    ModalView.prototype.hideModal = function(e) {
        // click outside popup
        if (this.popup.contains(e.target) && e.target !== this.closeButton) {
            return;
        }

        this.wrapper.classList.add('hidden');

        this.emptyModal();

        this.closeButton.removeEventListener('click', this.hideModal.bind(this));
        // this.wrapper.removeEventListener('click', this.hideModal.bind(this));
    }

    window.ModalView = ModalView;
})()