class DOMNodeCollection {
    constructor(htmlEleArray) {
        this.htmlEleArray = htmlEleArray;
    }
}

DOMNodeCollection.prototype.html = function(stringArg) {
    stringArg = stringArg || null;

    if (stringArg === null) {
        return this.htmlEleArray[0].innerHTML;
    } else {
        return this.htmlEleArray[0].innerHTML = stringArg;
    }
}

DOMNodeCollection.prototype.empty = function() {
    this.htmlEleArray[0].innerHTML = "";
    return this;
}

DOMNodeCollection.prototype.append = function(arg) {
    // arg === $l() / HTMLElement / 'string'
    // if (arg instanceof $l || arg instanceof HTMLElement || arg instanceof String) {
    if (typeof arg === 'string' || arg === 'function' || arg instanceof HTMLElement) {
        this.htmlEleArray.push(arg);
        return this;
    }
}

DOMNodeCollection.prototype.attr = function() {
// sets a kv pair on html element
// input.attr() => type : submit
}

DOMNodeCollection.prototype.addClass = function(arg) {
    this.htmlEleArray[0].classList.add(arg)

}

DOMNodeCollection.prototype.removeClass = function(arg) {
    this.htmlEleArray[0].classList.remove(arg)
}

module.exports = DOMNodeCollection;