import React from "react"
import {ListGroupItem, Button}from "react-bootstrap" 
import {ToastsContainer, ToastsStore} from 'react-toasts'

class Item extends React.Component{

    constructor(props){
    super(props)

    this.state={
        isHidden :true
    }
    this.onItemClick= this.onItemClick.bind(this)
}
onItemClick(id){

ToastsStore.success("you have clicked "+ id)
this.setState((prevState)=>({
    isHidden: !prevState.isHidden
}))

}

    render(){
        return(
            <>
            <ListGroupItem action onClick={()=> this.onItemClick(this.props.id) } > 
                <>
                    <h3>  {this.props.name} </h3 >
                    <ListGroupItem hidden={this.state.isHidden}>
                        <div>
                            <Button style={{marginRight:"10px"}}>Copy</Button>
                            <Button style={{marginLeft:"10sp"}}>Delete</Button>
                        </div>
                    </ListGroupItem>
                </>
            </ListGroupItem>
            <ToastsContainer store={ToastsStore}/>

            </>
        )
    }
}
export default Item