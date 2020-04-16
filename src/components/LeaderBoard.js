import React, { Component } from 'react'
import LeadCard from './LeadCard'

export class LeaderBoard extends Component {
  render() {
    return (
      <div className="row questions-container">
        <div className="col-12 br">
          <LeadCard />
        </div>
      </div>
    )
  }
}

export default LeaderBoard
