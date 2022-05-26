let inputele=document.getElementById('bg-color');
console.log(inputele);

inputele.addEventListener('mouseout',myfunction);

function myfunction(){
    
    let textcolor=inputele.value;
    inputele.style.color=textcolor;

}

