// Input :
let printOut = "";

let productPrice = ""
// productPrice = prompt("Enter Price : ");
productPrice = parseInt(productPrice);
const TAX = 1.08;
const SHIPPING = 5;

// Processing :
if(productPrice>100){
    finalPrice = productPrice * TAX;
    console.log("productPrice : " + productPrice * TAX);
}else{
    finalPrice = (productPrice * TAX) + SHIPPING;
    console.log("else - productPrice * TAX + SHIPPING : " + (productPrice * TAX) + SHIPPING);
} 
printOut = finalPrice;

// Output :
function showOutput (){
    document.getElementById("output").innerHTML = printOut;
    console.log("finalPrice : " + printOut)
}

// if(){} - else if(){} - else{}
let printOut1 = "";

let level = "";
let years = "";
years = prompt("Enter the number of years in programming");
years = parseInt(years);

if(years<=4){
    level = "Experience is 4 year - Junior programmer"
}else if(years>4 && years<=8){
    level = "Experience is 8 year - Intermediate Programmer"
}else if(years>8 && years<=11){
    level = "Experience is 8 year - Mid Level Programmer"
}else{
    level = "Technical Lead - Senior Programmer"
}
printOut1 = level;

function showOutputs (){
    document.getElementById("output1").innerHTML = printOut1;
    console.log("finalPrice : " + printOut1)
}

// for loop
let printOut2 = "";

for(let i=0; i<6; i++){
    // printOut2 = i;  
    // printOut2 = printOut2 + "i : "+ i +", "; 
    printOut2 += "i : "+ i +"</br> "; 
    if(i==4){
        break;
    }
}
function showOutputfor (){
    document.getElementById("output2").innerHTML = printOut2;
    console.log("finalPrice : " + printOut2)
}

// function
let functionOutput = "";
function doAdd(first, second){
    sum = first + second
    return sum;
}
function showOutputforfunction (){
    functionOutput = doAdd( 7, 4);
    document.getElementById("functionButton").innerHTML = functionOutput;
    console.log("finalPrice : " + functionOutput)
}

// 
let functionOutput1 = "";
function sayHello(x, y){
    let message = x + y
    return message;
}
function showOutputforfunction1 (){
    functionOutput1 = sayHello("Hello ", "Shivam");
    document.getElementById("functionButton1").innerHTML = functionOutput1;
    console.log("finalPrice : " + functionOutput1)
}

// Array
let functionOutput2 = "";
const colors = ["red", "blue", "green", "yello", "orange"]
colors.push("Jack");
colors.push("Shivam");
for(let i=0; i<colors.length; i++){
    functionOutput2 += colors[i] + "</br>"
}
console.log("colors.length : " + colors.length);
function showOutputforfunction2 (){
    document.getElementById("functionButton2").innerHTML = functionOutput2;
    console.log("finalPrice : " + functionOutput2)
}


// Multiple function
let multipleFunctionOutput = "";
let moreProducts = true, ProductCost=0.0, finalPrices=0.0, totalCart=0.0, moreItem=false;
function getCartTotal(){
    while(moreProducts == true){
        ProductCost = prompt("Enter Price Of Product : ")
        ProductCost = parseFloat(ProductCost);
        totalCart = totalCart + ProductCost;
        moreItem = confirm("Do You Have More Item To Add?");
        if(moreItem == false){
            moreProducts = false;
        } else{
            moreProducts = true;
        }
    }
    return totalCart
}
// ++++++++++++++++++++++++++++++
function calculateTaxes(){
    let afterTax = 0.0;
    let beforeTax = getCartTotal();
    afterTax = beforeTax * 1.08;
    return afterTax
}
// ++++++++++++++++++++++++++++++
multipleFunctionOutput = calculateTaxes();
function showOutputforMultiplefunction(){
    document.getElementById("multiplefunction").innerHTML = multipleFunctionOutput;
    console.log("finalPrice : " + multipleFunctionOutput)
}


