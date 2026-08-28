console.log("DOM Manipulation in JavaScript");


// Creating Elements
{
const pElem = document.createElement("p");
pElem.innerText = "This is text added dynamically";
document.body.appendChild(pElem);
console.log(pElem);

}


// // Insert Element
// {
// const spanElem = document.createElement("span");
// spanElem.innerText = "This is span element";

// const pElem = document.querySelector("p");
// document.body.insertBefore(spanElem, pElem);
// }


// Modifying Content
{
    const h2Elem = document.querySelector("h2");
    
    // h2Elem.innerHTML = "<u>Keep Learning</u>"
    h2Elem.innerText = "Keep Learning";
}




// Removing Elements
{
    const listElem = document.getElementById("list");
    console.log(listElem.children);

    const itemToRemove = listElem.children[0];
    listElem.removeChild(itemToRemove);

}


// Read, Write and Remove Attribute
{

    const imageElem = document.querySelector("img");

    console.log(imageElem.getAttribute("src"));
    console.log(imageElem.getAttribute("alt"));


    imageElem.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kTgOcGg3sWOhFQEhB2Kb6mZEJiUAx_4rhtkxhM2NanSllz009MWIVS8&s=10");

    console.log(imageElem.getAttribute("src"));

    imageElem.removeAttribute("width");
}




// Travarsing / Navigating DOM
{
    // parent element and parent node
    const spanElem = document.getElementById("text");

    console.log("Parent Element", spanElem.parentElement);
    console.log("Parent Node", spanElem.parentNode);

    // children and child nodes
    const mainDivelem = document.getElementById("main-div");
    
    console.log("childern", mainDivelem.children);  // HTML Collection ( Array Like )
    console.log("ChildNodes", mainDivelem.childNodes);  // Nodes - Array

}