document.addEventListener("DOMContentLoaded", function () {
	const dots = document.querySelectorAll(".dot");

	dots.forEach(function (dot) {
		dot.addEventListener("click", function (e) {
			e.preventDefault();
			// for whatever element just got the click, find it's closest .dot ancestor
			const clicked_dot = e.target.closest(".dot");

			// we're going to find all dots with the same classes so let's start an empty string to put classes in
			let alike_dots = "";
			// .dot.pink

			// now, let's capture the list of classes from the click dot and add each of them to our alike_dots string
			clicked_dot.classList.forEach(function (className) {
				/**
				 * we are updating the contents of the string by taking it's current value
				 * and adding on . and then whatever class this is
				 */
				alike_dots = `${alike_dots}.${className}`;
			});

			// now that we have our string of classes, we can once again update the 'alike_dots' variable to be a NodeList
			// of the other dots on the page that match the one we clicked on
			alike_dots = document.querySelectorAll(alike_dots);


			// once we've built the like of alike dots, we perform the open/close actions

			// if the dot we clicked on, already has the 'active' class, it needs to be removed as the
			// user must be trying to close it
			if (clicked_dot.classList.contains("active")) {
				alike_dots.forEach(function (dot) { // loop through all of the dots that are like the one we clicked on and remove the 'active' clas
					dot.classList.remove("active");
				});
			} else {
				alike_dots.forEach(function (dot) { // loop through all of the dots that are like the one we clicked on and add the 'active' class
					dot.classList.add("active");
				})
			}
		});
	});
});