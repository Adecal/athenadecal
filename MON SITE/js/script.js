function myFunction() {
    var empty = document.getElementById("hide");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (empty.style.display === "none") {
      empty.style.display = "inline";
      btnText.innerHTML = "View more"; 
      moreText.style.display = "none";
    } else {
      empty.style.display = "none";
      btnText.innerHTML = "View less"; 
      moreText.style.display = "inline";
    }
  }

