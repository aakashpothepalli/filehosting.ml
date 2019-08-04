import React  from "react"
import "./MainContent.css"
import Firebase from "../../Firebase"
import AddItem from "./AddItem/AddItem.js"
import {ListGroupItem}from "react-bootstrap" 
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
     this.DeleteItem = this.DeleteItem.bind(this)
}


componentDidMount(){

    function ListItemClickFunction(name,id){
        navigator.clipboard.writeText(name)
        ToastsStore.success("Copied "+name+" to Clipboard")
    }


 

    this.state.db.ref("list").once("value").then((snap)=>{
       let data= snap.val()
        let keys = Object.keys(data)

        let val =[]
        for(let i=0;i<keys.length;i++){
            val.push(data[keys[i]])
        } 
            console.log(val)

       let Listdata = val.map(ItemInVal => 
            <Item name = {ItemInVal.name} id = {ItemInVal.id} reload={this.ReloadComponent}></Item>
       )

        Listdata.reverse()
       this.setState({
            ListData :Listdata
            }
        )
        
    })
}
DeleteItem(id){
this.state.db.ref("list").child(id).remove()
this.ReloadComponent()
}

ReloadComponent(){
    this.componentDidMount()
}

render(){
 
   return(
       <div>
       <AddItem db={this.state.db} /> 
     <ListGroupItem>
    {this.state.ListData}
    </ListGroupItem>

    <ToastsContainer store={ToastsStore } itemHeight={20} offset={10} />
     
    </div>
    )

} 
}

export default MainContent

    