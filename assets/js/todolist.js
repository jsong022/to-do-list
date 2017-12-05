$("body").addClass("check");

//Denote completed activity by clicking on them
$("li").on("click", function(){
	$(".activity", this).toggleClass("completed");
	$(".delete", this).toggleClass("completed");
});