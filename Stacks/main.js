import StringReverser from "./StringReverser.js";
import Expression from "./Expression.js";

let stringReverser = new StringReverser();
let reversed = stringReverser.reverse("abcd");

let expression = new Expression();
let balanced = expression.isBalanced("(([1] + <2>))");
console.log(balanced);