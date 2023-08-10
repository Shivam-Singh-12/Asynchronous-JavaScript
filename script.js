// let el = document.getElementById("response");

function A() {
    console.log("1");
};
function B(xy) {
    setTimeout(() => {
        console.log("2");
        xy();
    }, 2000)

}
function C() {
    console.log("3");
}
A();
B(C);
// C();