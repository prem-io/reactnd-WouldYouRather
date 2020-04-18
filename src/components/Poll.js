import React, { Component } from 'react'
import { connect } from 'react-redux'
import QueCard from './QueCard'

export class Poll extends Component {
  state = { value: '' };

  onChange = e => {
    console.log('Choosen Option', e.target.value)
    this.setState({
      value: e.target.value,
    })
  };

  handleSubmit = () => {
    console.log("Poll Submit")
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

export default connect(null)(Poll)
