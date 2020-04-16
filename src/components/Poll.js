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
    const id = 1
    console.log(this.state)

    return (
      <div className="row questions-container">
        <div className="col-12 br">
          <QueCard poll={true} id={id} value={this.state.value} handlePoll={this.onChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default Poll
