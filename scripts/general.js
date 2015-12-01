/*global $:false, jQuery:false */

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


var GeneralUtilities = (function ($) {
    'use strict';
    
    var dropdown = $('ul.nav li.dropdown'),
    
        dropdownHover = function (dropdown) {
            var dropdownMenu = this.find('.dropdown-menu');
            console.log(dropdownMenu);
            dropdownMenu.stop(true, true).delay(200).fadeIn(500);
        },
    
        dropdownStopHover = function (dropdown) {
            var dropdownMenu = this.find('.dropdown-menu');
            console.log(dropdownMenu);
            dropdownMenu.stop(true, true).delay(200).fadeOut(500);
        },
    
        bindUIActions = function () {
            var dropdownMenu = dropdown.find('.dropdown-menu');
            dropdown.hover(function () {
                dropdownHover(dropdown);
            },
                function () {
                    dropdownStopHover(dropdown);
                });
        },
        
        init = function () {
            bindUIActions();
        };
    
    return {
        init: init
    };
    
}(jQuery));

console.log(GeneralUtilities);
GeneralUtilities.init();