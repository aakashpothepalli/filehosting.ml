import React from "react"
import {ListGroupItem,Button}from "react-bootstrap" 
import {ToastsContainer, ToastsStore} from 'react-toasts'

class AddItem extends React.Component{

constructor(){
    super()
    this.AddNewItem = this.AddNewItem.bind(this)
}

AddNewItem(){
ToastsStore.success("hey yiu have clicked me");
}
render(){
    return(
        <div>
        <ListGroupItem>
            <div>
                <Button onClick={()=>this.AddNewItem()}>Add New Item</Button>
            </div>
        </ListGroupItem>
        <ToastsContainer store={ToastsStore}/>
        </div>
        )
    }
}
 
export default AddItem