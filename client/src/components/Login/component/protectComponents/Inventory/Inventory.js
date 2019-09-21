import React, { Component } from "react";
import './App.css'

class Inventory extends Component {

    render() {
        return (<div>
          <div className="nav-background" />
            <div className="title">Inventory</div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Product Name:</th>
      <th scope="col">Type:</th>
      <th scope="col">Description</th>
      <th scope="col">Quanity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mac Book</th>
      <td>Electronics</td>
      <td>New</td>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">Keyboard</th>
      <td>Electronics</td>
      <td>New</td>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">Speakers</th>
      <td>Electronics</td>
      <td>New</td>
      <td>5</td>
    </tr>
  </tbody>
</table>

            
         

      
           
       </div>
        )
    }
}


export default Inventory;