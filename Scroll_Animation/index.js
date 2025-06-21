var count = 20;
const elem = document.getElementById("content");

window.addEventListener("scroll", checkScreen);

function create_box() {
  for (let i = 0; i < count; i++) {
    elem.innerHTML += `<div class='box' id=${i}>
        <h3>Content</h3>
        </div>`;
    if (i >= 4) {
      elem.lastElementChild.style.visibility = "hidden";
    }
  }
}

function checkScreen() {
  let box_elems = document.getElementsByClassName("box");
  for (let i = 4; i < count; i++) {
    let pos = box_elems[i].getBoundingClientRect().top;
    let name = i % 2 ? true : false;
    if (pos < window.innerHeight - 30) {
      box_elems[i].style.visibility = "visible";

      if (name) {
        box_elems[i].classList.add("anime-left");
      } else {
        box_elems[i].classList.add("anime-right");
      }
    } else {
      if (name) {
        box_elems[i].classList.remove("anime-left");
      } else {
        box_elems[i].classList.remove("anime-right");
      }
      box_elems[i].style.visibility = "hidden";
    }
  }
}

create_box();
