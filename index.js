 
import {Observable} from 'rxjs'; // destructuring
const observable = new Observable((s)=>{
    setTimeout(()=> s.next("Hello"),1000)
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