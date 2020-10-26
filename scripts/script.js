// JavaScript Document
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var paginaTwee = document.querySelector("form p");
var formulier = document.querySelector("form");

function opEnNeer() {
    formulier.classList.toggle("toonForm");
}

paginaTwee.addEventListener("click", opEnNeer);

//bron: https://codepen.io/shooft/pen/yLOvyQg
