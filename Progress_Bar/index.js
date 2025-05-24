var curr_val = 1;
var li_list = document.getElementsByTagName("li");
var hr_list = document.getElementsByTagName("hr");
var btn_list = document.getElementsByTagName("button");

function clicked() {
    console.log(curr_val);

    // const elem = document.getElementById(elem_val);
}

function add_val(e) {
    if (curr_val < 4) {
        curr_val += 1;
    }
    if (curr_val > 1) {
        btn_list[0].disabled = false;
    }
    if (curr_val == 4) {
        btn_list[1].disabled = true;
    }
    for (let i = 0; i < curr_val; i++) {
        li_list[i].classList.add("active");
        if (i > 0) {
            hr_list[i - 1].classList.add("active");
        }
    }
}

function del_val(e) {
    console.log("here ", curr_val);
    if (curr_val > 1) {
        curr_val -= 1;
    }
    if (curr_val < 4) {
        btn_list[1].disabled = false;
    }
    if (curr_val == 1) {
        btn_list[0].disabled = true;
    }

    for (let i = curr_val; i < 4; i++) {
        li_list[i].classList.remove("active");
        if (i > 0) {
            hr_list[i - 1].classList.remove("active");
        }
    }
}
