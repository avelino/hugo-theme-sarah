'use strict';

//Settings for mbcliker.min.js
var $click = $('.site-btn');
$click.mbClicker({
    size: 300, //Maximum size of circle
    speed: 750, //Time of animation in miliseconds
    colour: 'rgba(0,0,0,0.11)', //Colour of circle and shadow
    shadow: false, //Whether or not to have a shadow on the circle
    buttonAnimation: true //Only use if button doesn't have a style attribute
});
