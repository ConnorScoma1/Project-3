import React, { Component } from "react";

// import signUP from "signUP";

class Click extends Component {

    sayHello = () => console.log("hello"); 

    render() {
        console.log("Testing");

        return (
            <div>
                <button onClick={this.sayHello} a href="/welcome"></button>
            </div>

           
        )
          
    }
}

export default Click;
     
