var user = {
  name: 'Max',
  getName: function () {
    return this.name;
  }
};

var user2 = {
  name: 'Dima'
};


console.log(user.getName.call(user2));

function setName(name) {
  this.name = name;
}

function setHobbies(firstHobby, secondHobby) {
  console.log(firstHobby);
  console.log(secondHobby);
  this.hobbies = [firstHobby, secondHobby];
}

var student = {
  name: 'Oleg',
};

setName.call(student, 'Vitalik');
setHobbies.apply(student, ['Music', 'Running']);


console.log(student);

