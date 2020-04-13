import React, { Component } from 'react'
import './app.css'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'

import Login from './Login'
import Questions from './Questions'
import LeaderBoard from './LeaderBoard'
import Poll from './Poll'
import NotFound from './NotFound'
import AppHeader from './AppHeader'
export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className="container">
          <AppHeader />
          {localStorage.getItem('authID') === null
            ? <Route render={() => (<Login />)} />
            : <Switch>
              <Route exact path='/'
                render={() =>
                  localStorage.authID ? <Redirect to="/questions" /> : <Redirect to="/login" />
                }
              />
              <Route exact path='/' render={() => <Redirect to="/questions" />} />
              <Route exact path='/questions' component={Questions} />
              <Route path='/questions/:id' component={Poll} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route path='/login' component={Login} />
              <Route path="/404" component={NotFound} />
              <Redirect from="*" exact to="/404" />
            </Switch>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(App)
