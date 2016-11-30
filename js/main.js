// menu
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var menu = document.querySelector('.hamburger');
var modal = document.getElementById('myModal');


function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".modal" ).classList.toggle("is_active");
  event.preventDefault();

  var span = document.getElementsByClassName("close");

  for (var i = 0; i < span.length; i++) {
    span[i].onclick = function(){
      modal.classList.remove('is_active');
      menu.classList.remove('is-active');
    }
  }

}

menu.addEventListener('click', toggleMenu, false);