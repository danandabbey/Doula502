"use strict";
//Utilities
function get(e) {
    return document.getElementById(e);
}
;
function all(e) {
    return document.querySelectorAll(e);
}
;
//listen for clicks
function listen() {
    var selectedButton = all("button[class=\"nav-button\"]");
    selectedButton.forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            var btn = e.currentTarget;
            var url = btn.id;
            window.location.href = "".concat(url, ".html");
        });
    });
}
;
function dropMenu() {
    var btn = get("drop-control");
    var drop = get("drop");
    var both = [btn, drop];
    if (window.matchMedia("(min-width: 900px)").matches) {
        both.forEach(function (button) {
            button.addEventListener("mouseover", function () {
                drop.style.display = "flex";
                btn.style.display = "none";
            });
        });
        both.forEach(function (button) {
            button.addEventListener("mouseout", function () {
                drop.style.display = "none";
                btn.style.display = "flex";
            });
        });
    }
    btn.addEventListener("click", function () {
        drop.style.display = "flex";
        btn.style.display = "none";
    });
}
;
dropMenu();
listen();
