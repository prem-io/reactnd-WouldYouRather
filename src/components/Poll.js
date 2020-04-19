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

  pushRoute = () => {
    const qid = this.props.match.params.id
    this.props.history.push(`/questions/${qid}`, { results: true })
  }

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
      this.pushRoute()
    })
  }

  render() {
    const { id, badUrl } = this.props
    const { value, isLoading } = this.state
    const results = this.props.location.state ? this.props.location.state.results : false

    if (badUrl) {
      return <Redirect to='/questions/bad_id' />
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
            cardType={results ? 'CARD_RESULT' : 'CARD_QUESTION'}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authUser, questions }, { match }) {
  let badUrl = false
  const { id } = match.params
  if (questions[id] === undefined) {
    badUrl = true
  }

  return { id, authUser, badUrl }
}
export default connect(mapStateToProps)(Poll)
