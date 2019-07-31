import React from "react"
import {Container,Button,Link} from "react-floating-action-button"
class AddItem extends React.Component{

render(){
    return(
        <Container>
            
            <Link href="#"
                tooltip="Add user link"
                icon="fas fa-user-plus" 
                />
            <Button  tooltip="The big plus button!"
                icon="fas fa-plus"
                rotate={true}
                />

        </Container>
        )
    }
}

export default AddItem