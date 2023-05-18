addEventListener('message',function(event){
    const inputNumber1 = event.data
    var total = 1
        for (var i = inputNumber1 ; i > 0; i--) {
           total *= i;
        }
postMessage(total)
})
