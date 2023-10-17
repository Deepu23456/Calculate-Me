let string = "";
let input = document.querySelector("input");
let button = document.querySelectorAll(".row button");
let green = document.querySelectorAll(".row .green");
let ping = new Audio("button.mp3");
let pick = new Audio("special-button.mp3");
Array.from(button).forEach((elem) =>{
    elem.addEventListener("click", (e)=>{
        ping.play();
        if(e.target.innerHTML === "="){
            pick.play();
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML==="AC"){
            pick.play();
            string = ""
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            pick.play();
            string = string.slice(0, -1);
            input.value = string;
        }    
        else{
            string = string + e.target.innerHTML;
            input.value = string;
        }
        

    })
})

Array.from(green).forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        pick.play();
    })
})