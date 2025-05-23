var curr_elem = 1;

function expand_img(elem_id) {
    console.log(elem_id.id);
    if (curr_elem != elem_id.id) {
        document.getElementById(curr_elem).classList.remove("active");
        curr_elem = elem_id.id;
    }
    const elem = document.getElementById(elem_id.id);
    elem.classList.add("active");
}
