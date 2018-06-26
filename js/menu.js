(function(){
    'use strict';
    var $menuIcon = document.querySelector(".menu_icon");
    var $navLinks = document.querySelector(".navegation");
    var $searchIcon = document.querySelector(".search_icon");
    var $searchInput = document.querySelector(".search_input");
    var doc = document.querySelector('body');

    $menuIcon.addEventListener('click', showMenu);
    $searchIcon.addEventListener('click', showInput);


    function showMenu(){    
        var open = $navLinks.classList.toggle('is-open');  
        $menuIcon.classList.toggle('rotate');
    }

    function showInput(){
        $searchInput.classList.toggle('show_input')
    }
    
})()