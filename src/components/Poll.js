import React, { Component } from 'react'
import { connect } from 'react-redux'
import QueCard from './QueCard'
import { saveAnswer } from '../actions/shared'
import { message } from 'antd'
import { Redirect } from 'react-router-dom'

export class Poll extends Component {
  state = { value: '', isLoading: false };

  onChange = e => {
    this.setState({
      value: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const qid = this.props.match.params.id
    const authUser = this.props.authUser
    const answer = this.state.value
    new Promise((res, _rej) => {
      this.setState({ isLoading: true })
      this.props.dispatch(saveAnswer(authUser, qid, answer))
      setTimeout(() => {
        message.success('Your Answer is Polled.')
        res('success')
      }, 1000)
    }).then(() => {
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { id, badUrl, cardResult } = this.props
    const { value, isLoading } = this.state

    if (badUrl) {
      return <Redirect to='/404' />
    }

    return (
      <div className="row questions-container">
        <div className="col-12">
          <QueCard
            qid={id}
            value={value}
            isLoading={isLoading}
            handlePoll={this.onChange}
            handleSubmit={this.handleSubmit}
            cardType={(cardResult) ? 'CARD_RESULT' : 'CARD_QUESTION'}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authUser, questions, users }, { match }) {
  let badUrl = false
  let cardResult = false
  const { id } = match.params

  if (id in users[authUser].answers) {
    cardResult = true
  }

  if (questions[id] === undefined) {
    badUrl = true
  }

  return { id, authUser, badUrl, cardResult }
}

export default connect(mapStateToProps)(Poll)
