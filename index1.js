// console.log("Hello Shivam")


// const lcNames = ["shivam", "anil singh", "Manisha"];
// // 
// const properName = lcName => {
//     setTimeout(() => {
//         let ucName = lcName.toString().chatAt(0).toUpperCase() + lcName.slice(1);
//         console.log(ucName);
//         return ucName;
        
//     },2000);
// }
// // 
// lcNames.forEach(
//     upperCaseName => console.log(properName(upperCaseName))
// );

const pf1 = new Promise((resolve, reject)=>{
    // let ok = 
    resolve("here is your data");
    // el.innerHTML = el.innerHTML.ok
    // console.log(ok);
    
});
pf1.then(data =>{
    console.log(data);
})



const pf2 = Promise.resolve("pf2 Done");
// pf2.then(data=>{
//     console.log(data);
// });

const pf3 = Promise.resolve("pf3 Done");
// const pf3 = Promise.reject("Error");
// pf3.then(data=>{
//     console.log(data);
// });

// inner function setTimeout has access to the outer function new Promise(object)
const pf4 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, "pf4 is done");
})
// 
Promise
.all([pf1, pf2, pf3, pf4])
// .any([pf2, pf3, pf4])
// .race([pf3, pf2, pf4])
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})

// NOTE :
// Data and functions
// properties and methodes
// variables or module

// Observable : stram of data (Observable) we have listioner(observer) and subscribe - may not get a result, will need to subscribe to it or listioner(observer)
// it is a class
// alot of operators - next(), complete()
// we need a listioner
// const myObservable = new Observable((obs)=>{
//     obs.next("Hello");
// });
// myObservable.subscribe({
// next:(data)=>{console.log(data);}
// })

// broadcast we need radio to listen broadcast data and broadcast station will continue emmiting data when we trun off radio
// ex : mouse click in system if system is on we can continue doing working infinite untill it is off

// Promise : it will wait for the all data and result or error(Promise) - always get a result



// next(),complete(),error(), interval()
// of(), pipe(), map()


// Way to handle asynchronus function :
// callback function
// using Promise object
// Observable 




