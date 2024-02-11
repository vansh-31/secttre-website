const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
	navLinks.classList.toggle("open");

	const isOpen = navLinks.classList.contains("open");
	menuBtnIcon.setAttribute(
		"class",
		isOpen ? "ri-close-line" : "ri-menu-line"
	);
});

navLinks.addEventListener("click", (e) => {
	navLinks.classList.remove("open");
	menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
	distance: "50px",
	origin: "bottom",
	duration: 1000,
};

ScrollReveal().reveal(".header-container p", {
	...scrollRevealOption,
});
ScrollReveal().reveal(".header-container h1", {
	...scrollRevealOption,
	delay: 500,
});
ScrollReveal().reveal(".header-container .header-flex", {
	...scrollRevealOption,
	delay: 1000,
});

const faq = document.querySelector(".faq-grid");

faq.addEventListener("click", (e) => {
	const target = e.target;
	const faqCard = target.closest(".faq-card");
	if (target.classList.contains("ri-arrow-down-s-line")) {
		if (faqCard.classList.contains("active")) {
			faqCard.classList.remove("active");
		} else {
			Array.from(faq.children).forEach((item) => {
				item.classList.remove("active");
			});
			faqCard.classList.add("active");
		}
	}
});

ScrollReveal().reveal(".faq-image img", {
	...scrollRevealOption,
	origin: "left",
});

ScrollReveal().reveal(".article-card", {
	...scrollRevealOption,
	interval: 500,
});

const swiper = new Swiper(".swiper", {
	loop: true,

	pagination: {
		el: ".swiper-pagination",
	},
});
