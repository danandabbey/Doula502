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
listen();
