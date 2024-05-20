/*  
Welcome, new coder. 
Enter your code on line 7 to print 'Hello, World!' 
to the console (the panel on the right)
*/

console.log("Hello, World!");
console.log(5+7);
var cake = 7;
var bake = 9;
console.log(cake+bake);
var msg1 = "this is the first message";
var msg2 = "this is the second message";

console.log(msg1 + " " + msg2);
console.log('"It is not death a man should fear, but he should fear never beginning to live." -Marcus Aurelius')
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", function (answer) {
   console.log(`Hello, ${answer}`);
   rl.close();
 });

/*  
Next, PLAY! 
Modify your code on line 7 to try to accomplish the tasks listed below:

   1. Change the message that is printed.
   2. Figure out what the parentheses do. Will the code work without them?
   3. Remove one or both quotation marks. Do we need to include both opening and closing quote marks? Is there a difference between using a single or a double quote (' vs. ")?
   4. Remove the semi-colon, ;.
   5. Print a number. (Bonus: Print two numbers added together).
   6. Print multiple messages one after the other.
   7. Print two messages on the same line.
   8. Print a message that contains quote marks, such as Quoth the Raven "Nevermore".
   9. Other. You choose!
*/