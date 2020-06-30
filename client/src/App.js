import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import sueQuestions from "./components/sets/sueQuestions.component";
import Presidents from "./components/sets/presidents.component";
import Questions from "./components/sets/questions.component";
import MyStats from "./components/mystats.component";
import Landing from "./components/landing.component";
import Navbar from "./components/navbar.component";
import Signup from "./components/signup.component";
import Login from "./components/login.component";
import Logout from "./components/logout.component";
import Play from "./components/play.component";
import API from "./utils/API.js";

class App extends Component {
  state = {
    username: "",
    loggedIn: false,
    userObject: {},
    redirectTo: null
  }

  componentDidMount() {
    console.log("----- props -")
      console.log(this.props)
    // this.getUser();
  }

  getUser() {
    API.getUser({
      email: this.state.email
    }).then(res => {
      console.log("----- App.js - getUser res");
      console.log(res.data);
      console.log("----- App.js - getUser res");
      if (res.data.user) {
        console.log('Get User: There is a user saved in the server session: ');
        this.setState({
          loggedIn: true,
          username: res.data.user.username
        })
      } else {
        console.log('---- App.js - get user failed.');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact
              path="/"
              render={() => {
                return (
                  (localStorage.getItem('loginData') ? < Redirect to="/play" /> : < Redirect to="/landing" />)
                )
              }}
            />
            <Route path="/questions" component={ Questions } />
            <Route path="/login" component={ Login } />
            <Route path="/logout" component={ Logout } />
            <Route path="/mystats" component={ MyStats } />
            {/* <Route path="/users" component={ Users } /> */}
            <Route path="/signup" component={ Signup } />
            <Route path="/landing" component={ Landing } />
            <Route path="/sueQuestions" component={ sueQuestions } />
            <Route path="/presidents" component={ Presidents } />
            <Route path="/play" component={ Play } />
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;