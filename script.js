function inserir(num1)
{
    numero = document.getElementById('resultado').innerHTML 
    document.getElementById('resultado').innerHTML = numero + num1
}

function limpar()
{
    document.getElementById('resultado').innerHTML = ''
}

function apagado3x()
{
var numero = document.getElementById('resultado').innerHTML
document.getElementById('resultado').innerHTML = numero.substring(-2,numero.length -1)
}

function calcular(){
var resultado = document.getElementById('resultado').innerHTML
if (resultado){
document.getElementById('resultado').innerHTML = eval(resultado)
}
}

// 0 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8
//-8-7-6-5-4-3-2-1 