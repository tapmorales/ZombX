(function(){
    'use strict'

    let statisticsNumbers = document.querySelectorAll(".statistics-number");

    window.addEventListener('scroll', timer);


    function timer() {
        if(pageYOffset > 2636){
            makeTimer(statisticsNumbers[0], 2556, 1);
            makeTimer(statisticsNumbers[1], 326, 32);
            makeTimer(statisticsNumbers[2], 1526, 7);
            makeTimer(statisticsNumbers[3], 856, 13.5);
            window.removeEventListener('scroll',timer, false);
        }
    }
    function makeTimer(dom, num, time) {
        let $doms = dom;

        var x = 0;
        var myVar = setInterval(myTimer, time);

        function myTimer() {
            x++
            dom.textContent = x;
            
            if(x === num ) {
                clearInterval(myVar);
            }
        }

        





    }


})()