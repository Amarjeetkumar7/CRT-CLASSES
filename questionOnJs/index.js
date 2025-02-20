// let a=123
// const b=a.toString().split("").reverse().join("")
// console.log(b)


//let word="hello my name is amarjeet"
//capail first letter
// function reverse(str){
  
//   const arr=str.split(" ").map(function name(word){
//     return word.charAt(0).toUpperCase()+word.substring(1)
//   })
//  return arr.join(" ")
 
// }
// console.log(reverse("my name is"))

// let obj={a:1}
// obj.hasOwnProperty("a")  //iska matlab ky usme ye proprert hai .
//Q.to check each element how many times..
// function occur(str){
//   let occurance={}
//   str.split("").forEach(function (elem){
//     if(occurance.hasOwnProperty(elem)===false){
//           occurance[elem]=1
//     }
//     else{
//       occurance[elem]++
//     }
//   })
//   return occurance
// }
// console.log(occur("aapple"))


//Qsum of all aray..
// let arr=[1,2,3,4,5]
// let sum=0
// arr.forEach(function (s){
//    sum=sum+s
// })
// console.log("g")

//Q..arry having numbers and string only add the numbers..

// let arr=["addEventListener",23,"default",34,34,"fdgdg"]
// let sum=0
// arr.forEach(function (e){
//   if(typeof e=="number"){
//     sum=sum+e
//   }
// })
// console.log(sum)


//Q..print array element in function .if inde x given then print till or print only 1st index in argument not given....

//hint
// function name(arg,n=1){//default n
//     console.log(arg)
//   }
//   name([1,2,3],1)


//Q..union of sett..

// function union(a1,a2){
//    return [new Set(a1.concat(a2))]

// }
// console.log(union([1,2,3],[3,4,5]))
