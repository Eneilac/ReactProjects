import React from "react";



function Content({ name, lastname, image }) {

    console.log(image);
    //coje la ruta relativa en referencia a public 
    return (
        <div>
            <h2>{name} {lastname}</h2>
            <img src={`./assets/images/${image}`} alt="imagen" />
        </div>
    )
}


export default Content;