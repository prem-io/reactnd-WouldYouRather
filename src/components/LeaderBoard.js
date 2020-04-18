import React, { Component } from 'react'
import LeadCard from './LeadCard'
import { connect } from 'react-redux'

export class LeaderBoard extends Component {
  render() {
    const { leaderBoardUsers } = this.props
    const medals = ['gold-medal', 'silver-medal', 'copper-medal']

    return (
      <div className="row questions-container">
        <div className="col-12">
          {leaderBoardUsers.map((user, index) => <LeadCard key={user.id} medal={medals[index]} user={user} />)}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const leaderBoardUsers = Object.values(users)
    .map(user => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length
    }))
    .sort((a, b) => b.total - a.total)

  return { leaderBoardUsers }
}

export default connect(mapStateToProps)(LeaderBoard)
