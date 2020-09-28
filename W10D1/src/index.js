const DOMNodeCollection = require('./dom_node_collection.js');
// console.log('hi');

function $l(selector) {
    if (selector instanceof HTMLElement) {
        return new DOMNodeCollection([selector])
    } else {
        let nodeList = document.querySelectorAll(`${selector}`);
        let arrList = Array.from(nodeList);
        return arrList;
    }
}
// selector is expected to be a css selector that we can use to identify nodes on a page

// use
// elementList = parentNode.querySelectorAll(selectors);
// htmlList = document.querySelectorAll('html');
// headList = document.querySelectorAll('head');
// ulList = document.querySelectorAll('ul');
// pList = document.querySelectorAll('p');
// to get an array like object (specifically a NodeList) that matches the selector using the native JavaScript API.

window.DOMNodeCollection = DOMNodeCollection;
window.$l = $l;

// Phase1
// Create a a class to hold DOM nodes and offer convenient methods for traversal and manipulation.

// empty
// remove
// attr
// addClass
// removeClass
// html
// find
// children
// parent