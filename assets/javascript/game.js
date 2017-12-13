
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
		alert("You win!");
		document.querySelector("#win-entries").innerHTML = ++winEntry;
		reset();
	} else if (counter >= targetScore) {
		alert("You lose!!");
		document.querySelector("#loss-entries").innerHTML = ++lossEntry;
		reset();
	}
	if (winEntry === 1) {
		alert("You've unlocked an item!");
		$(".crystal-image-unlock1").attr(
			"src",
			"http://via.placeholder.com/200x200/000000/ffffff"
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
			alert("You win! Item unlocked.");
			document.querySelector("#win-entries").innerHTML = ++winEntry;
			reset();
		} else if (counter >= targetScore) {
			alert("You lose!!");
			document.querySelector("#loss-entries").innerHTML = ++lossEntry;
			reset();
		}
		if (winEntry === 2) {
			$(".crystal-image-unlock").attr(
				"src",
				"assets/images/05.png"
			);
			reset();
		}
	});
}
