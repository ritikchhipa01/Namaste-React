import React from "react";
import ReactDOM from "react-dom/client";
const heading = document.createElement("h1");
const root = document.getElementById("root");
heading.innerHTML = "Hello HTML!";
root.appendChild(heading);

let head = React.createElement("h1", {}, "Hello HTML from React!");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(head);
console.log(head);


let head1 = React.createElement("div",
    {},
    React.createElement("h1", {}, "Hello HTML from nested's React!")
);
let root2 = ReactDOM.createRoot(document.getElementById("root3"));

root2.render(head1);

let head2 = React.createElement("div",
    {},
    [
        React.createElement("h1", {}, "Hello HTML from nested's React!"),
        React.createElement("h1", {}, "Hello Again HTML from nested's React!"),
    ]);

let root3 = ReactDOM.createRoot(document.getElementById("root4"));

root3.render(head2);

import React from "react"