import React from "react"
import "./Item.css" 
function Item(props){
    return(
<div className="item">
    <h2 className="text">{props.name}</h2>
    <hr ></hr>
</div>

    )
}
export default Item