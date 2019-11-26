document.addEventListener("DOMContentLoaded", bindButton);


function bindButton(){
	document.getElementById("submitComments").addEventListener("click", function(event){
		
		var postObject = {body:null};
		postObject.body = document.getElementById("commentsField").value;
		
		var postReq = new XMLHttpRequest();
		postReq.open("POST", "http://httpbin.org/post", false);
		postReq.setRequestHeader("Content-Type", "application/json");
		postReq.send(JSON.stringify(postObject));
		
		var postResponse = JSON.parse(postReq.responseText);
		var yourPost = JSON.parse(postResponse.data);
		console.log(yourPost);
		
		event.preventDefault();
		
	});
}
