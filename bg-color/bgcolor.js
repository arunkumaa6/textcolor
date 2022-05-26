let buttonele=document.getElementById('btn');

let inputele=document.getElementById('textcolor');

buttonele.addEventListener('click',textcolor)

function textcolor(){
    var getcolor=inputele.value
    inputele.style.color=getcolor;
}