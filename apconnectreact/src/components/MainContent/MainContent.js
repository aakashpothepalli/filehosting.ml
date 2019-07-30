import React ,{Component} from "react"
import "./MainContent.css"
import firebase from "firebase"


class MainContent extends React.Component{
    
constructor(){
    super()
    let t=""
    
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
          text : t
      }
      this.setData = this.setData.bind(this)
      this.setData()

}

 setData  () {
     

    
}
componentDidMount(){
    const db= firebase.database()

    db.ref("list").once("value").then((snap)=>{
    
        let val=  snap.val().person1.name
        
        this.setState({
            text : val
            }
        )
        
    })
}


render(){

   return(
    <div> {this.state.text}</div>
    )

}
}

export default MainContent
    