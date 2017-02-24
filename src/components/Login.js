import React, { Component } from 'react'
import { login, fbLogin } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'
import Errors from './Errors'
/* eslint-disable */


export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.regSignUp = this.regSignUp.bind(this);
    this.fbSignUp  = this.fbSignUp.bind(this);
    this.state = {
      authed: false,
      checkit: '',
    }
  }

  regSignUp = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          checkit: "Found"
        })
      } else {
        this.setState({
          checkit: "Not Found"        
        })
      }
    })
  }

  fbSignUp = (e) => {
    e.preventDefault()
    fbLogin();
  }

  renderError() {
    return !this.state.authed ? <Errors title={this.state.checkit} /> : null
  }
  
  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Login </h1>
        <form>
          <div className="form-group">
            {this.renderError()}
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          <button className="btn btn-primary" onClick={this.regSignUp}>Login</button>
          <button className="btn btn-primary" style={{margin:'0 20px'}} onClick={this.fbSignUp}>Fb Login</button>
        </form>
      </div>
    )
  }
}