const obj = document.getElementById("illustration");
const moon = document.getElementById("moon");
const cloud1 = document.getElementById("cloud1");
const cloud2 = document.getElementById("cloud2");
const cloud3 = document.getElementById("cloud3");
const cloud4 = document.getElementById("cloud4");
const cloud5 = document.getElementById("cloud5");

const displayH1 = document.getElementById("display-h1");
const displayP = document.getElementById("display-p");
const changeButton = document.getElementById("change-button");
const personal = document.getElementById("personal");
const langs = document.getElementById("langs");

function moveClouds(mouseEvent) {
    let obj_left = obj.offsetLeft + obj.offsetWidth / 2;
    let obj_top = obj.offsetTop + obj.offsetHeight / 2;
    let xpos;
    let ypos;

    if (mouseEvent) {
        //FireFox
        xpos = mouseEvent.pageX;
        ypos = mouseEvent.pageY;
    }
    else {
        //IE
        xpos = window.event.x + document.body.scrollLeft - 2;
        ypos = window.event.y + document.body.scrollTop - 2;
    }

    xpos -= obj_left;
    ypos -= obj_top;
    // console.log(xpos + ", " + ypos);

    cloud1.style.right = 15 - xpos / 3 + "px";
    cloud1.style.top = 56 + ypos / 8 + "%";

    cloud2.style.right = 28 - xpos / 3 + "%";
    cloud2.style.top = 70 + ypos / 3 + "%";

    cloud3.style.right = 70 - xpos / 28 + "%";
    cloud3.style.top = 37 + ypos / 20 + "%";

    cloud4.style.right = -23 - xpos / 7 + "%";
    cloud4.style.top = 40 + ypos / 7 + "%";

    cloud5.style.right = 40 - xpos / 5 + "%";
    cloud5.style.top = 54 + ypos / 4 + "%";
}

function displayLanguages() {
    if (personal.style.display != "none") {
        langs.style.display = "block";
        personal.style.display = "none";
        changeButton.innerHTML = "About Me";
    }
    else {
        langs.style.display = "none";
        personal.style.display = "block";
        changeButton.innerHTML = "Languages";
    }
}

