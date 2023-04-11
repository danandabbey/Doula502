//Utilities

function get(e: string): any{
    return document.getElementById(e);
};

function all(e: string): any{
    return document.querySelectorAll(e);
};

//operates services menu

function servicesmenu(): void{

    const btn: any = all(`button[class="service"]`);
    btn.forEach(function(button: any): void{
        button.addEventListener("click",function(e: any): void{
            let service: string = button.id;
            let desc: any =  get("services-desc");
            desc.textContent = getText(service);

            desc.style.display = "flex";
        });

        function getText(a: string){
            if (a === "pre") {
                return `During pregnancy, I provide prenatal education, help expectant parents 
                create birth plans, and offer guidance on nutrition, exercise, and relaxation 
                techniques. I also offer emotional support to address any fears or concerns 
                about childbirth.`
            }
            else if (a === "birth") {
                return `During labor and childbirth, I provide continuous support, 
                offering comfort measures such as breathing techniques, massage, 
                and position changes. I serve as an advocate for the birthing person, 
                helping them communicate their preferences to the medical team and facilitating 
                communication between the family and the healthcare providers.`
            }
            else if (a === "post") {
                return `In the postpartum period, I offer support with breastfeeding,
                 newborn care, and emotional adjustment to parenthood. I can provide practical
                  assistance with household tasks and offer a listening ear as parents process
                   their birth experience and adjust to their new role as parents.`
            }
        };
    });
};

servicesmenu()
