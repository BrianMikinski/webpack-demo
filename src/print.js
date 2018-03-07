export default function printMe() {
  console.log('I get called from print.js!');

  var test = "hello world a";
  var anotherTest = "Another test";
  var yep = "yep yep";
  var anotherTestering = "yep yep";
  var waitYep = "wait yep";

  console.log("waitYep or maybe more wait!!!! Yeaaaa!");
  console.log("Nope, not happening.");
  console.log("Yep, not happening.");
  console.log("But wait....could it happen?");
  console.log("not it won't");
}

if (module.hot) {
  module.hot.accept();
}