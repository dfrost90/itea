// <button>click me</button>
// click = mousedown + mouseup

var openModal = document.querySelector('.modal-box-open');
var modalText = document.querySelector('.modal-box__text');
var closeModal = document.querySelector('.modal-box__close');


function handleEsc(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        hideModal();
    }
}
function showModal() {
    modalText.classList.remove('hidden');
    closeModal.addEventListener('click', hideModal);
    document.addEventListener('keydown', handleEsc);
}
function hideModal() {
    modalText.classList.add('hidden');
    closeModal.removeEventListener('click', hideModal);
    document.removeEventListener('keydown', handleEsc);
}

openModal.addEventListener('click', showModal);

var form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // убираем действие поумолчанию
})

////
window.SomeFunction = function() {

    return SomeFunction;
};