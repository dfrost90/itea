function createEditFn(url) {
  return function (data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.send(JSON.stringify(data));
  }
}

var editUser = createEditFn('/user');

editUser({
  id: 5,
  name: 'Max',
  age: 24,
});

editUser({
  id: 3,
  name: 'Yura',
  age: 38,
});

var editCar = createEditFn('/car');

editCar({
  id: 1,
  ownerId: 23,
});

editCar({
  id: 1,
  ownerId: 23,
});


var user = {}


