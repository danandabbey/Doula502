`use strict`;

//Utilities

function get(e: string): any{
    return document.getElementById(e);
};

function all(e: string): any{
    return document.querySelectorAll(e);
};

//listen for clicks

function listen(): void{
    const selectedButton: any = all(`button[class="nav-button"]`);
    selectedButton.forEach(function(button: any): void{
        
        button.addEventListener("click",function(e: any){
            e.preventDefault();
            const btn: any = e.currentTarget;
            const url: string = btn.id

            window.location.href = `${url}.html`
        });
    });
};

function dropMenu(): void{

    const btn: any = get("drop-control");
    const drop: any =get("drop");
    const both: any = [btn,drop];

    if (window.matchMedia("(min-width: 900px)").matches){

        both.forEach(function (button: any){
            button.addEventListener("mouseover", function () {
            drop.style.display = "flex";
            btn.style.display = "none";
        })});
    
        both.forEach(function (button: any){
            button.addEventListener("mouseout", function () {
            drop.style.display = "none";
            btn.style.display = "flex";
        })});
    }

    btn.addEventListener("click", function(){
        drop.style.display = "flex";
        btn.style.display = "none";
    })
};

dropMenu();

listen();
