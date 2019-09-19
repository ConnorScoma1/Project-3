import React, { Component } from "react";
import './App.css';
import PropTypes from 'prop-types';
import { connect }from 'react-redux';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class Login extends Component {

    // For Reg and Login
    state = {
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidMount(prevProps){
        const { isAuthenticated } = this.props;

        if(isAuthenticated) {
            console.log('Changing Route to /protected')
        }
    }

    handleClick(){
        const signUpButton = document.getElementById('signUp');	     
        const signInButton = document.getElementById('signIn');	        
        const container = document.getElementById('container');	

        signUpButton.addEventListener('click', () => {	
	        container.classList.add("right-panel-active");	
        });	

        signInButton.addEventListener('click', () => {	
	        container.classList.remove("right-panel-active");	
        });	
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSumbit = e => {
        e.preventDefault();

        const { name, email, password } = this.state;

        // user object 
        const newUser = {
            name,
            email,
            password
        }

        this.props.register(newUser);
    }

    onSubmitLogin = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const user = {
            email,
            password
        }

        this.props.login(user)
    }

    render() {
        return (

        <div className="login-page-background">
            <div className="login-form">
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form onSubmit={this.onSumbit}>
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
                        <form onSubmit={this.onSubmitLogin}>
                             <h1>Sign in</h1>
                            <span>To use your account</span>
                            <input 
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.onChange}
                            />
                            <input 
                                type="password" 
                                placeholder="Password"
                                name="password"
                                onChange={this.onChange}
                            />
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
                                    {/* <button class="ghost" id="signUp" name="signUp" onClick={this.handleClick}>Test</button> */}
                                    {/* <Link to="/signup">
                                    </Link> */}
                                     <button className="ghost" onClick={this.handleClick} id="signUp" name="signUp">Sign Up</button>
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