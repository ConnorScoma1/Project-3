import React, { Component } from "react";
// import signUP from "signUP";

class Click extends Component {

    sayHello = () => console.log("test"); 

    render() {
        console.log("Testing");


        return (
            <div>
                <button onClick={this.sayHello}></button>
                <h1>Nothing</h1> 
            </div>

           
        )
          
    }
}

export default Click;
     
