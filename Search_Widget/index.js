const elem = document.getElementById("search-icon");
const content = document.getElementById("search");
const cont_elem = document.getElementsByClassName("content");

elem.addEventListener("click", () => {
    cont_elem[0].classList.toggle("active");
});
