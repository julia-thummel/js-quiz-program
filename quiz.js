// variables
var correct = 0;


// prompt
var answer1 = prompt("What is Wash U's Mascot?");
var answer2 = prompt("What kind of dogs does Chancellor Wrighton have?");
var answer3 = prompt("How old is Wash U?");
var answer4 = prompt("Fill in the blank: B-school, ");
var answer5 = prompt("who is the art school named after?");
// console.log("the answer is:")

// if statement
if ( answer1.toUpperCase() === 'A BEAR' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'GOLDEN RETRIEVERS' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === '163 YEARS OLD' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'PRESCHOOL' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'SAM FOX' ) {
 correct += 1;
}

if ( correct === 5 ) {
 correct += 1;
  document.write("<h2>congradulations, you've won the gold medal!</h2>");
}
else if ( correct === 4 ) {
 correct += 1;
  document.write("<h2>congradulations, you've won the silver medal!</h2>");
}
else if ( correct === 3 ) {
 correct += 1;
  document.write("<h2>congradulations, you've won the bronze medal!</h2>");
}



document.write("<p>wash u's mascot is a bear</p>");
document.write("<p>chancelor wrighton has golden retrievers</p>");
document.write("<p>wash u is 163 years old</p>");
document.write("<p>the b-school is often compared to preschool</p>");
document.write("<p>the art school is named after Sam Fox</p>");

console.log("correct:" + correct)
