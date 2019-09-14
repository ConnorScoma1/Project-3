import React, { Component } from "react";
import './App.css'

class Nav extends Component {

    render() {
        return (
            <div className="nav-background">
                <ul className="nav-ul">
                    <li><a href="/protected">Dashboard</a></li>
                    <li><a href="/protected/Inventory">Inventory</a></li>
                    <li><a href="/protected/Manage">Manage</a></li>
                    <li><a href="/protected/Account">Account</a></li>
                    <li><a href="/protected/Support">Support</a></li>
                    <li><a href="/protected/Contact">Contact</a></li>
                </ul>
            </div>
        )
    }
}


export default Nav;