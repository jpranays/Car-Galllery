window.addEventListener("load", () => {
	document.querySelector(".loader").style.display = "block";
// 	document.querySelector(".container").style.animationDelay = "4s";
// 	let counter = setTimeout(() => {
// 		counter = setInterval(anim, 100);
// 	}, 500);
// 	inc = 0;
// 	function anim() {
// 		let image = document.querySelectorAll("img")[inc];
// 		inc++;
// 		image.style.transform = "rotate(360deg)";
// 		if (inc == 13) {
// 			clearInterval(counter);
// 		}
// 	}
	setInterval(function () {
		$("#mycar").shake();
	}, 3000);

	$.shake({
		callback: function () {
			alert("Hurray");
		},
	});
});
