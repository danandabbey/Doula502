function get(e: string): any{
    return document.getElementById(e);
};

//listen for clicks opens page

function listen(): void{
    const selectedButton: any = document.querySelectorAll(`button[class="nav-button"]`);
    selectedButton.forEach(function(button): void{
        
        button.addEventListener("click",function(e: any){
            e.preventDefault();
            const btn: any = e.currentTarget;
            let url: string = btn.id

            window.location.href = `../html/${url}.html`
        });
    });
};

function serviceMenu(): void{

    const btn: any = document.querySelectorAll(`button[class="projects"]`);
    btn.forEach(function(button: any): void{
        button.addEventListener("click",function(e: any): void{
            let project: string = button.id;
            let desc: any =  get("project-desc");
            desc.textContent = getText(project);

            desc.style.display = "flex";
        });

    function getText(a: string){
        if (a === "finance"){
            return `We’re working on a large set of free tools to help you manage your finances.
            These tools will make it easier to: Budget, Track your spending, Save for retirement, and Pay off debt.`
        }
        else if (a === "drones"){
            return `AI-powered drones are being built to solve problems around the world. 
            These drones can be used for a variety of purposes, such as: Inspecting infrastructure, 
            Delivering goods, Providing emergency services.`
        }
        else if (a === "ai"){
            return `We harness the power of AI to: Help us to better understand climate change and 
            other environmental challenges, improve the efficiency of transportation systems,
            and develop new drugs and treatments for diseases.`
        }
    };
    });
};


function main(): void{
    listen();
};

main();