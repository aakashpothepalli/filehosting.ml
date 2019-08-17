import React from "react"
import {ListGroupItem, Button,Form}from "react-bootstrap" 
import {ToastsContainer, ToastsStore} from 'react-toasts'
import Firebase from "../../../Firebase"
class Item extends React.Component{

    constructor(props){
    super(props)
    this.textInput = React.createRef(); 

    this.state={
        isHidden :true,
        db:Firebase.database(),        
    }
    this.onItemClick= this.onItemClick.bind(this)
    this.CopyText = this.CopyText.bind(this)
    this.UpdateItem = this.UpdateItem.bind(this)
    }

onItemClick(id){
this.setState((prevState)=>({
    isHidden: false
}))

}

CopyText(){
    navigator.clipboard.writeText(this.textInput.current.value)
    ToastsStore.success("Text copied ")
}

DeleteItem(){
this.state.db.ref("list").child(this.props.id).remove()
this.props.reload()
ToastsStore.success("Item removed ")

}

UpdateItem(){
    
    const UpdatedItem ={
        id: this.props.id,
        date :this.props.date,
        name: this.textInput.current.value
    } 
    const Ut={}

    Ut[this.props.id]= UpdatedItem
    this.state.db.ref("list").update(Ut)

    ToastsStore.success("Saved")


}

    render(){
        return(
            <>
            <ListGroupItem action onClick={()=> this.onItemClick(this.props.id) } > 
                <>
                <Form.Control as="textarea" rows="5"   ref = {this.textInput} type="text" placeholder="enter your text">{this.props.name}</Form.Control>
                    {/* <h3>  {this.props.name} </h3 > */}
                    <ListGroupItem hidden={this.state.isHidden}>
                        <div>
                            <Button onClick={()=> this.CopyText() } style={{marginRight:"10px"}}>Copy</Button>

                            <Button onClick={()=>this.UpdateItem()} style={{marginRight:"10px"}}  >Save</Button>

                            <Button onClick={()=>this.DeleteItem()} style={{marginLeft:"10sp"}} >Delete</Button>

                        </div>
                    </ListGroupItem>
                </>
            </ListGroupItem>

            <ToastsContainer store={ToastsStore} />

            </>
        )
    }
}
export default Item