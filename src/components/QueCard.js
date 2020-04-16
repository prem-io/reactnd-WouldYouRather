import { Card, Radio } from 'antd'

import React from 'react'
import ImageCard from './ImageCard'
import { Link } from 'react-router-dom'

const QueCard = ({
  username = 'Joeylene',
  url = 'https://reactnd-would-you-rather.netlify.com/images/avatars/lion.png',
  id,
  value,
  handlePoll,
  handleSubmit,
  unanswered,
  poll,
  answered
}) => {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  }

  console.log(id)

  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={username + ' asks:'}
      extra={
        unanswered && <Link to={`/questions/${id}`} className="btn que-btn">Answer Poll</Link>
      }
    >
      <div className="row m-0">
        <div className="col-3 line">
          <ImageCard url={url} large={true} />
        </div>
        <div className="col-9">
          <h6 className="text-left">Would you rather</h6>
          {poll && <Radio.Group onChange={handlePoll} value={value} className="mt-2">
            <Radio style={radioStyle} value={1}>
              Option A
            </Radio>
            <Radio style={radioStyle} value={2}>
              Option B
            </Radio>
          </Radio.Group>}
          {(unanswered || answered) && <p className="text-center">write JavaScript<br />or...</p>}
          <div className="mt-2">
            {poll && <button className="btn que-btn" onClick={handleSubmit}>Poll</button>}
            {answered && <button className="btn que-btn">Results</button>}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default QueCard
