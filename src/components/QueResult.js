import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Progress } from 'antd'

const QueResult = ({ question, user }) => {
  const optionOneVotes = question.optionOne.votes.length
  const optionTwoVotes = question.optionTwo.votes.length
  const votesTotal = optionOneVotes + optionTwoVotes
  const userVote = user.answers[question.id]

  return (
    <Fragment>
      <div>
        <h6 className="text-left">Would you rather</h6>
      </div>
      <div className="vote-card">
        <div>{question.optionOne.text}</div>
        <Progress className="vote-percent" percent={(optionOneVotes / votesTotal * 100).toFixed(0)} size="small" />
        <div className="text-center">{optionOneVotes} out of {votesTotal} votes</div>
        {(userVote === 'optionOne') && <span className="vote-icon"></span>}
      </div>
      <div className="vote-card">
        <div>{question.optionTwo.text}</div>
        <Progress className="vote-percent" percent={(optionTwoVotes / votesTotal * 100).toFixed(0)} size="small" />
        <div className="text-center">{optionTwoVotes} out of {votesTotal} votes</div>
        {(userVote === 'optionTwo') && <span className="vote-icon"></span>}
      </div>
    </Fragment>
  )
}

function mapStateToProps({ users, authUser }) {
  const user = users[authUser]
  return { user }
}

export default connect(mapStateToProps)(QueResult)
