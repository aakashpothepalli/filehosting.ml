import MainContent from "../MainContent"
import React from "react"

class AddText extends React.Component{

    componentDidMount(){
        const mc = new MainContent()
        const ListData = mc.getContentState()
        console.log(ListData)
    }

    render(){
        this.componentDidMount()
        return(<div></div>)
    }
}

export default AddText