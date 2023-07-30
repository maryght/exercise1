/*let c = ""

for (let i = 0; i < 6; i++) {

    c = c + "*"
    console.log(c)
}*/

/*
function add(a,b){
    return a+b;
}

document.getElementById("laya").innerHTML = "she is beautiful  " +" = " + add(10,10);
document.getElementById("kati").innerText = "she is gorgeous"+ " <button> click </button>";
document.getElementById("maryam").innerHTML = "she is stunning" + " <button> Hello</button>";
*/

let star = "";

for (let i = 0; i <= 6; i++) {
    for(let j = 0 ; j <i ; j++){
    star += "*";
    }
    star += "<br>";
}

document.getElementById("b").innerHTML = star
