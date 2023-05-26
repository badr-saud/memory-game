const cardArray = [
	{
		name: "1st card",
		img: "images/img0.jfif",
	},
	{
		name: "2nd card",
		img: "images/img1.jfif",
	},
	{
		name: "3rd card",
		img: "images/img2.jfif",
	},
	{
		name: "4th card",
		img: "images/img3.jfif",
	},
	{
		name: "5th card",
		img: "images/img4.jfif",
	},
	{
		name: "6th card",
		img: "images/img5.jfif",
	},
	{
		name: "7th card",
		img: "images/img6.jfif",
	},
	{
		name: "8th card",
		img: "images/img10.jfif",
	},
	{
		name: "9th card",
		img: "images/img11.jfif",
	},
	{
		name: "10th card",
		img: "images/img7.jfif",
	},
	{
		name: "11th card",
		img: "images/img8.jfif",
	},
	{
		name: "12th card",
		img: "images/img9.jfif",
	},
	{
		name: "13th card",
		img: "images/img12.jfif",
	},
	{
		name: "14th card",
		img: "images/img13.jfif",
	},
	{
		name: "1st card",
		img: "images/img0.jfif",
	},
	{
		name: "2nd card",
		img: "images/img1.jfif",
	},
	{
		name: "3rd card",
		img: "images/img2.jfif",
	},
	{
		name: "4th card",
		img: "images/img3.jfif",
	},
	{
		name: "5th card",
		img: "images/img4.jfif",
	},
	{
		name: "6th card",
		img: "images/img5.jfif",
	},
	{
		name: "7th card",
		img: "images/img6.jfif",
	},
	{
		name: "8th card",
		img: "images/img10.jfif",
	},
	{
		name: "9th card",
		img: "images/img11.jfif",
	},
	{
		name: "10th card",
		img: "images/img7.jfif",
	},
	{
		name: "11th card",
		img: "images/img8.jfif",
	},
	{
		name: "12th card",
		img: "images/img9.jfif",
	},
	{
		name: "13th card",
		img: "images/img12.jfif",
	},
	{
		name: "14th card",
		img: "images/img13.jfif",
	},
];

cardArray.sort(() => 0.5 - Math.random());

const overlay =	document.querySelector(".overlay");
const gridDisplay = document.querySelector("#grid");
const result = document.querySelector("#result");
let cardChosen = [];
let cardChosenIds = [];
const cradsWon = [];

function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement("img");
		card.setAttribute("src", "images/blank.jpg");
		card.setAttribute("data-id", i);
		card.addEventListener("click", flipCard);
		gridDisplay.appendChild(card);
	}
}
createBoard();
function flipCard() {
	const cardId = this.getAttribute("data-id");
	cardChosen.push(cardArray[cardId].name);
	cardChosenIds.push(cardId);
	this.classList.add("flipped");
	this.setAttribute("src", cardArray[cardId].img);
	if (cardChosen.length === 2) {
		setTimeout(checkMatche, 550);
		this.classList.remove("flipped");
	}
}
function checkMatche() {
	const cards = document.querySelectorAll("#grid img");
	if (cardChosenIds[0] == cardChosenIds[1]) {
		alert("You clicked the same card!");
		cards[cardChosenIds[0]].setAttribute("src", "images/blank.jpg");
		cards[cardChosenIds[1]].setAttribute("src", "images/blank.jpg");
	} else if (cardChosen[0] == cardChosen[1]) {
		alert("You found a match!");
		//cards[cardChosenIds[0]].setAttribute("src", "images/white.png");
		//cards[cardChosenIds[1]].setAttribute("src", "images/white.png");
		cards[cardChosenIds[0]].removeEventListener("click", flipCard);
		cards[cardChosenIds[1]].removeEventListener("click", flipCard);
		cards[cardChosenIds[0]].classList.add("white");
		cards[cardChosenIds[1]].classList.add("white");

		cradsWon.push(cardChosen);
	} else {
		cards[cardChosenIds[0]].setAttribute("src", "images/blank.jpg");
		cards[cardChosenIds[1]].setAttribute("src", "images/blank.jpg");
	}
	result.textContent = cradsWon.length;
	cardChosen = [];
	cardChosenIds = [];
	if (cradsWon.length === cardArray.length / 2) {
		result.style.display = "none";
		showModelWindow();
	}
}
const showModelWindow = () => {
	overlay.style.display = "flex";

}