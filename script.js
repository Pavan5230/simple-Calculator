


function add(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let x = a+b;
    document.getElementById("answer1").innerHTML=+x;
}

function sub(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let x = a-b;
    document.getElementById("answer1").innerHTML=+x;
}

function mul(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let x = a*b;
    document.getElementById("answer1").innerHTML=+x;
}

function div(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let x = a/b;
    document.getElementById("answer1").innerHTML=+x;
}