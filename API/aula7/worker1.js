addEventListener('message', function(event){
    const inputNumber1 = event.data
    function fatorial(num) {
        if (num < 0) 
              return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * fatorial(num - 1));
        }
      }
      fatorial(5);



})