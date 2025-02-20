//document.getElementsByTagName(div)
// document.getElementsByTagName("div")
// document.getElementsByTagName("h1")
// let mydiv=document.getElementsByClassName("heading")
// console.log(mydiv);
// document.querySelector("#heading1");
// document.querySelector
// document.querySelector("#heading1")
//document.querySelector(".heading")
//document.querySelector("div").style.backgroundColor="green
//document.querySelector("div").style.color="yellow"
//let newdiv=document.queryselector(".heading")
// newdiv
// mydiv.forEach(item )=> {item.innertext='jaipur ${i}'})
// mydiv.forEach((item ,i)=>{item.style.borderRadius="30px"})

//parent and childd

// let parentdiv=document.querySelector(".parent")
// parentdiv
// parentdiv.children
// parentdiv.firstElementChild
// parentdiv.lastElementChild

//1st
//it is use to pop up on click
// document.getElementById("header").onclick=function(){
//     alert("Hello git");
// }

//2nd
//event capturing when outer click first then inner and evet is true selected event capturing
//event capturing when inner click first then outer and evet is false selected called event public
//example
// document.getElementById("header").addEventListener("click",function(e){
//     console.log("outer click");
//e.stopPropagation();
//     console.log(e);
// },false)
// //here only change true or fasle in both.to know public or capturing
// document.getElementById("header").addEventListener("click",function(){
//     console.log("inner click");
// },false)  


//type case writing
//1.camel case  =firstName (first small and another word first letter capital )
//2.snack case =first_name (uses underscore to seperate)
//3.pascal case =FirstName (both word first letter capital)

//3rd
// document.getElementById("input").addEventListener("keydown",function(e){
//     console.log("hello");
    // console.log(e.target.value)
    // console.log(e.code)
    // console.log(e.key);
// })


// 4th
// let insert=document.getElementById("main")
// window.addEventListener("keydown",function(e){
//     insert.innerHTML=`<table><thead><tr><th>key</th><th>code</th><th>key code</th></tr></thead><tbody><tr><td>${e.key}</td><td>${e.code}</td><td>${e.keycode}</td></tr></tbody></table>`
//     console.log(e.code)
//      console.log(e.key);
//  })


// 5th
// console.log("1");
// setTimeout(function(){
//     console.log(2);
// },20)
// console.log(3);

// 6th
// let insert=document.getElementById("main")
// setTimeout(function(){
//     insert.innerHTML ="amarjeet"
// },5000)




