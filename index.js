let display = document.querySelector('.display');
let button = document.querySelectorAll("button");

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        switch(this.textContent){
            case "C":
                display.textContent = "";
                break;
            case "Del":
                display.textContent = display.textContent.slice(0,-1);
                break;
            case "=":
                try{
                    display.textContent = eval(display.textContent);
                } catch{
                    display.textContent ="Syntax Error";
                }
                break;
            default:
                display.innerText += this.textContent 
        }
        
    })
}
