import React, { Component } from "react";
import "./App.css";

class ContactEmail extends Component {
    render() {
        return (<form
            className="form-inside-input"
            onSubmit={this.onSubmit}
            noValidate
        >
            {/* form inputs here */}
        </form>)
        }

}

export default ContactEmail;