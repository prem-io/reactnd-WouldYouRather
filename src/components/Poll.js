import React, { Component } from 'react'
import { connect } from 'react-redux'
import QueCard from './QueCard'
import { saveUserAnswer } from '../actions/shared'

export class Poll extends Component {
  state = { value: '' };

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
    this.props.dispatch(saveUserAnswer(authUser, qid, answer, this.pushRoute))
  }

  render() {
    const id = this.props.match.params.id
    const results = this.props.location.state ? this.props.location.state.results : false

    return (
      <div className="row questions-container">
        <div className="col-12">
          <QueCard
            qid={id}
            value={this.state.value}
            handlePoll={this.onChange}
            handleSubmit={this.handleSubmit}
            cardType={results ? 'CARD_RESULT' : 'CARD_QUESTION'}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authUser }) {
  return { authUser }
}
export default connect(mapStateToProps)(Poll)
