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

// doFirst()
// .then(data =>{
//     el.innerHTML = el.innerHTML + data + "<br> And I am Second !!!!!";
// })
// .catch(err =>{
//     el.innerHTML = el.innerHTML + err + "<br> Check with the Admin !!!!!"
// })


// async and await :
// async function showMessage() {
//     try {
//         let firstMessage = await doFirst();
//         el.innerHTML = firstMessage + "<br> And I am Second !!!!!";
//     } catch (err) {
//         el.innerHTML = "<br> OOO OOPS !!!!!" + err;
//     }
// }
// showMessage();


// doFirst()
// .then((data)=>{
//     el.innerHTML = el.innerHTML + data + "<br> And I am Second !!!!!"
// console.log(data);
// });

// el.innerHTML = el.innerHTML + "<br> And I am Second !!!!!";

// let obj = {
//     name :'shivam',
//     id : 1111,
//     address: 'Bihar'
// }

// let obj1 = obj;
// obj1.id =2222;


// console.log(obj1.id)
// console.log(obj.id)