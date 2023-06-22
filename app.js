const oneSection = document.getElementById("one-sec");
const btnStartGameIndex = document.getElementById("btnStart");
const input = document.getElementById("input");
const gameBox = document.getElementById("gameBox");
const gameMain = document.getElementById("game-main");
const player = document.querySelector(".person");
const bubbleBox = document.querySelector(".game-zone-box");
const start = document.querySelector(".start");
const isdelete = document.querySelector(".delete");
const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");
const score = document.querySelector(".score");
const gameZoneBox = document.querySelector(".game-zone-box");
const high = document.querySelector(".high")
let interval; // Declare the interval variable

btnStartGameIndex.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please enter your name");
    
  } else {
    oneSection.style.display = "none";
    gameMain.style.display = "flex";
    player.innerHTML = `Player name:${input.value}`;
  }
});

let newBubbleArr = [];
let count = 0;

start.addEventListener("click", (e) => {
  easy.disabled = false;
  medium.disabled = false;
  hard.disabled = false;
  isdelete.disabled = false;
  easy.classList.remove("level-btn");
  medium.classList.remove("level-btn");
  hard.classList.remove("level-btn");
  isdelete.classList.remove("level-btn");

//   interval = setInterval(() => {
//     const buble = document.createElement("button");
//     let left1 = Math.floor(Math.random() * 320) + "px";
//     let top1 = Math.floor(Math.random() * 320) + "px";
//     buble.classList.add("buble");
//     bubbleBox.appendChild(buble);
//     buble.style.left = left1;
//     buble.style.top = top1;
//     newBubbleArr.push(buble);
//     if (newBubbleArr.length < 6) {
//       buble.addEventListener("click", (e) => {
//         newBubbleArr.pop();
//         e.target.remove();
//         score.textContent = `Score:${count++}`;
//       });
//     }
//     else {
//         clearInterval(interval);
//         alert("Game Over");
//       }
//      if(count>10){
//         clearInterval(interval);
//         alert("You are win");
//     } 
   
//   }, 1500);

  e.target.disabled = true;
});


function hardRules(){
    const buble = document.createElement("button");
        let left1 = Math.floor(Math.random() * 320) + "px";
        let top1 = Math.floor(Math.random() * 320) + "px";
        buble.classList.add("buble");
        bubbleBox.appendChild(buble);
        buble.style.left = left1;
        buble.style.top = top1;
        newBubbleArr.push(buble);
        buble.addEventListener("click",deleteHard)
    //   const easyBuble =  buble.addEventListener("click",deleteEasy)
    
}
function easyRules(){
    const buble = document.createElement("button");
        let left1 = Math.floor(Math.random() * 320) + "px";
        let top1 = Math.floor(Math.random() * 320) + "px";
        buble.classList.add("buble");
        bubbleBox.appendChild(buble);
        buble.style.left = left1;
        buble.style.top = top1;
        newBubbleArr.push(buble);
        
      buble.addEventListener("click",deleteEasy)
    
}
function mediumRules(){
    const buble = document.createElement("button");
        let left1 = Math.floor(Math.random() * 260) + "px";
        let top1 = Math.floor(Math.random() * 260) + "px";
        buble.classList.add("buble");
        bubbleBox.appendChild(buble);
        buble.style.left = left1;
        buble.style.top = top1;
        newBubbleArr.push(buble);
       
     buble.addEventListener("click",deleteMedium)
    
}
let easyInt;
let mediumInt;
let hardInt;
easy.addEventListener("click",()=>{
    easy.disabled=false
    clearInterval(mediumInt)
     clearInterval(hardInt)
    easyInt= setInterval(()=>{
    
        easyRules()
       
       greate()
       
     },2000)
     easy.disabled=true
     medium.disabled = false
     hard.disabled = false
     clearInterval(mediumInt)
     clearInterval(hardInt)
     newBubbleArr = [];
    count = 0;
    score.textContent = `Score:${count}`;
})
medium.addEventListener("click",()=>{
    medium.disabled =false
    clearInterval(easyInt)
     clearInterval(hardInt)
  mediumInt= setInterval(()=>{
    
    mediumRules()
    greate()
    
 },1500) 
 medium.disabled = true
 easy.disabled = false
 hard.disabled = false
 clearInterval(easyInt)
     clearInterval(hardInt)
     newBubbleArr = [];
    count = 0
    score.textContent = `Score:${count}`;
})
hard.addEventListener("click",()=>{
    hard.disabled = false
    clearInterval(easyInt)
    clearInterval(mediumInt)
    hardInt= setInterval(()=>{
        
       hardRules()
       greate()
       
     },1200)
     
     hard.disabled = true
     medium.disabled = false
     easy.disabled = false
     clearInterval(easyInt)
     clearInterval(mediumInt)
     newBubbleArr = [];
    count = 0;
    score.textContent = `Score:${count}`;
})
isdelete.addEventListener("click",()=>{
    high.textContent=`High score:${count}`
    gameZoneBox.innerHTML = "";
    newBubbleArr = [];
    count = 0;
    score.textContent = `Score:${count}`;
    clearInterval(interval);
    clearInterval(easyInt)
     clearInterval(mediumInt)
     clearInterval(hardInt)
    start.disabled=false
    
})

window.addEventListener("load", () => {
    let highScore = localStorage.getItem("high");
    if (highScore !== null) {
      high.innerHTML = `High Score: ${highScore}`;
      console.log(`High Score: ${highScore}`);
    }
  });

function deleteHard(e){
    if (newBubbleArr.length < 6) {
             newBubbleArr.pop(); 
             e.target.remove(); 
             score.textContent = `Score:${count+=4}`
            }
          }
function deleteMedium(e){
    if (newBubbleArr.length < 6) {
             newBubbleArr.pop(); 
             e.target.remove(); 
             score.textContent = `Score:${count+=2}`
            }
          }
function deleteEasy(e){
    if (newBubbleArr.length < 6) {
             newBubbleArr.pop(); 
             e.target.remove(); 
             score.textContent = `Score:${count+=1}`
            }
          }
function greate(){
    if(newBubbleArr.length>6){
        clearInterval(interval);
        clearInterval(hardInt)
        clearInterval(mediumInt)
        clearInterval(easyInt)
              alert("Game Over");
    }
    else if(count>50){
        alert("You are win");
        clearInterval(interval);
        clearInterval(hardInt)
        clearInterval(mediumInt)
        clearInterval(easyInt)
        high.textContent=`High score:${count}`
    }
}