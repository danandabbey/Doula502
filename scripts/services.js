//Utilities
function get(e) {
    return document.getElementById(e);
}
;
function all(e) {
    return document.querySelectorAll(e);
}
;
//operates services menu
function servicesmenu() {
    var btn = all("button[class=\"service\"]");
    btn.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var service = button.id;
            var desc = get("services-desc");
            desc.textContent = getText(service);
            desc.style.display = "flex";
        });
        function getText(a) {
            if (a === "pre") {
                return "During pregnancy, I provide prenatal education, help expectant parents \n                create birth plans, and offer guidance on nutrition, exercise, and relaxation \n                techniques. I also offer emotional support to address any fears or concerns \n                about childbirth.";
            }
            else if (a === "birth") {
                return "During labor and childbirth, I provide continuous support, \n                offering comfort measures such as breathing techniques, massage, \n                and position changes. I serve as an advocate for the birthing person, \n                helping them communicate their preferences to the medical team and facilitating \n                communication between the family and the healthcare providers.";
            }
            else if (a === "post") {
                return "In the postpartum period, I offer support with breastfeeding,\n                 newborn care, and emotional adjustment to parenthood. I can provide practical\n                  assistance with household tasks and offer a listening ear as parents process\n                   their birth experience and adjust to their new role as parents.";
            }
        }
        ;
    });
}
;
servicesmenu();
