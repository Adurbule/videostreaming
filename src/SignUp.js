import {Component} from 'react';
import axios from 'axios';
class SignUp extends Component{
    constructor(){
        super()
        this.state={
            onlineusers:0
        }
    }
    user={

    }
    register=()=>{
      
       if(!this.user.email || !this.user.password || !this.user.name)
       {
        this.setState({
            errorMessage:"Please enter valid credentials"
        })
        
       }else{
        console.log(this.user)
        this.setState({
            errorMessage:""
        })
        let apiUrl ="hhtps::apifromashu.herokuapp.com/register"
        let data ={
            "name":this.user.name,
            "email":this.user.email,
            "password":this.user.password
        }
        axios({
            method:"post",
            url:apiUrl,
            data:data
        }).then((response)=>{
            console.log("resposne",response.data)
        },(error)=>{
            console.log("error",error)
        })
       }
    }
    getName = (event)=>{
        this.user.name= event.target.value;
    }
    getEmail=(event)=>{
        this.user.email= event.target.value;
    }

    getPassword=(event)=>{
        event.preventDefault();
        this.user.password=event.target.value
    }

    render(){
        return(
                <div style={{"width":"50%", "margin":"auto"}}>
                    hey users {this.state.onlineusers}
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" onChange={this.getName}></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={this.getEmail}></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={this.getPassword}></input>
                    </div>
                    <div className="alert alert-danger">
                        {this.state.errorMessage}
                    </div>
                    
                    <button className="btn btn-primary" onClick={this.register}>Register</button>
                </div>
        )
    }
}

export default SignUp