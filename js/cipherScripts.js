$(document).ready(function() {

// PROMPT FOR SENTENCE
  var userSentence = prompt("Enter a sentence:");
  console.log(userSentence);

// BEGIN CYPHER
  // var test = function(){
  //   userSentence.replace(/^./, userSentence.charAt(0).toUpperCase());
  //   userSentence.replace(/.$/, userSentence.charAt(-0).toUpperCase());
  //
  //   alert(newSentence);
  //   console.log(newSentence);
  //
  // };
  // alert(test);
  // console.log(test);



  // WORKING OUTSIDE OF FUNCTION
  var newSentence1 = userSentence.replace(/^./, userSentence.charAt(0).toUpperCase());
  var newSentence2 = newSentence1.replace(/.$/, userSentence.charAt().toUpperCase());

  alert(newSentence1);
  console.log(newSentence1);
  alert(newSentence2);
  console.log(newSentence2);
  // WORKING OUTSIDE OF FUNCTION

});
