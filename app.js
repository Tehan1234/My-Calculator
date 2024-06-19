function num9Click(){
    document.getElementById("calc").value=9;
}
function num8Click(){
    document.getElementById("calc").value=8;
}
function num7Click(){
    document.getElementById("calc").value=7;
}
function num6Click(){
    document.getElementById("calc").value=6;
}


function num5Click(){
    document.getElementById("calc").value=5;
}
function num4Click(){
    document.getElementById("calc").value=4;
}
function num3Click(){
    document.getElementById("calc").value=3;
}
function num2Click(){
    document.getElementById("calc").value=2;
}


function num1Click(){
    document.getElementById("calc").value=1;
}
function num0Click(){
    document.getElementById("calc").value=0;
}
function numminClick(){
    document.getElementById("calc").value="-";
}
function nummulClick(){
    document.getElementById("calc").value="*";
}


function numdivClick(){
    document.getElementById("calc").value="/";
}
function numdotClick(){
    document.getElementById("calc").value=".";
}
function numequClick(){
    document.getElementById("calc").value="=";
}
function numaddClick(){
    document.getElementById("calc").value="+";
}

function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}