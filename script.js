
let show = document.getElementsByClassName("show");
function showFunction(){
    show.style.display = "block";
}

let myBtn = document.getElementById("top-btn");

function topFunction(){
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
