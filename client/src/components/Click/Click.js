import React, { Component } from "react";
import signUP from "signUP";

class Click extends Component {

    render() {
        console.log("Testing");

        function button() { this.yourfunc(signUp) }

        return (
            <div>
                <button onClick={button}></button>
                <h1>Nothing</h1> 
            </div>

           
        )
          
    }
}

export default Click;
     
