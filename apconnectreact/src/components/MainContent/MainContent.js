import React from "react"
import "./MainContent.css"
import json from "./json"
import Item from "./Item"

function MainContent(){

const itemArray = json.map(function (item){

    return(
        <Item fruit={item.fruit}></Item>
    )
})

return(
    <div>
        {itemArray}
    </div>
       
)

}

export default MainContent