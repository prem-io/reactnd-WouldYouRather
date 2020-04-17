import { Card, Radio } from 'antd'

import React from 'react'
import ImageCard from './ImageCard'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const QueCard = ({
  question,
  user,
  qid,
  value,
  handlePoll,
  handleSubmit,
  unanswered,
  poll,
  answered
}) => {
  const questionDescription = question.optionOne.text.substring(0, 15)

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  }

  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={user.name + ' asks:'}
    >
      <div className="row m-0">
        <div className="col-4 line">
          <ImageCard url={user.avatarURL} large={true} />
        </div>
        <div className="col-8">
          <h6 className="text-left">Would you rather</h6>
          {(unanswered || answered) && <p className="text-center">{questionDescription}<br />or...</p>}
          {poll && <Radio.Group onChange={handlePoll} value={value} className="mt-2">
            <Radio style={radioStyle} value={1}>
              Option A
            </Radio>
            <Radio style={radioStyle} value={2}>
              Option B
            </Radio>
          </Radio.Group>}
          <div className="mt-2">
            {unanswered && <Link to={`/questions/${qid}`} className="btn que-btn">Answer Poll</Link>}
            {poll && <button className="btn que-btn" onClick={handleSubmit}>Poll</button>}
            {answered && <button className="btn que-btn">Results</button>}
          </div>
        </div>
      </div>
    </Card>
  )
}

function mapStateToProps({ questions, users }, { qid }) {
  const question = questions[qid]
  const user = users[questions[qid].author]

  return { question, user }
}

export default connect(mapStateToProps)(QueCard)
