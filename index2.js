
let counter = document.querySelectorAll('.counter')
let arr = Array.from(counter);


arr.map((item) =>{
    let count = 0;

    function counterUp(){
        count++;
       item.innerHTML = count;
    
       if( count == item.dataset.number){
        clearInterval(stop)
       }
    
    }
    
    let stop = setInterval(function(){
        counterUp()
    },1000/ item.dataset.number)

})

