/*

What is Javascript?

HTML and CSS are markup languages. Markup languages are
used to describe and define elements within a document.
JavaScript is a programming language. Programming languages
are used to communicate instructions to a machine. Programming
languages can be used to control the behavior of a machine and
to express algorithms.

JavaScript often abbreviated as JS, is a
high-level, interpreted programming language. It is a language
which is also characterized as dynamic, weakly typed, prototype-based
and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the
three core technologies of the World Wide Web. JavaScript enables
interactive web pages and thus is an essential part of web applications.
The vast majority of websites use it, and all major web browsers
have a dedicated JavaScript engine to execute it. As a multi-paradigm language,
JavaScript supports event-driven, functional, and imperative
(including object-oriented and prototype-based) programming
(https://en.wikipedia.org/wiki/Prototype-based_programmingstyles).
It has an API for working with text, arrays, dates, regular expressions,
and basic manipulation of the DOM, but the language itself does not
include any I/O, such as networking, storage, or graphics facilities,
relying for these upon the host environment in which it is embedded.
Initially only implemented client-side in web browsers, JavaScript engines
are now embedded in many other types of host software, including server-side
in web servers and databases, and in non-web programs such as word processors
and PDF software, and in runtime environments that make JavaScript available
for writing mobile and desktop applications, including desktop widgets.
Although there are strong outward similarities between JavaScript and Java,
including language name, syntax, and respective standard libraries,
the two languages are distinct and differ greatly in design;
JavaScript was influenced by programming languages such as Self and Scheme.

In 1995, Netscape Communications recruited Brendan Eich with the goal of
embedding the Scheme programming language into its Netscape Navigator. Before
he could get started, Netscape Communications collaborated with Sun Microsystems
to include in Netscape Navigator, Sun's more static programming language Java,
in order to compete with Microsoft for user adoption of Web technologies and
platforms. Netscape Communications then decided that the scripting language
they wanted to create would complement Java and should have a similar syntax,
which excluded adopting other languages such as Perl, Python, TCL, or
Scheme. To defend the idea of JavaScript against competing proposals,
the company needed a prototype. Eich wrote one in 10 days, in May 1995.

Although it was developed under the name Mocha, the language was officially
called LiveScript when it first shipped in beta releases of Netscape Navigator
2.0 in September 1995, but it was renamed JavaScript when it was deployed in
the Netscape Navigator 2.0 beta 3 in December. The final choice of name
caused confusion, giving the impression that the language was a spin-off of the
Java programming language, and the choice has been characterized as a
marketing ploy by Netscape to give JavaScript the cachet of what was then
the hot new Web programming language.

*/

/*

To open Chrome DevTools, either right-click on any page element and select
Inspect or open the Chrome settings menu in the top-right corner of your
browser window and select More Tools > Developer Tools.
Alternatively, you can use the shortcuts:

Command + Option + i (Mac)
Ctrl + Shift + i (Windows/Linux)

*/

//console log

console.log("hiya friend!");

//console log - loop

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// js demo - styliong elements

document.getElementsByTagName("h1")[0].style.color = "#ff0000"

// js demo - styliong elements css


document.body.addEventListener('click', function () {
     var myParent = document.getElementById("Banner");
     var myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});

// I Love COB
const devHome = document.querySelector('.ui-rj-cob-landing-header-content-title');
const excitedText = document.createElement('span');
excitedText.textContent = 'I Love COB!!!';
devHome.appendChild(excitedText);


// Data type

//Numbers

// returns 3
3

// returns 5.1
3 + 2.1

// returns false

5 > 20

// returns true

5 < 10

//returns false

5 == 10

/*

Comparisons

Operator  Meaning

<         Less than
>         Greater than
<=        Less than or Equal to
>=        Greater than or Equal to
==        Equal to
!=        Not Equal to

*/

/*
 * Programming Quiz: First Expression
 *
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

// this expression equals 4, change it to equal 42

console.log((12*6)+12-42);


/*

It is correct to either use double " or single ' quotes with strings, as long
as you're consistent. The JavaScript Udacity style guide for labs and projects
suggests using single quotes to define string literals.

*/

// String Concatenation

// Returns: "helloworld'

"hello" + "world"

// Returns: "Hello, New York City"

"Hello," + " New York City"

// Returns: "Hello + 5*10"

"Hello + 5*10"

// Returns "Hello50"

"Hello" + 5*10

//Variables


"Hello"; // Here's a String "Hello"

// Here's a new String (also with the value "Hello")
// concatenated with " World"

"Hello" + " World";

// Returns: Hello World!

var greeting = "Hello";

greeting + " World!";


// Returns: Hello Mike!

var greeting = "Hello";

greeting + " Mike!";

// Returns: Hola World

greeting = "Hola";

greeting + " World!";

// Returns: Hola Mike!

greeting = "Hola";

greeting + " Mike!";

var totalAfterTax = 53.03; // uses camelCase if  variable name is multiple words
var tip = 8; // uses lowercase if the variable name is one word

/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
 *
 *     F = C x 1.8 + 32
 *
 * Log the fahrenheit variable to the console.
 *
*/

//version 1
var celsiusPrompt = prompt("Please enter celsius degrees for conversion", 0);

var  celsius = parseInt(celsiusPrompt);

var fahrenheit = celsius * 1.8 +32;
console.log(Math.round(fahrenheit) + " degrees");

//version 2
var celsius = parseInt(prompt("Please enter celsius degrees for conversion", 0));

var fahrenheit = celsius * 1.8 +32;

console.log(Math.round(fahrenheit) + " degrees");


// Indexing

/*

To access an individual character, you can use the character's location in the
string, called its index. Just put the index of the character inside square
brackets (starting with [0] as the first character) immediately after the
string.

*/

//Returns: "J"

"James"[0];

var name = "James";
name[0];

// Returns: "w"

var quote = "Stay awhile and listen!";
console.log(quote[6]);

// Escaping strings - using the backslash character ( \ )

// Returns: Uncaught SyntaxError: Unexpected identifier

"The man whispered, "please speak to me.""

/*

In JavaScript, you use the backslash to escape other characters.
Escaping a character tells JavaScript to ignore the character's special
meaning and just use the literal value of the character. This is helpful for
characters that have special meanings like in our previous example with
quotes "…".

Because quotes are used to signify the beginning and end of a string, you
can use the backslash character to escape the quotes in order to access the
literal quote character.

*/

// Returns: The man whispered, "please speak to me."

"The man whispered, \"please speak to me.\""

/*

Special characters
Quotes aren’t the only special characters that need to be escaped, there’s
actually quite a few. However, to keep it simple, here’s a list of some common
special characters in JavaScript.

Code   Character
\\	   \ (backslash)
\"	   '' (double quote)
\'	   ' (single quote)
\n	   newline
\t	   tab

The last two characters listed in the table, newline \n and tab \t,
are unique because they add additional whitespace to your Strings. A newline
character will add a line break and a tab character will advance your line to
the next tab stop.

*/

/*
Returns:
Up up
 down down
*/

"Up up\n\tdown down"

/*

Returns:

•	"The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\"
contains the names on the roster."

*/

"The file located at "C:\\Desktop\My Documents\Roster\names.txt" contains the names on the roster."

// Comparing Strings

/*

Another way to work with strings is by comparing them. You've seen the
comparison operators == and != when you compared numbers for equality. You
can also use them with strings! For example, let’s compare the string "Yes"
to "yes".

*/

// Returns; false

"Yes" == "yes"

// Case-sensitive

// Returns: true

'Y' != 'y'

/*
 * Programming Quiz: Favorite Food (2-3)
 */

console.log("Pizza");

/*
 * Programming Quiz: String Equality for All (2-4)
 * fix the right side of the expression so it evaluates to true.
 * "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"
*/

var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);

/*

 * Programming Quiz: All Tied Up (2-5)
 * Build a single string that resembles the following joke.

 * Why couldn't the shoes go out and play?
 * They were all "tied" up!

 * Your joke should take the format of a question and answer. The first
 * line should be a question and the second line should be an answer.

*/

var joke = "Why couldn't the shoes go out and play?\nThey were all \"tied\" up!"
console.log(joke);

/*

 * Programming Quiz: Yosa Buson (2-6)

 * Directions:

 * Build a string using concatenation by combining the lines from this
 * famous haiku poem by Yosa Buson.

 * Blowing from the west
 * Fallen leaves gather
 * In the east.
 * Each string should be printed on its own line.

 * Hint: You will need to use special characters to produce the
 * following output. For a refresher, feel free to review the previous
 * Escaping Strings lesson in this course.

*/

var haiku = "Blowing from the west"+"\nFallen leaves gather"+"\nIn the east."
console.log(haiku);

// Booleans

/*

Booleans only inlude these two values: true or false
Just think yes or no, on and off, true or false, ones and zeroes

*/

// Null, Undefined, and NaN

// null refers to the "value of nothing",

var x = null;

// while undefined refers to the "absence of value".

var x;
console.log(x);

/*

What is NaN?
NaN stands for "Not-A-Number" and it's often returned indicating an
error with number operations. For instance, if you wrote some code that
performed a math calculation, and the calculation failed to produce a
valid number, NaN might be returned.

*/

// calculating the square root of a negative number will return NaN
Math.sqrt(-10)

// trying to divide a string by 5 will return NaN
"hello"/5

// Returns: undefined
var signedIn;
console.log(signedIn);

/*

Equality

So far, you’ve seen how you can use == and != to compare numbers and strings
for equality. However, if you use == and != in situations where the data
you’re comparing is mixed, it can lead to some interesting results.

*/

// Returns: true
"1" == 1

// Returns: true
0 == false

/*

Implicit type coercion

JavaScript is known as a loosely typed language.

Basically, this means that when you’re writing JavaScript code, you do not need
to specify data types. Instead, when your code is interpreted by the JavaScript
engine it will automatically be converted into the "appropriate" data type.
This is called implicit type coercion and you’ve already seen examples like
this before when you tried to concatenate strings with numbers.

*/

// Returns: "julia1"
"julia" + 1

/*

DEFINITION: A strongly typed language is a programming language that is more
likely to generate errors if data does not closely match an expected type.
Because JavaScript is loosely typed, you don’t need to specify data types;
however, this can lead to errors that are hard to diagnose due to implicit
type coercion.

*/

/*

Example of strongly typed programming language code

int count = 1;
string name = "Julia";
double num = 1.2932;
float price = 2.99;

*/

// equivalent code in JavaScript
var count = 1;
var name = "Julia";
var num = 1.2932;
var price = 2.99;

// Returns: true
"1" == true

/*

When you use the == or != operators, JavaScript first converts each value to
the same type (if they’re not already the same type); this is why it's
called "type coercion"! This is often not the behavior you want, and it’s
actually considered bad practice to use the == and != operators when comparing
values for equality.

*/

/*

Strict equality

Instead, in JavaScript it’s better to use strict equality to see if numbers,
strings, or booleans, etc. are identical in type and value without doing the
type conversion first. To perform a strict comparison, simply add an additional
equals sign = to the end of the == and != operators.

*/

// Returns: false
"1" ==== 1

// Returns: false
0 === false

/*

The use of semicolons ; at the end of each line.

Semicolons make it clear where one statement ends and another begins. This is
especially handy when multiple lines of code are written on the same line
(which is valid JavaScript, but definitely not recommended!).

*/

// this is incorrect!
// Returns: Uncaught SyntaxError: Unexpected token var
var totalAfterTax = 53.03 var tip = 8

// this is correct!
var totalAfterTax = 53.03; var tip = 8;

/*

Not adding semicolons to the end of each line can cause bugs and errors in
your programs. JavaScript does have ways to occasionally predict where
semicolons should be, but just like how type coercion can result in some
unexpected quirky behavior in JavaScript, it's good practice to not depend
on it.

*/

/*

Define two variables called thingOne and thingTwo and assign them values.
Print the values of both variables in one console.log statement using
concatenation. For example,

red blue

where "red" is the value of thingOne and "blue" is the value of thingTwo.
Don't forget to use semicolons!

*/

var thingOne = "First";
var thingTwo = "Prize";
console.log(thingOne + " " + thingTwo);


/*

Directions:
Create a variable called fullName and assign it your full name as a string.

*/

var fullName = "Javier Soto";
console.log(fullName);

/*

Directions:

Create a variable called bill and assign it the result
of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself,
let JavaScript do it!).

Next, create a variable called tip and assign it t
he result of multiplying bill by a 15% tip rate.

Finally, add the bill and tip together and store it into a variable called total.

Print the total to the JavaScript console.

Hint: 15% in decimal form is written as 0.15_._

TIP: To print out the total with a dollar sign ( $ ) use string concatenation.
To round total up by two decimal points use the toFixed() method.
To use toFixed() pass it the number of decimal points you want to use.
For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

*/

/*
 * Programming Quiz: Out to Dinner (2-10)
*/

var bill = 10.25 + 3.99 + 7.15;
var tip = bill * .15;
var total = bill + tip;
console.log("$" + total.toFixed(2));

/*

Directions:

Mad Libs is a word game where players have fun substituting words for blanks
in a story. For this exercise, use the adjective variables below to fill in
the blanks and complete the following message.

"The Intro to JavaScript course is __________. James and
Julia are so __________. I cannot wait to work through the rest of
this __________ content!"

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";

Assign the resulting string to a variable called madLib.
*/

/*
 * Programming Quiz: MadLibs (2-11)
 *
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set
      the madLib variable to the message:
 *
 * 'The Intro to JavaScript course is amazing. James and Julia are
    so fun. I cannot wait to work through the rest of this entertaining content!'
*/

var adjective1 = prompt("Enter first adjective", "amazing");
var adjective2 = prompt("enter second adjective", "fun");
var adjective3 = prompt("Enter third adjective", "entertaining");

var madLib = 'The Intro to JavaScript course is ' + adjective1 +
'. James and Julia are so ' + adjective2 +
'. I cannot wait to work through the rest of this ' + adjective3 + ' content!';

console.log(madLib);

  /*

Directions:

Here are two awesome messages:

Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
Hi, my name is James. I love baseball. In my spare time, I like to read.

Declare and assign values to three variables for each part of the sentence
that changes (firstName, interest, and hobby).

Use your variables and string concatenation to create your own awesome message
and store it in an awesomeMessage variable. Finally, print your awesome message
to the JavaScript console.

*/

/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and, using string concatenation
      and the variables above, create an awesome message.
 * 3. Print the awesomeMessage variable to the console.
*/

/*
 * Notes:
 * - Using the above as an example, firstName would have been assigned to
 *   "Julia", interest to "cats", and hobby to "play video games".
 * - Be sure to include spaces and periods where necessary!
*/

/*
var firstName = 'Javier';
var interest = 'comic books';
var hobby = 'collect comic books';

var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest +
". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage)

*/

var firstName = prompt("Enter your first name","Julia");
var interest = prompt("Enter an interest you love","cats");
var hobby = prompt("Enter a favorite hobby you like to do", "play video games");
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest +
". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);

//Conditionals

  /*

We write code to solve problems

The steps the code takes to solve a problem is known as an algorithm

A flowchart is just a diagram for how to solve a problem

DEFINITION: A flowchart is a visual diagram that outlines the solution to
a problem through a series of logical statements. The order in which statements
are evaluated and executed is called the control flow.

*/

var price = parseInt(prompt("Enter the price of the hammer.", 25.00)); // price of hammer
var money = parseInt(prompt("Enter how much money you have to pay for the hammer.", 20.00)); // How much money I have

if(money >= price) {
  console.log("Buy the hammer!");
} else  {
  console.log("Don't buy the hammer!");
}

/*

If...else statements

If...else statements allow you to execute certain pieces of code based on
a condition, or set of conditions, being met.
]*/

if (this expression is true) {
     run this code
} else {
     run this code
}

/*

This is extremely helpful because it allows you to choose which piece of
code you want to run based on the result of an expression. For example,

*/


// Prints: "a is less than or equal to b"
var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}

/*

A couple of important things to notice about if...else statements.

The value inside the if statement is always converted to true or false.
Depending on the value, the code inside the if statement is run or the code
inside the else statement is run, but not both. The code inside the if and
else statements are surrounded by curly braces {...} to separate the conditions
and indicate which code should be run.

TIP: When coding, sometimes you may only want to use an if statement.
However, if you try to use only an else statement, then you will receive the
error SyntaxError: Unexpected token else. You’ll see this error because
else statements need an if statement in order to work. You can’t have an else
statement without first having an if statement.

*/

/*

In some situations, two conditionals aren’t enough. Consider the following
situation.

You're trying to decide what to wear tomorrow. If it is going to snow, then
you’ll want to wear a coat. If it's not going to snow and it's going to rain,
then you’ll want to wear a jacket. And if it's not going to snow or rain,
then you’ll just wear what you have on.

Else if statements

In JavaScript, you can represent this secondary check by using an extra if
statement called an else if statement.

*/


// Prints: Wear what you have on.
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

/*

By adding the extra else if statement, you're adding an extra conditional
statement.

If it’s not going to snow, then the code will jump to the else if statement
to see if it’s going to rain. If it’s not going to rain, then the code will
jump to the else statement.

The else statement essentially acts as the "default" condition in case all
the other if statements are false.

*/

// Prints: "You paid the exact amount, have a nice day!"
var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}


// Prints: "Kendyll received a silver medal"
var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");

/*


Directions:
Write an if...else statement that:

prints "even" if the number is an even number
prints "odd" if the number is an odd number
Hint: Use the % (modulo) operator to determine if a number is even or odd.
The modulo operater takes two numbers and returns the remainder when the first
number is divided by the second one:

*/

/*
Result:
0
2
*/
console.log(12 % 3);
console.log(10 % 4);


/*

In arithmetic, the division of two integers produces a quotient and a remainder.
In mathematics, the result of a modulo operation is the remainder of an
arithmetic division.

The modulus operator (%) returns the division remainder.

The answer for 12 % 3 is 0 because twelve divided by three has no remainder.
10 % 4 is 2 because ten divided by 4 has a remainder of two.

Make sure to test your code with different values. For example:

If number equals 1, then odd should be printed to the console.
If number equals 12, then even should be printed to the console.
Your Code:

*/

/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
*/

// change the value of `number` to test your if...else statement
var number = 4;

if (number%2 === 0) {
  console.log("even");
} else {
  console.log("odd");
};

/*

Musical groups have special names based on the number of people in the group.

For example, a "quartet" is a musical group with four musicians. Barbershop
quartets were a popular type of quartet in the early 1900s and featured four
singers made up of a lead, tenor, baritone, and bass.

Directions:

Write a series of conditional statements that:

Prints "not a group" if musicians is less than or equal to 0
Prints "solo" if musicians is equal to 1
Prints "duet" if musicians is equal to 2
Prints "trio" if musicians is equal to 3
Prints "quartet" if musicians is equal to 4
Prints "this is a large group" if musicians is greater than 4

TIP: Test your code with different values. For example,

If musicians equals 3, then "trio" should be printed to the console.

If musicians equals 20, then "this is a large group" should be printed to the
console.

If musicians equals -1, then "not a group" should be printed to the console.

Be sure to watch out for any extra or missing characters (including spaces
or punctuation marks) in your output string as well!

*/

/*
 * Programming Quiz: Musical Groups (3-3)
*/

// change the value of `musicians` to test your conditional statements
var musicians = parseInt(prompt("Enter the number of musicians",0));

// your code goes here

if (musicians <= 0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
} else if (musicians === 2) {
  console.log("duet");
} else if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else {
  console.log("this is a large group");
}

/*

Directions:

For this quiz, you're going to help solve a fictitious murder mystery that
happened here at Udacity! A murder mystery is a game typically played at
parties wherein one of the partygoers is secretly, and unknowingly, playing
a murderer, and the other attendees must determine who among them is the
criminal. It's a classic case of whodunnit.

Since this might be your first time playing a murder mystery, we've simplified
things quite a bit to make it easier. Here's what we know! In this murder
mystery there are:

four rooms: the ballroom, gallery, billiards room, and dining room,

four weapons: poison, a trophy, a pool stick, and a knife, and

four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.

We also know that each weapon corresponds to a particular room, so...

the poison belongs to the ballroom,

the trophy belongs to the gallery,

the pool stick belongs to the billiards room,

and the knife belongs to the dining room.

And we know that each suspect was located in a specific room at the time
of the murder ...

Mr. Parkes was located in the dining room.

Ms. Van Cleve was located in the gallery.

Mrs. Sparr was located in the billiards room.

Mr. Kalehoff was located in the ballroom.

To help solve this mystery, write a combination of conditional statements that:

sets the value of weapon based on the room, and

sets the value of solved to true if the value of room matches the suspect's
room

Afterwards, use this template to print a message to the console if the mystery
was solved:

__________ did it in the __________ with the __________!

What goes into the three blank spaces? You can fill in the blanks with the
name of the suspect, the room, and the weapon! For example, an output string
may look like:

Mr. Parkes did it in the dining room with the knife!

Be sure to watch out for any extra or missing characters (including spaces
and punctuation marks) in your output string as well!

TIP: Test your code with different values. For example,

If room equals gallery and suspect equals Ms. Van Cleve, then Ms. Van Cleve
did it in the gallery with the trophy! should be printed to the console.

*/

/*
 * Programming Quiz: Murder Mystery (3-4)
*/

// change the value of `room` and `suspect` to test your code

// change the value of `room` and `suspect` to test your code

var room = "ballroom";
var suspect = "Mr. Kalehoff";

var murderWeapon = "poison";
var solved

if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison";
    solved = true;
}
else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
}
else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
} else if (room === "dining room" && suspect === "Mr. Parkes"){
    weapon = "knife";
    solved = true;
} else
    (solved = false);

if (solved = true && murderWeapon === weapon) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else {
console.log("Not solved!");
}


/*

More complex problems
More complex logical expressions

In JS we can represent more complex problems by combining logical expressions
with special operators.

*/

// Logical expression used to represent weekend plans
// Prints: "go to the park"

var pedro = "not busy";
var weather = "nice";

if (pedro === "not busy" && weather === "nice") {
  console.log("go to the park");
}

/*

Notice the && in the code above.

The && symbol is the logical AND operator, and it is used to combine two
logical expressions into one larger logical expression. If both smaller
expressions are true, then the entire expression evaluates to true. If either
one of the smaller expressions is false, then the whole logical expression
is false.

Another way to think about it is when the && operator is placed between
the two statements, the code literally reads, "if Colt is not busy AND the
weather is nice, then go to the park".

Logical expressions

Logical expressions are similar to mathematical expressions, except
logical expressions evaluate to either true or false.

*/

// Returns: true
11 != 12;

/*

You’ve already seen logical expressions when you write comparisons.
A comparison is just a simple logical expression.

Similar to mathematical expressions that use +, -, *, / and %, there are
logical operators &&, || and ! that you can use to create more complex logical
expressions.

Logical operators

Logical operators can be used in conjunction with boolean values
(true and false) to create complex logical expressions.

By combining two boolean values together with a logical operator,
you create a logical expression that returns another boolean value.
Here’s a table describing the different logical operators:

Operator    Meaning	       Example              How it works

&&	        Logical AND	   value1 && value2	    Returns true if both value1
                                                and value2 evaluate to true.

||         	Logical OR	   value1 || value2	    Returns true if either value1
                                                or value2 (or even both!)
                                                evaluates to true.

!	          Logical NOT	   !value1              Returns the opposite of value1.
                                                If value1 is true, then !value1
                                                is false.

By using logical operators, you can create more complex conditionals
like the weekend example.

TIP: Logical expressions are evaluated from left to right. Similar to
mathematical expressions, logical expressions can also use parentheses to
signify parts of the expression that should be evaluated first.

*/

// Returns: false
!(4 === 4) && "STRing" === "STRing";
false && false;
!true;
(10 === "18") && ( 1<= 2);

// Returns: true
3 < -10 || "James" !== "james";
true || false;
(13 > -7) || (false == 0);
(3 != 6 % 3) && !(24 > 45) && (!false);

/*

Logical AND and OR

Truth tables

Before you advance any further in the lesson, here’s the truth tables for
logical AND ( && ) and logical OR ( || ).

&& (AND)
A	    B	    A && B
true	true	true
true	false	false
false	true	false
false	false	false

|| (OR)
A	    B	    A || B
true	true	true
true	false	true
false	true	true
false	false	false

Truth tables are used to represent the result of all the possible combinations
of inputs in a logical expression. A represents the boolean value on the
left-side of the expression and B represents the boolean value on the
right-side of the expression.

Truth tables can be helpful for visualizing the different outcomes from a
logical expression. However, do you notice anything peculiar about the truth
tables for logical AND and OR?

Short-circuiting

&& (AND)
A	    B	    A && B  Value of B Matters
true	true	true    Yes
true	false	false   Yes
false	true	false   No
false	false	false   No

|| (OR)
A	    B	    A || B  Value of B Matters
true	true	true    Yes
true	false	true    Yes
false	true	true    No
false	false	false   No

In some scenarios, the value of B in logical AND and OR doesn't matter.

In both tables, there are specific scenarios where regardless of the value
of B, the value of A is enough to satisfy the condition.

For example, if you look at A AND B, if A is false, then regardless of
the value B, the total expression will always evaluate to false because
both A and B must be true in order for the entire expression to be true.

This behavior is called short-circuiting because it describes the event
when later arguments in a logical expression are not considered because the
first argument already satisfies the condition.

*/

/*

Directions:

Write the code to represent checking your balance at the ATM.

Use the following variables in your solution:

balance - the account balance
isActive - if account is active
checkBalance - if you want to check balance

Hint: The variable balance could be a value less than, greater than, or equal
to 0. The variables isActive and checkBalance are booleans that can be set to
true or false.

TIP: To print out the account balance with decimal points (i.e. 325.00),
use the .toFixed() method and pass it the number of decimal points you want to
use. For example, balance.toFixed(2) returns 325.00.

TIP: Make sure to test your code with different values. For example,

If checkBalance equals true and isActive equals false, then Your account is no
longer active. should be printed to the console.


/*
 * Programming Quiz - Checking Your Balance (3-5)
*/

// change the values of `balance`, `checkBalance`, and `isActive` to test your
// code
var balance = 325.00;
var checkBalance = false;
var isActive = false;

if (!checkBalance) {
    console.log("Thank you. Have a nice day!");
} else if (isActive && balance > 0){
    console.log("Your balance is $"+balance.toFixed(2) +".");
} else if (!isActive) {
    console.log("Your account is no longer active.");
} else if (isActive && balance < 0) {
    console.log("Your balance is negative. Please contact bank.");
} else if (isActive && balance === 0) {
    console.log("Your account is empty.");
}

/*

Directions:

Ice cream is one of the most versatile desserts on the planet because it can
be done up so many different ways. Using logical operators, write a series of
complex logical expressions that prints only if the following conditions are
true:

if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
If the above conditions are true, then print out:

I'd like two scoops of __________ ice cream in a __________ with __________.
Fill in the blanks with the flavor of the ice cream, vessel, and toppings.
For example,

I'd like two scoops of vanilla ice cream in a cone with peanuts.

TIP: Make sure to test your code with different values. For example,

If flavor equals "chocolate", vessel equals "cone" and toppings equals
"sprinkles", then "I'd like two scoops of chocolate ice cream in a cone with
sprinkles." should be printed to the console.

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators.
 * It's okay if the output string doesn't match exactly.
*/

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";


if ((flavor === "vanilla" || flavor === "chocolate") &&
   (vessel === "cone" || vessel === "bowl")
   && (toppings === "sprinkles" || toppings === "peanuts")) {

console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");

}

/*

Finding the right size t-shirt can sometimes be a challenge. What size am I?
What's the difference between S (small), M (medium), and L (large)? I usually
wear L, but what if I need an XL (extra large)?

Thankfully, our friends at Teespring have got us covered because they've
created a sizing chart to make things a lot easier.

Size  Width Length  Sleeve
S	    18"   28"     8.13"
M     20"   29"     8.38"
L     22"   30"     8.63"
XL    24"   31"     8.88"
2XL   26"   33"     9.63"
3XL   28"   34"     10.13"

T-Shirt Sizing Chart (Source: Teespring.com)

Directions:

Use the sizing chart above, create a series of logical expressions that
prints the size of a t-shirt based on the measurements of shirtWidth,
shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

var shirtWidth = 23; // size L (large)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.71; // size L (large)
Then print L to the console.

Hint: You will need to compare a range of values when checking for shirtWidth,
shirtLength, and shirtSleeve. For example, if the shirt's width is at least
20", but no more than 22", then the t-shirt should be medium (M) — as long as
the other values for the shirt's length and sleeve measurements match up.

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of
acceptable values for a specific size, then print N/A to the console.
For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up
with one particular size.

TIP: Make sure to test your code with different values. For example,

If shirtWidth equals 19, shirtLength equals 28 and shirtSleeve equals 8.21,
then S should be printed to the console.

If shirtWidth equals 26, shirtLength equals 33 and shirtSleeve equals 9.63,
then 2XL should be printed to the console.

If shirtWidth equals 18, shirtLength equals 29 and shirtSleeve equals 8.47,
then N/A should be printed to the console.

*/

/*
 * Programming Quiz: What do I Wear? (3-7)
*/

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code

var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;


if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29)
&& (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    size = "S";
    console.log(size);
}
else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30)
&& (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    size = "M";
    console.log(size);
}
else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31)
&& (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    size = "L";
    console.log(size);
}
else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33)
&& (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    size = "XL";
    console.log(size);
}
else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34)
&& (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    size = "2XL";
    console.log(size);
}
else if ((shirtWidth >=  28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
    size = "3XL";
    console.log(size);
} else  {
console.log("N/A");
}

/*

Advanced Conditionals

Truthy and Falsy

As well as a type, each value also has an inherent boolean value, generally
known as either truthy or falsy. Some of the rules are a little bizarre so
understanding the concepts and effect on comparison helps when debugging
JavaScript applications.

Falsy values

A falsy value is a value that is considered false when encountered in a
Boolean context.

JavaScript uses Type Conversion to coerce any value to a Boolean in contexts
that require it, such as conditionals and loops.

Type conversion (or typecasting) means transfer of data from one data type
to another. Implicit conversion happens when the compiler automatically
assigns data types, but the source code can also explicitly require a
conversion to take place. For example, given the instruction 5+2.0, the
floating point 2.0 is implicitly typecasted into an integer, but given
the instruction Number("0x11"), the string "0x11" is explicitly typecasted
as the number 17.

A value is falsy if it converts to false when evaluated in a boolean context.
For example, an empty String "" is falsy because, "" evaluates to false.
You already know if...else statements, so let's use them to test the
truthy-ness of "".

*/

// Returns: "the value is falsy"
if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}

/*

Here’s the list of all of the falsy values:

the Boolean value false
the null type
the undefined type
the number 0
the empty string "" or ''
the odd value NaN (stands for "not a number", check out the NaN MDN article)

That's right, there are only six falsy values in all of JavaScript! Everything
else is truthy!!

Truthy values

n JavaScript, a truthy value is a value that is considered true when
encountered in a Boolean context. All values are truthy unless they are
defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN).

JavaScript uses type coercion in Boolean contexts.

A value is truthy if it converts to true when evaluated in a boolean context.
For example, the number 1 is truthy because, 1 evaluates to true. Let's use
an if...else statement again to test this out:

*/

// Returns: "the value is truthy"
if (1) {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}

/*
Here are some other examples of truthy values:

true
42
-5
"pizza"
"0"
"null"
"undefined"
{}
[]

Essentially, if it's not in the list of falsy values, then it's truthy!

*/

/*

Sometimes, you might find yourself with the following type of conditional.

*/

// Prints: "green"
var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);

/*

Ternary operator

The conditional (ternary) operator is  the only JavaScript operator that takes
three operands. This operator is frequently used as a shortcut for the
if statement.

In this example, the variable color is being assigned to either "green" or "red"
based on the value of isGoing. This code works, but it’s a rather lengthy way
for assigning a value to a variable. Thankfully, in JavaScript there’s
another way.

TIP: Using if(isGoing) is the same as using if(isGoing === true). Alternatively,
using if(!isGoing) is the same as using if(isGoing === false).

Ternary operator

The ternary operator provides you with a shortcut alternative for writing
lengthy if...else statements.

*/

conditional ? (if condition is true) : (if condition is false)

/*

To use the ternary operator, first provide a conditional statement on the
left-side of the ?. Then, between the ? and : write the code that would run
if the condition is true and on the right-hand side of the : write the code
that would run if the condition is false. For example, you can rewrite the
example code above as:

*/

// Prints: "green"
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

/*

This code not only replaces the conditional, but it also handles the variable
assignment for color.

If you breakdown the code, the condition isGoing is placed on the left side
of the ?. Then, the first expression, after the ?, is what will be run if the
condition is true and the second expression after the, :, is what will be run
if the condition is false.


Here's a comparison of using an if...else statement vs. using a ternary

*/


// Prints: It costs $40.00 to attend the concert. Pick up your tickets at
// the will call.
var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00")
+ " to attend the concert. Pick up your tickets at the "
+ (preorder ? "will call" : "gate") + ".");


/*

From the smallest of creatures to the largest of animals, inevitably every
living, breathing thing must ingest other organisms to survive. This means
that all animals will fall within one of the three consumer-based categories
based on the types of food that they eat.

Animals that eat only plants are called herbivores
Animals that eat only other animals are called carnivores
Animals that eat both plants and animals are called omnivores

Directions:

Write a series of ternary statements that sets the variable category equal to:

"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
undefined if an animal doesn't eat plants or animals

Use the eatsPlants and eatsAnimals variables to test your code.

TIP: Make sure to test your code with different values. For example,

If eatsPlants equals true and eatsAnimals equals false, then herbivore should
be printed to the console.

*/

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
*/

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants && !eatsAnimals ? "herbivore" :
   !eatsPlants && eatsAnimals ? "carnivore" :
   eatsPlants && eatsAnimals ? "omnivore" : undefined;

console.log(category);

// with prompt had to 'test' for true verus false
var eatsPlantsPrompt = prompt("Please enter 'true' if eats plants, else enter false.");
var eatsAnimalsPrompt = prompt("Please enter 'true' if eats animals, else enter false");

var eatsPlants = eatsPlantsPrompt === "true" ? true : false;
var eatsAnimals = eatsAnimalsPrompt === "true" ? true : false;

var category = eatsPlants && !eatsAnimals ? "herbivore" :
   !eatsPlants && eatsAnimals ? "carnivore" :
   eatsPlants && eatsAnimals ? "omnivore" : undefined;

console.log(category);

/*

Switch Statement

If you find yourself repeating else if statements in your code, where each
condition is based on the same value, then it might be time to use
a switch statement.

*/

if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
}


// with prompt had to use parseInt() method

var options = prompt("Please enter a number equal to 1 thru 6")
var option = parseInt(options);

if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
}

/*

A switch statement is an another way to chain multiple else if statements
that are based on the same value without using conditional statements.
Instead, you just switch which piece of code is executed based on a value.

*/

var option = parseInt(prompt("Please enter a number equal to 1 thru 6", 1));

switch (option) {
  case 1:
    console.log("You selected option 1.");
  case 2:
    console.log("You selected option 2.");
  case 3:
    console.log("You selected option 3.");
  case 4:
    console.log("You selected option 4.");
  case 5:
    console.log("You selected option 5.");
  case 6:
    console.log("You selected option 6.");
}

/*

Here, each else if statement (option === [value]) has been replaced with a
case clause (case: [value]) and those clauses have been wrapped inside the
switch statement.

When the switch statement first evaluates, it looks for the first case clause
whose expression evaluates to the same value as the result of the expression
passed to the switch statement. Then, it transfers control to that case clause,
executing the associated statements.

So, if you set option equal to 3...

var option = 3;

switch (option) {
  ...
}
Prints:

You selected option 3.
You selected option 4.
You selected option 5.
You selected option 6.

...then the switch statement prints out options 3, 4, 5, and 6.

But that’s not exactly like the original if...else code at the top?
So what’s missing?

Break statement

The break statement can be used to terminate a switch statement and transfer
control to the code following the terminated statement. By adding a break to
each case clause, you fix the issue of the switch statement falling-through to
other case clauses.

*/

//Prints: You selected option 3.
var option = parseInt(prompt("Please enter a number equal to 1 thru 6", 3));

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}


//Prints: There are 28 days in this month.
var month = parseInt(prompt("Enter number of month.", 2));

switch(month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
}

console.log("There are " + days + " days in this month.");

/*

In some situations, you might want to leverage the "falling-through"
behavior of switch statements to your advantage.

For example, when your code follows a hierarchical-type structure.

*/

// Prints: You’ll receive one copy of the NSFW (Not Safe for Work) Exploding
// Kittens card game and one copy of the Exploding Kittens card game.
var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

/*

In this example, based on the successful Exploding Kittens Kickstarter
campaign (a hilarious card game created by Elan Lee), each successive tier
builds on the next by adding more to the output. Without any break statements
in the code, after the switch statement jumps to the "nsfw deck", it continues
to fall-through until reaching the end of the switch statement.

Also, notice the default case.

*/

// Prints: You’ll receive one copy of the Exploding Kittens card game.

var tier = "none";
var output = "You’ll receive ";

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

/*

You can add a default case to a switch statement and it will be executed
when none of the values match the value of the switch expression.


By using the falling-through behavior of switch statements, you can represent
hierarchical-type scenarios like the Kickstarter backer program.

*/

// If winner is equal to 3
// Prints "You've won a smartwatch and tickets to the circus.""

var prize = "";
var winner = 3;

switch (winner) {
  case 1:
    prize += "a trip for two to the Bahamas and ";
  case 2:
    prize += "a four piece furniture set.";
    break;
  case 3:
    prize += "a smartwatch and ";
  default:
    prize += "tickets to the circus.";
}

console.log("You've won " + prize);

/*

In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how
average salary is directly related to the number of years spent in school.
In their findings, they found that people with:

* no high school diploma earned an average of $25,636/year,
* a high school diploma earned an average of $35,256/year,
* an Associate's degree earned an average of $41,496/year,
* a Bachelor's degree earned an average of $59,124/year,
* a Master's degree earned an average of $69,732/year,
* a Professional degree earned an average of $89,960/year,
* and a Doctoral degree earned an average of $84,396/year.

NOTE: Wondering what the average salary would be for a person with a Nanodegree
from Udacity? That's a hard question to answer, but that doesn't mean we
haven't tried to quantify the value of our Nanodegrees.

Read more about Nanodegrees from resident Udacity writer, Chris Watkins.

Directions:

Write a switch statement to set the average salary of a person based on
their type of completed education.

Afterwards, print the following to the console.

In 2015, a person with __________ earned an average of __________/year.

Fill in the blanks with the type of education and the expected average salary.
Make sure to use correct grammar in your printed statement, and watch out for
any extra or missing characters (including spaces and punctuation marks). For
help, refer to the findings above.

In 2015, a person with a Bachelor's degree earned an average of $59,124/year.

TIP: To print out the average salary with commas (i.e. 59,124), use the
toLocaleString() method and pass it the locale "en-US".
For example, salary.toLocaleString("en-US").

TIP: Make sure to test your code with different values. For example,

If education equals "an Associate's degree", then the string"In 2015,
a person with an Associate's degree earned an average of $41,496/year."
should be printed to the console.

Your Code:

/*

no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.

case "no high school diploma":  25636
case "a high school diploma": 35256
case "an Associate's degree": 41496
case "a Bachelor's degree": 59124
case "a Master's degree": 69732
case "a Professional degree": 89960
case "a Doctoral degree": 84396

*/


/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "an Associate's degree";

// set the value of this based on a person's education
var salary = "";

// your code goes here

switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "a high school diploma":
    salary = 35256;
    break;
  case "an Associate's degree":
    salary = 41496;
    break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    break;
  case "a Doctoral degree":
    salary = 84396;
    break;
}

console.log("In 2015, a person with " + education + " earned an average of $"
+ salary.toLocaleString("en-US") + "/year.");

/*

Intro to Loops

Want to execute block of code not once, but maybe a hundred times, or more.

*/


// repeating the same code over and over agaon is not the best option
var x = 1;
console.log (x + " mississippi!");

var x = x + 1;
console.log  (x + " mississippi!");

var x = x + 1;
console.log  (x + " mississippi!");

var x = x + 1;
console.log  (x + " mississippi!");

var x = x + 1;
console.log  (x + " mississippi!");

// there is a better way: loops
// while loop
var x = 1
while (x <= 10000) {
  console.log(x + " mississippi!");
  x = x + 1
}

/*

Parts of a While Loop

There are many different kinds of loops, but they all essentially do the same
thing: they repeat an action some number of times.

Three main pieces of information that any loop should have are:

When to start: The code that sets up the loop — defining the starting value
of a variable for instance.

When to stop: The logical condition to test whether the loop should continue.

How to get to the next item: The incrementing or decrementing step —
for example, x = x * 3 or x = x - 1

Here's a basic while loop example that includes all three parts.

*/

/*
Prints:
0
2
4
6
8
*/
var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}

/*

If a loop is missing any of these three things, then you might find yourself
in trouble. For instance, a missing stop condition can result in a loop that
never ends!

*/

// Don't run this code!
while (true) {
  console.log("true is never false, so I will never stop!");
}

/*
If you did try to run that code in the console, you probably crashed your
browser tab.

WARNING: You’re probably reading this because you didn't heed our warnings
about running that infinite loop in the console. If your browser tab has
crashed or has become frozen/unresponsive, there are a couple ways to fix this.
If you are using Firefox, the browser will popup a notification about your
script being unresponsive, and will give you the option to kill the script
(do that). If you're using Chrome, go to the taskbar and
select Window > Task Manager. You can end the process for the particular
tab you ran the script in through the task manager.
If you’re not using Firefox or Chrome, download Firefox or Chrome ;).
*/

/*

Here's an example where a loop is missing how to get to the next item; the
variable x is never incremented. x will remain 0 throughout the program, so
the loop will never end.

*/

// Don't run this code!

var x = 0;

while (x < 1) {
  console.log('Oops! x is never incremented from 0, so i will ALWAYS be less than 1');
}



// How many times will the while loop run? 8 times

var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}


// Here's a while loop that is supposed to print out the values of x from 0
// to 5, but there's a bug. What is missing?
// x never increments
// x is never assigned a start value

while (x < 6) {
  console.log('Printing out x = ' + x);
}

/*

"Fizzbuzz" is a famous interview question used in programming interviews.
It goes something like this:

Loop through the numbers 1 to 100
If the number is divisible by 3, print "Fizz"
If the number is divisible by 5, print "Buzz"
If the number is divisible by both 3 and 5, print "FizzBuzz"
If the number is not divisible by 3 or 5, print the number
TIP: A number x is divisible by a number y if the answer to x / y has a
remainder of 0. For example, 10 is divisible by 2 because 10 / 2 = 5 with no
remainder. You can check if a number is divisible by another number by checking if x % y === 0.

We're going to have you program your own version of FizzBuzz called "JuliaJames"
(yes, imaginative, right?) Keep in mind that in an interview, you would want
to write efficient code with very little duplication. We don't want you to
worry about that for this question. Just focus on practicing using loops.

Directions:

Write a while loop that:

Loop through the numbers 1 to 20
If the number is divisible by 3, print "Julia"
If the number is divisible by 5, print "James"
If the number is divisible by 3 and 5, print "JuliaJames"
If the number is not divisible by 3 or 5, print the number
Your Code:

/*
 * Programming Quiz: JuliaJames (4-1)
*/

//version 1 w/ else if

var x = parseInt(prompt("Enter Starting Number Equal to or less than 20.",1));

while (x <= 20) {
if (x%3 === 0 && x%5 === 0) {
    console.log("JuliaJames");
}
else if (x%3 === 0 && x%5 !== 0) {
    console.log("Julia");
}
else if (x%5 === 0 && x%3 !== 0) {
    console.log("James");
}
else {
    console.log(x);
}
  x = x + 1;
}


// version 2 w/ ternary

var x = parseInt(prompt("Enter Starting Number Equal to or less than 20.",1));

while (x <= 20) {
  var fizzBuzz = x%3 === 0 && x%5 === 0 ? "JuliaJames" :
  x%3 === 0 && x%5 !== 0 ? "Julia" :
  x%5 === 0 && x%3 !== 0 ? "James" : x;

  console.log(fizzBuzz);

  x = x + 1;

}

/*

Directions:

Write a loop that prints out the following song. Starting at 99, and
ending at 1 bottle.

99 bottles of juice on the wall! 99 bottles of juice! Take one down,
pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down,
pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down,
pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down,
pass it around... 0 bottles of juice on the wall!

Some Notes:

Note the pluralization of the word "bottle" when you go from 2 bottles
to 1 bottle.
Your text editor may try to autocorrect your ellipses (...) to the
ellipses character (…). Do not use the ellipses character for this quiz;
use three consecutive periods instead.



/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */


// version 1 w/ else if
 var num = 99;

 while (num >= 1) {

 if (num === 1) {
 console.log(num + " bottle of juice on the wall! "
 + num +
 " bottle of juice! Take one down, pass it around... "
 + (num - 1) + " bottles of juice on the wall!");
 }


 else if (num === 2) {
 console.log(num + " bottles of juice on the wall! "
 + num +
 " bottles of juice! Take one down, pass it around... "
 + (num - 1) + " bottle of juice on the wall!");
 }


 else {
 console.log(num + " bottles of juice on the wall! "
 + num +
 " bottles of juice! Take one down, pass it around... "
 + (num - 1) + " bottles of juice on the wall!");
 }
 num = num - 1;
 }

// cleaner version 2 w/ else if

var num = 100;

while (num > 1) {
   num = num - 1;
   if (num === 1) {
       var word1 = "bottle"; var word2 = "bottles";
   } else if (num === 2) {
       var word1 =  "bottles"; word2 = "bottle"
   } else {
       var word1 = "bottles"; word2 = "bottles"
   } console.log(num + " " + word1 +  " of juice on the wall! " + num + " " + word1
   + " of juice! Take one down, pass it around... " + (num-1) + " " + word2 + " of juice on the wall!");
}


/*

NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
NOTE: "T-50 seconds" read as "T-minus 50 seconds".

Directions:
Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.

Your Code:
Your output should look like the following:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!

*/

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
*/


/*
Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
*/

/*
T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
*/

var t = 60;

while (t >= 0) {

if (t === 50) {
    console.log("Orbiter transfers from ground to internal power");
}
else if (t === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
}
else if (t === 16) {
    console.log("Activate launch pad sound suppression system");
}
else if (t === 10) {
    console.log("Activate main engine hydrogen burnoff system");
}
else if (t === 6) {
        console.log("Main engine start");
}
else if (t === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
}
else {
    console.log("T-" + t + " seconds");
}
t = t - 1;
}

/*

For Loops

Gives you more control over the loop process than while Loops

Most common loop in JS

Parts of a For Loop

The for loop explicitly forces you to define the start point, stop point, and
each step of the loop (all that upfront in the for statement). In fact,
you'll get an Uncaught SyntaxError: Unexpected token ) if you leave out any
of the three required pieces.

*/

for ( start; stop; step ) {
  // do this thing
}

/*

Here's an example of a for loop that prints out the values from 0 to 5.
Notice the semicolons separating the different statements of the for
loop: var i = 0; i < 6; i = i + 1

Prints:
Printing out i = 0
Printing out i = 1
Printing out i = 2
Printing out i = 3
Printing out i = 4
Printing out i = 5

*/
for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}

/*

above for loop step-by-step debugging table:

i     i < 6     console.log()
0     true      Printing out i  = 0
1     true      Printing out i  = 1
2     true      Printing out i  = 2
3     true      Printing out i  = 3
4     true      Printing out i  = 4
5     true      Printing out i  = 5
6     false

*/

/*

Nested Loops

Did you know you can also nest loops inside of each other? Paste this
nested loop in your browser and take a look at what it prints out:

*/

// nested loops
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}

/*

Prints:
0, 0
0, 1
0, 2
1, 0
1, 1
1, 2
2, 0
2, 1
2, 2
3, 0
3, 1
3, 2
4, 0
4, 1
4, 2

Notice the order that the output is being displayed.

For each value of x in the outer loop, the inner for loop executes completely.
The outer loop starts with x = 0, and then the inner loop completes it's cycle
with all values of y:


x = 0 and y = 0, 1, 2 // corresponds to (0, 0), (0, 1), and (0, 2)

Once the inner loop is done iterating over y, then the outer loop continues
to the next value, x = 1, and the whole process begins again.

x = 0 and y = 0, 1, 2 // (0, 0) (0, 1) and (0, 2)
x = 1 and y = 0, 1, 2 // (1, 0) (1, 1) and (1, 2)
x = 2 and y = 0, 1, 2 // (2, 0) (2, 1) and (2, 2)
etc.
NOTE: Nested loops can be tricky at first. We will revisit them
again in Lesson 6: Arrays.

*/

// nested loops
for (var x = 0; x < 3; x = x + 1) {
  for (var y = 0; y < 2; y = y + 1) {
    console.log(x + "," + y);
  }
}

/*

above for loop step-by-step debugging table:

x     x < 3   y   y < 2   console.log()
0     true    0   true    0, 0
0     true    1   true    0, 1
0     true    2   false
1     true    0   true    1, 0
1     true    1   true    1, 1
1     true    2   false
2     true    0   true    2, 0
2     true    1   true    2, 1
2     true    2   false
3     false

*/

// Prints: 0 2 4 6

for (var i = 0; i <= 6; i = i + 2) {
  console.log(i);
}

/*

Increment and Decrement

With loops often need to increase or decrease variable value to step thru loop


*/

// Here is a summary of the increment/decrement operators you've learned so far:
x++ or ++x // same as x = x + 1
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5

/*

Directions:
R
ewrite the following while loop as a for loop:

*/

var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}


/*
 * Programming Quiz: Changing the Loop (4-4)
*/

// rewrite the while loop as a for loop


for (var x = 9; x >= 1; x--) {
  console.log("hello " + x);
}

/*

Directions:

Here is a for loop that's supposed to print the numbers 5 through 9.
Fix the error!

*/

for (x < 10; x++) {
  console.log(x);
}

/*
 * Programming Quiz: Fix the Error 1 (4-5)
*/

// fix the for loop
for (var x = 5; x <= 9; x++) {
    console.log(x);
}

/*

Directions:
The for loop below has an error. Fix it!

*/

for (var k = 0 k < 200 k++) {
  console.log(k);
}

/*
 * Programming Quiz: Fix the Error 2 (4-6)
*/

// fix the for loop
for (var k = 0; k < 200; k++) {
    console.log(k);
}

/*

Directions:

Write a for (note: not a function) loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6 3!=3∗2∗1=6
4! = 4 * 3 * 2 * 1 = 24 4!=4∗3∗2∗1=24
5! = 5 * 4 * 3 * 2 * 1 = 120 5!=5∗4∗3∗2∗1=120

Save your final answer in a variable called solution and print it to the console.

*/

/*
 * Programming Quiz: Factorials (4-7)
*/

// version 1

solution = 1;
for (x = 12; x > 0; --x){
    solution*= x;
}
console.log(solution);

// version 2
solution = 1;
for (x = 1; x <= 12; ++x){
    solution *= x;
}
console.log(solution);

// version 3
let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);

/*

Quiz: Find my Seat (4-8)
Directions:

Theater seats often display a row and seat number to help theatergoers find
their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each
row, write a nested for loop to print out all of the different seat
combinations in the theater.

Example output for row-seat information: output each row and seat number on a
separate line

0-0
0-1
0-2
...
25-97
25-98
25-99

*/

/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
*/


// version 1
for (var x = 0; x <= 25; x = x + 1) {
  for (var y = 0; y <= 99; y = y + 1) {
    console.log(x + "-" + y);
  }
}

// version 2
for (var x = 0; x <= 25; x++) {
  for (var y = 0; y <= 99; y++) {
    console.log(x + "-" + y);
  }
}

/*

Intro to Fucntions

For code that repeats the same number of steps,
instead of repeating the same steps multiple times,
package those processes into reusable chunks of
code called functions.

It is the ability to generalize code for a variety
of possible inputs.

*/

// function that reverses a string

function reverseString(reverseMe) {
  var reversed = "";
  for (var i = reverseMe.length - 1; i >=0; i--) {
    reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("Julia"));

/*

How to declare a function

Functions allow you to package up lines of code that you can use (and often
reuse) in your programs.

Sometimes they take parameters like the pizza button from the beginning of
this lesson. reheatPizza() had one parameter: the number of slices.

*/

function reheatPizza(numSlices) {
  // code that figures out reheat settings!
}

/*

The reverseString() function that you saw also had one parameter:
the string to be reversed.

*/

function reverseString(reverseMe) {
  // code to reverse a string!
}

/*

In both cases, the parameter is listed as a variable after the function name,
inside the parentheses. And, if there were multiple parameters, you would just
separate them with commas.

*/

function doubleGreeting(name, otherName) {
  // code to greet two people!
}

/*

But, you can also have functions that don't have any parameters. Instead, they
just package up some code and perform some task. In this case, you would just
leave the parentheses empty. Take this one for example. Here's a simple function
that just prints out "Hello!".

*/

// accepts no parameters! parentheses are empty
function sayHello() {
  var message = "Hello!"
  console.log(message);
}

/*

If you tried pasting any of the functions above into the JavaScript console,
you probably didn't notice much happen. In fact, you probably saw undefined
returned back to you. undefined is the default return value on the console when
nothing is explicitly returned using the special return keyword.

Return statements

In the sayHello() function above, a value is printed to the console with
console.log, but not explicitly returned with a return statement.
You can write a return statement by using the return keyword followed by the
expression or value that you want to return.

*/

// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

/*

How to run a function

Now, to get your function to do something, you have to invoke or call the
function using the function name, followed by parentheses with any arguments
that are passed into it. Functions are like machines. You can build the machine,
but it won't do anything unless you also turn it on. Here's how you would call
the sayHello() function from before, and then use the return value to print to
the console:

*/

// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

// function returns "Hello!" and console.log prints the return value
// Prints: "Hello!"
console.log(sayHello());

/*

Parameters vs. Arguments

At first, it can be a bit tricky to know when something is either a parameter
or an argument. The key difference is in where they show up in the code.
A parameter is always going to be a variable name and appears in the function
declaration. On the other hand, an argument is always going to be a
value (i.e. any of the JavaScript data types - a number, a string, a boolean,
etc.) and will always appear in the code when the function is called or
invoked.

Try declaring and calling some functions on your own:

*/

// Use the following function to answer this question.
// What value will be stored in the variable avg?
// 7

function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);







// Are x and y parameters or arguments for this function?
// Parameters
function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);

/*

Function Recap
What you've learned so far:

Functions package up code so you can easily use (and reuse) a block of code.

Parameters are variables that are used to store the data that's passed into a
function for the function to use.

Arguments are the actual data that's passed
into a function when it is invoked:

*/

// x and y are parameters in this function declaration
function add(x, y) {
  // function body
  var sum = x + y;
  return sum; // return statement
}

// 1 and 2 are passed into the function as arguments
var sum = add(1, 2);
The function body is enclosed inside curly brackets:

function add(x, y) {
  // function body!
}

// Return statements explicitly make your function return a value:
return sum;

//You invoke or call a function to have it do something:
add(1, 2);
Returns: 3

/*
Directions:
Declare a function called laugh() that returns "hahahahahahahahahaha!".
Print the value returned from the laugh() function to the console.
*/

/*
 * Programming Quiz: Laugh it Off 1 (5-1)
*/

// declares the laugh function
function laugh() {
  var laugh = "hahahahahahahahahaha!"
  return laugh; // returns value instead of printing it
}

// function returns "hahahahahahahahahaha!" and console.log prints the return value
console.log(laugh());

/*

Directions:
Write a function called laugh() that takes one parameter, num that represents
the number of "ha"s to return.

TIP: You might need a loop to solve this!

Here's an example of the output and how to call the function that you will write:

*/
// Prints: "hahaha!"
console.log(laugh(3));

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
*/

function laugh(num) {
    var Ha = "";
    for (var i = 1; i <= num; i++) {
        Ha += "ha";
}
return Ha + "!";
}
console.log(laugh(3));

/*

Return values

A function is always going to return some value back to the caller.  If a
return value is not specified, then the function will just return back unefined.

console.log() is not the same thing as a retuen statement.

console.log() - use to print a value to the JS console
return - use to stop execution of a fucntion and return a value back to the caller

*/

// prime integer function

function isPrime(integer) {
  for(var x = 2; x < integer; x++) {
    if(integer % x === 0) {
      console.log(integer + " is divisible by " + x);
      return false;
      }
    }
    return true;
  }

/*

It’s important to understand that return and print are not the same thing.
Printing a value to the JavaScript console only displays a value (that you can
  view for debugging purposes), but the value it displays can't really be used
  for anything more than that. For this reason, you should remember to only use
  console.log to test your code in the JavaScript console.

Paste the following function declaration and function invocation into the
JavaScript console to see the difference between logging (printing)
and returning:

*/

// Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
// Returns: "Returning: I am returning this string!"
function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);


// If you don't explicitly define a return value, the function will
// return undefined by default.
// Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
// Returns: undefined

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
}
isThisWorking(3);


// What does this function "return"?
// "zzz"

function sleep() {
  console.log("I'm sleepy!");
  return "zzz";
  return "snore";
}

sleep();


// What number will be "printed" (to the JavaScript console)?
// 21


function square(x) {
  return x * x;
}

function subtractFour(x) {
  return square(x) - 4;
}

console.log(subtractFour(5));


// What do you think will happen with the following code?
// 1 will be returned

function test() {
  return 1;
  return 2;
}

test();

/*

Using Return Values
Returning a value from a function is great, but what's the use of a return value
if you're not going to use the value to do something?

A function's return value can be stored in a variable or reused throughout
your program as a function argument. Here, we have a function that adds two
numbers together, and another function that divides a number by 2. We can find
the average of 5 and 7 by using the add() function to add a pair of numbers
together, and then by passing the sum of the two numbers add(5, 7) into the
function divideByTwo() as an argument.

And finally, we can even store the final answer in a variable called average
and use the variable to perform even more calculations in more places!

*/

// returns the sum of two numbers
function add(x, y) {
  return x + y;
}


// returns the value of a number divided by 2
function divideByTwo(num) {
  return num / 2;
}


var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable

// Try predicting what will be printed in the console.log statement below.
// Then, check your prediction by pasting the code into the JavaScript console.
// Functions can be tricky, so try figuring it out before running the code!
// 4

function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));

/*

Scope

Apart from regular syntax errors, scope will be at the heart of many coding bugs.

Scope refers to the part of the program where a particular identifier, such as
variable or a fucntion name, is visible or accessible.  Analogy, asking where to
find a book in a library (in scope). Analogy, asking where to find a book outside
a library (outside the scope)

In JS you have two different kinds of scope, global scope and function scope.

global scope - identifiers can be accessed everywhere within your program. All
fucntions in the program can access variables defined in global scope

function scope - dentifiers can be accessed everywhere insiode the function it
was defined in (even inside other functions inside that function).

*/

/*
var james defined in global scope
var librarian defined in function scope (visible in both the library
and classicLit functions)
var book defined in function scope (but visibke only in classicLit function)
js starts at the current function it works it's way up all the outer functions
and global scope

*/
var james = 'I am looking for this book ...'
function library() {
  var librarian = "Oh, you will want to look in the classic lit section, follow me";
  function classicLit() {
    var book = 'Great Expectations';
  }
}


// Which of these variables a, b, c, or d, is defined in the global scope?
//  a

var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();


// Where can you print out the value of variable c without resulting in an error?
// anywhere inside function y()
// anywhere inside function z()


var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();

/*

Shadowing

Scope overriding or shadowing

*/

// functiion with Shadowing
var bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
  bookTitle = "The Little Prince";
  console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle);


// functiion without Swadowing
var bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
  var bookTitle = "The Little Prince"; // relative at this function scope
  console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle);


// Without pasting into your console, what do you think this code will print out?
// 4

var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);


// Without pasting into your console, what do you think this code will print out?
// 2

var x = 1;

function addTwo() {
  var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);

/*

Using global variables
So you might be wondering:

"Why wouldn't I always use global variables? Then, I would never need to use
function arguments since ALL my functions would have access to EVERYTHING!"

Well... Global variables might seem like a convenient idea at first, especially
when you're writing small scripts and programs, but there are many reasons why
you shouldn't use them unless you have to. For instance, global variables can
conflict with other global variables of the same name. Once your programs get
larger and larger, it'll get harder and harder to keep track and prevent this
from happening.

There are also other reasons you'll learn more about in more advanced courses.
But for now, just work on minimizing the use of global variables as much as
possible.

*/

/*

Scope Recap
What you've learned so far:

If an identifier is declared in global scope, it's available everywhere.

If an identifier is declared in function scope, it's available in the function
it was declared in (even in functions declared inside the function).

When trying to access an identifier, the JavaScript Engine will first look in
the current function. If it doesn't find anything, it will continue to the
next outer function to see if it can find the identifier there. It will keep
doing this until it reaches the global scope.

Global identifiers are a bad idea. They can lead to bad variable names,
conflicting variable names, and messy code.

*/

/*

Hoisting
Sometimes your JavaScript code will produce errors that may seem
counterintuitive at first. Hoisting is another one of those topics that might
be the cause of some of these tricky errors you're debugging.

Let's take a look at an example:

*/



/*

In most programming languages you have to declare a function before you can
call it. Code is typically read from top to bottom so there should be no way
you'll be able to call the findAverage function if not decalred yet.

However, one quirky feature in JS is called Hoisting.

hoisting - before any JS is executed all function declarations are
"hoisted" to the top of their current scope. hoisting also happens with
variable declarations.

*/

// function findAverage is hoisted
findAverage(5, 9)

function findAverage (x, y) {
  var answer = (x +y) / 2;
  return answer;
}

// Uncaught ReferencedError: greeting is not Undefined
// variable greeting not defined or declared

function sayGreeting() {
  console.log(greeting);
}

sayGreeting();


// variable greeting declared, but not defined
// variable greeting hoisted

function sayGreeting() {
  console.log(greeting);
  var greeting;
}

sayGreeting();


// variable greeting declared and defined
// variable greeting hoisted but undefined (bug because of hoisting)

function sayGreeting() {
  console.log(greeting);
  var greeting = "hello";
}

sayGreeting();


// to avoid "hoisting bug" declare functions at top of scripts, and
// variables at top of their functions

function sayGreeting() {
  var greeting = "hello";
  console.log(greeting);
}

sayGreeting();



// What value will be printed to the console?
// undefined Julia

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}


// What value will be printed to the console?
// undefined Julia

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}


// What value will be printed to the console?
// Hello Julia

function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia");


/*

Hoisting Recap

What you've learned so far:

JavaScript hoists function declarations and variable declarations to the
top of the current scope.

Variable assignments are not hoisted.

Declare functions and variables at the top of your scripts, so the syntax and
behavior are consistent with each other.

*/

/*
 * Programming Quiz: Build A Triangle (5-3)
*/

// creates a line of * for a given length

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}


// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(num) {
    var triangle = "";
    for (var k = 1; k <= num; k++) {
        triangle += makeLine(k);
    }
    return triangle;
}

// test your code by uncommenting the following line
num = parseInt(prompt("Enter bottom line length",10));
console.log(buildTriangle(num));


/*

Function Expressions

Once you know how to declare a function, a whole new set of possibilities
will open up to you.

For instance, remember how you can store anything you want in a variable?
Well, in JavaScript, you can also store functions in variables.
When a function is stored inside a variable it's called a function expression.

*/

var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};



// Notice how the function keyword no longer has a name.
var catSays = function(max) {
  // code here
};

/*
It's an anonymous function, a function with no name, and you've stored it in a
variable called catSays.

And, if you try accessing the value of the variable catSays, you'll even see
the function returned back to you.

*/

catSays;

// Returns:
function(max) {
  var catMessage = ""
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
}

/*

Function expressions and hoisting

You now have two ways to define a function in JS: Function Declaration and
Function Expression.

Deciding when to use a function expression and when to use a function
declaration can depend on a few things, and you will see some ways to use
them in the next section. But, one thing you'll want to be careful of, is
hoisting.

All function declarations are hoisted and loaded before the script is actually
run. Function expressions are not hoisted, since they involve variable
assignment, and only variable declarations are hoisted. The function expression
will not be loaded until the interpreter reaches it in the script.

*/


// with hoisting error
function cat() {
  console.log(meow(2));
  var meow = function(max) {
    var catMessage = "";
    for (var i= 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  }
  function purr() {
    return "purrrr!";
  }
}
cat();


// shows hoisting error

function cat() {
  function purr() {
    return "purrrr!";
  }
  console.log(meow(2));
  var meow = function(max) {
    var catMessage = "";
    for (var i= 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  }
}
cat();

// wothout hoisting error
function cat() {
  console.log(purr());
  var meow = function(max) {
    var catMessage = "";
    for (var i= 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  }
  function purr() {
    return "purrrr!";
  }
}
cat();

// shows hoisting
function cat() {
  function purr() {
    return "purrrr!";
  }
  console.log(purr());
  var meow = function(max) {
    var catMessage = "";
    for (var i= 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  }
}
cat();

/*

Patterns with Function Expressions

Functions as parameters

Being able to store a function in a variable makes it really simple to pass
the function into another function. A function that is passed into another
function is called a callback. Let's say you had a helloCat() function, and
you wanted it to return "Hello" followed by a string of "meows" like you had
with catSays. Well, rather than redoing all of your hard work, you can make
helloCat() accept a callback function, and pass in catSays.

*/

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);


// var with anonymous function expression
var favoriteMovie = function() {
  return "The FOuntain";
}

favoriteMovie(); //returns "The Fountain"


// var with name function expression
// note call using the variabke name, not function's name, to call it
var favoriteMovie = function movie() {
  return "The FOuntain";
}

favoriteMovie(); //returns "The Fountain"


/*

var favoriteMovie = function(0)

Named function expressions

Inline function expressions:

A function expression is when a function is assigned to a variable. And, in
JavaScript, this can also happen when you pass a function inline as an argument
to another function. Take the favoriteMovie example for instance:

*/

// Function expression that assigns the function displayFavorite
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");


// Returns: My favorite movie is Finding Nemo

// But you could have bypassed the first assignment of the function,
// by passing the function to the movies() function inline.

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

// Returns: My favorite movie is Finding Nemo

/*

This type of syntax, writing function expressions that pass a function into
another function inline, is really common in JavaScript. It can be a little
tricky at first, but be patient, keep practicing, and you'll start to get
the hang of it!

Why use anonymous inline function expressions?

Using an anonymous inline function expression might seem like a very not-useful
thing at first. Why define a function that can only be used once and you can't
even call it by name?

Anonymous inline function expressions are often used with function callbacks
that are probably not going to be reused elsewhere. Yes, you could store the
function in a variable, give it a name, and pass it in like you saw in the
examples above. However, when you know the function is not going to be reused,
it could save you many lines of code to just define it inline.

*/

/*

Function Expression Recap

What you've learned so far:

Function Expression: When a function is assigned to a variable. The function
can be named, or anonymous. Use the variable name to call a function defined
in a function expression.

*/

// anonymous function expression
var doSomething = function(y) {
  return y + 1;
};
// named function expression
var doSomething = function addOne(y) {
  return y + 1;
};
// for either of the definitions above, call the function like this:
doSomething(5); // Returns: 6

/*

You can even pass a function into another function inline. This pattern is
commonly used in JavaScript, and can be helpful streamlining your code.

*/

// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

/*

Directions:

Write an anonymous function expression that stores a function in a variable
called "laugh" and outputs the number of "ha"s that you pass in as an argument.

*/

//Returns: hahaha!
laugh(3);

/*
 * Programming Quiz: Laugh (5-4)
*/

var laugh = function(max) {
  var laughs = "";
  for (var i = 0; i < max; i++) {
    laughs += "ha";
  }
  return laughs;
};

laugh(3)

/*

Directions:
Write a named function expression that stores the function in a variable
called cry and returns "boohoo!". Don't forget to call the function using
the variable name, not the function name:

*/


// Returns: boohoo!
cry();

/*
 * Programming Quiz: Cry (5-5)
*/

// your code goes here

var cry = function booHoo() {
  return "boohoo!";
}

cry(); //returns "boohoo!""

/*

Directions:
Call the emotions() function so that it prints the output you see below, but
instead of passing the laugh() function as an argument, pass an inline function
expression instead.

*/

// Prints: "I am happy, haha!"
emotions("happy", laugh(2)); // you can use your previous laugh function



// example

function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code


function emotions(myString, laugh) {
    console.log("I am " + myString + ", " + laugh(2));
}
// your code goes here
// call the emotions function here and pass in an
// inline function expression


emotions("happy", function laugh(max) {
  var laughs = "";
  for (var i = 0; i < max; i++) {
    laughs += "ha";
  }
  return laughs + "!";
}
)

/*

Intro to Arrays

Want to work with a lot of data all at once.

Way to store it all in pne place or in one variable (i.e. a 'list').

Use a data structure called an array.

Arrays are a data structure that can hold multiple values.

Arrays are a special kind of object.
*/


/*

Arrays

Can use multiple variable names, but leads to bad variabke names and a mess
Not best solution for working with a lot of data all at once.

Use a data structure called 'Array' instead.  It is a data structure that you
can use to store multiple values and arrays are also organized. They are ordered.
Think of them as a numbered list.  Each item in the list has a number; and we
can use that number to refer back to the listed item when we need it.  Arrays
always start with 0 instead of 1.

*/

// sample array
var donuts = [
  "glazed",
  "chocolate frosted",
  "cinnamon",
  "sprinkled",
  "powdered",
  "cinnamon sugar",
  "glazed cruller",
  "chocolate cruller",
  "cookies",
  "Boston creme",
  "powdered jelly filled",
  "creme de leche",
  "glazed donut holes",
  "blueberry donut holes",
  "cake donut holes",
  "chocolate donut holes"
]

/*

Creating an Array

Arrays

An array is useful because it stores multiple values into a single, organized
data structure. You can define a new array by listing values separated with
commas between square brackets [].

*/

// creates a `donuts` array with three strings
var donuts = ["glazed", "powdered", "jelly"];


// But strings aren’t the only type of data you can store in an array.
// You can also store numbers, booleans… and really anything!

// creates a `mixedData` array with mixed data types
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];

//You can even store an array in an array to create a nested array!

// creates a `arraysInArrays` array with three arrays
var arraysInArrays = [[1, 2, 3], ["Julia", "James"], [true, false, true, false]];

// Nested arrays can be particularly hard to read, so it's common to write them
// on one line, using a newline after each comma:

var arraysInArrays = [
  [1, 2, 3],
  ["Julia", "James"],
  [true, false, true, false]
];

// Later in this lesson, we’ll look into some unique situations where
// nested arrays can be useful.

// Sample arrays

[33, 91, 13, 9, 23]

[null, "", undefined, []]

[3.14, "pi", 3, 1, 4, "Yum, I like pie!"]


/*

Accessing Array Elements

Each item listed in array is called an element. The word element signifies the
individual pieces of data in an array.

The index references the location, or position, of an element in an array. The
name that use to refer to an element's location is its index. Like strings, each
element in the array is numbered starting from zero.  We use these numnbers as
our indices to access whatever value we want in the array.

*/

// sample array and indices
var donuts = [
  "glazed",
  "chocolate frosted",
  "cinnamon",
  "sprinkled",
  "powdered",
  "cinnamon sugar",
  "glazed cruller",
  "chocolate cruller",
  "cookies",
  "Boston creme",
  "powdered jelly filled",
  "creme de leche",
  "glazed donut holes",
  "blueberry donut holes",
  "cake donut holes",
  "chocolate donut holes"
]

console.log(donuts[10])

/*

Indexing

Remember that elements in an array are indexed starting at the position 0.
To access an element in an array, use the name of the array immediately
followed by square brackets containing the index of the value you want
to access.

*/

// Prints: "glazed"
var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array


// One thing to be aware of is if you try to access an element at an index that
// does not exist, a value of undefined will be returned back.

// Prints: undefined
console.log(donuts[3]); // the fourth element in `donuts` array does not exist!

// Avoid accessing elements outside the bounds of an array. If you try to,
// the missing element will be returned back as undefined !

// What line of code would you use to select the "coconut" donut from the donuts array?
// donuts[6]

var donuts = [
  "glazed", "chocolate frosted", "Boston cream",
  "powdered", "sprinkled", "maple", "coconut", "jelly"
];

log.console(donuts[6])



// if you want to change the value of an element in array, you can do so by
// setting it equal to a new value.
// Prints: "glazed cruller"

donuts[1] = "glazed cruller"; // changes the second element in the `donuts` array to "glazed cruller"
console.log(donuts[1]);



// change value of an element by setting it equal to a new value
var donuts = [
  "glazed",
  "powdered",
  "sprinkled"
]

donuts[0]="glazed cruller";

console.log(donuts);


// change the value of an element by setting it equal to a new value.
// We’ve decided to replace some of donuts in the donuts array.
// What does the donuts array look like after the following changes?

var donuts = [
  "glazed", "chocolate frosted", "boston cream",
  "powdered", "sprinkled", "maple", "coconut", "jelly"
];

donuts[2] = "cinnamon twist";
donuts[4] = "salted caramel";
donuts[5] = "shortcake eclair";

console.log(donuts);

// new array:

[
  "glazed", "chocolate frosted", "cinnamon twist",
  "powdered", "salted caramel", "shortcake eclair",
  "coconut", "jelly"
]

/*

Quiz: UdaciFamily (6-1)
Directions:

Create an array called udaciFamily and add "Julia", "James", and your
name to the array. Then, print the udaciFamily to the console using
console.log.

*/

/*
 * Programming Quiz: UdaciFamily (6-1)
*/

// your code goes here

var udaciFamily  =[
  "Julia", "James", "Javier"
];

console.log(udaciFamily);

/*

Quiz: Building the Crew (6-2)
The space western TV drama Firefly premiered in the United States on
September 20, 2002. Although the show only featured fourteen episodes
and was canceled during its first season, it continues to remain popular
today with a growing fan base. In the show, the captain Mal, played by
Nathan Fillion, leads a crew of renegades on the spaceship Serenity.

Directions:
Create an array called crew to organize the Serenity’s crew and set it equal
to the variables below . You don't need to type out the actual strings, just
use the provided variables.

*/


var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// Then, print the crew array to the console.

// Your Code:


/*
 * Programming Quiz: Building the Crew (6-2)
*/

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
var crew = [

captain,
second,
pilot,
companion,
mercenary,
mechanic

];

console.log(crew);

/*

Quiz: The Price is Right (6-3)

Directions:

Starting with this array of prices, change the prices of the 1st, 3rd, and
7th elements in the array.

*/

// TIP: The 1st element of any array has an index of 0.
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// Afterwards, print out the prices array to the console.

// Your Code:

/*
 * Programming Quiz: The Price is Right (6-3)
*/

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here


prices[2] = 90.10;
prices[4] = 9.98;
prices[6] = 1.05;

console.log(prices);

/*

Array Properties and Methods

Properties - special pieces of information about a data structure. For example,
the length property in an array.
*/

// We also used length with strings to get the number of characters in a string
var word = "    ca   i   ";
console.log(word.length);

var word = "checkmarking";
console.log(word.length);

// We can also use length to get the number of elements in an array
// usefule when you want to loop over arrays
var myArray = [
  0,
  false,
  "bye",
  true,
  "hello",
  6
];

console.log(myArray.length);


/*

TIP: JavaScript provides a large number of built-in methods for modifying
arrays and accessing values in an array, check out the MDN Documentation,
or type []. into the JavaScript console for a list of all the available
Array methods.

A function returns a value, but a procedure does not. A method is similar to
a function, but is internal to part of a class. The term method is used almost
exclusively in object-oriented programming. A function is something that
takes a bunch of inputs and returns one or more values. A "method", which
seems to be used almost entirely with OO languages,
refers to a function that is associated with an object.

You can think of methods like special predefined functions that a data structure
can call. Other commonly used array methods are:

reverse - reverses the order of the elements in an array
sort - sorts the elements in an array
push & pop - two methods that allow us to add and remove elements from an array


Another very general definition of the main difference between a Function and
a Method: Functions are defined outside of classes, while Methods are defined
inside of and part of classes. In OO languages such as Object Pascal or C++,
a "method" is a function associated with an object.

*/

/*

Length

Array.length

You can find the length of an array by using its length property.

*/

// Prints: 3
var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);

/*

To access the length property, type the name of the array, followed by a period .
(you’ll also use the period to access other properties and methods), and the word
length. The length property will then return the number of elements in the array.

TIP: Strings have a length property too! You can use it to get the length of
any string. For example, "supercalifragilisticexpialidocious".length returns 34.

*/

//What is the length of the following inventory array?
// 4
var inventory = [
  ["gold pieces", 25],
  ["belt", 4],
  ["ring", 1],
  ["shoes", 2]
];

console.log(inventory.length)

/*

Push

So you can find length of an array, but what if you want to modify an array?

Thankfully, arrays have quite a few built-in methods for adding and removing
elements from an array. The two most common methods for modifying an array
are push() and pop().

Push

You can use the push() method to add elements to the end of an array.

For example, lets consider following array of donuts:

*/

var donuts = [
  "glazed",
  "chocolate frosted",
  "Boston creme",
  "glazed cruller",
  "cinnamon sugar",
  "sprinkled"
];


// You can push donuts onto the end of the array using the push() method.
// Returns: 7
donuts.push("powdered"); // pushes "powdered" onto the end of the `donuts` array


// new array with pushed donut
donuts array: [
  "glazed",
  "chocolate frosted",
  "Boston creme",
  "glazed cruller",
  "cinnamon sugar",
  "sprinkled",
  "powdered"
];

/*

Using the push() method pushes elements onto the end of an array.
Notice, with the push() method you need to pass the value of the element you
want to add to the end of the array. Also, the push() method returns the
length of the array after an element has been added.

*/

var donuts = [
  "glazed",
  "chocolate frosted",
  "Boston creme",
  "glazed cruller",
  "cinnamon sugar",
  "sprinkled"];

//  Returns: 7
// the `push()` method returns 7 because the `donuts` array now has 7 elements
donuts.push("powdered");

console.log(donuts);
console.log(donuts.length);

/*

Pop

Alternatively, you can use the pop() method to remove elements from the end of
an array.

*/

var donuts = [
  "glazed",
  "chocolate frosted",
  "Boston creme",
  "glazed cruller",
  "cinnamon sugar",
  "sprinkled",
  "powdered"
];

// Returns: "cinnamon sugar"
donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array

console.log(donuts);

// new array after pops
donuts array: [
  "glazed",
  "chocolate frosted",
  "Boston creme",
  "glazed cruller"
];

/*

Using the pop() method pops elements off the end of an array.
With the pop() method you don’t need to pass a value; instead, pop() will
always remove the last element from the end of the array. Also, pop()
returns the element that has been removed in case you need to use it.

*/
var donuts = [
  "glazed",
  "chocolate frosted",
  "Boston creme",
  "glazed cruller",
  "cinnamon sugar",
  "sprinkled",
  "powdered"
];

// the `pop()` method returns "powdered" because "powdered" was the
// last element on the end of `donuts` array
// Returns: "powdered"
donuts.pop();


// We’ve decided to replace some of the donuts in the donuts array.
// What does the donuts array look like after the following changes?
var donuts = ["glazed", "strawberry frosted", "powdered", "Boston creme"];

donuts.pop();
donuts.pop();
donuts.pop();
donuts.push("maple walnut");
donuts.pop();
donuts.push("sprinkled");


// new array after pops
var donuts = ["glazed", "sprinkled"];

/*

Splice

splice() is another handy method that allows you to add and remove elements
from anywhere within an array.

While push() and pop() limit you to adding and removing elements from the end
of an array, splice() lets you specify the index location to add new elements,
as well as the number of elements you'd like to delete (if any).

*/

// removes "chocolate frosted" at index 1 and adds "chocolate cruller"
// and "creme de leche" starting at index 1
// Returns: ["chocolate frosted"]
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche");

// new arrary after splice
donuts array: ["glazed", "chocolate cruller", "creme de leche", "Boston creme", "glazed cruller"]

/*

The first argument represents the starting index from where you want to change
the array, the second argument represents the numbers of elements you want to
remove, and the remaining arguments represent the elements you want to add.

Using the splice() method adds and removes elements from any location in an array.
splice() is an incredibly powerful method that allows you to manipulate your
arrays in a variety of ways. Any combination of adding or removing elements
from an array can all be done in one simple line of code.

Take a look at the MDN documentation to see a long list of example code snippets
demonstrating the power of splice() and then try the next set of programming quizzes.

*/

// We’ve decided to replace some of the donuts in the donuts array.
// What does the donuts array look like after the following changes?
var donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-2, 0, "chocolate frosted", "glazed");

console.log(donuts)
// new array after splice
var donots = [
  "cookies",
  "chocolate frosted",
  "glazed",
  "cinnamon sugar",
  "creme de leche"
];

/*

Quiz: Colors of the Rainbow (6-4)
Directions:
James was creating an array with the colors of the rainbow, and he forgot
some colors. The standard rainbow colors are usually listed in this order:

*/

var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

// but James had this:

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

/*

Using only the splice() method, insert the missing colors into the array,
and remove the color "Blackberry" by following these steps:

Remove "Blackberry"
Add "Yellow" and "Green"
Add "Purple"

*/

/*
 * Programming Quiz: Colors of the Rainbow (6-4)
*/

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple")

console.log(rainbow);

/*

Quiz: Quidditch Cup (6-5)
In the Harry Potter novels, children attending the Hogwarts School of Witchcraft
and Wizardry belong to one of four houses: Gryffindor, Hufflepuff, Ravenclaw, or
Slytherin. Each year, the houses assemble a Quidditch team of seven players to
compete for the coveted Quidditch Cup.

Consider the following array:

*/

var team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter"];

/* Directions:

Create a function called hasEnoughPlayers() that takes the team array as
an argument and returns true or false depending on if the array has at
least seven players.

Your Code:

*/

/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// else if
var team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter"];

// your code goes here
function hasEnoughPlayers(team) {
  var enuf = "";
    if (team.length >= 7) {
      var enuf = true;
} else {
  var enuf = false;
}
return enuf;
};

console.log(hasEnoughPlayers(team));

// example if else
if(money >= price) {
  console.log("Buy the hammer!");
} else  {
  console.log("Don't buy the hammer!");
}

// ternary
var team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter"];

// your code goes here
function hasEnoughPlayers(team){
  team.length >= 7 ? enuf = true : enuf = false;
  return(enuf);
}

console.log(hasEnoughPlayers(team));

/*

Directions:
In an earlier exercise, you created a crew array to represent Mal’s crew from the hit show Firefly.

*/

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

/*

Later in the show, Mal takes on three new crew members named "Simon", "River",
and "Book".

Use the push() method to add the three new crew members to the crew array.

*/

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

/*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here

var crew = [

captain,
second,
pilot,
companion,
mercenary,
mechanic

];

console.log(crew);

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";


crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

// or simply: crew.push(doctor,sister,shepherd)

console.log(crew);


/*

Quiz: Checking out the Docs (6-7)

Use the MDN Documentation to determine which of these methods would be best for
reversing elements in this array:

*/

var reverseMe = ["h", "e", "l", "l", "o"];

// reverse()

console.log(reverseMe.reverse())


// What would be the best array method to sort the elements in this array:

var sortMe = [2, 1, 10, 7, 6];

// sort()

console.log(sortMe.sort())


// Consider the following array, removeFirstElement:

var removeFirstElement = ["a", "b", "c"];

// Let's say that you want to modify (i.e., mutate) removeFirstElement by
// removing the first element within it. Which method(s) could you use?


// splice()
removeFirstElement.splice(0, 1);

console.log(removeFirstElement);


// shift()

var removeFirstElement = ["a", "b", "c"];

removeFirstElement.shift();

console.log(removeFirstElement);


// What method would be best for changing this array into a string?

var turnMeIntoAString = ["U", "d", "a", "c", "i", "t", "y"];

// join()
// Returns: U,d,a,c,i,t,y
console.log(turnMeIntoAString.join());

// Returns: Udacity
console.log(turnMeIntoAString.join(''));

// Returns: U-d-a-c-i-t-y
console.log(turnMeIntoAString.join('-'));


/*

Array Loops

Once the data is in the array, you want to be able to efficiently access and
manipulate each element in the array without writing repetitive code for each
element.

*/

// For instance, if this was our original donuts array:

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// and we decided to make all the same donut types, but only sell them
// as donut holes instead, we could write the following code:

donuts[0] += " hole";
donuts[1] += " hole";
donuts[2] += " hole";

// new array
var donuts = ["jelly donut hole", "chocolate donut hole", "glazed donut hole"]

/*

But remember, you have another powerful tool at your disposal, loops!

To loop through an array, you can use a variable to represent the index in the
array, and then loop over that index to perform whatever manipulations your
heart desires.

*/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

// new array
var donuts =  ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

/*

In this example, the variable i is being used to represent the index of the
array. As i is incremented, you are stepping over each element in the array
starting from 0 until donuts.length - 1 (donuts.length is out of bounds).

*/


/*

The forEach() loop

Arrays have a set of special methods to help you iterate over and perform
operations on collections of data. You can view the MDN Documentation list
of Array methods here, but a couple big ones to know are the forEach()
and map() methods.

The forEach() method gives you an alternative way to iterate over an array,
and manipulate each element in the array with an inline function expression.

*/

// my function
function myAwesomeFunction(element, index, array) {
  console.log("Element: " + element);
  console.log("Index: " + index);
  console.log("Array: " +array);
}

// for each
myArray.forEach(myAwesomeFunction)

// donut function
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

function printDonuts(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
}

// for each
donuts.forEach(printDonuts);

// as inline function
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function (donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});


/*
Prints:
JELLY DONUT HOLE
CHOCOLATE DONUT HOLE
GLAZED DONUT HOLE
*/
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});


/*
Notice that the forEach() method iterates over the array without the need
of an explicitly defined index. In the example above, donut corresponds to the
element in the array itself. This is different from a for or while loop where
an index is used to access each element in the array:
*/


for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}

/*
Parameters

The function that you pass to the forEach() method can take up to three
parameters. In the video, these are called element, index, and array, but
you can call them whatever you like.

The forEach() method will call this function once for each element in the array
(hence the name forEach.) Each time, it will call the function with different
arguments. The element parameter will get the value of the array element. The
index parameter will get the index of the element (starting with zero). The
array parameter will get a reference to the whole array, which is handy if you
want to modify the elements.

Here's another example:
*/

/*
Prints:
Word 0 in cat,in,hat is cat
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat
*/

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});


// Next, you'll do a quiz that uses the forEach() method to modify an array.

/*

Quiz: Another Type of Loop (6-8)

Directions:

Use the array's forEach() method to loop over the following array and add 100
to each of the values if the value is divisible by 3.

*/


var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300,
  3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

// Remember that the "Test Run" button will display any logged content,
// so feel free to use console.log() to test your code.


// adds 100 to each element
test.forEach(function(num) {
  if (num%3 === 0) {
    console.log(num + 100);
  } else {
    console.log(num );
  };
});

// adds 100 to each element and updates array
test.forEach(function(num, index, array){
  if(num % 3 === 0){
    array[index] = num += 100;
  }
else{
    array[index] = num += 0;
}
});

console.log(test);

// ternary

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300,
  3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(num, index, array){
  array[index] = num % 3 === 0 ? num += 100 : num += 0
}
);

console.log(test);


/*

Map

How sgould you loop?

for loops are verdsatile and give complete control over the looping process,
can explcitly define where to start and stop in the array,
whether you want to skip over array values, and
whether to break out of loop early using break statement
*/

var myArray = [0, 2, 3, 4, 5];

for (var i = 0; i <= myArray.length; i = i + 2) {
  console.log(myArray[i]);
  if (i === 2) {
    break;
  }
}

/*

.forEACH(func) gives a concise way of looping over an array if looping over
every element from start to finish. It has less versatility than a regular for
loop, but it can access each element directly and doesn't need an index of an
element to do so.

*/

var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(elem) {
  console.log(elem);
});

/*

.map(func) is one more array method in the JS toolbelt. Similar to for each, it
can define a call back function that performs an operation on each element in
the array. The difference here is that map returns a new array with the new values
that the function calculated.

*/

var myArray = [1, 2, 3, 4, 5];
var newArray = myArray.map(function(elem) {
  elem = elem + 100;
  return elem;
})

/*

There are even more ways to iterate over arrays in the MDN documentation.

Using forEach() will not be useful if you want to permanently modify the
original array. forEach() always returns undefined. However, creating a new
array from an existing array is simple with the powerful map() method.

With the map() method, you can take an array, perform some operation on each
element of the array, and return a new array.

*/

// before
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

// after
donuts array: ["jelly donut", "chocolate donut", "glazed donut"]
improvedDonuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

/*

Oh man, did you just see that? The map() method accepts one argument, a
function that will be used to manipulate each element in the array. In the
above example, we used a function expression to pass that function into map().
This function is taking in one argument, donut which corresponds to each element
in the donuts array. You no longer need to iterate over the indices anymore.
map() does all that work for you.

*/

/*

Quiz: I Got Bills (6-9)

Directions:

Use the map() method to take the array of bill amounts shown below, and create
a second array of numbers called totals that shows the bill amounts with a
15% tip added.

*/

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00,
  99.22, 102.20, 100.10, 6.77, 2.22];

/*

Print out the new totals array using console.log.

TIP: Check out the toFixed() method for numbers to help with rounding the values
to a maximum of 2 decimal places. Note, that the method returns a string to
maintain the "fixed" format of the number. So, if you want to convert the
string back to a number, you can cast it or convert it back to a number:

Number("1");
Returns: 1

Your Code:

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */


// version 1
 var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11,
   12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];


 var totals = bills.map(function(bill) {
   bill *= 1.15;
   return Number(bill.toFixed(2));
 });

console.log(totals)


//  version 2
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(bills) {
  bills *= 1.15;
  return Number(bills.toFixed(2));
});

console.log(totals);

// Arrays in Arrays

/*

You can store pretty much any data in an array. You can even store arrays
inside of an array.  An array of arrays can represented as a grid like stucture
where each element of the array correspomnds to a row of cells.

Iterating over a two dimensional array can be tricky. It's helpful to think
about the whole thing as a grid, where each row of the grid is an array, and
each of those arrays is an element of the larger array.

[
  [1, 2, 3, 4, 5]
  [6, 7, 8, 9, 10]
  [11, 12, 13, 14, 15]
  [16, 17, 18, 19, 20]
]

*/

// can use single loop to access each row of the grid

var grid =

[
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
]

for (var r =0; r < grid.length; r++) {
  console.log(grid[r]);
}

/*

can use nested loops, or loop inside a loop, to loop over each element of
each of those rows
outer loop will cycle thru each row, and then in the row currently being
iterated over, the inner loop will iterate over each cell
use easy to recognize distinct variable names for the outer and inner loops.
(i.e., r and c for rows and columns of the grid).
*/

var grid =

[
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
]

for (var r = 0; r < grid.length; r++) {
  for (var c = 0; c < grid[r].length; c++) {
    console.log(grid[r][c]);
  }
}


/*

2D Donut Arrays

Oftentimes, donuts are arranged in a grid like this:

A box of donuts can resemble a two dimensional grid with rows and columns.
You could use an array of arrays that has the name of each donut associated
with its position in the box.

Here's an example:

*/

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

/*

If you wanted to loop over the donut box and display each donut (along with
its position in the box!) you would start with writing a for loop to loop over
each row of the box of donuts:

*/

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts
for (var row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}

/*
Prints:
["glazed", "chocolate glazed", "cinnamon"]
["powdered", "sprinkled", "glazed cruller"]
["chocolate cruller", "Boston creme", "creme de leche"]
*/

/*

Since each row is an array of donuts, you next need to set up an inner-loop
to loop over each cell in the arrays.

*/

var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array
  // currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

/*

Prints:
"glazed"
"chocolate glazed"
"cinnamon"
"powdered"
"sprinkled"
"glazed cruller"
"chocolate cruller"
"Boston creme"
"creme de leche"

*/

// In this loop, the outer loop cycles rows and the inner loops cycles through columns.

/*

Quiz: Nested Numbers (6-10)
Directions:
Use a nested for loop to take the numbers array below and replace all of the
values that are divisible by 2 (even numbers) with the string "even" and all
other numbers with the string "odd".

*/

/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

// version 1
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (var row = 0; row < numbers.length; row++){
  for (var column = 0; column < numbers[row].length; column++){
    numbers[row][column] % 2 === 0 ?
    numbers[row][column] = "even" :
    numbers[row][column] = "odd";
    console.log(numbers[row][column]);
  }
}

/*

Objects

Allow us to wrap up pieces of related data and functionality into one container.
Arrays are a special kind of object in Javascript.  Arrays have properties, like
length and methods like reverse, sort, push & pop, that make them useful for
working with structured organized data.  Javasvript also come with a whole set
of other useful buil-in objects; plus you can create your own objects.

Objects organizes or encapsulates data and functionality associated with a
particular thing inside an object.  We can take almost any real world object
and represent it as a javascript object.

It’s worth noting that while we can represent real-world objects as JavaScript
objects, the analogy does not always hold. This is a good starting place for
thinking about the structure and purpose of objects, but as you continue your
career as a developer, you’ll find that JavaScript objects can behave wildly
different than real objects.


NOTE: typeof is an operator that returns the name of the data type that follows it:

typeof "hello" // returns "string"
typeof true // returns "boolean"
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
typeof function hello() { } // returns "function"


*/

// pink closed umbrella object with key value pairs

var umbrella = {
  color: "pink",
  isOpen: false
}

/*

Opening  the umbrella is a task you want the umbrella to be bale to do. It is
not a property which is an attribute that describes the umbrella.  Someting that
the object can do is a method.  A method is just a function that is associated
with an object.

*/

// umbrella object with method


// console check if umbrella is opem

umbrella.isOpen;

// console open umbrella (retunrs "Julia opens the umbrella")

umbrella.open();

/*
Quiz Umbrella (7-1)

Directions:

Using the umbrella example from the previous video, see if you can follow the
example open() method and create the close() method. It's alright if you have
trouble at first! We'll go into more detail later in this lesson.
*/

var umbrella = {
  color: "pink",
  isOpen: false,
  open: function() {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   }
};

/*

TIP: Remember to put all of your object's properties and methods
inside curly braces: var myObject = { greeting: "hello", name: "Julia" };.
Also, remember that an object is just another data type. Just like how you
would put a semicolon after a string variable declaration var
myString = "hello";, don't forget to put a semi-colon at the end of your
object's declaration.

Your Code:

*/

/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function() {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    }
};

/*

Primitive Data types

Strings
Numbers
Booleans
Undefined
Null

What is an object:

When you ask of a typeof [1, 2, 3] (array) within hte console it returns "object"
(Arrays are a type of object).

What is an object?

Objects are a data structure in Javascript that lets you store data about
a psrticular thing, and helps you keep track of that data by using a "key".


*/

// object, i.e., What is a person?

var sisterName = "Sarah";
var sisterAge = 23;
var sisterParents = ["Alice", "Andy"];
var sisterSiblings = ["julia"];
var sisterFavoriteColor = "purple";
var sisterPets = true;

/*

Instead of defining all the data about a person in isolated variables, objects
allow you to group this information into a meaningful structure.

*/
/*

Object stored in a variable called sister.

The object;s data, information about my sister is stored as a list of key value
pairs inside curly braces

*/

var sister = {
  name = "Sarah",
  age = 23,
  parents = ["Alice", "Andy"],
  siblings = ["Julia"],
  favoriteColor = "purple",
  pets = true
};

/*

Object Literals

Object-literal notation

*/

  var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};

/*

The syntax you see above is called object-literal notation. There are some
important things you need to remember when you're structuring an object literal:

The "key" (representing a property or method name) and its "value" are separated
from each other by a colon
The key: value pairs are separated from each other by commas
The entire object is wrapped inside curly braces { }.
And, kind of like how you can look up a word in the dictionary to find its
definition, the key in a key:value pair allows you to look up a piece of
information about an object. Here's are a couple examples of how you can
retrieve information about my sister's parents using the object you created.

*/

// two equivalent ways to use the key to return its value

sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]

/*

Using sister["parents"] is called bracket notation (because of the brackets!)
and using sister.parents is called dot notation (because of the dot!).

What about methods?

The sister object above contains a bunch of properties about my sister,
but doesn't really say what my sister does. For instance, let's say my sister
likes to paint. You might have a paintPicture() method that returns
"Sarah paints a picture!" whenever you call it. The syntax for this is pretty
much exactly the same as how you defined the properties of the object.
The only difference is, the value in the key:value pair will be a function.

*/

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture(); // Returns: "Sarah paints!"

// and you can access the name of my sister by accessing the name property:

sister.name // Returns: "Sarah"

/*

Objects: Naming Conventions

Things to avoid.
Best practices.

Dont use numbers as the first character in your property names (but can use them
anywhere else in property name)
Quotes on keys can mask problems, icluding the use of hyphens and spaces



*/

//things to avoid and bad practice

var person {
  "name": "John"
  "age": 55,
  "1stChild": "James" // Dont use numbers as  first character in property names
  "2ndChild": "Jarrod", // Quotes on keys can mask problems.
  "3rdChild": "Alexis"
}

var garage = {
  "fire truck": {
    "color": "red",
    "wheels": 6,
    "operational": true
  },
  "race car": {
    "color": "blue",
    "wheels": 4,
    "operational": false
  }
}

// good practice

//things to avoid and bad practice

var person {
  name: "John"
  age: 55,
  children; ["James","Jarrod","Alexis"]
}

var garage = {
  fireTruck: {
    color: "red",
    wheels: 6,
    operational: true
  },
  raceCar: {
    color: "blue",
    wheels: 4,
    operational: false
  }
}

/*

QUESTION 1 OF 2
Given the following user object, what would you use to print the value of the email property?

*/
var user = {
  email: "user@example.com",
  firstName: "first",
  lastName: "last"
};

console.log(user.email);

console.log(user["email"]);

/*

QUESTION 2 OF 2
Select the piece of code that creates an object that describes a red Honda Civic:

*/
var car = {
  manufacturer: "honda",
  model: "civic",
  class: "compact",
  color: "red"
};

var car = {
  color: "red" ,
  manufacturer: "honda",
  model: "civic",
  class: "compact"
};

/*

Summary of Objects

Objects are one of the most important data structures in JavaScript.
Get ready to see them everywhere!

They have properties (information about the object) and methods (functions or
  capabilities the object has). Objects are an incredibly powerful data type
  and you will see them all over the place when working with JavaScript, or
  any other object-oriented programming language.

Object literals, methods, and properties

You can define objects using object-literal notation:

*/

var myObj = {
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

myObj.eat(); // method

myObj.color; // property

/*

Naming conventions

Feel free to use upper and lowercase numbers and letters, but don't start your
property name with a number. You don't need to wrap the string in quotes! If
it's a multi-word property, use camel case. Don't use hyphens in your property
names

*/

var richard = {
  "1stSon": true;
  "loves-snow": true;
};

richard.1stSon // error
richard.loves-snow // error

/*

Quiz: Menu Items (7-2)
Directions:
Create a breakfast object to represent the following menu item:

The Lumberjack - $9.95
eggs, sausage, toast, hashbrowns, pancakes
The object should contain properties for the name, price, and ingredients.

Your Code:

/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here
var breakfast = {
  name: "The Lumberjack",
  price: "$9.95",
  igredients: [ "eggs", "sausage", "toast", "hashbrowns", "pancakes"],
};

/*

Quiz: Bank Accounts 1 (7-3)
Directions:
Using the given object:

*/

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};

/*

add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.
Your Code:

*/

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here

    printAccountSummary: function() { return "Welcome!\nYour balance is currently $"
    + savingsAccount.balance
    + " and your interest rate is "
    + savingsAccount.interestRatePercent +"%." }

};

console.log(savingsAccount.printAccountSummary());

/*

Quiz: Bank Accounts 2 (7-4)
Directions:
Using the object from the previous quiz, answer the following quiz question:

*/
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};

/*

Your Code:
QUIZ QUESTION
Which of the following are valid ways to access properties and call methods
from the savingsAccount object?

*/

savingsAccount.balance;

savingsAccount["balance"];

savingsAccount.withdraw(50);

/*

Quiz: Facebook Friends (7-5)
Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1

Your Code:

*/

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {

    name: "Javier Soto",
    friends: 99,
    messages: ["Hello.","What is up.","What is down."],

    postMessage(message) {
        facebookProfile.messages.push(message); //
    }, //adds a new message string to the array

    deleteMessage(index) {
        facebookProfile.messages.splice(index,1);
    }, //removes the message corresponding to the index provided

    addFriend() {
        facebookProfile.friends += 1;
    }, //increases the friend count by 1

    removeFriend() {
        facebookProfile.friends -= 1;
    }, //decreases the friend count by 1

    printFacebookProfile: function() {return "Name: " + facebookProfile.name + "\nFriends: " + facebookProfile.friends
        + "\nList Messages: " + facebookProfile.messages
    }
};

facebookProfile.postMessage("Test New Message.");

facebookProfile.deleteMessage(0);

facebookProfile.addFriend();

facebookProfile.removeFriend();

console.log(facebookProfile.printFacebookProfile());

/*

Quiz: Donuts Revisited (7-6)
Here is an array of donut objects.

*/

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

/*

Directions:
Use the forEach() method to loop over the array and print out the following
donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
Your Code:

*/

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

donuts.forEach(function(donut) {
  console.log(donut.type + " donuts cost $"
  + donut.cost + " each");
});

/*

Harmony, ES6, ES2015...

What is ECMAScript 6?

ECMAScript 6 is also known as ES6 and ECMAScript 2015.

Some people like to call it JavaScript 6.

ECMAScript (or ES)is a trademarked scripting-language specification standardized
by Ecma International in ECMA-262 and ISO/IEC 16262. It was created to
standardize JavaScript, so as to foster multiple independent implementations.
JavaScript has remained the best-known implementation of ECMAScript since the
standard was first published, with other well-known implementations including
JScript and ActionScript. ECMAScript is commonly used for client-side scripting
on the World Wide Web, and it is increasingly being used for writing server
applications and services using Node.js.

JUNE 2015[10]	The sixth edition, initially known as ECMAScript 6 (ES6) and later
renamed to ECMAScript 2015 (ES2015)[10] adds significant new syntax for writing
complex applications, including classes and modules, but defines them semantically
in the same terms as ECMAScript 5 strict mode. Other new features include
iterators and for/of loops, Python-style generators and generator expressions,
arrow functions, binary data, typed arrays, collections (maps, sets and weak maps),
promises, number and math enhancements, reflection, and proxies (metaprogramming
for virtual objects and wrappers). As the first "ECMAScript Harmony" specification,
it is also known as "ES6 Harmony."

JUNE 2016 ECMAScript 2016 (ES2016)[11], the seventh edition, intended to
continue the themes of language reform, code isolation, control of effects
and library/tool enabling from ES2015, includes two new features: the
exponentiation operator (**) and Array.prototype.includes.

JUNE 2017 ECMAScript 2017 (ES2017), the eighth edition, includes features for
concurrency and atomics, syntactic integration with promises (async/await).

JUNE 2018 ECMAScript 2018 (ES2018), the ninth edition, includes features for
asynchronous iteration and generators, new regular expression features and
rest/spread parameters.

Syntax
Functions
Built-Ins
Developer-Fu

Some of the new features in ES6:

JavaScript let
JavaScript const
Exponentiation (**)
Default parameter values
Array.find()
Array.findIndex()

*/

/*

Let and Const

There are now two new ways to declare variables in JavaScript: let and const.

Up until now, the only way to declare a variable in JavaScript was to use the
keyword var. To understand why let and const were added, it’s probably best to
look at an example of when using var can get us into trouble.

Take a look at the following code.

*/

/*

QUESTION 1 OF 3

What do you expect to be the output from running getClothing(false)?

*/

function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

/*
undefined
It actually outputs undefined, weird right? Continue reading to learn more
about this quirk of JavaScript.
*/

/*

Hoisting

Hoisting is a result of how JavaScript is interpreted by your browser.
Essentially, before any JavaScript code is executed, all variables are
"hoisted", which means they're raised to the top of the function scope. So at
run-time, the getClothing() function actually looks more like this…

*/

// function

function getClothing(isCold) {
  if (isCold) {
    var freezing = "Grab a jacket!";
  } else {
    var hot = "It's a shorts kind of day.";
    console.log(freezing);
  }
}

// hoisted function

function getClothing(isCold) {
  var freezong, hot;
  if (isCold) {
    freezing = "Grab a jacket!";
  } else {
    hot = "It's a shorts kind of day.";
    console.log(freezing);
  }
}

/*

Before the function is executed, all variables are hoisted to the top of the
function scope. So what’s our solution?

let and const

Variables declared with let and const eliminate this specific issue of
hoisting because they’re scoped to the block, not to the function. Previously,
when you used var, variables were either scoped globally or locally to an
entire function scope.

If a variable is declared using let or const inside a block of code (denoted
by curly braces { }), then the variable is stuck in what is known as the
temporal dead zone until the variable’s declaration is processed. This behavior
prevents variables from being accessed only until after they’ve been declared.

*/

// Variables declared with let & const are only available within block declared.

function getClothing(isCold) {
  if (isCold) {
    let freezing = "Grab a jacket!";
  } else {
    let hot = "It's a shorts kind of day.";
    console.log(freezing);
  }
}

/*

Variables declared with let and const are only available within the block
they're declared.

*/

/*

QUESTION 2 OF 3

What do you expect to be the output from running getClothing(false)?

*/

function getClothing(isCold) {
  if (isCold) {
    const freezing = 'Grab a jacket!';
  } else {
    const hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

/*

ReferenceError: freezing is not defined
Because freezing is not declared inside the else statement, the function scope,
or the global scope, a ReferenceError is thrown.

*/

/*

Rules for using let and const

let and const also have some other interesting properties.

Variables declared with let can be reassigned, but can’t be redeclared in
the same scope.

Variables declared with const must be assigned an initial value, but can’t be
redeclared in the same scope, and can’t be reassigned.

*/

/*

QUESTION 3 OF 3

What do you expect to be output from running the following code?

*/

let instructor = 'James';
instructor = 'Richard';
console.log(instructor);

/*
Richard
This is the correct way to use let. Use let to declare variables when you
plan on changing the value of a variable later in your code.
*/

/*
Use cases

The big question is when should you use let and const?
The general rule of thumb is as follows:

use let when you plan to reassign new values to a variable, and
use const when you don’t plan on reassigning new values to a variable.
Since const is the strictest way to declare a variable, we suggest that you
always declare variables with const because it'll make your code easier to
reason about since you know the identifiers won't change throughout the
lifetime of your program. If you find that you need to update a variable or
change it, then go back and switch it from const to let.

That’s pretty straightforward, right? But what about var?

What about var?
Is there any reason to use var anymore? Not really.

There are some arguments that can be made for using var in situations where
you want to globally define variables, but this is often considered bad
practice and should be avoided. From now on, we suggest ditching var in
place of using let and const.
*/

/*

Quiz: Using Let and Const (1-1)
Directions:
Replace the variable declarations using let or const.

Your Code:

*/


/*
 * Programming Quiz: Using Let and Const (1-1)
 */

const CHARACTER_LIMIT = 255;
const posts = [
	"#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
	"Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
	"I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
	for (let i = 0; i < posts.length; i++) {
		console.log(posts[i].slice(0, CHARACTER_LIMIT));
	}
}

displayPosts();

/*

Template Literals

Prior to ES6, the old way to concatenate strings together was by using the
string concatenation operator ( + ).

*/


const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}

let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room
+ ' to pick up your report card.';
//Returns: Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.

//This works alright, but it gets more complicated when you need to build multi-line strings.

let note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian;

/*
Returns:

Mrs. Wilson,

Please excuse Richard Kalehoff.
He is recovering from the flu.

Thank you,
Mr. Kalehoff
*/

/*
However, that’s changed with the introduction of template literals (previously
referred to as "template strings" in development releases of ES6).

NOTE: As an alternative to using the string concatenation operator ( + ), you
can use the String's concat() method, but both options are rather clunky for
simulating true string interpolation.

Template Literals

Template literals are essentially string literals that include embedded expressions.

Denoted with backticks (` `) instead of single quotes ( '' ) or double
quotes ( "" ), template literals can contain placeholders which are represented
using ${expression}. This makes it much easier to build strings.

Here's the previous examples using template literals.

let message = `${student.name} please see ${teacher.name} in ${teacher.room}
to pick up your report card.`;
Returns: Richard Kalehoff please see Mrs. Wilson in N231 to pick up your
report card.

By using template literals, you can drop the quotes along with the string
concatenation operator. Also, you can reference the object's properties inside
expressions.

Here, you try. Change the greeting string below to use a template literal.
Also, feel free to swap in your name for the placeholder.


/*
 * Instructions: Change the `greeting` string to use a template literal.
 */

const myName = '[NAME]';
let greeting = `Hello, my name is ${myName}.`;
console.log(greeting);

// ...but what about the multi-line example from before?
var note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian;

// template literals

const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}
var note = `${teacher.name},

  Please excuse ${student.name}.
  He is recovering from the flu.

  Thank you,
  ${student.guardian}`;

/*

Here’s where template literals really shine. In the animation above, the quotes
and string concatenation operator have been dropped, as well as the newline
characters ( \n ). That's because template literals also preserve newlines as
part of the string!

TIP: Embedded expressions inside template literals can do more than just
reference variables. You can perform operations, call functions and use loops
inside embedded expressions!

*/


Quiz: Build an HTML Fragment (1-2)
Directions:
Modify the createAnimalTradingCardHTML() function to use a template literal for cardHTML.

Your Code:

/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML =
      `
      <div class="card">
        <h3 class="name"> ${animal.name} </h3>
        <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
        <div class="description">
            <p class="fact"> ${animal.fact} </p>
              <ul class="details">
                  <li><span class="bold"> Scientific Name</span>: ${animal.scientificName} </li>
                  <li><span class="bold"> Average Lifespan</span>: ${animal.lifespan} </li>
                  <li><span class="bold"> Average Speed</span>: ${animal.speed} </li>
                  <li><span class="bold"> Diet</span>: ${animal.diet} </li>
              </ul>
            <p class="brief"> ${animal.summary} </p>
        </div>
      </div>
      `
    return cardHTML;
}
console.log(createAnimalTradingCardHTML(cheetah));

/*

Destructuring
In ES6, you can extract data from arrays and objects into distinct variables
using destructuring.

This probably sounds like something you’ve done before, for example, look at
the two code snippets below that extract data using pre-ES6 techniques:

*/

const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);

// Prints: 10 25 -34

// The example above shows extracting values from an array.

const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const type = gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

console.log(type, color, carat);

// Prints: quartz rose 21.29

/*

And this example shows extracting values from an object.

Both are pretty straightforward, however, neither of these examples are
actually using destructuring.

So what exactly is destructuring?

*/

/*

Destructuring

Destructuring borrows inspiration from languages like Perl and Python by
allowing you to specify the elements you want to extract from an array or
object on the left side of an assignment. It sounds a little weird, but you
can actually achieve the same result as before, but with much less code; and
it's still easy to understand.

Let’s take a look at both examples rewritten using destructuring.

*/

// Destructuring values from an array
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

// Prints: 10 25 -34

/*

In this example, the brackets [ ] represent the array being destructured and
x, y, and z represent the variables where you want to store the values from
the array. Notice how you don’t have to specify the indexes for where to
extract the values from because the indexes are implied.

TIP: You can also ignore values when destructuring arrays. For example,
const [x, , z] = point; ignores the y coordinate and discards it.

*/

/*

QUESTION 1 OF 2
What do you expect to be the value of second after running the following code?

*/

let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;

// Jarrod

// Destructuring values from an object

const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;

console.log(type, color, carat);

// Prints: quartz rose 21.29

/*

In this example, the curly braces { } represent the object being destructured
and type, color, and carat represent the variables where you want to store the
properties from the object. Notice how you don’t have to specify the property
from where to extract the values. Because gemstone has a property named type,
the value is automatically stored in the type variable. Similarly, gemstone has
a color property, so the value of color automatically gets stored in the color
variable. And it's the same with carat.

TIP: You can also specify the values you want to select when destructuring an
object. For example, let {color} = gemstone; will only select the color property
from the gemstone object.

*/

/*

QUESTION 2 OF 2
What do you expect to be returned from calling getArea()?

*/

const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;

// NaN
// Correct! Calling getArea() will return NaN. When you destructure the
// object and store the getArea() method into the getArea variable, it no
// longer has access to this in the circle object which results in an area
// that is NaN.

/*

Quiz: Destructuring Arrays (1-3)
Directions:
Use array destructuring to pull out the three colors from the array of things and store them into the variables one, two, and three.

Your Code:

*/

/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip',
                'green', 'computer', 'earth', 'udacity',
                'blue', 'dogs'];

const [one, , , two, , , , three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

/*

Object Literal Shorthand

A recurring trend in ES6 is to remove unnecessary repetition in your code.
By removing unnecessary repetition, your code becomes easier to read and more
concise. This trend continues with the introduction of new shorthand ways for
initializing objects and adding methods to objects.

Let’s see what those look like.

Object literal shorthand

You’ve probably written code where an object is being initialized using the
same property names as the variable names being assigned to them.

But just in case you haven’t, here’s an example.

*/

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type: type,
  color: color,
  carat: carat
};

console.log(gemstone);

// Prints: Object {type: "quartz", color: "rose", carat: 21.29}

/*

Do you see the repetition? Doesn't type: type, color: color, and carat:carat
seem redundant?

The good news is that you can remove those duplicate variables names from
object properties if the properties have the same name as the variables being
assigned to them.

Check it out!

*/

// If object properties have the same name as the variables being assigned to them,
// then you can drop the duplicate variable names.

// object literal shorthand

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

let gemstone = { type, color, carat };

console.log(gemstone);

/*

If object properties have the same name as the variables being assigned to them,
then you can drop the duplicate variable names.
Speaking of shorthand, there’s also a shorthand way to add methods to objects.

To see how that looks, let’s start by adding a calculateWorth() method to our
gemstone object. The calculateWorth() method will tell us how much our gemstone
costs based on its type, color, and carat.

*/

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {
    // will calculate worth of gemstone based on type, color, and carat
  }
};

// In this example, an anonymous function is being assigned to the property
// calculateWorth, but is the function keyword really needed? In ES6, it’s not!

/*

Shorthand method names

Since you only need to reference the gemstone’s calculateWorth property in
order to call the function, having the function keyword is redundant, so it can
be dropped.

*/

let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};


/*

Lesson check up on ES6

let & const
template literals
destructuring
object literal shorthand

*/

/*

Iteration

What is iteration?

Let's look at a for loop ...

*/

// for loop
// the variable i is used because "iterator" starts with an i.

digits = [0, one, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let i = 0; i < 10; i++)  {
  console.log(digits[i]);
};

// for loop with array object

const years = ['1999', '2001', '2013', '2016'];

for (let i = 0; i < years.length; i++) {
  console.log(years[i]);
}

/*

Process of getting one item after another is called iteration

What's new with iteration in ES6?

There is a new iterable interface that allows customization of how objects are
iterated (how they're looped over).

iterable protocol - allows javascript objects to define or cusotmize their
iteration behavior

*/

const teacher = ['Richard';

teacher[Symbol.iterator] = fucntion () {
  // returns a custom iterator
}

/*

for-of loop
loop that iterates over iterable objects

*/

const names = ['James', 'Kavita', 'Richard'];

for (const name of names) {
  console.log(name);
};

// logs the following names:  James Kavita Richard

/*

Family of For Loops

The for...of loop is the most recent addition to the family of for loops
in JavaScript.

It combines the strengths of its siblings, the for loop and the for...in loop,
to loop over any type of data that is iterable (meaning it follows the iterable
protocol). By default, this includes the data
types String, Array, Map, and Set—notably absent from this list is the Object
data type (i.e. {}). Objects are not iterable, by default.

Before we look at the for...of loop, let’s first take a quick look at the other
for loops to see where they have weaknesses.

The for loop

The for loop is obviously the most common type of loop there is, so this should
be a quick refresher.

*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}

/*
Prints:
0
1
2
3
4
5
6
7
8
9
*/

/*

Really the biggest downside of a for loop is having to keep track of the
counter and exit condition.

In this example, we’re using the variable i as a counter to keep track of the
loop and to access values in the array. We’re also using digits.length to
determine the exit condition for the loop. If you just glance at this code,
it can sometimes be confusing exactly what’s happening; especially for
beginners.

While for loops certainly have an advantage when looping through arrays, some
data is not structured like an array, so a for loop isn’t always an option.

The for...in loop

The for...in loop improves upon the weaknesses of the for loop by eliminating
the counting logic and exit condition.

*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}

/*
Prints:
0
1
2
3
4
5
6
7
8
9
*/

/*

But, you still have to deal with the issue of using an index to access the
values of the array, and that stinks; it almost makes it more confusing than
before.

Also, the for...in loop can get you into big trouble when you need to add an
extra method to an array (or another object). Because for...in loops loop over
all enumerable properties, this means if you add any additional properties to
the array's prototype, then those properties will also appear in the loop.

*/

Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}

/*
Prints:
0
1
2
3
4
5
6
7
8
9
*/

function() {
 for (let i = 0; i < this.length; i++) {
  this[i] = this[i].toFixed(2);
 }
}

/*

Gross! This is why for...in loops are discouraged when looping over arrays.

NOTE: The forEach loop is another type of for loop in JavaScript. However,
forEach() is actually an array method, so it can only be used exclusively with
arrays. There is also no way to stop or break a forEach loop. If you need that
type of behavior in your loop, you’ll have to use a basic for loop.

*/

/*
For...of Loop
Finally, we have the mighty for...of loop.

For...of loop
The for...of loop is used to loop over any type of data that is iterable.

You write a for...of loop almost exactly like you would write a for...in loop, e
xcept you swap out in with of and you can drop the index.
*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

/*
Prints:
0
1
2
3
4
5
6
7
8
9
*/

/*
This makes the for...of loop the most concise version of all the for loops.

TIP: It’s good practice to use plural names for objects that are collections of
values. That way, when you loop over the collection, you can use the singular
version of the name when referencing individual values in the collection. For
example, for (const button of buttons) {...}.
*/

// for loop

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i=0; i < digits.length; i++) {
  console.log(digits[i]);
}

// for ... in loop
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index in digits) {
  console.log(digits[index]);
}

// for ... of loop

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let digit of digits) {
  console.log(digit);
}

// Progression from the for loop to the for...in loop to the for...of loop.

/*
But wait, there’s more! The for...of loop also has some additional benefits that
fix the weaknesses of the for and for...in loops.

You can stop or break a for...of loop at anytime.
*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

/*
Prints:
1
3
5
7
9
*/

/*
And you don’t have to worry about adding new properties to objects. The for...of
loop will only loop over the values in the object.
*/

Array.prototype.decimalfy = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

/*
Prints:
0
1
2
3
4
5
6
7
8
9
*/

/*
Quiz: Writing a For...of Loop (1-4)
Directions:
Write a for...of loop that:

loops through each day in the days array
capitalizes the first letter of the day
and prints the day out to the console
Your code should log the following to the console:

Sunday
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday

Your Code:
*/

/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here

for (let day of days) {
	console.log(day.charAt(0).toUpperCase() + day.slice(1));
}

/*

for (const day of days) {
	console.log(day.charAt(0).toUpperCase() + day.slice(1));
}

*/

/*

Spread... Operator
Time to switch gears for a moment and check out the spread operator!

Spread operator
The spread operator, written with three consecutive dots ( ... ), is new in
ES6 and gives you the ability to expand, or spread, iterable objects into
multiple elements.

Let’s take a look at a few examples to see how it works.

*/
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
//Prints: Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
//Prints: 2 3 5 7 11 13 17 19 23 29

/*
If you look at the output from the examples, notice that both the array and
set have been expanded into their individual elements. So how is this useful?

NOTE: Sets are a new built-in object in ES6 that we’ll cover in more detail in
a future lesson.

Combining arrays with concat
One example of when the spread operator can be useful is when combining arrays.

If you’ve ever needed to combine multiple arrays, prior to the spread operator,
you were forced to use the Array’s concat() method.
*/
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
Prints: ["apples", "bananas", "pears", "corn", "potatoes", "carrots"]

/*
This isn’t terrible, but wouldn’t it be nice if there was a shorthand way
to write this code?

For example, something like…

⚠️ Upcoming const Warning ⚠️
If you're following along by copy/pasting the code, then you've already
declared the produce variable with the const keyword. The following code
will try to redeclare and reassign the variable, so depending on how you're
running the code, it might throw an error.

Remember that variables declared with const cannot be redeclared or reassigned
in the same scope.

*/
const produce = [fruits, vegetables];
console.log(produce);
// Prints: [Array[3], Array[3]]

/*
Instead of combining both arrays, this code actually adds the fruits array at
the first index and the vegetables array at the second index of the produce
array.

How about trying the spread operator?
*/

/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [... fruits, ... vegetables];

console.log(produce);

/*
...Rest Parameter

If you can use the spread operator to spread an array into multiple elements,
then certainly there should be a way to bundle multiple elements back into an
array, right?

In fact, there is! It’s called the rest parameter, and it’s another new
addition in ES6.

Rest parameter

The rest parameter, also written with three consecutive dots ( ... ),
allows you to represent an indefinite number of elements as an array.
This can be helpful in a couple of different situations.

One situation is when assigning the values of an array to variables.
For example,
*/

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
Prints: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

/*
This code takes the values of the order array and assigns them to individual
variables using destructuring (as you saw in the Destructuring section earlier
  in this lesson). total, subtotal, and tax are assigned the first three values
  in the array, however, items is where you want to pay the most attention.

By using the rest parameter, items is assigned the rest of the values in the
array (as an array).


You can think of the rest parameter like the opposite of the spread operator;
if the spread operator is like unboxing all of the contents of a package, then
the rest parameter is like taking all the contents and putting them back into
the package.

Variadic functions

Another use case for the rest parameter is when you’re working with variadic
functions. Variadic functions are functions that take an indefinite number of
arguments.

For example, let’s say we have a function called sum() which calculates the sum
of an indefinite amount of numbers. How might the sum() function be called
during execution?

*/

sum(1, 2);
sum(10, 36, 7, 84, 90, 110);
sum(-23, 3000, 575000);

/*
There’s literally an endless number of ways the sum() function could be called.
Regardless of the amount of numbers passed to the function, it should always
return the total sum of the numbers.

Using the arguments object
In previous versions of JavaScript, this type of function would be handled
using the arguments object. The arguments object is an array-like object that
is available as a local variable inside all functions. It contains a value for
each argument being passed to the function starting at 0 for the first argument,
1 for the second argument, and so on.

If we look at the implementation of our sum() function, then you’ll see how the
arguments object could be used to handle the variable amount of numbers being
passed to it.
*/

function sum() {
  let total = 0;
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}

/*
Now this works fine, but it does have its issues:

If you look at the definition for the sum() function, it doesn’t have any
parameters.

This is misleading because we know the sum() function can handle an indefinite
amount of arguments.

It can be hard to understand.

If you’ve never used the arguments object before, then you would most likely
look at this code and wonder where the arguments object is even coming from.
Did it appear out of thin air? It certainly looks that way.

Using the rest parameter

Fortunately, with the addition of the rest parameter, you can rewrite the
sum() function to read more clearly.
*/

function sum(...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}

/*
This version of the sum() function is both more concise and is easier to read.
Also, notice the for...in loop has been replaced with the new for...of loop.
*/

/*

Quiz: Using the Rest Parameter (1-5)
Directions:
Use the rest parameter to create an average() function that calculates
the average of an unlimited amount of numbers.

TIP: Make sure to test your code with different values. For example,

average(2, 6) should return 4
average(2, 3, 3, 5, 7, 10) should return 5
average(7, 1432, 12, 13, 100) should return 312.8
average() should return 0

Your Code:

/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    let sum=0;
    for (const num of nums) {
        sum += num;
        denominator = nums.length;
    }
    return sum/denominator;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

//another code example with rest Parameters

function add (... args) {
  let result = 0;

  for (const arg of args) result += arg;

  return result
}

console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3,4,5));


/*

Introduction to DOM (Document Object Model)

HTML and CSS are static

Use JS and DOM (web API) to programmatically and dynamically control the way a
website responds to users.

the DOM
Modify Page Content
Browser Events
Performance

*/

/*

The DOM

In this section, we'll look at the Document Object Model - otherwise known as
the DOM.

The words "the DOM" are used all over developer documentation sites and tutorials
on writing interactive JavaScript code. But what is it? Perhaps you've used even
used the DOM and still aren't quite sure what it is. Is it the browser? Is it a
special part of JavaScript? ¯\_(ツ)_/¯

Document Object Model

The HTML specification contains a set of rules for how we should process the
received data (structure).  Whenever an HTML tag is encountered the browser
emits a token (HTML Tags are converted to tokens).  This entire process is done
by the tokenizer.  While the tokenizer is doing its work, there is another
process consuming these tokens and converting them to node objects.  The
tokenizer emits start and end tokens that tell the relationship between the
nodes.  FOr example, goven the HTML and HEAD tags, the StartTag head token comes
before the EndTag HTML token telling that the HEAD token is a child of the
HTML token.  Similarly, the META and LINK tags/nodes are children of the HEAD
tag/node and so on. Eventually once we consume all the tokens, then arrive at
the Document Object Model (DOM).  The DOM is a tree structure that captures the
content and properties of the HTML and all the relationships between the
tags/nodes.  Note that these objects contail all of their properties.  For
example, the image node has a source (src) attribute. The DOM is the full
parsed representation of the HTML markup.


To recap the video, the following steps happen:

1. HTML is received
2. HTML tags are converted to tokens
3. tokens are converted to Nodes
4. Nodes are converted to the DOM

When you request a website, no matter what backend language is powering that
website, it will respond with HTML. The browser receives a stream of HTML.
The bytes are run through a complicated (but fully documented) parsing process
that determines the different characters (e.g. the start tag character <, an
attribute like href, a closing angle bracket like >). After parsing has occurred,
a process called tokenization converts the HTML tokens. Tokenization takes one
character at a time and builds up tokens. The tokens are:

1. DOCTYPE
2. start tag
3. end tag
4. comment
5. character
6. end-of-file

At this state, the browser has received the  bytes that've been sent by a
server. The browser has converted the bytes to tags and has read through the
tags to create a list of tokens.

This list of tokens then goes through the tree construction stage. The output
of this stage is a tree-like structure - this is the DOM!

Two important quotes:

"a tree structure that captures the content and properties of the HTML and all
the relationships between the nodes"

"the DOM is the full, parsed representation of the HTML"

So the DOM is a model (representation) of the relationships and attributes of
the HTML document that was received. Remember that DOM stands for "Document
Object Model". As you learn, to break something down, just read the thing
backwards:

Document Object Model

...would become…

Object Model of the Document!

Remember that a JavaScript object is a tree-like structure that has properties
and values. So the DOM can be accessed using a special object provided by the
browser: document

Try this:

1. open the console on this page
2. type out the word document
    careful not to declare it (const document)
    careful not to wrap it in quotes ("document")
3. press enter
T
hen you shoul be able to view the `document` object in the DevTools'
Console pane.

The document object is provided by the BROWSER and is a representation of the
HTML document. This object is NOT provided by the JavaScript language.
ECMAScript is the language specification that JavaScript is based on, and it
only references the document object model in one place, in its "Global Object"
section:

In addition to the properties defined in this specification the global object
may have additional host defined properties. This may include a property whose
value is the global object itself; for example, in the HTML document object
model the window property of the global object is the global object itself.
(source: https://www.ecma-international.org/ecma-262/#sec-global-object)

Basically, this says that the document object is not part of JavaScript, but is
expected to already exist and be freely accessible to JavaScript code.

The DOM is standardized by the W3C. There are a number of specifications that
make up the DOM, here are few:

Core Specification
Events Specification
Style Specification
Validation Specification
Load and Save Specification

To see the full list of DOM specs, check out the standard
at: https://www.w3.org/standards/techs/dom#w3c_all

The DOM Recap

The DOM stands for "Document Object Model" and is a tree-like structure that
is a representation of the HTML document, the relationship between elements,
and contains the content and properties of the elements.

The DOM is not:

part of the JavaScript language

The DOM is:

constructed from the browser
is globally accessible by JavaScript code using the document object

The DOM is used all of the time and is what will be used all throughout
front end web development.

Further Research:

ECMA - "European Computer Manufacturers Association"
To reflect the global activities of the Europe-based Ecma organization the
name was changed in 1994 to: Ecma International - European association for
standardizing information and communication systems.

DOM Introduction:
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

Section 8.2 Parsing HTML documents:
https://www.w3.org/TR/html5/syntax.html#parsing)
from the W3C's HTML Documentation

DOM Specification on W3C:
https://www.w3.org/standards/techs/dom#w3c_all

HTML Document Object Model mentioned in the ECMAScript Specification:

- the language specification used by JavaScript
https://www.ecma-international.org/ecma-262/#sec-global-object
*/

/*

Selecting Page Elements With CSS Selectors

A CSS Mindset

*/

.header {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto
}

.header.header--clone .header__navbar {
    height: 4.5rem
}

.header.header--stick {
    top: 0;
    background-color: #ffffff;
    z-index: 8000;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.1)
}

.header__navbar {
    max-width: 73.75rem;
    margin-left: auto;
    margin-right: auto;
    height: 4.5rem;
    padding: 0 1.5em
}

/*

CSS Review

QUESTION 1 OF 3
Which of the following will style an element by its ID?

*/

#footer { ... }

/*

QUESTION 2 OF 3
Which of the following will style an element by its class?

*/

.left-nav { ... }

.id { ... }

/*

QUESTION 3 OF 3
Which of the following will style an element by targeting the tag name?

*/

p { ... }

/*

This was a quick review on how to select elements by ID, class, and tag.
Believe it or not, being able to select HTML elements this way is actually
going to be a vital skill in this section where we learn how to access page
elements using JavaScript and the DOM!

*/

/*

Select Page Element By ID
Select An Element By ID
Let's take a look at how we can use JavaScript and the DOM to gain access to
specific elements using their ID attribute.

Remember the document object from the previous section? Well, we're going to
start using it! Remember the document object is an object, just like a
JavaScript object. This means it has key/value pairs. Some of the values are
just pieces of data, while others are functions (also known as methods!) that
provide some type of functionality. The first DOM method that we'll be looking
at is the .getElementById() method:

document.getElementById();

If we ran the code above in the console, we wouldn't get anything, because we
did not tell it the ID of any element to get! We need to pass a string to
.getElementById() of the ID of the element that we want it to find and
subsequently return to us

*/

document.getElementById('footer');

/*

One thing to notice right off the bat, is that we're passing 'footer',
not '#footer'. It already knows that it's searching for an ID
(its name _is_ "getElementById", for a reason!).

If you'd like to read more about this method, check out its documentation page
on MDN: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

*/

/*
To recap:

1. open the DevTools for the page we were looking at:
  https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

2. switch to the Console pane

3. run 'document.getElementById('content');'' on the console

Running this code cause the document object to search through its entire
tree-like structure for the element that has an ID of "content".
*/

/*
QUESTION 1 OF 3
Now, what do you think will happen if you used
document.getElementById(<some-nonexistent-ID>) to search for some ID that
doesn't actually exist in the HTML page?
*/

// null will be returned

/*

We can use document.getElementByID and select the main heading on the page:
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

We can also store this heading inside of a variable and then access that
element later.

*/

document.getElementByID('main-header');

const mainHeading = document.getElementByID('main-header');

mainHeading

/*

QUESTION 2 OF 3
Which of the following will select the element with the ID of logo?

*/

// document.getElementById('logo');

/*

Write the DOM code to select the element with ID strawberry-banner.

*/

document.getElementById('strawberry-banner')

/*

Selecting By ID Recap

In this section, we learned how to select a DOM element by its ID:

.getElementById()

There are a couple of important things to keep in mind about this method:

it is called on the document object
it returns a single item

*/

// select the element with the ID "callout"
document.getElementById('callout');

/*

Further Research
.getElementById() on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

*/


/*

Select Page Elements By Class Or Tag

Selecting Multiple Elements At Once

As I'm sure you remember from learning both HTML structure and CSS styling, an
ID should be unique - meaning two or more elements should never have the same
ID. Since IDs are unique, and since there will be only one element in the HTML
with that ID, document.getElementById() will only ever return at most one
element. So how would we select multiple DOM elements?

The next two DOM methods that we'll be looking at that both return multiple
elements are:

*/

.getElementsByClassName()
.getElementsByTagName()

/*

Accessing Elements By Their Class

The first method we'll look at is .getElementsByClassName():

*/

document.getElementsByClassName();

/*

Similarly to .getElementById(), if we ran the code above in the console, we
wouldn't get anything, because we did not tell it the class to search for!
Also just like .getElementById(), .getElementsByClassName() is expecting that
we call it with a string of the class we want it to search for/return:

*/

document.getElementsByClassName('brand-color');

/*

If you'd like to read more about this method, check out its documentation page
on MDN: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

Use the above MDN documentation page to try out using this method.

*/

document.getElementsByClassName('highlight-spanned');

/*

Beware of the S!

I know we haven't looked at .getElementsByTagName() just yet, but there's
something different about .getElementById() compared with both
.getElementsByClassName() and .getElementsByTagName() that I want to point
out because it can be easy to miss; both .getElementsByClassName() and
.getElementsByTagName() have an extra "s" in their name.

The method's name is .getElementsByClassName(), not .getElementByClassName().
Notice the word right in the middle, it's "Elements" not "Element". If you think
about it, this actually makes a lot of sense! Since both
.getElementsByClassName() and .getElementsByTagName() could return multiple
items, their method names tell us that directly. Now compare this
with .getElementById() that will only ever return at most one element.
Its name has the singular "Element" in it.

I just wanted to point this out because I've been bitten by that missing "s"
many-a-time when running code like:

*/

document.getElementByClassName('highlight-spanned');

/*

This code above will not work, because there is no DOM method
.getElementByClassName() (with singular "Element").

*/

/*

Accessing Elements By Their Tag

After looking at both .getElementById() and .getElementsByClassName(),
the new .getElementsByTagName() method should seem quite easy on the eyes:

*/

document.getElementsByTagName('p');

/*

Let's use the this MDN documentation page to try out using this
method: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

*/

document.getElementsByTagName('pre');

// returns six items
// to see where each one of these are in the dom, right click and choose
// 'Reveal in elements panel', and that will jump to the correct location
// in the elements panel.
// then right click and choose 'Scroll into view'.
// then that will scroll the page into view to show that element

/*

QUESTION 1 OF 3
Which of the following would correctly select all elements with
class: 'splort'?

*/

document.getElementsByClassName('splort');

/*

Write the DOM code to select all <article> elements.

*/

// document.getElementsByTagName('article')

/*

Write the DOM code to select all elements with class: fancy-footer.

*/

// document.getElementsByClassName('fancy-footer')


//Page:
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

document.getElementsByClassName('Line-numbers');

// returns 5 items
// does not retuen an array, but rather an HTML collection
// returns Elements, and Elements is a live HTML collection of all of the
// elements that were found on the page with that class name

/*

What's Returned?

We just saw that .getElementsByClassName() returns an array-like data structure
of elements. But what exactly _is_ an element?

In the next section, we'll take the plunge and look at Elements and Nodes.

Selecting Multiple Elements At Once Recap

In this section, we learned two ways to select multiple DOM elements:

*/

.getElementsByClassName()
.getElementsByTagName()

/*

There are a few important things to keep in mind about these two methods:

both methods use the document object
both return multiple items
the list that's returned is not an array

*/

// select all elements that have the class "accent-color"
document.getElementsByClassName('accent-color');

// select all "span" elements
document.getElementsByTagName('span');

/*

Further Research

.getElementsByClassName() on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

.getElementsByTagName() on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName


*/

/*

Nodes, Elements, and Interfaces

The Node Interface

QUESTION 1 OF 4

Correct order of operation/process (how a DOM is constructed):

1.  characters
1.  tag
2.  token
3.  nodes
4.  DOM


What is a node?

In object-oriented programming Node with a caital N is like a class and node with
a lowercase n is like an object.

Node = class;
  like the blueprint for a building
  it can have the data about the building (properties)
    color
    number of doors
    number of windows
  list of the building's capabilities/functionalities (methods)
    alarm system
    sprinkler system
  anoter word we can use in liew of blueprint is interface
    interface tells is the properties and methods applied to the individual items (objects)
  blueprint or interface with the properties and methods

node = object
  real objexcts built from the blueprint.

⚠️ Interface vs User Interface ⚠️
The word "interface" might be an unclear word right now, and that's ok. I
do want to make sure that you're not connecting this "interface" with a user
interface (UI) or a graphical user interface (GUI).

Our use of "interface" is not related to either a UI or a GUI. Our use of
"interface" is a technical, computer science word for a list of properties and
methods that are inherited.

Node (with a capital "N"!) is a blueprint that contains information about all
of the properties and methods for real nodes (with a lowercase "n"!). If you're
not used to them, the words "interface", "property", and "method" can be kind
of cryptic at first. Just remember that:

interface = blueprint
properties = data
methods = functionality

Let's check out Node on MDN: Node Interface on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Node

Every Node has a ".baseURI" property (URI = uniform resource identifier).
Acces body by typing out "document.body" in the developer console.
ALternatively store it in a variable:

*/

// variable
const bodyEl = document.body;

// call .baseURI"
bodyEl.baseURI
// returns "https://developer.mozilla.org/en-US/docs/Web/API/Node"

// node type
bodyEl.nodeType

// returns 1 (an Element_Node as seen in below note type table)

/*
Node.nodeTypeRead only
Returns an unsigned short representing the type of the node. Possible values are:
Name	Value
ELEMENT_NODE	1
ATTRIBUTE_NODE 	2
TEXT_NODE	3
CDATA_SECTION_NODE	4
ENTITY_REFERENCE_NODE 	5
ENTITY_NODE 	6
PROCESSING_INSTRUCTION_NODE	7
COMMENT_NODE	8
DOCUMENT_NODE	9
DOCUMENT_TYPE_NODE	10
DOCUMENT_FRAGMENT_NODE	11
NOTATION_NODE 	12
*/

/*

So the Node Interface is a blueprint for all of the properties (data) and
methods (functionality) that every real node has after it's been created.
Now, the Node Interface has a lot of properties and methods, but it's not
very specific...I mean, what _is_ a node???

Just like "blueprint for a Building" is not as specific as "blueprint for a
house" or "blueprint for a skyscraper". These are more-specific blueprints.
And these more-specific blueprints would probably have their own properties
and methods that are specific to just houses or just skyscrapers.

This brings us to the "Element Interface".

Element Interface

Just like the Node Interface, the Element Interface is a blueprint for creating
elements: Element Interface on MDN

One really important thing about the Element Interface is that it is a descendent
of the Node Interface.


Event Target <<< Node <<< Element

Element points to its parent, Node.

Since Element is pointing at Node, this indicates that the Element Interface
inherits all of the Node Interface's properties and methods. This means that
any element (lowercase "e"!) that was created from the Element Interface is
also a descendent from the Node Interface...which means the element
(lowercase "e"!) is also a node (lowercase "n"!).

Let's do a little digging around on an element:
https://developer.mozilla.org/en-US/docs/Web/API/Element

Just like hte Node interface the Element interface contains a list of all of
the properties and a list of all of the methods available to an element.

Within the developer console, if you select an element in the elements pane,
$0 refers to that element (the highlighted element).
*/

// returns selected element
$0

// returns selected element's class name(s)
$0.className

// returns true/false if has attribute, i.e., class
$0.hasAttribute(class)

/*
QUESTION 2 OF 4
Does the .outerHTML property come from the Node Interface or the Element
Interface? Check all that apply.

Element Interface
*/

/*
QUESTION 3 OF 4
Which interface does the .id property come from?

Element Interface
*/

/*
QUESTION 4 OF 4
Which interface does the .textContent property come from?

Node Interface
*/


/*
Do you remember the .getElementsByClassName() method on the document object
that we looked at previously? While reviewing the Element interface, you
might've noticed that it also has a .getElementsByClassName() method! The
Element Interface inherits from the Node Interface, not the Document Interface
(yep, there's a Document Interface!). The Element Interface has its
own .getElementsByClassName() that does the exact same thing as the one on
the document object.

This means that you can use the document object to select an element, then you
can call .getElementsByClassName() on that element to receive a list of elements
with the class name that are descendents of that specific element!
*/

// selects the DOM element with an ID of "sidebar"
const sidebarElement = document.getElementById('sidebar');

// searches within the "sidebar" element for any elements with a class of "sub-heading"
const subHeadingList = sidebarElement.getElementsByClassName('sub-heading');

/*
To check out all of the different interfaces, check here: Web API Interfaces:
https://developer.mozilla.org/en-US/docs/Web/API

Recap
Hopefully this was an enlightening lesson on a number of fronts! You learned
about interfaces, properties, and methods; an interface is like a blueprint,
properties are like bits of information or data, and methods are functionality.

We also looked at a couple of specific interfaces:

Node Interface
Element Interface

We saw that both of these interfaces have properties and methods. We also
saw how the Element Interface inherits all of the properties and methods from
the Node interface.

Further Research

Node Interface:
https://developer.mozilla.org/en-US/docs/Web/API/Node

Element Interface:
https://developer.mozilla.org/en-US/docs/Web/API/Element

list of Web API Interfaces:
https://developer.mozilla.org/en-US/docs/Web/API

*/


/*

More Ways To Access Elements
We've been looking at the:

*/

.getElementById()
.getElementsByClassName()
.getElementsByTagName()


/*

Now these DOM methods are standardized. However, not all browsers support
every standard. They do now, for these three methods, but there are hundreds
of other methods with varying levels of support.

That's why almost every method on MDN has a Browser compatibility table that
lists when each browser started supporting that specific method.

Thankfully, all browsers have pretty much aligned to support the official standard.

However, back in the day, that wasn't the case. You had to write different code
to perform the same action in different browsers. Then you had to write code to
check which browser you were in to run the correct code for that browser. Let me
tell you, it was a bit of a nightmare.

Several JavaScript libraries came along to help mitigate these issues. Let's
take a brief look at the jQuery library.

One of the main purposes of the jquery library was to abstract the
differences between the different browsers. As a developer, you'd write jQuery
specific methods and then jQuery wpuld determine which browser it was running in
and use the right code for that browser.  jQuery made it easy to write code that
ran correctly in multiple browsers.  However, now that most browsers try to
support the official standards now, jQuery's use has gradually diminished and
been replaced by native DOM methods.  Nonetheless, out of jQuery's popularity
new DOM methods were created.


We already reviewed this CSS in a previous section, but let's recap it one
more time:

*/

#header {
    color: 'red';
}

.header {
    color: 'red';
}

header {
    color: 'red';
}

/*
Each one of these sets the color to red. The only difference is in the selector;
selecting by ID, selecting by class, and selecting by tag. Got it? Good!

You've already learned the DOM methods to select by ID, class, and tag, too:
*/

.document.getElementById()
.document.getElementsByClassName()
.document.getElementsByTagName()

/*
Three different methods that do almost the exact same thing. Wouldn't it be
awesome if there were a way to do element selecting similar to how CSS does it?

Wait for it - there is!

The querySelector Method

We can use the .querySelector() method to select elements just like we do with
CSS. We use the .querySelector() method and pass it a string that's just like a
CSS selector:
*/

// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return the first element with the class "header"
document.querySelector('.header');

// find and return the first <header> element
document.querySelector('header');

Check out the .querySelector() method on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*
⚠️ .querySelector() Returns A Single Element ⚠️
I want to point out one potentially tricky thing - the .querySelector() method
only returns one element. This makes sense if you use it to search for an element
by ID. However, even though .getElementsByClassName() and .getElementsByTagName()
both return a list of multiple elements, using .querySelector() with a class
selector or a tag selector will still only return the first item it finds.
*/


// query selector with tag h2
document.querySelector('h2');

// query slector with class name .highlight-spanned
document.querySelector('.highlight-spanned')

// Write the .querySelector() code to find the first item with an ID of: fanciful-butterfly.

document.querySelector('#fanciful-butterfly')

// Write the .querySelector() code to find the first paragraph element that also
// has a class of: callout

document.querySelector('p.callout')

/*
The querySelectorAll Method

The .querySelector() method returns only one element from the DOM (if it exists).
However, there are definitely times when you will want to get a list of all
elements with a certain class or all of one type of element (e.g. all <tr> tags).
We can use the .querySelectorAll() method to do this!
*/

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
document.querySelectorAll('header');

/*
Here's the .querySelectorAll() method on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
*/

// .querySelectorAll() for h2 tag
document.querySelectorAll('h2')
// returns all h2 elements (not an array, but a special list called "NodeList")

// can use a for loop to loop over all the items in a NodeList
const listOfElements = document.querySelectorAll('h2');

for(let i = 0; i < listOfElements.length; i++){
    console.log('i is ' + i);
    console.log(listOfElements[i]);
}

// Write the .querySelectorAll() code to find all paragraph elements that
// are descendents of elements that have the class: articles
document.querySelectorAll('.articles p')

/*
Recap

In this section, we took a brief look the history of browser support for
standard DOM methods, the rise of the jQuery library, and how jQuery's success
brought about new DOM methods. The new DOM methods we looked at are

.querySelector() //returns a single element

.querySelectorAll() // returns a list of elements

// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

/*
We also took a brief look that the list returned by .querySelectorAll() is a
NodeList. We saw that it is possible to loop over a NodeList with either
its .forEach() method, or the humble for loop:
*/

const allHeaders = document.querySelectorAll('header');

for(let i = 0; i < allHeaders.length; i++){
    console.dir(allHeaders[i]);
}

/*

Further Research

jQuery website:
https://jquery.com/

.querySelector() method on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

.querySelectorAll() method on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

NodeList on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/NodeList

*/

/*

Intro: Creating Content with JavaScript

DOM Selection Model

* .getElementById()
* .getElementByClassName()
* .querySelector()

Interfaces

* Node
* Elements

Javascript & the DOM

* Create
* Delete
* Manipulate

*/


/*

Update Exsiting Page Content

* .innerHTML
* .textContent
* .innerText

Let's jump right into it. Open up the project in your browser. There's only one
HTML file (index.html).

💡Project Code 💡

You can clone the project from the GitHub link below.

Project repository: https://github.com/udacity/course-JS-and-the-DOM
*/

// Write the DOM code necessary to select the first element with class: card
document.querySelector('.card')

// Let's store the first .card element in a variable for easy access:
const nanodegreeCard = document.querySelector('.card');

/*
Now that we've stored the first card element in the nanodegreeCard variable,
we can use nanodegreeCard to refer to this element instead of having to
use document.querySelector('.card') to select the element every time we need
access to it.
*/

/*

An Element's Inner HTML

Every element inherits properties and methods from the Element Interface
(remember this from the previous lesson!). This means that every element
has an .innerHTML property. This property, as it's rightly named,
represents the markup of the element's content. We can use this property to:

get an element's (and all of its descendants!) HTML content
set an element's HTML content

*/



/*
QUESTION 2 OF 4
What is .innerHTML?

a property
*/

/*
QUESTION 3 OF 4
What does .innerHTML return?

a string
*/


/*

💡 Innie vs Outie 💡
The .innerHTML property sets or returns the HTML content inside the selected
element (i.e. between the tags).

There's also the rarely used .outerHTML property. .outerHTML represents the
HTML element itself, as well as its children.

*/

<h1 id="pick-me">Greetings To <span>All</span>!</h1>

const innerResults = document.querySelector('#pick-me').innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"

/*

An Element's Text Content

So .innerHTML will get/set an element's HTML content. If we just want the
text content, we can use the fantastically named .textContent property!

The .textContent property will:

set the text content of an element and all its descendants
return the text content of an element and all its descendants

Let's check it out!

*/

// .querySelector()
const nanodegreeCard = document.querySelector('.card');

// .textContent
nanodegreeCard.textContent

// .innerHTML
nanodegreeCard.innerHTML

/*
Check out the .textContent's documentation page on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
*/

/*
Setting an element's text content is easy, just set it like you would any
other property:
*/

nanodegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";

/*
QUESTION 4 OF 4
<h1 id="test">Ice Cream Flavors</h1>
Given the HTML above, what will be the .textContent value after running this code:
*/
const myElement = document.querySelector('#test');
myElement.textContent = 'The <strong>Greatest</strong> Ice Cream Flavors';

//The < strong >Greatest</ strong > Ice Cream Flavors

/*
We just saw that passing text that contains HTML characters to .textContent
will not display the content as HTML. Instead, it will still display everything
as text - even the HTML characters!

If you'd like to update an element, including its HTML, then you need to use
the .innerHTML property:
*/

myElement.textContent = 'The <strong>Greatest</strong> Ice Cream Flavors'; // doesn't work as expected

myElement.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors';  // works as expected


// use $0 'trick'
const heading = $0

//update text - html not rendered
heading.textContent = 'Our Amazing Community <em>ROCKS</em>!';

// update inner html - htnl rendered
heading.innerHTML= 'Our Amazing Community <em>ROCKS</em>!';

/*

An Element's Text Content - Version 2!

We can't close this section out without looking at the .innerText property!

Like the .textContent property, the .innerText property can be used to get/set
an element's text content, but there are some important differences between the two properties.

.textContent sets/gets the text content of an element...pretty clear and simple.

.innerText, on the other hand, is a little tricker. Let's see this in action and
then we'll discuss it!

*/

// query selector
const nanodegreeCard = document.querySelector('.card');

// .textContent
nanodegreeCard.textContent

// .innerText
nanodegreeCard.innerText

/*

As you saw, .innerText will get the visible text of the element. This is an
important distinction! If CSS is used to hide any text inside that element,
.innerText will not return that text, while .textContent will return it. And
it's not just the hiding/showing nature of CSS that .innerText adheres to,
.innerText will also honor changes to things like capitalization.

The .textContent property has been a standard for quite a long time. Conversely,
.innerText property is a relatively new addition to the HTML specification.
It has been around for a while but was not fully supported by all browser
because it was not a part of the HTML specification.

Between .textContent and .innerText, you probably want to use .textContent
since that will return all of the text no matter what. Rarely will you actually
want only the visible text.

Update Existing Content Recap
In this section, we looked at multiple ways to change page content:

.innerHTML
.textContent
.innerText

We saw that to set HTML content for an element, out of the three properties
list above, we can only use .innerHTML. Using .textContent will erroneously
include the HTML characters as plain text inside the element.

We also looked at the difference between .textContent and .innerText.
.textContent completely ignores any CSS styling and returns all of the
element's HTML just as it's listed in the HTML. On the other hand,
the .innerText property will take CSS styling into consideration and will
return the text that is visibly rendered on the page.

Further Research

innerHTML on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

textContent on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

innerText on MDN
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText

Article: The poor, misunderstood innerText
http://perfectionkills.com/the-poor-misunderstood-innerText/

Article: innertext vs. textcontent
https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/
*/


// Add New Page Content

.createElement()
.createTextNode()
.appendChild()
.insertAdjacentHTML()

/*
QUESTION 1 OF 4
You've learned about the document object, the Node Interface, and the Element
interface. Where does .createElement() come from?

the document object
*/

/*
What is the URL for the "createElement" page on MDN?

https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
*/

/*
QUESTION 3 OF 4
Which of the following would create a new paragraph element?
*/

document.createElement('p');


// As you've already discovered, the .createElement() method is a method on the
// document object:

// creates and returns a <span> element
document.createElement('span');

// store it in a variable
const container = document.createElement('span');

// add text to span
container.textContent = ', right now!'

// creates and returns an <h3> element
document.createElement('h3');

/*
Here's the .createElement() documentation page on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
*/

/*
Adding Content To The Page

You may have noticed that using document.createElement() to create an element
didn't actually add that newly created element anywhere on the page! Creating
an element...just creates it. It doesn't add it to the DOM. Since the element
isn't added to the DOM, it doesn't appear in the page (if you remember,
the DOM is the parsed representation of the page). So, now that we can create
brand new elements, we need to be able to add them to the DOM so that they'll
show up on the page.

We can use the .appendChild() method to add an element to the page! Before we
see how this element works, let's quickly define the word "append". There are
several different definitions of the word, but I like the wording of the
Cambridge Dictionary's the best:

to add something to the end of a piece of writing


Now, to use the .appendChild() method, it needs to be called on another element,
not the document object!
*/

// create a brand new <span> element
const newSpanElement = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpanElement);

// newSpanElement
newSpanElement

/*
I like the Cambridge Dictionary's version because it clearly states how the
content is added at the end. The .appendChild() method is called on one element,
and is passed the element to append. The element that is about about to be
appended is added as the last child. So, in the example above, the <span> element
will appear in the DOM as a child of the <h1>...but it will appear at the end,
after all text and any other elements that might be in the <h1>.

Here's the .appendChild() documentation page on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

⚠️ .appendChild() Needs An Element! ⚠️
This is stated above, but I wanted to call this out, specifically. When you're
using the .appendChild() method, it must be called on an existing element. To
be clear, you can't call this on the document object, so the following will
result in an error:
*/

// causes an error
document.appendChild(newSpan);


// new variable with span
const newSpanElement = document.createElement('span');

// add text to span
newSpanElement.textContent = ', right now!'

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpanElement);
// Mainm Heading now displays 'Learn Arkit, right now!'

/*

Creating Text Nodes

Just like you created new elements with the .createElement() method, you can
also create new text nodes using the .createTextNode() method. Take a look at
the following code that:

creates an paragraph element
creates a text node
appends the text node to the paragraph
appends the paragraph to the tag

*/

const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);

/*
However, since you already know about the .textContent property, the code
below will provide the exact same result:
*/

const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);

/*
Therefore, instead of creating a new text node and appending it to an
element, it's faster and easier to just update the element's text with
the .textContent property.

For more info, check out the documentation:
https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
*/


/*
QUESTION 4 OF 4
What happens after running this code?
*/

const mainHeading = document.querySelector('h1');
const otherHeading = document.querySelector('h2');
const excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText);

/*
Don't guess it, test it! This one might surprise you!

The .appendChild() method will move an element from its current position
to the new position.

only otherHeading has three exclamation marks
*/

/*

Inserting HTML In Other Locations

By definition, the .appendChild() method will add an element as the last child
of the parent element. It's impossible to put it as the first child or
anywhere else...it has to be the last child. Wouldn't it be nice if there were
a little flexibility in where we could add the child element?

Enter the .insertAdjacentHTML() method! The .insertAdjacentHTML() method has to
be called with two arguments:

1. the location of the HTML
2. the HTML text that is going to be inserted

The first argument to this method will let us insert the new HTML in one of
four different locations

1. beforebegin – inserts the HTML text as a previous sibling
2. afterbegin – inserts the HTML text as the first child
3. beforeend – inserts the HTML text as the last child
4. afterend – inserts the HTML text as a following sibling

A visual example works best, and MDN's documentation has a fantastic example
that I'll modify slightly:
*/

<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->

// Here's how we'd call .insertAdjacentHTML():

const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);

/*
Check out the documentation page for more information:
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
*/



/*

Add New Page Content Recap
In this section, we learned how to create new DOM elements and add them to the
page. We looked at the following methods:


.createElement() to create new elements

.appendChild() to add a child element to a parent element as its last child

.createTextNode() to create a text node

.insertAdjacentHTML() to put HTML text anywhere around an element
Some important things to note are:

if an element already exists in the DOM and this element is passed to
.appendChild(), the `.appendChild() method will move it rather than duplicating
it

an element's .textContent property is used more often than creating a text node
with the .createTextNode() method

the .insertAdjacentHTML() method's second argument has to be text, you can't
pass an element

Further Research

createElement on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

createTextNode on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode


appendChild on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

insertAdjacentHTML on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

*/

/*

Remove Page Content
What's in store!
In this quick section, you're going to learn how to remove content from the
page. Specifically, we'll look at these new methods:

*/

.removeChild()
.remove()

/*
In the process, you'll also learn about these two properties:
*/

.firstElementChild
.parentElement

/*
Removing a Child Element
We can use the .removeChild() method to...wait for it...remove a child element.
Basically, this is exactly the opposite of the .appendChild() method. So just
like the .appendChild() method, the .removeChild() method requires:

a parent element
the child element that will be removed
*/

// <parent-element>.removeChild(<child-to-remove>);


/*
Here's the .removeChild() documentation page on MDN: removeChild docs
https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

Let's see how to use this method:
*/

// select card to remove
const cardContainer = $0;

// select first child (whitespace)
cardContainer.firstChild;

// select first child element (what you actually want)
cardContainer.firstElementChild;

// store in variable
const firstCard = cardContainer.firstElementChild;

// remove card
cardContainer.removeChild(firstCard);

/*
A drawback (and workaround!) with the .removeChild() Method
Just like the .appendChild() method, there's a (somewhat minor) drawback to
the .removeChild() method. Both methods:

require access to parent to function

However, we don't actually need to have the parent element because there is a
workaround! Just like the .firstElementChild property can be called on a parent
element to access its first element, every element also has a parentElement
property that refers to its parent! So if we have access to the child element
that we're about to add or remove, you can use the parentElement property to
"move focus" to the element's parent. Then we can call .removeChild()
(or .appendChild()) on that referenced parent element.

Let's look at an example:
*/

const mainHeading = document.querySelector('h1');

mainHeading.parentElement.removeChild(mainHeading);

// Let's walk through this code.

const mainHeading = document.querySelector('h1');

// The preceding code will select the first <h1> on the page and stores it in the
// mainHeading variable. Now to the next line:

mainHeading.parentElement.removeChild(mainHeading);

/*
This starts with the mainHeading variable. It calls .parentElement, so the focus
of the next code is directed at the parent element. Then .removeChild() is
called on the parent element. Finally, mainHeading itself is passed as the
element that needs to be removed from its parent.

So an element uses itself to remove itself from its parent. Pretty cool, huh?
*/

/*
Removing a Child Element (Part 2!)

We went through all of those steps selecting an element, using DOM traversal
techniques like .parentElement and .firstElementChild, so that we can remove a
child element. I showed you this way so that you can get some exposure and
practice to moving around in the DOM.

Now, you might be glad (or frustrated! haha) to find out there's an easier
way to do all this! We can move the child element directly with the .remove()
method:
*/

const mainHeading = document.querySelector('h1');

mainHeading.remove();

/*
Here's the .remove() documentation page on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
*/

/*
Remove Page Content Recap

In this short section, we learned two ways to remove an element from the page.
You learned about:
*/

.removeChild()
.remove()

/*
The difference is that with .removeChild() must be called on the parent of the
element being removed and must be passed the child to be removed, while .remove()
can be called directly on the element to delete.

We also learned about the following helpful properties:

.firstChild
.firstElementChild
.parentElement

The difference between .firstChild and .firstElementChild, is that
.firstElementChild will always return the first element, while .firstChild
might return whitespace (if there is any) to preserve the formatting of the
underlying HTML source code.

Further Research

removeChild on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

remove on MDN
https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove

firstChild on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild

firstElementChild on MDN
https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/firstElementChild

parentElement on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement
*/

/*
Style Page Content

In this section, we'll be looking at controlling page and element styling
using the following properties and methods:

.style.<prop>
.cssText()
.setAttribute()
.className
.classList
*/

/*
QUESTION 1 OF 6
Before we begin, put these in the correct order of CSS specificity. Put the
least-specific option at the top and the most-specific option at the bottom.

Submit to check your answer choices!
LEVEL OF SPECIFICITY    CSS RULE

Least specific          rules in a stylesheet

More specific           rules in a <style. tag

Most specific           rules is a tag's style attribute


CSS Specificity

To be successful in this section, it will help to have an understanding of how
CSS Specificity works. According to the MDN, "specificity" is:

the means by which browsers decide which CSS property values are the most
relevant to an element and, therefore, will be applied.

Basically, the closer the style rule is to an element, the more specific it is.
For example, a rule in a style attribute on an element will override a style
rule for that element in a CSS stylesheet. There is also the specificity of the
type of selector being used. An _ID_ is more specific than a class.

If you'd like to learn more about CSS Specificity, check out the following
links:

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/

Modifying an Element's Style Attribute

Let's jump back to your knowledge of CSS. When trying to style an element,
the most-specific rules that you can write for an element are written in that
element's style attribute. Lucky for us, we can access access an element's style
attribute using the .style property!

*/

const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'red';

/*
Now, I want to point out that when using the .style property, you can only modify
one CSS style at a time. That's why the previous code has .style.color = 'red'
and not just .style = 'red'.

Check out the documentation page for more information:
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/

// select heading and store in variable
const heading = $0;

// set color to orange
heading.style.color = 'orange';

// increase font font size
heading.style.fontSize = '2em';

// heading.style
heading.style


/*

Adding Multiple Styles At Once

We've seen how the .style.<property> syntax will let us change just one piece of
styling for an element. So if we wanted to set an element's color, background
color, and font size, we'd have to use three separate lines of code:
*/

const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'blue';
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';

/*
...and that's just for setting three styles. Imagine if we needed 15 or 20 d
ifferent styles! So the .style.property syntax is perfect for setting one style
at a time, but it's not great for controlling multiple styles.

Fortunately, we can use the .style.cssText property to set multiple CSS styles
at once!
*/

const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';

/*
Notice that when using the .style.cssText property, you write the CSS styles
just as you would in a stylesheet; so you write font-size rather than fontSize.

// This is different than using the individual .style.<property> way.

/*
QUESTION 4 OF 6

<p id="quizzing-quizzes" style="color: orange;">Howdy</p>

For the element above, which of the following styles will be applied after
running this code?

*/

document.querySelector('#quizzing-quizzes').style.cssText = 'width: 30px; textDecoration: underline;';

// width


/*
Setting An Element's Attributes

Another way to set styles for an element is to bypass the .style.<property>
and .style.cssText properties altogether and use the .setAttribute() method:
*/

const mainHeading = document.querySelector('h1');

mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');

/*

Check out the documentation page for more information:
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/


.setAttribute() // Is Not Just For Styling

/*
The setAttribute() method is not just for styling page elements. You can use
this method to set any attribute for an element. If you want to give an element
an ID, you can do that!:
*/

const mainHeading = document.querySelector('h1');
// add an ID to the heading's sibling element mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');
// use the newly added ID to access that element document.querySelector('#heading-sibling').style.backgroundColor = 'red'; `

// The last two lines could've been combined into one to bypass setting an ID and
// just styling the elment directly:

mainHeading.nextElementSibling.style.backgroundColor = 'red';

// ...but this was just to demonstrate that it's possible to set an attribute with
// JavaScript that affects the DOM which then can be used immediately

/*
Separations of Concerns

HTML in HTML file
Styling in CSS file
Interactivity in JS file

Best not to mix these together

Instead of writing our styles in JavaScript, have it control the class attribute
for an element.
*/

/*
Accessing an Element's Classes

The first element property we'll look at is the .className property. This
property returns a string of all of the element's classes. If an element has
the following HTML:
*/

<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>

/*
We could use .className to access the list of classes:
*/

const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);

// The .className property returns a space-separated string of the classes. This
// isn't the most ideal format, unfortunately. We can, however, convert this
// space-separated string into an array using the JavaScript string method,

.split():

const arrayOfClasses = listOfClasses.split(' ');

// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);

// Now that we have an array of classes, we can do any data-intensive calculations:

/*
use a for loop to loop through the list of class names
use .push() to add an item to the list
use .pop() to remove an item from the list

.className is a property, so we can set its value just by assigning a string to the property:
*/

mainHeading.className = "im-the-new-class";

/*
The above code erases any classes that were originally in the element's class
attribute and replaces it with the single class im-the-new-class.

Since .className returns a string, it makes it hard to add or remove individual
classes. As I mentioned earlier, we can convert the string to an array and then
use different Array Methods to search for a class remove it from the list, and
then update the .className with the remaining classes. However, we
don't want to do all of that work! Let's use the newer .classList property.
*/

/*
The .classList Property

The .classList property is newer than the .className property, but is much
nicer, check it out:
*/

<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>

const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.classList;

// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);

/*
Check out the documentation page on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/

/*
QUESTION 5 OF 6
Review the classList property's documentation. What data structure does the
.classList property return?

a DOMTokenList
*/


// The .classList property has a number of properties of its own. Some of the most
// popularly used ones are:

.add() - to add a class to the list
.remove() - to remove a class from the list
.toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
.contains() - returns returns a boolean based on if the class exists in the list or not

// Let's take a look!

// store heading in a variable
const heading = $0;


// check to see of heading has class 'text-center'
heading.classList.contains('text-center');
//returns boolean true/false

// add 'ice-cream' class
heading.classList.add('ice-cream');

// remove 'ice-cream' class
heading.classList.remove('ice-cream');

// toggle class off (false)
heading.classList.toggle('text-center')

// toggle class on (true)
heading.classList.toggle('text-center')

/*

QUESTION 6 OF 6
What happens if you try to toggle a nonexistent class? For example, if you had
this HTML:

<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>

...what would happen after running the following JavaScript:

*/

const mainHeading = document.querySelector('#main-heading');

mainHeading.classList.toggle('richard');

// the richard class is added to the list of classes

// select h6 heading with class 'text-center'
const communityHeading = document.querySelector('h6.text-center');

// set font size
communityHeading.style.fontSize = '2em';

// set color
communityHeading.style.color = 'purple';

/*

moving <script src="app.js"></script> from bottom of html file to head section
resulted in the style changes reverting back and the app.js style changes are
mot applied

why? specificity?

/*

Style Page Content Recap

We learned a ton of content in this section! We looked at:

modifying individual styles with .style.<prop>
updating multiple styles at once with .style.cssText
getting/setting a list of classes with .className
getting/setting/toggling CSS classes with .classList

My recommendation to you is that, out of the list of techniques you learned in
this section, to use the .classList property more than any other. .classList is
by far the most helpful property of the bunch, and it helps to keep your CSS
styling out of your JavaScript code.

Further Research

style on MDN
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

Article: Using dynamic styling information
https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information

DOM methods to control styling
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#DOM-CSS_CSSOM

nextElementSibling on MDN
https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling

className on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Element/className

classList on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

Specificity on MDN
https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

Article: CSS Specificity: Things You Should Know
https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/

*/

/*

Intro: working with Browser Events

In previous section learned to add, remove and style page content using the
browser's developer tools.  However JavaScript code needs to be written in a
JavaSxcript file. Now we learn how to run the DOM manipulating the JavaScript
code in response to actions users take.  We'll look at:

1. what events are,
2. how to respond to events,
3. what data is stored in an event, and
4. how to stop an event.

You will now be able to programmatically control the page.

Lesson Overview

To recap, we'll be looking at :

Events - what they are
Responding to an event - how to listen for an event and respond when one happens
Event Data - harness the data that is included with an event
Stopping an event - preventing an event from triggering multiple responses
Event Lifecycle - the lifecycle stages of an event
DOM Readiness - events to know when the DOM itself is ready to be interacted with

This lesson is chock full of incredibly useful information, so don't skim
over anything!
*/

/*

What is an event?

An event is like an announcement. When something happens in the browser, it will
make an announcement, and we can use JavaScript to listen for the announcement and
respond.

*/

/*

Seeing An Event

There is a hidden world of events going on right now on this very page! It's
really hard to actually see into this hidden world, though. So how can we know
that events really are being announced? If they are being announced, how come
they're not easy for us to see?

Fortunately, the Chrome browser has a special monitorEvents() function that will
let us see different events as they are occurring.

Check out the documentation on the Chrome DevTools site:
https://developers.google.com/web/tools/chrome-devtools/console/events#monitor_events

*/

/*
Examples of events:

click
dblclick
scroll
resize

However, there are hundreds more!

The monitorEvents function will keep spitting out all of the events that are
happening on the targeted element until the end of time...that, or until you
refresh the page. Alternatively, the Chrome browser does offer an
unmonitorEvents() function that will turn off the announcing of events for
the targeted element:

*/

// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);

/*
One last little bit of info on monitorEvents is that this is for development/testing
purposes only. It's not supposed to be used for production code.
*/

/*

Respond to Events

An Event Target

Do you remember the Node Interface and the Element interface from the first
lesson? Do you remember how the Element Interface is a descendant of the
Node Interface, and therefore inherits all of Node's properties and methods?

Well there was one piece that I totally skipped over then but am addressing now.
The Node Interface inherits from the EventTarget Interface.

EVENT TARGET<<<NODE<<<ELEMENT

The EventTarget Interface is inherited by all nodes and elements.

The EventTarget page says that EventTarget:

is an interface implemented by objects that can receive events and may have
listeners for them.

and

Element, document, and window are the most common event targets, but other
objects can be event targets too…

As you can see above, the EventTarget is at the top of the chain. This means
that it does not inherit any properties or methods from any other interfaces.
However, every other interface inherits from it and therefore contain its
properties and methods. This means that each of the following is an "event target";

the document object
a paragraph element
a video element
etc...

I want to drive home that both the document object and any DOM element can be
an event target. And again, why is this?...because both the Element Interface
and the Document Interface inherit from the EventTarget Interface. So any individual
element inherits from the Element Interface, which in turn inherits from the
EventTarget Interface. Likewise, the document object comes from the Document
Interface, which in turn inherits from the EventTarget Interface.

If you take a look at the EventTarget Interface, you'll notice that it
doesn't have any properties and only three methods! These methods are:

.addEventListener()
.removeEventListener()
.dispatchEvent()

The one that we'll be looking at for the rest of this course will be the
.addEventListener() method.

Adding An Event Listener

We've taken a brief look at this hidden world of events. Using the
.addEventListener() method will let us listen for events and respond to them!
I just said "listen for events". There are several ways to "phrase" this, so
I want to give some examples:

listen for an event
listen to an event
hook into an event
respond to an event

...all of these mean the same thing and are interchangeable with one another.

Let's use some pseudo-code to explain how to set an event listener:
*/

// <event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);

/* So an event listener needs three things:

1. an event target - this is called the target
2. the type of event to listen for - this is called the type
3. a function to run when the event occurs - this is called the listener

The <event-target> (i.e. the target) goes right back to what we just looked
at: everything on the web is an event target (e.g. the document object,
a <p> element, etc.).

The <event-to-listen-for> (i.e. the type) is the event we want to respond to.
It could be a click, a double click, the pressing of a key on the keyboard,
the scrolling of the mouse wheel, the submitting of a form...the list goes on!

The <function-to-run-when-an-event-happens> (i.e. the listener) is a function
to run when the event actually occurs.

Let's transform the pseudo-code to a real example of an event listener:
*/

const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function () {
  console.log('The heading was clicked!');
});

/*
Let's break down the snippet above:

the target is the first <h1> element on the page
the event type to listen for is a "click" event
the listener is a function that logs "The heading was clicked!" to the console

Check out the documentation for more info:
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/

document.addEventListener('click', function() {
  console.log('The page was clicked.');
})
// returns number of clicks & 'The page was clicked.''
/*


// QUESTION 1 OF 3

// In the following code, what is the event type?

const lotsOfElements = document.querySelectorAll('.quizzing-quizzby');
const element = lotsOfElements[2];

element.addEventListener('animationend', function () {
    const mainHeading = document.querySelector('h1');

    mainHeading.style.backgroundColor = 'purple';
});


// The string animationend
// The string animationend is the event listener's type.



// QUESTION 2 OF 3
// Given this code:

document.addEventListener('keypress', function () {
    document.body.remove();
});

// What will happen if the mouse is used to click the page?

// nothing
// This code sets up a listener only for when a key is pressed. If the
// document is clicked, no listener is set up for that, so the click is ignored.

/*
Add Event Listener to the Project

Running code in a browser's developer tools is fantastic for testing. But that event listener will only last until the page is refreshed. As with all real JavaScript code that we want to send to our users, our event listener code needs to be in a JavaScript file.

Let's try adding an Event Listener to our project's files!
*/


/*
So far, we've only looked at the "click" event and a couple of other ones. When
we used the monitorEvents() function in the previous section, we saw a number of
different event types (e.g. dblclick, scroll, resize).

How do you know what events are even out there to listen for? The answer is
easy - documentation! To see a full list of all of the possible events you can
listen for, check out the Events documentation:
https://developer.mozilla.org/en-US/docs/Web/Events

*/

/*
Recap

In this section, you learned all about events, the EventTarget Interface, and
how to add event listeners. We used the .addEventListener() method to attach
listeners to:

the document
a Node
an Element

...basically anything that inherits from the EventTarget Interface. We also saw
that there are three main parts to an event listener:

an event target - the target
the type of event to listen for - the type
a function to run when the event occurs - the listener

Further Research

addEventListener on MDN
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

EventTarget Interface
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget

Introduction to events
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

List of Events
https://developer.mozilla.org/en-US/docs/Web/Events
*/


/*

Remove an Event Listener

Removing An Event Listener

We say that we can use an event target's .addEventListener() method to start
listening for specific events and respond to them. Let's say you only want to
listen for just the first click event, respond to it, and ignore all other click
events. The .addEventListener() event will listen for and respond to all click
events.

(The newest version of the .addEventListener() specification does allow for an
object to be passed as a third parameter. This object can be used to configure
how the .addEventListener() method behaves. Of note, there is an option to listen
for only a single event. However, this configuration object is not widely
supported just yet).

To remove an event listener, we use the .removeEventListener() method. It sounds
straightforward enough, right? However, before we look at .removeEventListener(),
we need to take a brief review of object equality. It seems like an odd jump,
but it'll make sense in just a moment.

Are Objects Equal in JavaScript

Equality is a common task in most programming languages, but in JavaScript, it
can be a little bit tricky because JavaScript does this thing called type
coercion where it will try to convert the items being compared into the same
type. (e.g. string, number,). JavaScript has the double equality (==) operator
that will allow type coercion. It also has the triple equality (===) symbol that
will prevent type coercion when comparing.

Hopefully, this is all review. But let's talk about just object equality, which
includes objects, arrays, and functions. Try giving this quiz a shot:

QUESTION 1 OF 4

Will the following equality test result in true or false?

{ name: 'Richard' } === { name: 'Richard' }


false
(Potentially) Counterintuitively, these two objects are not equal.

*/

/*
Even though two objects look the same, that doesn't mean they are identical.
The same information does not indicate equality.  When working with JavaScript
objects and equality, need to think about are they two separate objects or
are they different names referring to the same object.

*/




// QUESTION 2 OF 4
// Given this code:

var a = {
    myFunction: function quiz() { console.log('hi'); }
};
var b = {
    myFunction: function quiz() { console.log('hi'); }
};

// Does the following code evaluate to true or false?

a.myFunction === b.myFunction


// false
// This is the same thing as { name: 'Richard' } === { name: 'Richard' }; both
// of the myFunction functions are different functions. They look the same, but
// they are distinct entities.


// QUESTION 3 OF 4
// Given this code:

function quiz() { ... }

var a = {
    myFunction: quiz
};
var b = {
    myFunction: quiz
}

// Does the following code evaluate to true or false?

a.myFunction === b.myFunction

// true
// Both of the myFunction functions are referring to the same, exact quiz function.


/*

Ok, so why do we care about any of this object/function equality? The reason is
that the .removeEventListener() method requires you to pass the same exact
listener function to it as the one you passed to .addEventListener().

Let's see some pseudo-code for the .removeEventListener():

*/

// <event-target>.removeEventListener(<event-to-listen-for>, <function-to-remove>);

/*
So an event listener needs three things:

an event target - this is called the target
the type of event to listen for - this is called the type
the function to remove - this is called the listener

Remember, the listener function must be the exact same function as the one used
in the .addEventListener() call...not just an identical looking function. Let's
look at a couple of examples.

This code will successfully add and then remove an event listener:
*/

function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);

/*

Now, why does this work? It works because both .addEventListener()
and .removeEventListener:

have the same target
have the same type
and pass the exact same listener

Now let's look at an example that would not work (it does not remove the
event listener):
*/

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', function myEventListeningFunction() {
    console.log('howdy');
});

/*
This code does not successfully remove the event listener. Again, why does this
not work?

1. both .addEventListener() and .removeEventListener have the same target
2. both .addEventListener() and .removeEventListener have the same type
3. .addEventListener() and .removeEventListener have their own distinct listener
functions...they do not refer to the exact same function (this is the reason
the event listener removal fails!)

Why don't you try your hand at this!
*/

// QUESTION 4 OF 4
// Assuming that myForm is a <form> element, will the <form> element have a
// submit event listener after running the following code, or not?

myForm.addEventListener('submit', function respondToSubmit(){...});
myForm.removeEventListener('submit', function respondToSubmit(){...});

// the element will still have an event listener
// Since both .addEventListener() and .removeEventListener provide their own
// respondToSubmit() function and do not refer to the same function, the event
// listener removal fails, and the <form> will still have an event listener
// attached to it.

// keypress event listener
document.body.addEventListener('keypress', function () {
  console.log('removing first child');
  document.querySelector('#contain-all').firstElementChild.remove();
});


/*
What's Next?

Now that we've learned about adding and removing event listeners, it's time to
learn about the phases of an event!

Recap

In this section, you learned about how to remove event listeners. You took a
dive into object equality and how that plays a huge part in removing an event.
Lastly, we also looked at how you can find out what event listener a DOM element
has by using the DevTools.

Further Research

removeEventListener on MDN
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

Easily jump to event listeners
https://developers.google.com/web/updates/2015/05/easily-jump-to-event-listeners

Equality comparisons and sameness
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

Article: Object Equality in JavaScript
http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html

EventTarget Interface
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget

Search or ask questions in Knowledge.
Ask peers or mentors for help in Student Hub.
*/

/*

Phases of an Event


Thinking about nodes and how the DOM is structured, after running the code
below, which event listener will fire first when the page is clicked?
*/

document.addEventListener('click', function () {
   console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
    console.log('The document body was clicked');
});

/*


/*
Event Phases

There are three different phases during the lifecycle of an event. They are:

the capturing phase
the at target phase
and the bubbling phase

And they actually follow the order above; first, it's capturing, then at target,
and then the bubbling phase.

Most event handlers run during the at target phase, such as when you attach a
click event handler to the button. The event arrives at the button (its target),
and there's only a handler for it right there, so the event handler gets run.

But sometimes you have a collection of items -- such as a list -- and want to
have one handler cover every item (and still have the option of individual
handlers for some items.) By default, if you click on a child item and a
handler doesn't intercept the click, the event will "bubble" upward to the
parent, and keep bubbling until something handles it or it hits the document.

Capturing, on the other hand, lets the parent intercept an event before it
reaches a child.

Let's dig into these phases to see how they affect when events fire and the
order they fire in!
*/


// phases of an event

// sample html:

<html>
<body>
  <div class = "container">
    <p>
      <button>Dare to Click me?</button>
    </p>
  </div>
</body>
</html>

/*

The important part in HTML above is the button.
Clicking on event starts the whole process.

  1.    We first start off in the capturing phase.

          Starts at HTML Element and works its way down

            html>>>body>>>div>>>p>>>button

  2.    Once it reaches the element that was clicked it switches to the at target

  3.    Then it switches to the bubbling phase and works its way all the way up

          Works its way back up from button element

            button>>>p>>>div>>>body>>>html

*/

/*
The three event phases of an event: capturing, at target, and bubbling.

So of the three phases in an event, which one does the .addEventListener()
method actually use? And, how can we change it?

Up until this point, we've only seen the .addEventListener() method called with
two arguments, the:

1. event type
2. and the listener
*/

document.addEventListener('click', function () {
   console.log('The document was clicked');
});

/*
There's actually a third argument to the .addEventListener() method; the
useCapture argument. From it's name, you'd think that if this argument were left
out, .addEventListener() would default to using the capturing phase. This is an
incorrect assumption! By default, when .addEventListener() is called with only
two arguments, the method defaults to using the bubbling phase.

The code below uses .addEventListener() with only two arguments, so it will
invoke the listener during the bubbling phase:
*/

document.addEventListener('click', function () {
   console.log('The document was clicked');
});

/*
However, in this code, .addEventListener() is called with three arguments with
the third argument being true (meaning it should invoke the listener earlier,
during the capturing phase!).
*/

document.addEventListener('click', function () {
   console.log('The document was clicked');
}, true);



// Let's take a look at event handlers setup for the different event phases

// sample html:

<html>
<body>
  <div class = "container">
    <p>
      <button>Dare to Click me?</button>
    </p>
  </div>
</body>
</html>

/*
this time set a:

    1.  capture event listener to the paragraph
    2.  bubble listener to the body
    3.  bubble listener to the button

The important distinction is that the paragraph is set to the capturing phase
while the body and button are, by default, set to the bubbling phase.

When button is clicked it starts at the top (HTML) and works its way down.

      1.    We first start off in the capturing phase.

              Starts at HTML Element and works its way down

                html>>>body

      2.    When it reaches the body, it does not run function because it is in
            the capture stage

                body>>>div>>>p

      3.    When it reaches the paragrpah it will run the listener function

                Does this because it was set up to run in the capturing phase

                p>>>button

      4.    Then it moves to the button and switches from capturing to target
            to bubbling, and then fires listener

                Does this because the event uses the default setting of running
                during the bubbling phase

      5.    Then it works its way back up the HTML chain.

                button>>>p>>>div>>>body

      6.    Then when it reaches the body it runs its listener function

      7.    Then it moves to the HTML element and finishes.

*/


// QUESTION 2 OF 3

// Which of the phases is the following code set up for?

const items = document.querySelector('.quizzing-quizzes');
const el = items[1];

el.addEventListener('click', function () {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
}, false);

/*
the bubbling phase
Remember that the third argument of the .addEventListener() method is the
boolean for the capturing phase. Since it's false, that means the event listener
should not run during the capturing phase...therefore it will run in the
(default) bubble phase.
*/

/*
Now that you have a little more knowledge about the "capturing", "at target",
and "bubbling" phases, we're going to go back to the question at the beginning
of this section.

QUESTION 3 OF 3
After running the code below and clicking on the page, two console.log messages
will display in the console. Put the messages in the correct order.
*/

document.addEventListener('click', function () {
   console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
    console.log('The body element was clicked');
});

/*

First Message - The body element was clicked

Second Message - The document was clicked

*/

/*
The Event Object

Now that you know that event listeners fire in a specific order and how to
interpret and control that order, it's time to shift focus to the details of
the event itself.

When an event occurs, the browser includes an event object. This is just a
regular JavaScript object that includes a ton of information about the event
itself. According to MDN, the .addEventListener()'s listener function receives:

a notification (an object that implements the Event interface) when an event
of the specified type occurs

Up until this point, I've been writing all of the listener functions without
any parameter to store this event object. Let's add a parameter so we can store
this important information:

*/


document.addEventListener('click', function (event) {  // ← the `event` parameter is new!
   console.log('The document was clicked');
});

/*

/*

Notice the new event parameter that's been added to the listener function. Now
when the listener function is called, it is able to store the event data that's
passed to it!

💡 An "event" Is an "evt" Is an "e" 💡

Remember that a function's parameter is just like a regular variable. In the
following example, I'm using a parameter with the name event.

*/

const items = document.querySelectorAll('.quizzing-quizzes');

const el = items[1];

el.addEventListener('keypress', function (event) {
  console.log('You clicked on the 2nd quizzing-quizzes item!');
}); `

/*

Instead of event, the parameter's name could just as easily be:

evt
e
theEvent
horse

The name event or evt does not provide any inherent meaning or special
capabilities; there is nothing special to the name...it's just the name of the
parameter. Feel free to give it any name that's informative/descriptive!

*/

// event listener on the document for a click
document.addEventListener('click', function (event) {
  console.log(event);
});

/*

Can drill down to event to view information such Page X and Page Y which are the
X and Y coordinates of the click event itself

*/


/*

The Default Action

As we just looked at, the event object stores a lot of information, and we can
use this data to do all sorts of things. However, one incredibly common reason
that professionals use the event object for, is to prevent the default action
from happening. That sounds like an odd thing to do, but let's explore this.

Think about an anchor link on a webpage. There are probably a couple dozen links
on this page! What if you wanted to run some code and display some output when
you click on one of these links. If you click on the link, it will automatically
navigate you to the location listed in its href attribute: that's what it does
by default.

What about a form element? When you submit a form, by default, it will send the
data to the location in its action attribute. What if we wanted to validate the
data before sending it, though?

Without the event object, we're stuck with the default actions. However, the
event object has a .preventDefault() method on it that a handler can call to
prevent the default action from occurring!
*/

const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});

/*

Recap

We covered a number of important aspects of events and event listeners in this
section! We looked at:

1. the phases of an event:

a. the capturing phase
b. the at target phase
c. the bubbling phase

2. the event object
3. prevent the default action with .preventDefault()

Further Research

1. Event dispatch and DOM event flow on W3C
https://www.w3.org/TR/DOM-Level-3-Events/#event-flow

a. capture phase on W3C
https://www.w3.org/TR/DOM-Level-3-Events/#capture-phase

b. target phase on W3C
https://www.w3.org/TR/DOM-Level-3-Events/#target-phase

c. bubble phase on W3C
https://www.w3.org/TR/DOM-Level-3-Events/#bubble-phase

2. Event on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Event

3. Event reference on MDN
https://developer.mozilla.org/en-US/docs/Web/Events

4. addEventListener on MDN
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

*/

/*
Avoid Too Many Events

How many event listeners are created with this code?
*/

const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

/*

Enter the number of event listeners below. (enter numbers, only)

200

*/



// Refactoring The Number of Event Listeners
// Let's look at the code another time:

const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick() {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

/*

We're creating a <div> element, attaching two hundred paragraph elements and
attaching an event listener with a respondToTheClick function to each paragraph
as we create it. There are a number of ways we could refactor this code. For
example, as of right now, we're creating two hundred different respondToTheClick
functions (that all actually do the exact same thing!). We could extract this
function and just reference the function instead of creating two hundred different
functions:

*/

const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

/*

This is a great step in the right direction!

However, we still have two hundred event listeners. They're all pointing to the
same listener function, but there are still two hundred different event listeners.

What if we moved all of the listeners to the <div> instead?

*/

// The code for this would look like:

const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick);

document.body.appendChild(myCustomDiv);

/*

Now there is only:

1. a single event listener
2. a single listener function

Now the browser doesn't have to store in memory two hundred different event
listeners and two hundred different listener functions. That's a great for
performance!

However, if you test the code above, you'll notice that we've lost access to the
individual paragraphs. There's no way for us to target a specific paragraph element.
So how _do_ we combine this efficient code with the access to the individual
paragraph items that we did before?

We use a process called event delegation.

Event Delegation

Remember the event object that we looked at in the previous section? That's our
ticket to getting back the original functionality!

The event object has a .target property. This property references the target of
the event. Remember the capturing, at target, and bubbling phases?...these are
coming back into play here, too!

Let's say that you click on a paragraph element. Here's roughly the process that
happens:

1. a paragraph element is clicked
2. the event goes through the capturing phase
3. it reaches the target
4. it switches to the bubbling phase and starts going up the DOM tree
5. when it hits the <div> element, it runs the listener function
6. inside the listener function, event.target is the element that was clicked

So event.target gives us direct access to the paragraph element that was clicked.
Because we have access to the element directly, we can access its .textContent,
modify its styles, update the classes it has - we can do anything we want to it!

*/

const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);

/*

Checking the Node Type in Event Delegation

In the code snippet we used above, we added the event listener directly to the
<div> element. The listener function logs a message saying that a paragraph
element was clicked (and then the text of the target element). This works
perfectly! However, there is nothing to ensure that it was actually a <p> tag
that was clicked before running that message. In this snippet, the <p> tags
were direct children of the <div> element, but what happens if we had the
following HTML:

*/

<article id="content">
  <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>

  <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
</article>

// In this filler text, notice that there are some <span> tags. If we want to
// listen to the <article> for a click on a <span>, you might think that this
// could would work:

document.querySelector('#content').addEventListener('click', function (evt) {
    console.log('A span was clicked with text ' + evt.target.textContent);
});

/*
This will work, but there's a major flaw. The listener function will still fire
when either one of the paragraph elements is clicked, too! In other words, this
listener function is not verifying that the target of the event is actually a
<span> element. Let's add in this check:
*/

document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});

/*

Remember that every element inherits properties from the Node Interface. One of
the properties of the Node Interface that is inherited is .nodeName. We can use
this property to verify that the target element is actually the element we're
looking for. When a <span> element is clicked, it will have a .nodeName property
of "SPAN", so the check will pass and the message will be logged. However, if
a <p> element is clicked, it will have a .nodeName property of "P", so the check
will fail and the message will not be logged.

⚠️ The nodeName's Capitalization ⚠️
The .nodeName property will return a capital string, not a lowercase one. So
when you perform your check make sure to either:

1. check for capital letters
2. convert the .nodeName to lowercase

*/

// check using capital letters
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

> // convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}


/*

Recap

In this section, we looked at Event Delegation. Event Delegation is the process
of delegating to a parent element the ability to manage events for child elements.
We were able to do this by making use of:

1. the event object and its .target property
2. the different phases of an event

Further Research

Article: Event delegation
https://javascript.info/event-delegation

Article: How JavaScript Event Delegation Works
https://davidwalsh.name/event-delegate

*/

/*

Know When The DOM Is Ready

The DOM Is Built Incrementally

Do you remember the explanation for how the DOM is parsed? A key thing to point
out is that when the HTML is received and converted into tokens and built into
the document object model is that this is a sequential process. When the parser
gets to a <script> tag, it must wait to download the script file and execute that
JavaScript code. This is the important part and the key to why the placement of
the JavaScript file matters!

Let's look at some code to show (more or less) what's happening. Take a look at
this initial part of an HTML file:

*/

<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/css/styles.css" />
  <script>
    document.querySelector('footer').style.backgroundColor = 'purple';
  </script>

  ...

</head>
</html>

/*

This isn't the full HTML file...BUT, it's all that's been parsed so far. Notice
at the bottom of the code that we have so far is a <script> file. This is using
inline JavaScript rather than pointing to an external file. The inline file will
execute faster because the browser doesn't have to make another network request
to fetch the JavaScript file. But the outcome will be exactly the same for both
this inline version and if the HTML had linked to an external JavaScript file.

Do you see the JavaScript/DOM code in the <script> tags? Take a second and read
it again:

*/

document.querySelector('footer').style.backgroundColor = 'purple';

/*

Does anything jump out at you about this code? Anything at all? This code is
completely error-free...unfortunately, when it runs, it will still cause an error.
Any ideas why?

The problem is with the .querySelector() method. When it runs...there's
no <footer> element to select from the constructed document object model yet!
So instead of returning a DOM element, it will return null. This causes an
error because it would be like running the following code:

*/

null.style.backgroundColor = 'purple';
// null doesn't have a .style property, so thus our error is born.

/*
Now, we've already used one solution to this issue. Remember that we moved the
JavaScript file down to the bottom of the page. Think about why this would make
things work. Well, if the DOM is built sequentially, _if_ the JavaScript code
is moved to the very bottom of the page, then by the time the JavaScript code
is run, all DOM elements will already exist!

However, an alternative solution would be to use browser events! 🙌🏼

The Content Is Loaded Event

When the document object model has been fully loaded, the browser will fire an
event. This event is called the DOMContentLoaded event, and we can listen for
it the same way we listen to any other events:
*/

document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});


/*

Let's check out the DOMContentLoaded event.  First switch to the Nerwork pane in
Chrome Dev Tools. At bottom can see DomContentLoaded event with time.

*/

/*

QUIZ QUESTION
On what event target should we listen for the DOMContentLoaded event?

the document object
The target of the DOMContentLoaded event is the document object.
*/


/*

Using the DOMContentLoaded Event

Because we now know about the DOMContentLoaded event, we can use it to keep
our JS code in the <head>.

Let's update the previous HTML code to include this event:

*/

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script>
      document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('footer').style.backgroundColor = 'purple';
      });
    </script>

    ...

</head>
</html>

/*

Pretty cool, right?!? We have the JavaScript code in the <head> element, but
it is now wrapped in an event listener for the DOMContentLoaded event. This
will prevent the DOM-styling code from running when the browser gets to it.
Then, when the DOM has been constructed, the event will fire and this code will
run.

If you're looking at somebody else's code, you may see that their code listens
for the load event being used instead (e.g. document.onload(...)). load fires
later than DOMContentLoaded -- load waits until all of the images, stylesheets,
etc. have been loaded (everything referenced by the HTML.) Many older developers
use load in place of DOMContentLoaded as the latter wasn't supported by the
very earliest browsers. But if you need to detect when your code can run,
DOMContentLoaded is generally the better choice.

However, just because you can use the DOMContentLoaded event to write JavaScript
code in the <head> that doesn't mean you should do this. Doing it this way, we
have to write more code (all of the event listening stuff) and more code is usually
not always the best way to do something. Instead, it would be better to move the
code to the bottom of the HTML file just before the closing </body> tag.

So when would you want to use this technique? Well, JavaScript code in the <head>
will run before JavaScript code in the <body>, so if you do have JavaScript code
that needs to run as soon as possible, then you could put that code in the <head>
and wrap it in a DOMContentLoaded event listener. This way it will run as early
as possible, but not too early that the DOM isn't ready for it.

*/

/*

Recap

In this section, we learned about the helpful DOMContentLoaded event.

Along the way, we reviewed how the HTML code is parsed incrementally and how
this affects JavaScript/DOM code. We also looked at why writing DOM-manipulation
code in the <head> can cause errors.

Further Research

DOMContentLoaded Event docs on MDN
https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
*/


/*

Introduction: Performance

1. Measure the speed of your code
2. How to write efficient and performing code
3. JavaScript event loop and how it affects the code you write

*/


/*

Add Page Content Efficiently

Using A Loop To Add Content

In the last lesson, we used a for loop to create two hundred paragraphs,
add event listeners to them, and add them to the page. Let's take another look
at the for loop, but this time without all of the event listener stuff:

*/

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    document.body.appendChild(newElement);
}

/*

// Let's quickly recap the code to see where we can make improvements.

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    document.body.appendChild(newElement);
}

/*

This code:

1. creates a paragraph element
2. adds some text to the paragraph
3. adds the paragraph to the page

...and it does this two hundred times.

Since we want two hundred things done, the best way to do this is with a for
loop, so that code is inescapable. However, the code inside the for loop is not
all that efficient, and there are quite a few things we could do to improve this
code. We could:

1. create some parent container element outside of the loop
2. we could append all new paragraph elements to this parent container
3. we append this parent container to the <body> element instead of appending
   each time through the loop

Let's see all of these changes:
*/

const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement('p');
  newElement.innerText = 'This is paragraph number ' + i;

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

/*

This looks a lot better, right? Right!...but how do we know it is? How can we
prove it's better?

We can test the time it takes to actually run this code!

Testing Code Performance

The standard way to measure how long it takes code to run is by using
performance.now(). performance.now() returns a timestamp that is measured
in milliseconds, so it's extremely accurate. How accurate? Here's what the
its documentation page says:

accurate to five thousandths of a millisecond (5 microseconds)

That's incredibly precise!

If you've ever used a timing procedure in another programming language, then
you might've heard of Epoch time (also called Unix time or POSIX time). These
tools tell you the time that has passed since 1/1/1970 (the first of January).
The browser's performance.now() method is slightly different in that it starts
measuring from the time the page loaded. Detailed information can be found on
its documentation page: performance.now() on MDN:
https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

These are the steps to use performance.now() to measure the speed of your code:

1. use performance.now() to get the an initial start time for the code
2. run the code you want to test
3. execute performance.now() to get another time measurement
4. subtract the initial time from the final time

Adding two hundred paragraphs to the page is actually going to be relatively
quick, so let's slow things down by using a set of nested for loops that just
count from one to a hundred...one hundred times!
*/

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

// Next, we'll add in the performance.now() code to measure how long these loops take:

const startingTime = performance.now();

for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

// Using performance.now() to calculate the total time it takes code to run.

// Let's go back to our original code of adding two hundred paragraphs to the page
// to see how long that code takes to run.

/*

Using a Document Fragment

So far, we've made a number of improvements to the code. However, there is still
one thing that seems not so great; we have to create a extraneous <div> element
just to hold all the <p> tags so we can add them all at once and then we append
this <div> to the <body> element. So in the end, we have an extra <div> that isn't
really needed. It was just around because we wanted to add each new <p> to it
instead of to the <body>.

Why are we doing this? The browser is constantly working to make the screen match
the DOM. When we add a new element, the browser has to run through a reflow calculation
(to determine the new screen layout) and then repaint the screen. This takes time.

If we had added each new paragraph to the body element, then the code would've been
a lot slower, because this would cause the browser to go through the reflow and
repaint process for each paragraph. We really only want the browser to do this
once, so we need to attach each new paragraph to something, but we don't want to
have an extra, unneeded element to get added to the DOM.

This is exactly why we have the DocumentFragment! According to the documentation,
a DocumentFragment:

represents a minimal document object that has no parent. It is used as a lightweight
version of Document that stores a segment of a document structure comprised of nodes
just like a standard document.

So it's like creating another lightweight DOM tree. But the beneficial part of this
is what it says next:

The key difference is that because the document fragment isn't part of the active
document tree structure, changes made to the fragment don't affect the document,
cause reflow, or incur any performance impact that can occur when changes are made.

In other words, changes made to a DocumentFragment happen off-screen; there's no
reflow and repaint cost while you build this. So this is exactly what we need!

We can use the .createDocumentFragment() method to create an empty DocumentFragment
object. This code should be very familiar to you, because it looks so very similar to
document.createElement().

const myDocFrag = document.createDocumentFragment();
Let's rewrite our code to use a DocumentFragment instead of the <div>.

const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment
instead of a <div>

*/

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!

/*

Recap

In this section, we took a brief dive into the performance implications of the
code we write. We looked at a specific chunk of code and came up with ways that
we could improve its performance simply by rearranging when the code was running
(moving initialization code out of the for loop).

We also looked at how to measure how long it takes code to run using performance.now().

Lastly, we looked at using a DocumentFragment to prevent performance issues and
to prevent adding unnecessary elements to the DOM.

Further Research

performance.now() on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

Performance Interface on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Performance

DocumentFragment Interface on MDN
https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment

createDocumentFragment docs on MDN
https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment

*/

/*

Reflow & Repaint

We mentioned Reflow and Repaint in the last section, now it's time to take a
closer look.

Reflow is the process of the browser laying out the page. It happens when you
first display the DOM (generally after the DOM and CSS have been loaded), and
happens again every time something could change the layout. This is a fairly
expensive (slow) process.

Repaint happens after reflow as the browser draws the new layout to the screen.
This is fairly quick, but you still want to limit how often it happens.

For example, if you add a CSS class to an element, the browser often recalculates
the layout of the entire page—that's one reflow and one repaint!

Why did adding a little CSS change cause a reflow? What if adding a class
changed the position of the element or caused it to float? The browser won't
know for certain (and a complete calculation of the impact of a change could
  take longer than doing the reflow!)

Let's take a realistic example. Say you're writing the next great blogging
platform, and you want to have a "remove spam" button for the administrator.
Your HTML looks like this:

*/

<!DOCTYPE html>
<html>
<body>
<div id="comments">
  <div class="comment"></div> // some content
  <div class="comment"></div> // some content
  <div class="comment"></div> // some content
</div>
</body>
</html>



/*

When we run the spam filter, we discover comments one and two have to be removed.

If we simply call .removeChild() for each of the two comments that need to be
removed, that's one reflow and one repaint for each change (so a total of 2
reflows and 2 repaints). We could rebuild the whole thing in a DocumentFragment
and replace #comments -- that's the time to rebuild (possibly involving reading
files or data), plus at least one reflow and one repaint.

Or we could hide #comments, delete the spam, and show it again -- that's
surprisingly fast, to the cost of one reflow and two repaints (and little else).
It's fast because hiding doesn't change the layout, it just erases that section
of the screen (1 repaint). When you make the changed section visible again,
that's a reflow and a repaint.

In general, if you have to make a group of changes, hide/change all/show is a
great pattern to use if the changes are relatively contained.

Virtual DOM

By the way, this is why React and other "virtual DOM" libraries are so popular.
You don't make changes to the DOM, but make changes to another structure
(a "virtual DOM") and the library calculates the best way to update the screen
to match. The catch is you then have to rework your code to use whatever library
you're adopting, and sometimes you can do a better job updating the screen
yourself (because you understand your own unique situation).

Recap

In this section, we took a brief look at what reflow and repaint are and saw
how they can impact the performance of a website.

Reflow is the process of calculating the dimensions and position of page elements.
This is a computationally intensive (slow) tasks. Repaint is the process of
drawing the pixels to the screen. This is faster than reflow, but is still not
a fast process. You want to make sure that your code causes the fewest number
of reflows as possible.

Further Research

Website Performance Optimization course by Udacity
https://www.udacity.com/course/website-performance-optimization--ud884

Minimizing browser reflow from PageSpeed Tools Guides
https://developers.google.com/speed/docs/insights/browser-reflow

Avoid Large, Complex Layouts and Layout Thrashing from Google's Web Fundamentals
Guides
https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing


Performance Analysis Reference from Google's Web Fundamentals Guides
https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#rendering

Article Reflows & Repaints: CSS Performance Making Your JavaScript Slow?
http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/


*/


/*

The Call Stack

Single Threading

You might've heard that JavaScript is single-threaded but what does that mean?
According to Wikipedia, single-threading is:

the processing of one command at a time (source)

Ok, so JavaScript can "process" one command at a time. The opposite of
single-threading, is multithreading. There are numerous pros and cons to both
which we won't be getting into (feel free to check out the Wikipedia article on
Threading for more info about the pros and cons). We're going to take a look
at JavaScript's single-threaded model and how/why we should write our code
to take advantage of it.

Let's look at some code:

*/


function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');
    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
appendNewMessage();

/*

Keeping JavaScript's single-threaded nature in mind (meaning it can only
perform one task at a time), let's break down this code into the order it will run:

1. the addParagraph() function is declared on line 1
2. the appendNewMessage() function is declared on line 6
3. addParagraph() is called on line 13
  a. execution moves into the function and executes all three lines in order
  b. now that the function is finished, execution returns to where it was called
4. the appendNewMessage() function is called on line 14
  a. execution moves into the function and executes all three lines in order
  b. now that the function is finished, execution returns to where it was called
5. the program ends because all lines of code have been executed

Hopefully, the order that this code executed in wasn't surprising. There are a
couple of things I particularly want you to pay attention to. First, is the
run-to-completion nature of the code. When addParagraph() is invoked on line 13,
all of the code in the function gets executed: it doesn't just execute some l
ines and leave other lines to be executed later. The entire block of code is
run. A second thing I want to point out is that addParagraph() is invoked, runs,
and finishes before appendNewMessage() is invoked (including a possible reflow
and repaint); JavaScript doesn't execute multiple lines/functions at the same
time (this is single-threading...processing one command at a time!).

I have a question for you - once addParagraph() has been invoked and it runs the
lines of code inside the addParagraph() function, how does it know to go back
to appendNewMessage()? How does it keep track of that?

What if we changed this code slightly to create nested functions:

*/

function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';

    appendNewMessage();
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');

    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();

/*

Notice that the call to appendNewMessage() is located inside the addParagraph()
function. First, addParagraph() is invoked. Then appendNewMessage() is invoked
on line 5. Once appendNewMessage() has finished running, execution returns and
finishes running the last line of code in the addParagraph() function...but how
does it know how to do that? How does the JavaScript engine know where it left
off and how to get back to it?

*/

// Call Stack

function addParagraph() {
  const para = docuemnt.createElement('p');
  para.textContent = 'JavaScript is single threaded';
  appendNewMessage();
  document.bidy.appendChild(para);
}

function appendNewMessage() {
  const para = document.createElement('p');
  para.textContent = "Isn't that cool?";
  document.body.appendChild(para);
}

addParagraph();

// Call Stack to keep track of the function invocations:

// 5. back to addParagraph
// 4. removes item 3 (appendNewMessage)
// 3. appendNewMessage
// 2. addParagraph
// 1. <main>

/*

The Call Stack

The JavaScript engine keeps a call stack (basically a list) of the functions
that are running. When a function is invoked, it is added to the list. When all
of the code inside a function has been run, then the function is removed from
the call stack. The cool part about a call stack is that a function doesn't have
to complete before another function is added to the call stack.

Let's see how this works!

*/


// QUESTION 1 OF 2

// How many items (frames) will be on the stack when the code reaches the
// "stop here" comment?

function quiz () {
  var y = 'yes';
  questions();
  fun();
}
function questions () {
  var y = 'no';
  return 7;
}
function are () {
  return 3;
}
function fun () {
  are();
  // stop here
}

quiz()

// Assume there is no "<main>"/default frame.
// 2
// When 'stop here' is reached, both quiz and fun are on the stack.


// Use this code for the following question.

function dolphins () {
  // stop here
  return 'llamas';
}
function rhinos () {
  var y = 'no';
  return penguins();
}
function penguins () {
  return camels();
}
function camels () {
  return dolphins();
}

rhinos()

//   Order of stack           Function Name

//  Top of the Stack          dolphins
//  2nd Item in Stack         camels
//  3rd Item in Stack         penguins
//  Bottom of the Stack       rhinos


// QUESTION 2 OF 2

// Put the function names in the correct order they would appear when the

// stop here comment is reached. Remember to put the oldest/initial at the bottom
// of the stack. Assume there is no "<main>"/default frame.




/*

The Call Stack Recap

In this section, we looked at how JavaScript is a single-threaded programming
language, which means it can only execute one thing at a time. We looked at
how JavaScript keeps track of what functions are running by using the Call Stack.

Further Research

Call stack on MDN
https://developer.mozilla.org/en-US/docs/Glossary/Call_stack

Call stack on Wikipedia
https://en.wikipedia.org/wiki/Call_stack

*/


/*

The Event Loop

Code Synchronicity

In the previous section on the Call Stack, we used the terms:

1. run-to-completion
2. single-threaded

Another term for this is synchronous. By definition, "synchronous" means:

existing or occurring at the same time

All of the code we've been looking at runs in order, at the same time.
Functions are added to the call stack, and then removed from the call stack when
they've completed. However, there is some code that is not synchronous -
meaning that the code is written just like any other code, but it is executed
at some later point in time. Does this sound familiar at all? You've just been
working with it:
*/

const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});

/*

...event listeners! Most of this code is synchronous like you're used to. But
the event listener's function handleKeyPresses is not invoked immediately, it's
invoked at some later point in time.

Have you ever wondered about that? Where does the code go? What about the
"call stack" that we learned about? Is it hidden in the call stack somewhere?

Let's look at this code snippet:

*/

console.log('howdy');
document.addEventListener('click', function numbers() {
    console.log('123');
});
console.log('ice cream is tasty');


/*

The code will run in this order:

1. 'howdy' will be logged to the console
2. 'ice cream is tasty' will be logged to the console

The string '123' will only be logged if there's a click. If the page is never
clicked, then this code might not ever run! But where is it? Where did the
numbers function holding the console.log('123'); code go?

Running Code Later

But the same questions exist for this code as it does for the .addEventListener()
code:

1. where does the function go to wait?
2. how does the function get run when it needs to?

This happens because of the JavaScript Event Loop!

The JavaScript Event Loop

The simplest explanation of JavaScript's concurrency model uses two rules:

1. If some JavaScript is running, let it run until it is finished ("run-to-completion").
2. If no JavaScript is running, run any pending event handlers.

Since most JavaScript is run in response to an event, this is known as an event
loop: Pick up the next event, run its handler, and repeat.

There are three parts you have to think about around the event loop:

1. the Call Stack
2. Web APIs/the browser
3. an Event Queue

*/

// call stack >>> browser >>> event queue >>> ... cycle REPEATS ... >>> call stack

/*

Not all of the code that we write is 100% JavaScript code. Some of the code is
interacting with the Web APIs (also known as "browser APIs"). There are many
more examples, but both .addEventListener() and setTimeout() are Web APIs.

Let's look back at this code:

*/

console.log('howdy'); // 1
document.addEventListener('click', // 2
  function numbers() {
    console.log('123');
});
console.log('ice cream is tasty'); // 3

/*

First, the browser runs this block of code to completion -- that is, steps 1, 2,
and 3. Step 2 passes an event handler (numbers) to the browser for future use:
the browser will hold this function until there's a click event.

What happens if someone clicks before this block of code is done? When there is
a click event and there is code already running, the numbers function can't just
be added directly to the Call Stack because of JavaScript's run-to-completion
nature; we can't interrupt any code that might currently be happening. So the
function is placed in the Queue. When all of the functions in the Call Stack have
finished (also known as idle time), then the Queue is checked to see if anything
is waiting. If something is in the Queue, then it's run, creating an entry on
the call stack.

IMPORTANT: The key things to remember here are 1) current synchronous code runs
to completion, and 2) events are processed when the browser isn't busy.

Asynchronous code (such as loading an image) runs outside of this loop and sends
an event when it is done.

*/

// Event Loop

// console log
// runs, added to the call stack, logs, then removed
console.log('howdy');

// event listener for click and runs function numbers
// when clicked will log '123'
// added to call stack and then handed to browser
// when browser is clicked, it knows to run numbers function, and that's it
document.addEventListener('click', function numbers () {
  console.log('123');
});

// final console log
// runs, added to the call stack, logs, then removed
console.log('ice cream is tasty')

// now when the browser is clicked, function numbers is moved to the queue
// there it waits for the call stack to be empty
// when the call stack is empty the function numbers is moved to the call stack and invoked
// invoking the numbers fumction invokes another log
// when finished log is removed, and hten function numbers removed from call stack


// QUIZ QUESTION

// What is the order that the iceCream function goes through if the <footer> is
// clicked?


const pageFooter = document.querySelector('#page-footer');

pageFooter.addEventListener('click', function iceCream () {
    const footerDetails = document.querySelector('#details');

    footerDetails.textContent = 'Everyone should eat ice cream!';
});


//  ORDER    EVENT LOOP LOCATION

//  First   Browser

//  Second  Queue

//  Third   Call Stack


/*

Recap

This section uncovered how JavaScript works under the hood; We looked at how
JavaScript, the DOM, and Web APIs all fit together.

Specifically, we looked at how JavaScript is a single-threaded programming
language, which means it can only execute one thing at a time. We looked at
how JavaScript keeps track of what functions are running by using the Call Stack.
We also looked at how asynchronous code is handled.

Asynchronous code makes use of the JavaScript Event Loop. Any asynchronous
code (like setTimeout or the function passed to .addEventListener()) is
handled by the browser. When this asynchronous code is ready to be executed,
it's moved to the queue where it waits until the Call Stack is empty. Whenever
the Call Stack is empty, code moves from the Queue over to the Call Stack
and gets executed.

Knowing how JavaScript and the Event Loop work can help us write code that is
more efficient.


Further Research


Concurrency model and Event Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

Events and Handlers Overview
https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers

What the heck is the event loop anyway? by Philip Roberts on YouTube
https://www.youtube.com/watch?v=8aGhZQkoFbQ

*/

/*

setTimeout

Running Code Later

Similarly to .addEventListener() code being run at some later point, there is
the setTimeout() function that will run code at a point later in time. The
setTimeout() function takes:

1. a function to run at some later time
2. the number of milliseconds the code should wait before running the function

Let's check out an example:

*/

setTimeout(function sayHi() {
    console.log('Howdy');
}, 1000);

/*

If we ran this code, the string 'Howdy' would appear in the console in about
1,000 milliseconds or in just about 1 second.

Since setTimeout() is an API provided by the browser, the call to setTimeout()
gives the sayHi() function over to the browser which it starts a timer. After
the timer is finished, the sayHi() function moves to the Queue. If the Call Stack
is empty, then the sayHi() function is moved to the Call Stack and executed.

setTimeout() with Delay of 0

An interesting aspect to setTimeout() is that we can pass it a delay of 0
milliseconds.
*/

setTimeout(function sayHi() {
    console.log('Howdy');
}, 0);  // ← 0 milliseconds!

/*
You might think that since it has a delay of 0 milliseconds, that the sayHi
function would run immediately. However, it still goes through the JavaScript
Event Loop. So the function is handed off to the browser where the browser
starts a timer for 0 milliseconds. Since the timer ends immediately, the sayHi
function will move to the Queue, and then to the Call Stack once the Call Stack
has finished executing any currently-running tasks.

So why is this helpful? Well, this technique can help us to convert potentially
long-running code to one that's broken up to allow for the browser to handle
user interactions!

Break Up Long-Running Code

Do you remember back to a previous section when we wrote JavaScript code to add
two hundred paragraphs to the page? Now, instead of adding two hundred paragraphs
to the page, what if we added twenty thousand? That's a lot of elements to create,
append, and insert into the page!

Now keep in mind how reflow and repaint affect an app's performance. We want to
write our JavaScript code to take into consideration reflow and repaint and to
cause the fewest number of these.

However, we also want to make sure our app is responsive to user interaction.
While JavaScript is running, the page is "busy" and the user won't be able to
interact with the page (e.g. clicking a button, filling out a form). Remember
that this is because JavaScript runs synchronously. So it will run to completion
(creating, appending, and inserting all twenty thousand elements), and it does
this before it is able to respond to any actions the user has taken. The function
creates all of these elements and adds the to the page will be in the Call Stack
until it's completely finished.

One way to give the user a chance to interact with the page is to break up the
adding of the content into chunks. Let's do this with setTimeout():
*/

let count = 1

function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count;
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    if (count < 20000) {
        setTimeout(generateParagraphs, 0);
    }
}

generateParagraphs();

/*

This code starts off by setting a count variable to 1. This will keep track of
the number of paragraphs that have been added. The generateParagraphs() function
will add 500 paragraphs to the page each time it's invoked. The interesting thing
is that there's a setTimeout() call at the end of the generateParagraphs()
function. If there less than twenty thousand elements, then it setTimeout()
will be used to call the generateParagraphs() function.

If you try running this code on a page, you can still interact with the page
while the code is running. It doesn't lock up or freeze the page. And it doesn't
lock up or freeze because of the setTimeout() calls.

setTimeout() Recap

The browser-provided setTimeout() function takes another function and a delay,
and invokes the function after the delay has passed.

Knowing how the JavaScript Event Loop works, we can use the setTimeout() method
to help us write code that allows the browser to handle user interactions.

Further

setTimeout docs on MDN
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

Concurrency model and Event Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

What the heck is the event loop anyway? by Philip Roberts on YouTube
https://www.youtube.com/watch?v=8aGhZQkoFbQ

Scheduling: setTimeout and setInterval
https://javascript.info/settimeout-setinterval

*/
