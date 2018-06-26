(function(){
    'use strict';
    var $button = document.querySelector('.go-top');

    $button.style.display = 'none';

    window.addEventListener('scroll', () => {
        if(pageYOffset > 600){
            $button.style.display = 'inline';
        }
        else{
            $button.style.display = 'none';
        };
        
    });
    
    $button.addEventListener('click', () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
          });

    });

})()