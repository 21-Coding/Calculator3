$(document).ready(function() {

// PROMPT FOR SENTENCE
  // var userSentence = prompt("Enter a sentence:");
  var userSentence = "I am a sentence";

  console.log(userSentence);

// BEGIN CYPHER
  var stepOne = function(){
    stepOneFirst = userSentence[0].toUpperCase();
    stepOneLast = userSentence[userSentence.length-1].toUpperCase();
    return stepOneFirst + stepOneLast;
  };
  console.log("stepOne = " + stepOne());



  var stepTwo = function(){
    var splitString =  stepOne().split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  };
  console.log("stepTwo = " + stepTwo());



  var stepThree = function(){
    stepOne()
    stepTwo()
    joinArray = userSentence + stepTwo();
    return joinArray;
  };
  console.log("stepThree = " + stepThree());


  var stepFour = function(){
    var sentenceLength = parseInt((userSentence.length / 2));
    var newLetter = userSentence[sentenceLength] + userSentence + stepTwo();
    return newLetter;
  };
  console.log("stepFour = " + stepFour());


  var stepBonus = function(){
    var splitString =  stepFour().split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  };
  console.log("stepFour = " + stepBonus());






  // WORKING OUTSIDE OF FUNCTION
  // var newSentence1 = userSentence.replace(/^./, userSentence.charAt(0).toUpperCase());
  // var newSentence2 = newSentence1.replace(/.$/, userSentence.charAt(0).toUpperCase());


  // alert(newSentence2);
  // console.log(newSentence2);
  // WORKING OUTSIDE OF FUNCTION

});
