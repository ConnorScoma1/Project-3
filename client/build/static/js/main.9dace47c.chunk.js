(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(76)},44:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(35),c=a.n(r),i=a(2),o=a(3),s=a(5),u=a(4),m=a(6),p=a(13),d=a(15),E=a(20),h=(a(44),a(21)),g=a(22),b=a.n(g),v=function(e,t){return{type:"GET_ERRORS",payload:{msg:e,status:t,id:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}},f=function(e){var t=e().auth.token,a={headers:{"Content-type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",email:"",password:"",msg:null},a.onChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.onSumbit=function(e){e.preventDefault();var t=a.state,n={name:t.name,email:t.email,password:t.password};a.props.register(n)},a.onSubmitLogin=function(e){e.preventDefault();var t=a.state,n={email:t.email,password:t.password};a.props.login(n)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuthenticated;a!==e.error&&("REGISTER_FAIL"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),n&&console.log("User Authenticated")}},{key:"handleClick",value:function(){var e=document.getElementById("signUp"),t=document.getElementById("signIn"),a=document.getElementById("container");e.addEventListener("click",function(){a.classList.add("right-panel-active")}),t.addEventListener("click",function(){a.classList.remove("right-panel-active")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"login-page-background"},l.a.createElement("div",{className:"login-form"},l.a.createElement("div",{class:"container",id:"container"},l.a.createElement("div",{class:"form-container sign-up-container"},l.a.createElement("form",{onSubmit:this.onSumbit},l.a.createElement("h1",null,"Create Account"),l.a.createElement("span",null,"use your email for registration"),l.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name (required)",onChange:this.onChange}),l.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email (required)",onChange:this.onChange}),l.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password (required)",onChange:this.onChange}),l.a.createElement("button",{name:"signUp",onClick:this.handleClick},"Sign Up"))),l.a.createElement("div",{class:"form-container sign-in-container"},l.a.createElement("form",{onSubmit:this.onSubmitLogin},l.a.createElement("h1",null,"Sign in"),l.a.createElement("span",null,"To use your account"),l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",onChange:this.onChange}),l.a.createElement("input",{type:"password",placeholder:"Password",name:"password",onChange:this.onChange}),l.a.createElement("a",{href:"/protected"},"Click Me"),l.a.createElement("button",{name:"signIn",onClick:this.handleClick},"Sign In"))),l.a.createElement("div",{class:"overlay-container"},l.a.createElement("div",{class:"overlay"},l.a.createElement("div",{class:"overlay-panel overlay-left"},l.a.createElement("h1",null,"Welcome Back!"),l.a.createElement("p",null,"To keep connected with us please login with your personal info"),l.a.createElement("button",{class:"ghost",id:"signIn",name:"signIn",onClick:this.handleClick},"Sign In")),l.a.createElement("div",{class:"overlay-panel overlay-right"},l.a.createElement("h1",null,"Hello, Friend!"),l.a.createElement("p",null,"Enter your personal details and start journey with us"),l.a.createElement("button",{className:"ghost",onClick:this.handleClick,id:"signUp",name:"signUp"},"Sign Up"))))),l.a.createElement("div",{className:"floating-box"},l.a.createElement("ul",{className:"box-area"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null)))))}}]),t}(n.Component),y=Object(h.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}},{login:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});b.a.post("/api/auth",n,{headers:{"Content-Type":"application/json"}}).then(function(t){return e({type:"LOGIN_SUCCESS",payload:t.data})}).catch(function(t){e(v(t.response.data,t.response.status,"LOGIN_FAIL")),e({type:"LOGIN_FAIL"})})}},register:function(e){var t=e.name,a=e.email,n=e.password;return function(e){var l=JSON.stringify({name:t,email:a,password:n});b.a.post("/api/users",l,{headers:{"Content-Type":"application/json"}}).then(function(t){return e({type:"REGISTER_SUCCESS",payload:t.data})}).catch(function(t){e(v(t.response.data,t.response.status,"REGISTER_FAIL")),e({type:"REGISTER_FAIL"})})}}})(O),j=(a(67),a(68),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav-background"},l.a.createElement("div",{className:"title"},"Dashboard"))}}]),t}(n.Component)),S=(a(69),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav-background"},l.a.createElement("div",{className:"title"},"Inventory"))}}]),t}(n.Component)),k=(a(70),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav-background"},l.a.createElement("div",{className:"title"},"Manage"))}}]),t}(n.Component)),C=(a(71),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav-background"},l.a.createElement("div",{className:"title"},"Account"))}}]),t}(n.Component)),N=(a(72),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav-background"},l.a.createElement("div",{className:"title"},"Support"))}}]),t}(n.Component)),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"nav-background"},l.a.createElement("ul",{className:"nav-ul"},l.a.createElement("li",null,l.a.createElement(p.b,{to:"/protected",className:"nav-links"}," Dashboard ")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/protected/inventory",className:"nav-links"}," Inventory ")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/protected/manage",className:"nav-links"}," Manage ")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/protected/account",className:"nav-links"}," Account ")),l.a.createElement("li",null,l.a.createElement(p.b,{to:"/protected/support",className:"nav-links"}," Support ")))),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/protected",component:j}),l.a.createElement(d.a,{path:"/protected/inventory",component:S}),l.a.createElement(d.a,{path:"/protected/manage",component:k}),l.a.createElement(d.a,{path:"/protected/account",component:C}),l.a.createElement(d.a,{path:"/protected/support'",component:N}))))}}]),t}(n.Component),w=(a(74),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"landing"},l.a.createElement("div",{className:"landing-form"},l.a.createElement("h1",{className:"landing-title"},"Project 3"),l.a.createElement("p",null,"Inventory Management System"),l.a.createElement("p",null,"We will make an inventory app for small businesses"),l.a.createElement("p",null,"new messages we will utilize redux/state management, mysql for authentication, react and node as well express"),l.a.createElement("p",null,"Click here to ",l.a.createElement("span",{className:"btn-animation"},l.a.createElement("a",{href:"/login"}," Login ")),"or ",l.a.createElement("span",{className:"btn-animation"},l.a.createElement("a",{href:"/login"}," Sign Up "))),l.a.createElement("p",null,l.a.createElement("span",{className:"btn-animation github"},l.a.createElement("a",{href:"https://github.com/ConnorScoma1/Project-3",target:"_blank"},"GitHub")))))}}]),t}(n.Component)),R=(a(75),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(p.b,{to:"/"},"Return to Home Page")))}}]),t}(n.Component)),L=a(14),_=a(38),A={msg:{},status:null,id:null},U=a(18),G={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},T=Object(L.c)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case"CLEAR_ERRORS":return{msg:{},status:null,id:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(U.a)({},e,{isLoading:!0});case"USER_LOADED":return Object(U.a)({},e,{isAuthenticated:!0,isLoading:!1,user:t.payload});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(U.a)({},e,t.payload,{isAuthenticated:!0,isLoading:!1});case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT_SUCCESS":case"REGISTER_FAIL":return localStorage.removeItem("token"),Object(U.a)({},e,{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}}}),D=[_.a],x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.d,F=Object(L.e)(T,{},x(L.a.apply(void 0,D))),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){F.dispatch(function(e,t){e({type:"USER_LOADING"}),b.a.get("/api/auth/user",f(t)).then(function(t){return e({type:"USER_LOADED",payload:t.data})}).catch(function(t){e(v(t.response.data,t.response.status)),e({type:"AUTH_ERROR"})})})}},{key:"render",value:function(){return l.a.createElement(h.a,{store:F},l.a.createElement(p.a,null,l.a.createElement(d.a,{exact:!0,path:"/",component:w}),l.a.createElement(d.a,{exact:!0,path:"/login",component:y}),l.a.createElement(d.a,{path:"/protected",component:I}),l.a.createElement(d.a,{path:"*",component:R})))}}]),t}(n.Component);c.a.render(l.a.createElement(M,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9dace47c.chunk.js.map