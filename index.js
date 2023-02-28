function loadDoc() {
  var xhttp = new XMLHttpRequest();
console.log(xhttp.readyState);
  xhttp.onreadystatechange = function() {
    console.log(xhttp.readyState);
  
  if (this.readyState == 4 && this.status == 200) 
      console.log(xhttp.responseText);


{
      document.getElementById("demo").innerHTML =
      this.responseText;
      //console.log(xhttp.responseText);
      console.log(JSON.parse(xhttp.responseText).name);
    }
  };
  xhttp.open("GET", "user.json", true);
  xhttp.send();
}