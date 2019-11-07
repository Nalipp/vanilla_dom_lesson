// Modifying properties and attributes on elements in the DOM
// We can change the text of an element through the innerHTML property.

var firstDiv = document.getElementsByTagName("div")[0];

firstDiv.innerHTML = "Just changed!";
// This can also be done using the innerText property.

var secondDiv = document.getElementsByTagName("div")[1];

secondDiv.innerText = "Just changed Again!";
// What's the difference between innerText and innerHTML? You can find it here.

// We can also directly manipulate the CSS properties for elements (through inline styling) with the style property.

var firstDiv = document.getElementsByTagName("div")[0];

firstDiv.style.color = "red";
firstDiv.style.backgroundColor = "teal";
// Notice that if you're accessing CSS properties using dot notation, you need to camelCase those property names, since firstDiv.style.background-color is invalid JavaScript. 

// (Bonus question: what do you think will happen if you try typing this in the console?) // Another option is to avoid the camel case by using brackets

firstDiv.style["background-color"] = "purple"; // this works too
// If we want to access/modify attributes on elements, we can do that with getAttribute and setAttribute:

var body = document.getElementById("container");

body.getAttribute("id"); // "container"
body.setAttribute("id", "new_container");
body.getAttribute("id"); // "new_container"
// We can also add and remove classes to elements using classList

var secondDiv = document.getElementsByTagName("div")[1];

secondDiv.classList; // ["hello"]
secondDiv.classList.add("another_class");
secondDiv.classList; // ["hello", "another_class"]
secondDiv.classList.remove("hello");
secondDiv.classList; // [another_class"]
// Notice here that we use methods called add and remove, not the push and pop methods we've seen when dealing with arrays. This is because the classList isn't actually an array and doesn't have push or pop methods on it.

// Nodes vs Elements
// When you read documentation about the DOM, you will see the terms node and element. In JavaScript these two are different and you can read more about the difference here. In short, there are many different types of nodes, but the ones we will most often be working with are ELEMENT_NODE and TEXT_NODE (you can see them all here). Element nodes are HTML elements (div, span etc.). Text nodes are the actual text of an element node.

