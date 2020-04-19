import React, { Component, Fragment } from 'react'
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
import NewQuestionForm from './NewQuestionForm'

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authUser } = this.props
    return (
      <Router>
        <div className="container">
          {authUser === null
            ? <Route render={() => <Login />} />
            : <Fragment>
              <AppHeader />
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/questions" />} />
                <Route exact path='/questions' component={Questions} />
                <Route path="/questions/bad_id" component={NotFound} />
                <Route path='/questions/:id' component={Poll} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path="/new_poll" component={NewQuestionForm} />
                <Route path="/404" component={NotFound} />
                <Redirect from="*" to="/404" />
              </Switch>
            </Fragment>
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
