let time=3;
let num=0;
let score=0;
function bubble(){
  cluster=""
for(let i=1;i<=80;i++){
  let rn=Math.floor(Math.random()*10)
  cluster+=`<div id="innercircle">${rn}</div>`
}
document.querySelector('#circle').innerHTML=cluster
}

function settimer(){
   let timer=setInterval(function(){
    if(time>0){
      time--;
      document.querySelector('.timer').innerHTML=time
    }
    else{
      clearInterval(timer)
      document.querySelector('#circle').innerHTML=`<h1>Game Over</h1>`
      document.querySelector('.hit').innerHTML="0"
    }
   
   },1000)
}

function getValue(){
  num=Math.floor(Math.random()*10)
  // console.log(num)
  document.querySelector('.hit').innerHTML=num
}

function increaseScore(){
  score+=10;
  document.querySelector('.score').innerHTML=score
}

document.querySelector('#circle').addEventListener("click",function(info){
  let clickNum=Number(info.target.textContent)
  if(clickNum==num){
    increaseScore()
    bubble()
    getValue()
  }
})


bubble()
settimer()
getValue()