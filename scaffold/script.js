const phone = document.getElementById("phone");
const errorMessage = document.getElementById("errorMessage");
const detailsSubmit = document.getElementById("form-details");

const packages = [
    {
        name: "Beach Getaway",
        photo: "https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_640.jpg",
        description:
            "Enjoy a relaxing time at the sunny beaches of Bali. Inclusive of hotel stay and guided tours.",
    },
    {
        name: "Mountain Adventure",
        photo: "https://cdn.pixabay.com/photo/2016/11/14/03/26/cliff-1822484_640.jpg",
        description:
            "Explore the thrilling trails of the Himalayas. Package includes hiking, camping, and meals.",
    },
    {
        name: "City Life Experience",
        photo: "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg",
        description:
            "Discover the vibrant life of New York City. Comes with city tours and museum passes.",
    },
    // Add more packages as needed
];

function isAdult() {
    const birthday = document.getElementById("birthday");

    const todayDate = new Date().getFullYear();
    const selectedDate = new Date(birthday.value).getFullYear();
    if (todayDate - selectedDate < 18) {
        errorMessage.innerHTML = "You must be atleast 18 years old.";
        errorMessage.style.color = "red";
        return false;
    } else {
        errorMessage.innerHTML = "";
        return true;
    }
}

function isValid() {
    len = phone.value.length;
    if (len > 10) {
        document.getElementById("phone").value = phone.value.substring(0, 10);
    } else if (phone.value.length < 10) {
        errorMessage.innerHTML = "Please Enter a valid phone number.";
        errorMessage.style.color = "red";
    }
    if (len == 10) {
        errorMessage.innerHTML = "";
        return true;
    } else {
        return false;
    }
}

phone.addEventListener("input", () => {
    isValid();
});

birthday.addEventListener("change", () => {
    isAdult();
});

detailsSubmit.addEventListener("click", () => {
    if (isValid() && isAdult()) {
        errorMessage.innerHTML =
            "Thanks for your interest, our tour experts will get back to you shorty! ";
        errorMessage.style.color = "green";
    }
});

const search_bar = document.getElementById("searchBar");

search_bar.addEventListener("input", () => {
    var package = new Array();
    const filterPackages = search_bar.value.toLowerCase();
    const filteredPackages = packages.filter((category) => {
        if (category.name.toLowerCase().includes(filterPackages)) {
            package.push(category);
        }
    });
    getPackages(package);
});

if (search_bar.innerText.trim() === "") {
    const package = packages.map((category) => {
        return category;
    });
    getPackages(package);
}

function getPackages(package) {
    document.getElementById("row").innerHTML = "";
    package.forEach((element) => {
        const article = `<div class="col-lg-4">
              <img class="card-img-top img-responsive center-block"
                   src="${element.photo}"
                   alt="Generic placeholder image">
              <div class="card-body">
                <h2>${element.name}</h2>
                <p>
                  ${element.description}
                </p>
                <a href="#myModal" data-toggle="modal" data-target="#myModal" class="btn btn-primary">Book Now</a>
              </div>
            </div>`;

        document.getElementById("row").innerHTML += article;
    });
}
