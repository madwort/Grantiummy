// ==UserScript==
// @name        Grantiummy
// @namespace   https://github.com/madwort/Grantiummy
// @description Tidy up the CSS
// @include     https://applications.artscouncil.org.uk/*
// @version     1
// @grant       none
// ==/UserScript==

var css = 'html, body { font-family: "Open Sans", Helvetica, sans-serif; }' + 
          'input { font-family: "Open Sans", Helvetica, sans-serif; }' +
          'body { font-size: 10pt; }' +
          'textarea { height: 20em;}' + 
          '.fieldDescriptionLeft { font-size: 12pt; }' +
          'input.buttonDefault { border: 1px black solid; }';

var head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
