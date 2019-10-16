function Human() {

}

Human.prototype.getName = function () {

}

function User(options) {
  this.name = options.name
}

User.prototype = Object.create(Human.prototype);



var user = new Human();
user.name = 'fadsfasdf';
