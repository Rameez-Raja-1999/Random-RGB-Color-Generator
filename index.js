let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let display = document.querySelector("#bgcolor");
let body = document.querySelector("body");

btn.addEventListener("click", ()=>{
    let randomColor=changeColor();
    h1.innerText=randomColor;
    display.style.backgroundColor=randomColor;
})


function changeColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let rgb =`rgb(${red}, ${green}, ${blue})`;
    return rgb;
}
