import React from "react"
import {ListGroupItem,Button,ListGroup,Form}from "react-bootstrap" 
import {ToastsContainer, ToastsStore} from 'react-toasts'
import "./AddItem.css"

class AddItem extends React.Component{

constructor(){
    super()
    this.AddNewItem = this.AddNewItem.bind(this)
    this.AddNewText = this.AddNewText.bind(this)
    this.state = {
        AddMenuHidden:true
    }
}

AddNewItem(){
ToastsStore.success("hey yiu have clicked me");

this.setState((prevState)=>({
    AddMenuHidden : !prevState.AddMenuHidden
}))

}
AddNewText(){

}

render(){
    return(
        <div>
        <ListGroupItem>
            <Button onClick={()=>this.AddNewItem()}>Add New Item</Button>
        </ListGroupItem>
        
        <ListGroupItem hidden={this.state.AddMenuHidden} clasName="AddOptions">
            <Form>
                <Form.Control className="text" type="text" placeholder="enter your text"></Form.Control>
                <Form.Text></Form.Text>
                <Button onClick={()=>this.AddNewText()}>Save</Button>
            </Form>
        
        </ListGroupItem>

        <ToastsContainer store={ToastsStore}/>
        </div>
        )
    }
}
 
export default AddItem