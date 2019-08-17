import React from "react"
import {ListGroupItem,Button,Form}from "react-bootstrap" 
import {ToastsContainer, ToastsStore} from 'react-toasts'
import "./AddItem.css"

class AddItem extends React.Component{

constructor(props){
    super(props)
    this.AddNewItem = this.AddNewItem.bind(this)
    this.AddNewText = this.AddNewText.bind(this)
    this.state = {
        AddMenuHidden:true,
         db:props.db
    }
    this.textInput = React.createRef()
}

AddNewItem(){

this.setState((prevState)=>({
    AddMenuHidden : !prevState.AddMenuHidden
}))

}
AddNewText(){
const text = this.textInput.current.value

const key = this.state.db.ref("list").push().key
const newItemDetails={
    name:text,
    id:key,
    date: new Date()
}
const newItem={}
newItem[key]=newItemDetails

this.state.db.ref("list").update(newItem)

ToastsStore.success("data inserted")

this.props.reload()

this.setState((prevState)=>({
    AddMenuHidden : !prevState.AddMenuHidden
}))
}

render(){
    return(
        <div>
        <ListGroupItem>
            <Button onClick={()=>this.AddNewItem()}>Add New Item</Button>
        </ListGroupItem>
        
        <ListGroupItem hidden={this.state.AddMenuHidden} className="AddOptions">
            <Form>
                <Form.Control size ="lg" ref = {this.textInput} type="text" placeholder="enter your text"></Form.Control>
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
