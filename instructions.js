// The easiest way to select elements is by their id using the getElementById function on the document object (document.getElementById). This returns a SINGLE element (because ids must be unique!).

var container = document.getElementById("container");

// We can also use a function called querySelector, which selects a SINGLE element using CSS selectors. If multiple elements match the query you pass in to querySelector, the function will simply return the first matching element that it finds.

var container = document.querySelector("#container");

// Notice that when we select by id using querySelector, we pass in the string #container, not container. Remember: querySelector always expects a CSS selector. In contrast, when we use getElementById, we just pass in the string container (no hashtag)! Since getElementById expects to find an element by id, in this case the hashtag isn't necessary.

// To select multiple elements, we can use getElementsByTagName or getElementsByClassName, or we can use querySelectorAll and pass in a CSS selector. These will return what appear to be arrays (they are not exactly arrays, but for right now, that is not a problem).

var divs = document.getElementsByTagName("div");
var divs = document.querySelectorAll("div");
// Here is another example using getElementsByClassName and the same thing with querySelectorAll.

var divsWithClassOfHello = document.getElementsByClassName("hello");
var divsWithClassOfHello = document.querySelectorAll(".hello");
// As you can see, when you pass in a class name using getElementsByClassName, you don't need to start the string with a dot. The function expects to receive a class name - it's in the name of the function! On the other hand, querySelectorAll takes in any valid CSS query, which is why you need to pass in .hello if you want it to find all elements with a class of "hello."

// When you're ready, move on to DOM Manipulation
