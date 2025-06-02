const open_elem = document.getElementById("open");
const close_elem = document.getElementById("close");
const container = document.querySelector(".webpage");

open_elem.addEventListener("click", () => {
    container.classList.add("show_nav");
    console.log("yes");
});
close_elem.addEventListener("click", () =>
    container.classList.remove("show_nav")
);
