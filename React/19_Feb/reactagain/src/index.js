import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// <--------------->
// import App from "./App";// we can also remove this line totally

// function AppOne() {
//     return <div>App One </div>;
// }
// <----------->

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //     <React.StrictMode>
    //         {/* <h1>Hello Noman</h1> */}
    //         {/* <AppOne /> */}
    //         <App />
    //     </React.StrictMode>
    <>
        <App />
    </>
);
