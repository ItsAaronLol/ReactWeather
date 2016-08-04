var names = ['Aaron', 'bob'];

// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name => {
//   console.log('arrowFunc',name);
// }));
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Aaron'));

var person = {
  name: 'Andrew',
  greet: function(){
    names.forEach(function(name){
      console.log(this.name + ' says hi to ' + name)
    });
  }
};
person.greet();

var person = {
  name: 'Andrew',
  greet: function(){
    names.forEach((name) => { //the arrow function doesn't update the this keyword
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet();



function add (a, b){
  return a + b;
}


var addStatement = (a,b) => {
  return a + b;
}

var addExpression = (a , b) => a + b;

//when creating a function that needs  to use the this keyword of its parent, ur gonna lose that binding
//arrow functions allow this to work.
