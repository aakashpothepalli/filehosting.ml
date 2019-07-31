import React  from "react"
import "./MainContent.css"
import firebase from "firebase"
import Item from "./Item"
import AddItem from "./AddItem";
 
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
          item : "",
          ListData :["Loading..."]
      }
      
}


componentDidMount(){
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

       let Listdata = val.map(name => <Item name={name}/>)
        this.setState({
            ListData :Listdata
            }
        )
        
    })
}



render(){
 
   return(
       <div>
    <div className="ListData">{
        this.state.ListData}
    </div>
     <AddItem/>   
    </div>
    )

} 
}

export default MainContent
    