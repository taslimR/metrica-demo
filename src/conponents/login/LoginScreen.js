import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Metrica from '../home/Metrica';
import './LoginScreen.css';

function AuthExample() {
  return (
    <Router>
      <div className="container">
        <AuthButton />
        <Route path="/" component={Login} />
        <PrivateRoute path="/" component={Metrica} />
        {/* <Redirect from="/" to="/" /> */}
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <Link to="/login">
        <button
          className="btn btn-danger"
          onClick={() => {
            fakeAuth.signout(() => history.push('/login'));
          }}>
          signout
        </button>
      </Link>
    </p>
  ) : (
    ''
  )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        )
      }
    />
  );
}

class Login extends React.Component {
  state = { redirectToReferrer: false, username: '', password: '' };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = { from: { pathname: '/' } } || {
      from: { pathname: '/' }
    };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div className="container">
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
          <Link to="/home">
            <button
              className="btn btn-primary form-control"
              onClick={() => {
                if (
                  this.state.username === 'Admin' &&
                  this.state.password === 'Asif@1234'
                ) {
                  this.login();
                }
              }}>
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AuthExample;
