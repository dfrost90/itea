function Singletone (name) {
  if (Singletone.instance) {
    return Singletone.instance
  }

  this.name = name;
  Singletone.instance = this;
}

var a = new Singletone('Dima');
var b = new Singletone('Second ');
var c = new Singletone('Third ');


console.log(a);
console.log(b);
console.log(c);

console.log(a === b);
console.log(a === c);
console.log(b === c);


function showMessage(fn) {
  fn(arguments);

  var message = 'HI';

  console.log(message);
}

showMessage(function (params) {

});


