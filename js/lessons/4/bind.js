function getName(message, second) {
  return 'Hello' + message + this.name + second;
}

var user = {
  name: 'Max',
};

var user2 = {
  name: 'Dima'
};


var contextWithUserFn = getName.bind(user, ' first arg ');
// var contextWithUserFn2 = getName.bind(user2);
console.log(contextWithUserFn());
//
var newFirstFn = contextWithUserFn.bind(user2, ' second Arg ');
//
console.log(newFirstFn());

// forEach, slice, map, reduce, some, filter



