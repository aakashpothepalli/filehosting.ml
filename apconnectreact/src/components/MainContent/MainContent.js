import React  from "react"
import "./MainContent.css"
import Firebase from "../../Firebase"
import AddItem from "./AddItem/AddItem.js"
import {ListGroup,ListGroupItem}from "react-bootstrap" 
import {ToastsContainer, ToastsStore} from 'react-toasts'


class MainContent extends React.Component{
    
constructor(){
    super() 
   
      this.state={
          text : "",
          name : "",
          ListData :["Loading..."],
          db :Firebase.database()
      }
     this.ReloadComponent = this.ReloadComponent.bind(this)
}


componentDidMount(){
    function ListItemClickFunction(name){
        navigator.clipboard.writeText(name)
        ToastsStore.success("Copied "+name+" to Clipboard")
    }


    this.state.db.ref("list").once("value").then((snap)=>{
       let data= snap.val()
        let keys = Object.keys(data)

        let val =[]
        for(let i=0;i<keys.length;i++){
            val.push(data[keys[i]].name)
        } 

       let Listdata = val.map(name => <ListGroupItem action onClick={()=>ListItemClickFunction(name)}><h4>{name}</h4></ListGroupItem>)
        Listdata.reverse()
       this.setState({
            ListData :Listdata
            }
        )
        
    })
}

ReloadComponent(){
    this.componentDidMount()
}

render(){
 
   return(
       <div>
       <AddItem db={this.state.db} onRef={ref => (this.reloadcomponent = ref)}
       reloadcomponent = {this.ReloadComponent.bind(this)}/> 
     <ListGroup>
     
    <div className="ListData">{this.state.ListData}</div>
    </ListGroup>
    <ToastsContainer store={ToastsStore}/>
     
    </div>
    )

} 
}

export default MainContent

    