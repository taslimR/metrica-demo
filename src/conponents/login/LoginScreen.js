import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Metrica from '../home/Metrica';
import './LoginScreen.css';

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    login: false
  };
  render() {
    return (
      <div className="container">
        <form
          onSubmit={() => {
            console.log('~~~~', this.state.username, ' ', this.state.password);
            if (
              this.state.username === 'Admin' &&
              this.state.password === 'Asif@1234'
            ) {
              ReactDOM.render(<Metrica />, document.getElementById('root'));
            }
          }}>
          <div className="form-group">
            <input
              className="form-control width-auto"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={e => {
                this.setState({
                  username: e.target.value
                });
                console.log(e.target.value);
              }}
            />

            <input
              className="form-control width-auto"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => {
                this.setState({
                  password: e.target.value
                });
              }}
            />
          </div>
          <div className="form-group row ml-2 mr-2">
            <button class="btn btn-primary form-control" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginScreen;
