//Denote completed activity by clicking on them
//Listener is on <ul> so future <li> added
//can also have the desired action on click
//
//the Listner on <ul> listens for a "click" on
//any <li> within it (current or future)
$("ul").on("click", "li", function(){
	//give the classes "activiy" and "delete" in this <li>
	//a "completed" class for CSS styling
	$(".activity", this).toggleClass("completed");
	$(".delete", this).toggleClass("completed");
});

//Delete Activities by clicking on the [X]'s
//
//the Listner on <ul> listens for a "click" on
//the <span> with class "delete" within it
$("ul").on("click", "span.delete", function(event){
	//the parent <li> fades out 
	$(this).parent().fadeOut(750, function(){
		//delete the HTML code after fading out
		$(this).remove()
	});
	//don't propagate the click to the <li> or its parents
	event.stopPropagation();
});

//Add new Activity by entering them into input text
$("input").on("keypress", function(event){
	// on 'Enter' keypress
	if (event.which === 13){
		//grab the text input's value
		var newActivity = $(this).val();
		//replace '<' and '>' for code injection prevention
		newActivity = newActivity.replace(/</g, "&lt;").replace(/>/g, "&gt;");
		//create the HTML code for the new Activity
		var newHTML = "<li><span class=\"delete\"><i class=\"fa fa-trash-o\"></i></span><span class=\"activity\">"
		newHTML += newActivity + "</span></li>";
		//reset the input field
		$(this).val("");
		//add it to the to-do list
		$("ul").append(newHTML);
	}
});

//click on the pencil & note icon to show text input
$("#newAct").on("click", function(){
	$("#newActInput").fadeToggle(500)
});