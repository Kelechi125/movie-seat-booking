const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = +movieSelect.value;

container.addEventListener("click", (event) => {
    if(event.target.classList.contains("seat") && !event.target.classList.contains("occupied")) {
        event.target.classList.toggle("selected");
    };
})
