function load_page() {
    let elem = document.getElementById("image");
    let load_num = document.getElementById("load-count");
    var count = 0;
    console.log(count);

    setInterval(() => {
        if (count < 100) {
            count += 1;
            load_num.innerText = `${count}%`;
            elem.style.opacity = `${count / 100}`;
            console.log(count);
        }
    }, 30);
}
