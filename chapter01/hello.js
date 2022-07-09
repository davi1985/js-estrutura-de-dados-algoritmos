console.log("Hello");

// variables
var myVar = "global";
myOtherVar = "global";

function myFunc() {
  var myVar = "local";

  return myVar;
}

function myOtherFunc() {
  myOtherVar = "local";

  return myOtherVar;
}

// objects
var myObj = { name: "John", age: 21 };
delete myObj.age;

// truthy or falsy

function testTruthy(val) {
  return val ? console.log("truthy", { val }) : console.log("falsy", { val });
}

testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false));
testTruthy("");
testTruthy(new String(""));
testTruthy(-1);

var obj = {
  name: "Davi",
};

testTruthy(obj.name);
