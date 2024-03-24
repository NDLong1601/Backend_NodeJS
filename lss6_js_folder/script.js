// Một số hàm built-in ( Được định nghĩa sẵn)
// alert(message);in ra 1 thông báo popup
// alert('Hello');

// // confirm
// var result = confirm("Ban da tren 18 tuoi?");
// console.log(result);

// prompt
// var GiatriBandau = prompt("GiatriBandau",0);
// console.log(GiatriBandau);
// console.warn(GiatriBandau);
// console.error(GiatriBandau);

// setTimeout: Chạy 1 lần duy nhất sau 1 khoảng thời gian
// setTimeout(function (){
//     console.log("5 minites");
// }, 5000);

// setInterval: Chạy lặp đi lặp lại sau 1 khoảng thời gian nào đó
var clear = setInterval(function (){
    console.log('A');
},1000);
setTimeout(function() {
    clearInterval(clear);
},10000);


// const myInterval = setInterval(myTimer,2000);
// function myTimer() {
//     console.log("B")
// }
// function myStopFunction() {
//     clearInterval(myInterval);
// }

// Typeof : Kieu gia tri
var a = 10;
console.log(typeof a);

var b = "String";
console.log(typeof b)

/*      String
    Length
    indexOf : Tim vi tri dau tien cua mot chuoi nam trong 1 chuoi
                searchvalue : Gia tri can tim kiem
                start : Gia tri bat dau tim kiem
    lastIndexOf:Tim vi tri cuoi cung cua mot chuoi nam trong mot chuoi
                string.lastIndexOf(searchvalue,start);
*/
var myString = "Xin chao toi la Long toi";
console.log(myString.length);
console.log(myString.indexOf("toi",5));
console.log(myString.indexOf("Hai"));
console.log(myString.lastIndexOf("toi"));