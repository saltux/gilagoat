import React, { Component } from 'react';
import '../css/App.css';
import HomePage from './HomePage.js'
// import DashboardPage from './DashboardPage.js'
// import AdminPage from './Admin'
import NotFound from './NotFound.js'
import LoginPage from './Auth/Login.js'
import SignUpPage from './Auth/SignUp.js'
// import IndividualUserView from './Admin/IndividualUserView'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import Auth from '../tools/Auth';

// eslint-disable-next-line
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);


class App extends Component {
  render() {
    const currentKey = this.props.location.pathname.split("/")[1] || "/";
    const timeout = { enter: 300, exit: 200 };
    return (
      <TransitionGroup component="main" className="page-main" style={{ height: '100%' }}>
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="fade"
          appear
        >
          <div>
            <Switch location={this.props.location}>
              <Route path="/" exact component={HomePage} />
              {/* <Route path="/dashboard" exact component={DashboardPage} /> */}
              {/* <Route path="/admin" exact component={AdminPage} /> */}
              {/* <Route path="/users/:id" exact component={IndividualUserView} /> */}
              <Route path="/signup" exact component={SignUpPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);