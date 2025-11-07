import React from "react";
function Fruit(){
        const x = 5;
        let y = "Apple";
        if(x < 10) {
            y = "banana";
        }
    return(
        <h1>{y}</h1>
    )
}
export default Fruit;
