//Fiz o programa para ser executado no console do navegador.

var multiplicado = parseInt(prompt('Qual tabuada você quer saber?'))
var multiplicador = 0
var tabuada = 10

while (multiplicador <= tabuada){ 
    console.log(`${multiplicado} X ${multiplicador} = ${multiplicado * multiplicador}`)
    multiplicador++
}
