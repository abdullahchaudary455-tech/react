import React from "react";
function Navbar()

{
    //......object pass ....
    const obj = {
        name : 'Abdullah',
        age : '19',
        class : 'ICS',
    }
    //.......style practice....
    const mystyle={
        color: "brown",
        fontsize: "20px",
        backgroundColor: "powderblue",
    }
    return(
        <>
        <h1>Hello From {obj.name}</h1>
        <h2>{obj.age}</h2>
        <h3>{obj.class}</h3>
        <h5 style={mystyle}>MY name is Abdullah</h5>
        <ul>
            <li>Home</li>
            <li>Services
                <ol>
                    <li>Javascript course</li>
                    <li>Graphic designing</li>
                    <li>Artificial inteligence</li>
                    <li>office managment</li>
                </ol>
            </li>
            <li>About Us</li>
            <li>contact Us</li>
        </ul>
        </>
    );
}
export default Navbar;