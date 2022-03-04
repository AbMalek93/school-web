var inputarea = document.getElementById('input');
var total = document.getElementById('total');
var remain = document.getElementById('remain');

function totalChars()

{
    var limit = 10;
    var totalChars = inputarea.value.length;
    total.innerHTML = totalChars;
    remain.innerHTML = limit - totalChars;
}


var num = 18;

if (num == 18){
    document.write('Female Is Marriage<br>');
}
else {
    document.write('Female Is not Marriage');
}