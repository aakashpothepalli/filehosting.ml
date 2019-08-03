import React  from "react"
import "./MainContent.css"
import firebase from "firebase"
import AddItem from "./AddItem/AddItem.js"
import {ListGroup,ListGroupItem}from "react-bootstrap" 
import {ToastsContainer, ToastsStore} from 'react-toasts'


class MainContent extends React.Component{
    
constructor(){
    super() 
   
    
    var firebaseConfig = {
        apiKey: "AIzaSyAAYUvCrzfkzs-A7-12sBR7nKQTIqUPPJo",
        authDomain: "apconnect-a3812.firebaseapp.com",
        databaseURL: "https://apconnect-a3812.firebaseio.com",
        projectId: "apconnect-a3812",
        storageBucket: "apconnect-a3812.appspot.com",
        messagingSenderId: "929170999167",
        appId: "1:929170999167:web:7ab1ae81cc1f17ba"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      this.state={
          text : "",
          name : "",
          ListData :["Loading..."],
          db :null
      }
      this.getContentState = this.getContentState.bind(this)
}


componentDidMount(){
    function ListItemClickFunction(name){
        navigator.clipboard.writeText(name)
        ToastsStore.success("Copied "+name+" to Clipboard")
    }

    
    const db= firebase.database()

    db.ref("list").once("value").then((snap)=>{
       let data= snap.val()
        let keys = Object.keys(data)

        console.log(keys)
        let val =[]
        for(let i=0;i<keys.length;i++){
            val.push(data[keys[i]].name)
        } 

       console.log(val)

       let Listdata = val.map(name => 
       <ListGroupItem action onClick={()=>ListItemClickFunction(name)}><h4>{name}</h4></ListGroupItem>)
        this.setState({
            ListData :Listdata
            }
        )
        
        
    })
}

getContentState(){
    return(
        this.state.ListData
    )
}

render(){
 
   return(
       <div>
       <AddItem/> 
     <ListGroup>
     
    <div className="ListData">{this.state.ListData}</div>
    </ListGroup>
    <ToastsContainer store={ToastsStore}/>
     
    </div>
    )

} 
}

export default MainContent

    