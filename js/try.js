$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $(".mouseoverSpan").mouseover(function() {
    alert("This is a paragraph.");
  });

  $("img").hover(function() {
    confirm("Is this Mariaaaaaaa?");
  });
});
