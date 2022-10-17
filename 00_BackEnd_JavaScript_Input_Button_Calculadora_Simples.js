//Neste arquivo colocamos as funções/operações:


//Primeiro criamos duas variáveis para receber os valores dos campos INPUT:
const a=document.getElementById('num1');
const b=document.getElementById('num2');

//As quatro funções criadas, que são chamadas nos botões:
function soma(){
    resultado.innerText = a.value+" + "+b.value+" = " + (parseInt(a.value)+parseInt(b.value));
}

function multiplicacao(){
    resultado.innerText = a.value+" * "+b.value+" = " + (parseInt(a.value)*parseInt(b.value));
}

function subtracao(){
    resultado.innerText = a.value+" - "+b.value+" = " + (parseInt(a.value)-parseInt(b.value));
}

function divisao(){
    resultado.innerText = a.value+" / "+b.value+" = " + (parseInt(a.value)/parseInt(b.value));
}



