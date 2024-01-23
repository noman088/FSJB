import React, { useEffect, useState } from "react";
import Card from "./card";
import Axios from "axios";
function App() {
    const [details, setDetails] = useState({});
    const fetechDetails = async () => {
        const { data } = await Axios.get("https://randomuser.me/api");
        console.log("RESPONCE", data);
        const details = data.results[0];
        setDetails(details);
    };
    let list = ["Hitesh", "Anurag", "Noman"];
    useEffect(() => {
        fetechDetails();
    }, []); // after this strictMode we have to delete StrictMode with react // <React.stricMode><React.strictMode/>

    return (
        <>
            <div>App</div>
            <Card myname="hitesh" list={list} details={details} />
            <button onClick={fetechDetails}> Get details</button>
        </>
    );
}

export default App;
