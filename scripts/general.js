/*global $:false, jQuery:false */

$(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    'use strict';
    
    var id = $(this).attr('href'),
        $id = $(id),
        navOffset = 50,
        pos;
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    pos = $(id).offset().top - navOffset;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});


var GeneralUtilities = (function ($) {
    'use strict';
    
    var dropdown = $('ul.nav li.dropdown'),
    
        dropdownHover = function (dropdown) {
            var dropdownMenu = this.find('.dropdown-menu');
            dropdownMenu.stop(true, true).delay(200).fadeIn(500);
        },
    
        dropdownStopHover = function (dropdown) {
            var dropdownMenu = this.find('.dropdown-menu');
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

GeneralUtilities.init();