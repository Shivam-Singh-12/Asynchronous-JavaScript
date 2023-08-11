let el = document.getElementById('response');

jsonplaceholder = "https://jsonplaceholder.typicode.com/posts/5";
employees = "http://localhost:3000/employees";

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

async function getData() {
    try {
        const getData = await fetch(employees)
        const finalData = await getData.json();
        console.log(finalData);
        // el.innerHTML = el.innerHTML + "<br> Hello fetch works with async and await"
        el.innerHTML = JSON.stringify(finalData);
    } catch (err) {
        console.log(err);
    }
}

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