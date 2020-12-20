const rotator = document.querySelector(".rotator");
const cd = document.querySelector(".cd");
const mainEventHandler = {
    RotateOn: function () {
        cd.style.transform = "rotate(360deg)";
    },
    RotateOff: function () {
        cd.style.transform = "rotate(-360deg)";
    },
};

function init() {
    rotator.addEventListener("mouseenter", mainEventHandler.RotateOn);

    rotator.addEventListener("mouseleave", mainEventHandler.RotateOff);
}
init();

