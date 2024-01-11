
function randomnum(){
    
let str="abcdef0123456789";
let randomColor="#";
for(let i=0;i<6;i++){
    let randomNumber=Math.floor((Math.random())*16);
    // console.log(randomNumber);
    randomColor+=str[randomNumber];

}
return randomColor;
// console.log(randomColor);

}
randomnum();


let container=document.getElementById("container");
for(let i=0;i<100;i++){
    let colorContainer=document.createElement("div");
    colorContainer.classList.add("colorBox");

    container.appendChild(colorContainer);
    
}


let allDivs=document.querySelectorAll(".colorBox");
allDivs.forEach((div)=>{
    let newColor=randomnum();
    div.style.backgroundColor=newColor;
    div.innerHTML=newColor;
})





