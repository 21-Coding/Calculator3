$(document).ready(function() {
  var userSentence = prompt("Enter a sentence:");
  console.log(userSentence);



  var test = function(){
    newSentence = (userSentence.replace(/^./, userSentence.charAt(0).toUpperCase()));
    alert(newSentence);
    console.log(newSentence);

  };

test
alert(test);
console.log(test);




});
