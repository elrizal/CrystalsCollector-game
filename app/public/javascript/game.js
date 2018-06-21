
$(document).ready(function(){
    $('.modal').modal();
  });

var userScore = 0;
var winEntry = 0;
var lossEntry = 0;

var targetScore = 19 + Math.floor(Math.random() * 120);
$("#target-score").text(targetScore);

var counter = 1 + Math.floor(Math.random() * 12);

$(".crystal-image").on("click", function() {
	counter += 1 + Math.floor(Math.random() * 12);
	document.querySelector("#user-score").innerHTML = counter + userScore;

	if (counter === targetScore) {
		console.log("You win!");
		$("#modal-won").modal("open");
		document.querySelector("#win-entries").innerHTML = ++winEntry;
		reset();

	} else if (counter >= targetScore) {
		$("#modal-lost").modal("open");
		console.log('lost!');
		document.querySelector("#loss-entries").innerHTML = ++lossEntry;
		reset();
	}
	if (winEntry === 1) {
		console.log("You've unlocked an item!");
		$(".crystal-image-unlock1").attr(
			"src",
			"images/garnet/garnet0001.png"
		);
	}
});

function reset() {
	targetScore = 19 + Math.floor(Math.random() * 120);
	$("#user-score").text(userScore);
	$("#target-score").text(targetScore);
	console.log(targetScore);
	userScore = 0;
	counter = 0;

	console.log(userScore);
	$(".crystal-image").on("click", function() {
		counter += 1 + Math.floor(Math.random() * 12);
		document.querySelector("#user-score").innerHTML = counter + userScore;
		if (counter === targetScore) {
			$("#modal-won").modal("open");
			document.querySelector("#win-entries").innerHTML = ++winEntry;
			reset();
		} else if (counter >= targetScore) {
			$("#modal-lost").modal("open");
			document.querySelector("#loss-entries").innerHTML = ++lossEntry;
			reset();
		}
		if (winEntry === 1) {
			$(".crystal-image-unlock").attr("src","images/garnet/garnet0001.png"
			).attr('id', 'Image-Garnet');
			
			$('#Image-Ruby').remove();
			$('#Image-Sap').remove();
			reset();
		}
	});
}
// 
$(document).ready(function(){
    $('.tap-target').tapTarget();
  });
      