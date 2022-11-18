import React from "react";
import "./Thumbnail.css"
function Thumbnail({id, name, image, type}) {
    const style = `thumbnail_wrapper ${type}`
    return <div className={style}>
        <div>
            <small>#0{id}</small>
            <img className={"image"} src={image} alt={name}/>
            <h3>{name}</h3>
            <strong>Type:{type}</strong>
        </div>
    </div>

}

export default Thumbnail;