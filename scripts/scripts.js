function get(e) {
    return document.getElementById(e);
}
;
//listen for clicks opens page
function listen() {
    var selectedButton = document.querySelectorAll("button[class=\"nav-button\"]");
    selectedButton.forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            var btn = e.currentTarget;
            var url = btn.id;
            window.location.href = "../html/".concat(url, ".html");
        });
    });
}
;
function serviceMenu() {
    var btn = document.querySelectorAll("button[class=\"projects\"]");
    btn.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var project = button.id;
            var desc = get("project-desc");
            desc.textContent = getText(project);
            desc.style.display = "flex";
        });
        function getText(a) {
            if (a === "finance") {
                return "We\u2019re working on a large set of free tools to help you manage your finances.\n            These tools will make it easier to: Budget, Track your spending, Save for retirement, and Pay off debt.";
            }
            else if (a === "drones") {
                return "AI-powered drones are being built to solve problems around the world. \n            These drones can be used for a variety of purposes, such as: Inspecting infrastructure, \n            Delivering goods, Providing emergency services.";
            }
            else if (a === "ai") {
                return "We harness the power of AI to: Help us to better understand climate change and \n            other environmental challenges, improve the efficiency of transportation systems,\n            and develop new drugs and treatments for diseases.";
            }
        }
        ;
    });
}
;
function main() {
    listen();
}
;
main();
