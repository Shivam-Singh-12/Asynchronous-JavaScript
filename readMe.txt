// let el = document.getElementById("response");

// let myPromise = new Promise((resolve, reject)=>{
//     resolve("Done !!")
//     reject("Error!!")
// });
// myPromise
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

const doFirst = function(){
    const pf = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(el.innerHTML = el.innerHTML + "<br> I was First ...");
    }, 2000);
});
return pf;
   
}
doFirst().then((x)=>{
console.log(x);
});

el.innerHTML = el.innerHTML + "<br> And I am Second !!!!!";

// let obj = {
//     name :'shivam',
//     id : 1111,
//     address: 'Bihar'
// }

// let obj1 = obj;
// obj1.id =2222;


// console.log(obj1.id)
// console.log(obj.id)



const doFirst = function(){
    const pf = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("<br> I was First ...");
    }, 2000);
});
return pf;
   
}
doFirst()
.then((data)=>{
    el.innerHTML = el.innerHTML + data + "<br> And I am Second !!!!!"
console.log(data);
});



let el = document.getElementById("response");

const doFirst = function(){
    const pf = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("<br> I was First ...");
    }, 2000);
});
return pf;
}
async function showMessage() {
    let firstMessage = await doFirst();
    el.innerHTML = firstMessage + "<br> And I am Second !!!!!";
}
showMessage();



const doFirst = function () {
    const pf = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("<br> I was First ...");
            reject("<br> Error ...");
        }, 2000);
    });
    return pf;
}
async function showMessage() {
    try {
        let firstMessage = await doFirst();
        el.innerHTML = firstMessage + "<br> And I am Second !!!!!";
    } catch (err) {
        el.innerHTML = "<br> OOO OOPS !!!!!" + err;
    }
}
showMessage();



const doFirst = function () {
    const pf = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("<br> I was First ...");
            // reject("<br> Error ...");
        }, 2000);
    });
    return pf;
}

doFirst()
.then(data =>{
    el.innerHTML = el.innerHTML + data + "<br> And I am Second !!!!!";
})
.catch(err =>{
    el.innerHTML = el.innerHTML + err + "<br> Check with the Admin !!!!!"
})



const doFirst = function () {
    const pf = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("<br> I was First ...");
            // reject("<br> Error ...");
        }, 2000);
    });
    return pf;
}

doFirst()
.then(
    resolve => {el.innerHTML = el.innerHTML + resolve + "<br> And I am Second !!!!!"},
    reject => {el.innerHTML = "<p style='color:red;'>" + reject + "<br> Check with the Admin !!!!!"}
);


async function showData() {
    fetch(employees)
        .then(data => {
            // console.log(data.json());
            return data.json();
        })
        .then(res => {
            console.log(res);
            // console.log(res.username);
        })
        .catch(err => {
            console.log(err.message);
        })
}

employees = "http://localhost:3000/employees";
async function getData(){
    const postData = await fetch(employees)
    const finalData = await postData.json();
    console.log(finalData);    
}

async function getData() {
    try {
        const postData = await fetch(employees)
        const finalData = await postData.json();
        console.log(finalData);
        el.innerHTML = el.innerHTML + "<br> Hello fetch works with async and await"
        el.innerHTML = JSON.stringify(finalData);
    } catch (err) {
        console.log(err);
    }
}

async function postData() {
    try {
        const empData = await fetch(employees, 
        {
            method:'post',
            headers:{
                'content-Type': 'application/json',
            },
            body:JSON.stringify({"username":"fetch test final","password" : "1234"})
        }
        );
        const finalData = await empData.json();
        console.log(finalData);
        el.innerHTML = el.innerHTML + "<br> Hello fetch works with async and await"
        el.innerHTML = JSON.stringify(finalData[0].username);
    } catch (err) {
        console.log(err);
    }
}

async function postData() {
    try {
        const empData = await fetch(employees, 
        {
            method:'post',
            headers:{
                'content-Type': 'application/json',
            },
            body:JSON.stringify({"username":"Shivam Singh","password" : "12345"})
        }
        );
        const finalData = await empData.json();
        console.log(finalData);
        el.innerHTML = el.innerHTML + "<br> Hello fetch works with async and await"
        // el.innerHTML = JSON.stringify(finalData[0].username);
        el.innerHTML = JSON.stringify(finalData.username);
    } catch (err) {
        console.log(err);
    }
}


const apiUrl = "http://localhost:3000/employees"
function getApi(){
return new Promise((resolve, reject) =>{
fetch(apiUrl,
{method: 'GET'})
.then(res=>{
console.log(res.json)
return res.json();
})
.then(resp =>{
console.log(resp)
})
})
}
getApi();

const apiUrl = "http://localhost:3000/employees"
function getApi(){
return new Promise((resolve, reject) =>{
fetch(apiUrl)
.then(res=>{
return res.json();
})
.then(resp =>{
console.log(resp)
})
.catch(error => {
    console.error('Fetch error:', error);
});
})
}
getApi();



index.js
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
    let ok = resolve("here is your data");
    // el.innerHTML = el.innerHTML.ok
    // console.log(ok);
    // pf1.then(data =>{
    //     console.log(data);
    // })
});

const pf2 = Promise.resolve("pf2 Done");
// pf2.then(data=>{
//     console.log(data);
// });

const pf3 = Promise.resolve("pf3 Done");
// pf3.then(data=>{
//     console.log(data);
// });

// inner function setTimeout has access to the outer function new Promise(object)
const pf4 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, "pf4 is done");
})
// 
Promise
.all([pf2, pf3, pf4])
.then(data=>{
    console.log(data)
})


import {Observable} from 'rxjs'; // destructuring
const observable = new Observable((s)=>{
    s.next("Hello");
    s.next("Observer");
    s.next("Learning");
    // console.log(JSON.stringify(observable));
});
const observer = {
    next : (data) =>{
        console.log(data);
    }
}
observable.subscribe(observer);



 
import {Observable} from 'rxjs'; // destructuring
const observable = new Observable((s)=>{
    s.next("Hello");
    s.next("Observer");
    // s.error("oops!")
    s.next("Learning");
    s.complete();
    s.next("One More");
    // console.log(JSON.stringify(observable));
});
const observer = {
    next : (data) =>{
        console.log(data);
    },
    complete : () =>{
        console.log("complete done");
    },
    error : err =>{
        console.log(err);
    }
}
observable.subscribe(observer);
// observable.subscribe({
//     // next(data){
//     //     console.log(data);
//     // }
// });