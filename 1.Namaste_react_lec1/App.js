//the below code produces <h1 id="title">Namaste React</h1>
const heading = React.createElement("h1",
    {
        id: "title"
    },
    "Namaste React")
const heading2 = React.createElement("h2",
    {
        id: "title1"
    },
    "Using")
const heading3 = React.createElement("h2", {
    id: "title3"
}, "React")

const main = React.createElement("div", {
    className: "Heading",
    title: "heading",

}, [heading, heading2, heading3])


const root = ReactDOM.createRoot(document.getElementById("root"));


// Passing a react element Inside a Root  
root.render(main);
