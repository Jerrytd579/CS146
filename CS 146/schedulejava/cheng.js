// Jerry Cheng
// I pledge my honor that I have abided by the Stevens Honor System.

function myFunction(c)
  {
    classes = document.getElementsByClassName(c);
    var checkbox = document.getElementById(c+"check");
    if(checkbox.checked) {
      for (i = 0; i < classes.length; i++) {
      classes[i].style.opacity = "1"; }
    } else {
      for (i = 0; i < classes.length; i++) {
      classes[i].style.opacity = "0"; }
    }
  }

function colorChange(c) {
    classes = document.getElementsByClassName(c);
    var newColor = document.getElementById(c+"color").value;
    for(i = 0; i < classes.length; i++) {
        classes[i].style.backgroundColor = newColor
    }
}