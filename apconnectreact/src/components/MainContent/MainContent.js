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
}


componentDidMount(){


    this.state.db.ref("list").once("value").then((snap)=>{
       let data= snap.val()
        let keys = Object.keys(data)

        let val =[]
        for(let i=0;i<keys.length;i++){
            val.push(data[keys[i]])
        } 
            console.log(val)

       let Listdata = val.map(ItemInVal => 
            <Item name = {ItemInVal.name} id = {ItemInVal.id} date = {ItemInVal.date} reload={this.ReloadComponent}></Item>
       )

        Listdata.reverse()
       this.setState({
            ListData :Listdata
            }
        )
        
    })
}


ReloadComponent(){
    this.setState({
        ListData :["Loading..."]
    })
    this.componentDidMount()
}

render(){
 
   return(
       <div>
       <AddItem db={this.state.db} reload={this.ReloadComponent}/> 
    {this.state.ListData}
   

    <ToastsContainer store={ToastsStore } itemHeight={20} offset={10} />
     
    </div>
    )

} 
}

export default MainContent

    