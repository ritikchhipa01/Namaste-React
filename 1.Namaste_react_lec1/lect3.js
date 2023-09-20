import React from "react";
import ReactDOM from "react-dom/client";


//Jsx (transpiled before it reaches to the js) => Parcel - Babel
const heading = <h1>Hello Namaste React 🚀</h1>
// JSX => Babel transpiles it to React.creatElement  => ReactElement-Js-Object => Html Element
const root = ReactDOM.createRoot(document.getElementById("root"));


const Title = () => <h1>This is the Title</h1>;

//component composition- composing two component in one-another
const HeadingComponent = () => 
     (
        <>
            <Title />
            <h1 >Namaste React 🚀</h1>
            <h1>Namaste React Again! 🚀</h1>

        </>
    )
;


const Assignment = () =>{
    return (
        <>
            <div className=" bg-red-500  flex justify-around py-3 items-center">
            <h1 className="text-2xl font-bold text-purple-800">Logo</h1>
            <input type="text" placeholder="Search" className="rounded-md outline-none py-2 px-4"/>
            <p className="text-2xl font-bold text-purple-900">User</p>
            </div>
            <div className="text-center mt-20">
                <HeadingComponent/>
            </div>
        </>
    )
}
root.render(<Assignment />);