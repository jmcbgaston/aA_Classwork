class DOMNodeCollection {
    constructor(htmlEleArray) {
        this.htmlEleArray = htmlEleArray;
    }
}

DOMNodeCollection.prototype.html = function(stringArg) {
    stringArg = stringArg || null;
    // debugger;
    // if no argument, then return innerHTML msContentScript;
    // if argument exists, then reassign innherHTML to new string;

    // if no arg
    if (stringArg === null) {
        return this.htmlEleArray[0].innerHTML;
    } else {
        return this.htmlEleArray[0].innerHTML = stringArg;
    }
}

module.exports = DOMNodeCollection;