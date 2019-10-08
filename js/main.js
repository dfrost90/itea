'use strict';

function MovieList(data) {
    this.data = data;

    this.render = function () {
        // loop console.log
    };
    this.sortByAsc = function () {};
}
/* arrow function */

const getName = (a, b) => a + b;

/* arrays

    Useful methods
    
    map, forEach, find, some

 */

var arr = [1, 2, 3, 4, 5];
var result = [];
for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
}

/* Example */
var newArr = arr.map( (element) => element * element );
/* = */
var newArr = arr.map( element => element * element );
/* = */
var newArr = arr.map( element => {
    return element * element;
});


function User(options) {
    var {name, age} = options;
}
/* = */
function User( {name, age }) {
    this.name = name;
    this.age = age;
}