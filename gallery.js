
var modalWindow = document.getElementsByClassName("modal")[0];
var modalPic = document.getElementsByClassName("modalPic")[0];
var exitText = document.getElementsByClassName("close")[0];

var images = document.getElementsByClassName("galleryImg");
var imageArray = Array.from(images);



imageArray.forEach(function(pic){
	pic.onclick = function(){
		modalWindow.style.display = "block";
		//will have to remove the "_thumb" from the filename to get the right one for window
		var imagePathString = pic.src.replace("_thumb", "");
		
		modalPic.src = imagePathString;
	}
});

//exit clicking anywhere else
window.onclick = function(event){
	if(event.target == modalWindow){
		modalWindow.style.display = "none";
	}
}

//exit clicking on the x
exitText.onclick = function(){
	modalWindow.style.display = "none";
}
