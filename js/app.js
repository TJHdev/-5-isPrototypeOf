/*

In AccountingJS 8 and 9, you learned about JavaScript's prototype system. 
This challenge builds on those videos.

Write a function, isPrototypeOf, that works just like Object.prototype.isPrototypeOf. 
Since your solution will be called as a function rather than a method, the way you use it will be slightly different, but the outcome should be the same.

Obviously, don't use Object.prototype.isPrototypeOf in your solution, but 
feel free to use other methods on Object.prototype.

*/



  function isPrototypeOf(proto, object){
    var objectPrototype = Object.getPrototypeOf(object);
    if(!(arguments.length == 2 && typeof(proto)=='object' && typeof(object)=='object')){
        throw new TypeError ("Must pass in two objects as arguments");
    }
    if(objectPrototype === proto){
        return true;
    } else if (objectPrototype === null){
        return false;
    } else {
        return isPrototypeOf(proto, objectPrototype);
    };
  }


  //isPrototypeOf(Object.prototype, myDog)


//   // These two lines are equivalent.
//   dog.isPrototypeOf(myDog);  // native function returns true
//   isPrototypeOf(dog, myDog); // your function does the same
  
//   // These two lines, similarly should return the same thing.
//   dog.isPrototypeOf(empty);  // native function returns false
//   isPrototypeOf(dog, empty); // your function does the same
  
//   // This should work too.
//   Object.prototype.isPrototypeOf(myDog);  // native function returns true
//   isPrototypeOf(Object.prototype, myDog); // your function does the same
  
//   // Also make sure that your function will work for any number of prototype links.
//   isPrototypeOf(canine, myDog) // true
