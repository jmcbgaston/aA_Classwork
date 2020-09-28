
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    // let pString = `<p>${string}</p>`;
    if (htmlElement.children){
        Array.from(htmlElement.children).forEach (child => {
            htmlElement.removeChild(child);
        })
    }

    let node = document.createElement("P");
    let textnode = document.createTextNode(string);
    node.appendChild(textnode);
    htmlElement.appendChild(node)
};




// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"


htmlGenerator('Party Time.', partyHeader); //string + HTML element

// add a p tag with the string ("Party Time") onto the HTML Element (partyHeader)

// <p>Part Time.</p>