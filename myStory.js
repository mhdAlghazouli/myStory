$(function () {

'use strict';

// Adjust Header Height
let myHeader = $('.header');

myHeader.height($(window).height());

$(window).resize(function () {
    myHeader.height($(window).height());

});
// links active
$('.links li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
});

});