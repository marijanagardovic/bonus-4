let labels = document.querySelectorAll(".items-names label");
labels.forEach((label) => {
	label.addEventListener("click", () => {
		[...label.parentElement.children].forEach((siblings) =>
			siblings.classList.remove("active-item")
		);
		label.classList.add("active-item");
	});
});