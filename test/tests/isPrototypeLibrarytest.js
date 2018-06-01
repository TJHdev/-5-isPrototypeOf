
var canine = {
    bark: function() {
      console.log('bark');
    }
  };
  
  var dog = Object.create(canine);
  dog.fetch = function() {
    console.log('fetch');
  };
  
  var myDog = Object.create(dog);
  var empty = Object.create(null);

QUnit.test( "It can check prototypes correctly", function( assert ) {
    assert.ok( isPrototypeOf(dog, myDog) === dog.isPrototypeOf(myDog) , "'dog' is a prototype of 'myDog'" );
    assert.ok( isPrototypeOf(dog, empty) === dog.isPrototypeOf(empty), "'dog' is a not a prototype of 'empty'" );
    assert.ok( isPrototypeOf(Object.prototype, myDog) === Object.prototype.isPrototypeOf(myDog), "'Object.prototype' is a prototype of 'myDog'" );
});

QUnit.test( "It will work for any number of prototype links", function( assert ) {
    assert.ok( isPrototypeOf(canine, myDog) === true , "'dog' is a prototype of 'myDog'" );
});
