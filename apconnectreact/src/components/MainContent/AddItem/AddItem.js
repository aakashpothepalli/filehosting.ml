import React from "react"
import {ListGroupItem,Button,Form}from "react-bootstrap" 
import {ToastsContainer, ToastsStore} from 'react-toasts'
import "./AddItem.css"
import axios from "axios"
class AddItem extends React.Component{

constructor(props){
    super(props)
    this.AddNewItem = this.AddNewItem.bind(this)
    this.AddNewText = this.AddNewText.bind(this)
    this.state = {
        AddMenuHidden:true,
         db:props.db,
         
    }
    this.fileInput = React.createRef()
    this.textInput = React.createRef()
    this.handleFile = this.handleFile.bind(this)
}

AddNewItem(){

this.setState((prevState)=>({
    AddMenuHidden : !prevState.AddMenuHidden
}))

}

AddNewText(text,type,url){


const key = this.state.db.ref("list").push().key

const newItemDetails={
    name:text,
    id:key,
    date: new Date(),
    isLocked:false,
    type:type,
    url :url
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

handleFile(){
    
    console.log(this.fileInput.current.files[0].name)

    let data = new FormData()
    data.append("file",this.fileInput.current.files[0])
    axios.post("https://api.anonymousfiles.io",data)
        .then(report=>{
            console.log(report.data.url)
            this.AddNewText(report.data.name,"link",report.data.url)
    
        })
        .catch(error=>console.log(error))

   
    
}

render(){
    return(
        <div>
        <ListGroupItem>
            <Button onClick={()=>this.AddNewItem()}>Add New Item</Button>
        </ListGroupItem>
        
        <ListGroupItem hidden={this.state.AddMenuHidden} className="AddOptions">
                <Form.Control as="textarea" rows="3"   ref = {this.textInput} type="text" placeholder="enter your text"></Form.Control>
                <Form.Text></Form.Text>
                <Button onClick={()=>this.AddNewText(this.textInput.current.value,"text")}>Save</Button>
        </ListGroupItem>

        <ListGroupItem hidden={this.state.AddMenuHidden}>
            <input type="file" ref ={this.fileInput} style={{marginLeft:"10sp"}}/>
            <Button onClick={()=>this.handleFile()} > Send</Button>
        </ListGroupItem>

        <ToastsContainer store={ToastsStore}/>
        </div>
        )
    }
}
 
export default AddItem
