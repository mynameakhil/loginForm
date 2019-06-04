import React from 'react';
import {
    reactLocalStorage
} from 'reactjs-localstorage';
import history from './history';

class Registration extends React.Component {
     constructor(props) {
                 super(props);
                 this.state = {
                   firstname: '',
                     secondname: '',
                     username:'',
                   password:''
                 }
    };
    submitFormHandler(event) {
        const data = [];
        data.push({
            firstname: this.state.firstname,
            secondname: this.state.secondname,
            username: this.state.username,
            password: this.state.password
        })

        reactLocalStorage.setObject('users', data);
        history.push("/")

    }     
    render(){
        
        return (
            <div className="card-wrapper">

                < div className="card-form" >
                    <hi>REGISTRESION</hi>
                 <h4 > First Name: </h4> <input type = "text"
                 onChange = {
                     (event) => this.setState({
                         firstname: event.target.value
                     })
                    } />
                 < h4 > Second Name: </h4> <input type = "text"
                 onChange = {
                     (event) => this.setState({
                         secondname: event.target.value
                     })
                 }/>
                < h4 > username: </h4><input type = "text" onChange = { (event) => this.setState({username: event.target.value})}/> 
                < h4 > password: </h4><input type="text" onChange={(event) => this.setState({ password: event.target.value })} /><br/>
             < button type
             onClick = { event=>
                 this.submitFormHandler(event)
              } > Register </button>
            
            </div>
            </div>);
               
};
}
export default Registration;