console.log("Hello from index.js");
var name = "kazuki";
var age = 36;
var hobby = "breast";

function ayodele(userName, userAge, userHobby) {
  return (
    "name is " +
    userName +
    " and he is " +
    userAge +
    " and the hobby is " +
    userHobby
  );
}
console.log(ayodele(name, age, hobby));
