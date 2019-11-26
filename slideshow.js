//use dom to access slideshow elements
var slides = document.getElementsByClassName("hidden");
//i keeps track of which child is currently shown
var i = 0;

function nextSlide(){
	//hides current slide by taking away the "shown" class
	slides[i].className = "hidden";
	i++;
	if(i == slides.length){
		i = 0;
	}
	//add "shown" class to next slide to show it
	slides[i].className += " shown";
}

//runs nextSlide every 3 sec
window.setInterval(nextSlide, 3000);
