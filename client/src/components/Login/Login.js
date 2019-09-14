import React, { Component } from "react";
import './App.css';
import PropTypes from 'prop-types';


class Login extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = event => {
        event.preventDefault(); 
        console.log(event.target.name);
    }

    render() {
        return (

        <div className="login-page-background">
            <div className="login-form">
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <span>use your email for registration</span>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name (required)"
                                onChange={this.onChange}
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email (required)"
                                onChange={this.onChange}
                            />
                            <input 
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password (required)"
                                onChange={this.onChange}
                            />
                            <button name="signUp" onClick={this.handleClick}>Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form action="#">
                             <h1>Sign in</h1>
                            <span>To use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                                {/* Testing */}
                                <a href="/protected">
                                    Click Me
                                </a>
                                
                                <button name="signIn" onClick={this.handleClick}>Sign In</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn" name="signIn" onClick={this.handleClick}>Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp" name="signUp" onClick={this.handleClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="floating-box">
                    <ul className="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}


export default Login;