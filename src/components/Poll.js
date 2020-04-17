import React, { Component } from 'react'
import QueCard from './QueCard'

export class Poll extends Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  };

  handleSubmit = () => {
    console.log("Poll Submit")
  }

  render() {
    const id = this.props.match.params.id

    return (
      <div className="row questions-container">
        <div className="col-12 br">
          <QueCard poll={true} qid={id} value={this.state.value} handlePoll={this.onChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default Poll
