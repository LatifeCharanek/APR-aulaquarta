worker1 = new Worker('worker1.js')
function calcularQuadrado(){
    worker1.postMessage(document.getElementById('inputNumber1').value)
}
worker1.addEventListener('message', function(event){
    const quadrado= event.data
    document.getElementById('resultado1').textContent='O quadrado do Numero digitado é :' + quadrado
})