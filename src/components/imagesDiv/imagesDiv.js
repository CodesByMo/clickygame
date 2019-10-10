import React from "react";



function ImagesDiv(props) {
    return (
        <img className="actualImage" src={props.imageSrc} onClick={props.onClick}></img>
    )
}





export default ImagesDiv;