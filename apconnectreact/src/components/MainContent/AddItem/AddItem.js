import React from "react"
import {Container,Button,Link} from "react-floating-action-button"
import AddText from "./AddText"
class AddItem extends React.Component{

render(){
    return(
        <Container >
        
            <Link href="#"
                tooltip="Add a new File"
                icon="fas fa-file" 
                />
            <Link href="#"
                tooltip="Add a new Text"
                icon="fas fa-font" 
                />
            <Button  tooltip="Add Item"
                icon="fas fa-plus"
                rotate={true}
                
                />
         
        </Container>
        )
    }
}

export default AddItem