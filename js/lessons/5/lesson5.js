/*
{} window
- setInterval/clearInterval
- setTimeout/clearTimeout

{} window.
- screen (width)
- navigator (usergent)
- location (href, page reload)
- history (back, forward, go)

{} window.
- document
*/

//example:

// setTimeout(function() {
//     console.log('hello');
// }, 2000);

// setInterval(function() {
//     console.log('hello');
// }, 2000);

var header = document.getElementById('header'); // возвращает один элемент
var col4 = document.getElementsByClassName('col-4'); // возвращает коллекцию (множество) элементов. коллекция может быть пустой.

var querySelector = document.querySelector('.col-8'); // возвращает первый попавшийся элемент (внутри объекта).
var querySelectorHeader = header.querySelector('.col-8'); // возвращает первый попавшийся элемент внутри header.

var querySelectorAll = document.querySelectorAll('.col-8'); // возвращает все элементы по селектору.

var filters = document.querySelector('.filters');
var filtersParent = filters.parentElement;
var filtersParentNode = filters.parentNode;

var filtersClosest = filters.closest('.main'); // ближайший родитель по селектору

var filtersChildren = filters.children;

var firstElementChild = filters.firstElementChild;
var lastElementChild = filters.lastElementChild;

var nextElementSibling = header.nextElementSibling; // следующий элемент. previous - предыдущий

/*
attributes
*/
var link = document.querySelector('.tile a');
link.setAttribute('href', 'newURL'); // новый аттрибут для link
//link.removeAttribute('href');

// console.log(link.dataset.name);

// console.log(header.id); // get
// console.log(header.id = 'header-id'); //set

var movieTile = document.querySelector('.tile').parentElement;

// setTimeout(function() {
//     movieTile.classList.add('hidden');
// }, 5000);

// setTimeout(function() {
//     movieTile.classList.remove('hidden');
// }, 10000);

// setInterval(function() {
//     movieTile.classList.toggle('hidden');
// }, 5000);

var moviesContainer = movieTile.closest('.row');

var newMovieTile = document.createElement('div');
newMovieTile.setAttribute('class', 'col-6 col-md-3');
//newMovieTile.textContent = 'New Movie Tile';

moviesContainer.append(newMovieTile);

var names = ['Masha', 'Ivan', 'Petya'];
var namesContainer = document.createElement('ul');
namesContainer.setAttribute('class', 'names-container');

names.forEach(function (name) {
    var li = document.createElement('li');
    li.setAttribute('class', 'names-container-item');
    li.textContent = name;
    namesContainer.append(li);
});

newMovieTile.append(namesContainer);

var fragment = document.createDocumentFragment(); // создание временной <fragment> обёртки, сама удаляется при append


// templates
// var element = getElementById('element');
// element.innerHtml = `
//     <h1>${title}</h1>
//     <p>${description}</p>
// `;


// hometask
