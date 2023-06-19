const heading = React.createElement("h1", {
    style: {
        backgroundcolor: "red",
    }
}, "Namaste React")
const heading2 = React.createElement("h2", {
    style: {
        backgroundcolor: "red",
    }
}, "Using")
const heading3 = React.createElement("h2", {
    style: {
        backgroundcolor: "red",
    }
}, "React")

const main = React.createElement("div", {
    className: "Heading",
    title: "heading",

}, [heading, heading2, heading3])


const root = ReactDOM.createRoot(document.getElementById("root"));


// Passing a react element Inside a Root  
root.render(main);
