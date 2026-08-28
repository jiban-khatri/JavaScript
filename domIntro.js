/*
1. Document - Represents the entire page and it is the root node of DOM tree.

2. Node - A generic term for any element in the DOM tree. Element Node, Text Node, Attribute Node

3. Element - A special type of node that represents HTML tags/elements.

4. NodeList - An array of Nodes

5. Attribuite Node - represents the attribute of nodes.

6. NameNodeMap - A collection of atribute.
*/

// Accessing DOM

// by Id
const headingElem = document.getElementById("heading");
console.log(headingElem);


// by ClassName
const paraElem = document.getElementsByClassName("para");
console.log(paraElem);

console.log(paraElem[0]);
console.log(paraElem[1]);

[...paraElem].forEach((elem) => {
  console.log(elem);
});


// by TagName
let pTagElem = document.getElementsByTagName("p");
console.log(pTagElem);



// Selectors - QuerySelector and QuerySelectorAll

let para1 = document.querySelector(".para");
console.log(para1);

let paras = document.querySelectorAll(".para");
console.log(paras);

