import React  from "react"
import "./MainContent.css"
import Firebase from "../../Firebase"
import AddItem from "./AddItem/AddItem.js"
import {ListGroup,ListGroupItem}from "react-bootstrap" 
import {ToastsContainer, ToastsStore} from 'react-toasts'
import Item from "./Item/Item" 

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
    function ListItemClickFunction(name,id){
        navigator.clipboard.writeText(name)
        ToastsStore.success("Copied "+name+" to Clipboard")
    }

    function CopyText(){

    }

    function DeleteElement(){
        this.ReloadComponent()
    }


    this.state.db.ref("list").once("value").then((snap)=>{
       let data= snap.val()
        let keys = Object.keys(data)

        let val =[]
        for(let i=0;i<keys.length;i++){
            val.push(data[keys[i]])
        } 
            console.log(val)

       let Listdata = val.map(data => 
    //    <ListGroupItem action onClick={()=>ListItemClickFunction(data.name,data.id)} key={data.id}>
    
    //        <h4>{data.name}</h4>
        
    //    </ListGroupItem>)
            <Item name = {data.name} id = {data.id} ></Item>
       )

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

    