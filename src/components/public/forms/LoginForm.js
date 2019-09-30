import React,{useState} from 'react';
import { connect } from "react-redux";
import {loginHandler} from '../../../util/axiosWithAuth'

const LoginForm = props =>{
    console.log("With Redux",props)
    
    let [user,setUser] = useState({})
    let username = user.username ? user.username:'';
    let password = user.password ? user.password:'';
    
    const change= (e) =>{
      setUser({...user,[e.target.name]:e.target.value})
    }
    
    const onSubmit= (e) =>{
      e.preventDefault()
      props.loginHandler(user)
    }
    
    return(
      <form onSubmit={onSubmit}>
        <input onChange={change} name="username" placeholder="Username" value={username} type="text"/>
        <input onChange={change} name="password" placeholder="Password" value={password} type="password" />
        <input type="submit" />
      </form>
    )
  }

  const mapStateToProps = state =>{
    return{
      ...state.loggedIn
    }
  }
  
  export default connect(mapStateToProps,{loginHandler})(LoginForm);