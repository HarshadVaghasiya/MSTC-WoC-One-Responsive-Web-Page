function slider() {
	document.getElementById("slider").style.width="20%";
	      document.getElementById('main').style.marginLeft = '20%';
	      document.getElementById("s1").style.visibility="hidden";


	// body...
}

function closes() {
  document.getElementById("slider").style.width = "0px";
        document.getElementById('main').style.marginLeft = '0px';
        	      document.getElementById("s1").style.visibility="visible";


}

window.addEventListener('scroll', function() {
  document.getElementById('slider').style.width = '0px';
          	      document.getElementById("s1").style.visibility="visible";
          	              document.getElementById('main').style.marginLeft = '0px';

});
function out(){
	  document.getElementById('slider').style.width = "0px";

}

var num=1;
//setInterval(function(){showSlides(num);num++;if (num=4){num=1;} },100);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
}



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
