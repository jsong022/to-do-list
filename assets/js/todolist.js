$("body").addClass("check");

//Denote completed activity by clicking on them
$("li").on("click", function(){
	$(".activity", this).toggleClass("completed");
	$(".delete", this).toggleClass("completed");
});

//Delete Activities by clicking on the [X]'s
$("span.delete").on("click", function(event){
	$(this).parent().fadeOut(750, function(){
		$(this).remove()
	});
	event.stopPropagation();
});