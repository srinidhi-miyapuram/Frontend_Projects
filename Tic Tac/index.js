const res = document.querySelector("#board tbody");

res.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() == "td") {
        if (e.target.innerText == "") {
            e.target.innerText = "X";
        } else if (e.target.innerText == "X") {
            e.target.innerText = "O";
        } else {
            e.target.innerText = "";
        }
    }
});

function refresh() {
    window.location.reload();
}
