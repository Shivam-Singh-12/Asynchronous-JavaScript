
import {Observable} from 'rxjs'; // destructuring
import {of, map} from 'rxjs'
import { interval } from 'rxjs'


// infinite counter : 0 to infinite number:

// let counter = interval(5000);
// counter.subscribe((y)=>{
//     console.log(y);
// })

let counter$ = interval(5000);
let counter = counter$.subscribe((y) => {
    console.log(y);
});
setTimeout(()=> {
    counter.unsubscribe();
},5000)


let sentence = [];
const observable = new of("Hello", "of", "operator");
observable.pipe(map(x=>{return x.toUpperCase()})).subscribe({
    next(data5){
        sentence.push(data5);
    },
    error(err){
        console.log(err);
    },
    complete(){
        console.log("All Done!!");
    }
})
console.log(sentence);


observable.subscribe((data5)=>{
    console.log(data5);
})



let greet =""
const greeting = of("Hello ", "Observer ","Learning2")

greeting.subscribe((x)=>{
    console.log(x);
    greet += x;
});
console.log(greet);



const observable1 = new Observable((s)=>{
    setTimeout(()=> s.next("Hello1"),1000)
    setTimeout(()=> s.next("Observer"),3000)
    setTimeout(()=> s.next("Learning"),2000)
    setTimeout(()=> s.complete(),4000)
    // s.next("Hello");
    // s.next("Observer");
    // // s.error("oops!")
    // s.next("Learning");
    // s.complete();
    // s.next("One More");
    // // console.log(JSON.stringify(observable));
});
const observer = {
    next : (data) =>{
        console.log(data);
    },
    complete : () =>{
        console.log("complete done first observable");
    },
    error : err =>{
        console.log(err);
    }
}
observable1.subscribe(observer);

// next()
observable1.subscribe({
    next(data){
        console.log(data);
    }
});

// 
// Create an Observable that emits values 1, 2, 3, 4 and completes
const observable3 = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    // observer.error(10);
    observer.next(3);
    observer.next(4);
    observer.complete();
  });
  
  // Subscribe to the Observable
 const subscription = observable3.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Observable completed'),
    error: (err) => console.error('Error:', err),
  });
//   console.log(subscription);
  