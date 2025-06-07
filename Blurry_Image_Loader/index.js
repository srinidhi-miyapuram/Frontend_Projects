function load_page() {
    let elem = document.getElementById("image");
    let load_num = document.getElementById("load-count");
    var count = 100;

    setInterval(() => {
        if (count > 0) {
            count -= 1;
            elem.style.filter = `blur(${count}px)`;
            load_num.innerText = `${100 - count}%`;
            console.log(elem.style.filter);
        } else {
            load_num.style.opacity = "0";
        }
    }, 30);
}
