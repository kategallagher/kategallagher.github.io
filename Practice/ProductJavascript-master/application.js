// $(document).ready(function() {
// 	alert("page loaded");

// $("#title").fadeOut(2000);
// });

$(".details").click(function() {
	$(this).siblings(".description").slideToggle(1000);

	return false;
});