// let arr=[2,3,10,5,6,8,9];
// console.log(arr.length);

//  console.log(arr);
// arr.push(1000);
// console.log(arr);


// arr.pop();
// console.log(arr);

// //shift
// arr.unshift(1000);
// console.log(arr);

// arr.shift();
// console.log(arr);       

// let arrstr=arr.toString();  use to convert in string
// console.log(arrstr);

// //or it can
// let newstr=arr.join('+');  //we can use any sepeater to us it in betwwen..
// console.log(newstr);

// delete arr[3];  //it delete but not indexedDB.
//  console.log(arr);

// //to merge two array by using concate..
// let arr1=["hello","hey","1"];
// console.log(arr1);

// let newarr1=arr.concat(arr1)//,arr2,arr3,'aman');//we can give more parameter
// console.log(newarr1);

// arr.copyWithin(3,0);
// console.log(arr);

// let num=[[1,2,3],[45,67,87],[443,54546,434,4232,2344,768]];
// console.log(num);
// let newNum=num.flat();
// console.log(newNum);


// let newarr2= newNum.map((item,i)=>item*2);
// console.log(newarr2);  

// newarr2= newNum.map((item ,i)=>{
// console.log(i);
// }

// let arr=[2,3,4,5,6,8,6,];
// let newarr2=[];

// for(i=0;i<arr.length;i++){
//     newarr2.push(arr[i]*1000);
// }
// console.log(newarr2);


// let newarr=arr.map((number)=>{
//     return number*1000;
// })
// console.log(newarr);
// 
// arr.forEach((item)=>{   //for each always undefined..and map return new array with same order
//     return item*1000;
// })
// console.log(newarr);
console.log("hi")



//promises
// const myPromise=new Promise((resolve,reject)=>{

//   setTimeout(()=>{

//     const randomNum=Math.floor(Math.round()*10);

//     if(randomNum<5){
//       console.log("your answer is")
//       resolve(`success! random number: ${randomNum}`);
//      reject(`success! random number: ${randomNum}`);
//     }
//   },1000)
// })
   
//     myPromise.then((result)=>{
//       console.log(result);
//     })
//     .catch((error)=>{
//       console.log(error);
//     })

                                

// const myPromise=new Promise((resolve,reject)=>{
    
//   setTimeout(()=>{
//     // const error=true;
//     console.log("i love you")
//     resolve();
//     reject();
//   },5000)
// })
// myPromise.then(()=>{
  //   console.log("it execute")
  // })
  // .catch(()=>{
    //   console.log("error")
  // })
  

  // const myPromise=new Promise((resolve, reject) => {
    
  //   setTimeout(()=>{
  //     const randomNum=Math.random()*10;
  //     resolve(`your number is${randomNum}`)
  //   },5000)
  // })
  // myPromise.then((user)=>{
  //   console.log(user)
  // })
  

 
