import React from "react"
import {ListGroupItem, Button,Form,Nav}from "react-bootstrap" 
import {ToastsContainer, ToastsStore} from 'react-toasts'
import Firebase from "../../../Firebase"
class Item extends React.Component{

    constructor(props){
    super(props)
    this.textInput = React.createRef(); 

    this.state={
        isHidden :true,
        isLocked:this.props.item.isLocked,
        db:Firebase.database(),        
    }
    this.onItemClick= this.onItemClick.bind(this)
    this.CopyText = this.CopyText.bind(this)
    this.UpdateItem = this.UpdateItem.bind(this)
    this.LockItem = this.LockItem.bind(this)
    this.onLinkClick = this.onLinkClick.bind(this)
    }

onItemClick(id){
this.setState((prevState)=>({
    isHidden: !prevState.isHidden
}))

}

CopyText(){
    navigator.clipboard.writeText(this.textInput.current.value)
    ToastsStore.success("Text copied ")
}

DeleteItem(){
this.state.db.ref("list").child(this.props.item.id).remove()
this.props.reload()
ToastsStore.success("Item removed ")

}

UpdateItem(){
    
    const UpdatedItem ={
        id: this.props.item.id,
        date :this.props.item.date,
        isLocked :this.state.isLocked,
        name: this.textInput.current.value
    } 
    const Ut={}

    Ut[this.props.item.id]= UpdatedItem
    this.state.db.ref("list").update(Ut)

    ToastsStore.success("Saved")


}

LockItem(){
this.setState({
    isLocked:true
})


const UpdatedItem ={
    id: this.props.item.id,
    date :this.props.item.date,
    name: this.textInput.current.value,
    isLocked: this.state.isLocked
} 
const Ut={}

Ut[this.props.item.id]= UpdatedItem
this.state.db.ref("list").update(Ut)
ToastsStore.success("locked")
}
onLinkClick(){
    this.setState((prevState)=>({
        isHidden: !prevState.isHidden
    }))
 
}
    render(){
        if(this.props.item.type==="link"){
            return(
                <div style={{marginTop:10,marginBottom:10}}>
                <ListGroupItem action onClick ={()=> this.onLinkClick() }>
                    {/* <Button variant="link" href= {this.props.item.url}>{this.props.item.name}  - Click to Download</Button> */}
                    <Nav.Link href= {this.props.item.url}> {this.props.item.name} - Click to Download</Nav.Link>
                    <Button hidden = {this.state.isHidden} onClick={()=>this.DeleteItem()} style={{marginRight:"10sp"}} >Delete</Button>

                </ListGroupItem>

                </div>
            )
        }
        else {
        return(
            <div  style={{marginTop:10,marginBottom:10}}>
            <ListGroupItem action onClick={()=> this.onItemClick() } > 
                
                <Form.Control as="textarea" rows="5"   ref = {this.textInput} type="text" placeholder="enter your text">{this.props.item.name}</Form.Control>
                    {/* <h3>  {this.props.name} </h3 > */}                   
                
            </ListGroupItem>

            <ListGroupItem hidden={this.state.isHidden}>
                        <div>
                            <Button onClick={()=> this.CopyText() } style={{marginRight:"10px"}}>Copy</Button>

                            <Button onClick={()=>this.UpdateItem()} style={{marginRight:"10px"}}  >Save</Button>

                            <Button hidden = {this.state.isLocked} onClick={()=>this.DeleteItem()} style={{marginRight:"10sp"}} >Delete</Button>

                        </div>
            </ListGroupItem>

            <ToastsContainer store={ToastsStore} />

            </div>
            )
        }
    }
}
export default Item