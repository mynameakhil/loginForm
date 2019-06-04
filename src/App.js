import React, {useState} from 'react';
import { connect } from "react-redux";
import * as yup from 'yup';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Registresion from "./registration";



function App(props) {
  const checkoutAddressSchema = yup.object().shape({
    username: yup
      .string()
      .required("username is required"),
      password: yup
      .string()
        .required( "password is required")
      });
  const [btnProprty, setAble] = useState(false);
 const username=(event)=>
 {
   const user = event.target.value;
  props.usernames(user)
   }
  const password = (event) => {
    const pswd = event.target.value;
    props.passwords(pswd)
    }
  const loginSummit = () => {
    props.login();
    setAble(true);
    console.log(props.loged)
  }
  if (btnProprty !== true) {
    return (
     
      < div className="card-wrapper" >
      <div className="card-form">
      
          <h1> LOG - IN </h1>
          <div className="username">

      < label > username: </label> <br/> < input type = "text"
      placeholder = "username"
      name = "usr"
      onChange = {
        event => username(event)
      }
      />
      
          </div>
          <div className="password">

          <label> password </label> <br/> <input type="text"
        placeholder="password" neme="pswd" onChange={event => password(event)} />
          </div>
      
           <div className="button_register"><button onClick={loginSummit}> login </button>
             < Router >
               <div>
               <nav>
                  <Link to="/registration/"> register </Link>
                </nav>
                <Route path = "/registration/"
             component = {
               Registresion
             }/> 
             </div>

             </Router></div>
          
    </div>
    </div>
      
      
    );
  }
  else {
    
    return (
      <div className="card-wrapper">

      < div className="card-form" >

          <h1 > LOG-IN </h1>
          < div className = "username" >
            <h4 > username : </h4> <input type="text" placeholder="username" name="usr" onChange={event => username(event)} />
            </div>
      < div className = "password" >
       <h4 > password :</h4> <input type="text"
       placeholder = "password"
       neme = "pswd"
       onChange = {
         event => password(event)
              } />
            </div>
       < div className = "button_register ">
       <button onClick = {
              loginSummit}> login </button>
            < Router >
               <div>
               <nav>
                  <Link to="/registration/"> register </Link>
                </nav>
                <Route path = "/registration/"
             component = {
               Registresion
             }/> 
             </div>

             </Router></div>
       <p>{props.loged}</p>
       </div>
      </div>
     );
  }
}

const mapDispatchToProps = dispatch => ({
  usernames: user => dispatch({
    type: "NEW_USER", data: user
  }),
  passwords: pswd => dispatch({
    type:"NEW_PSWD",data:pswd
  
  }),
  login:()=>dispatch({type:"NEW_LOGIN"})
});
const mapStateToProps = state=> ({
   loged:state.login
});

export default connect(
 mapStateToProps,mapDispatchToProps
)(App);




