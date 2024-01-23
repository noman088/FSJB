import React from "react";

function card({ myname, list, details }) {
    // console.log(props);
    return (
        <>
            This is a card
            <div>myname</div>
            <h1>{details.gender}</h1>
            <h2>{details.name?.first}</h2>
            <ul>
                {list.map((l) => (
                    <li key={l}>{l}</li>
                ))}
            </ul>
        </>
    );
}

export default card;
