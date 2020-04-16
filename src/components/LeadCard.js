import { Card } from 'antd'

import React from 'react'
import ImageCard from './ImageCard'

const LeadCard = ({ username = 'Joeylene', url = 'https://reactnd-would-you-rather.netlify.com/images/avatars/lion.png' }) => {
  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      className="lead-card"
    >
      <div className="row m-0">
        <div className="col-3 line">
          <ImageCard url={url} large={true} />
        </div>
        <div className="col-6 line">
          <h5 className="text-left mb-3">{username}</h5>
          <div className="row">
            <div className="col-9 py-2">Answered Questions</div>
            <div className="col-3 py-2">4</div>
          </div>
          <div className="row">
            <div className="col-9 py-2">Created Questions</div>
            <div className="col-3 py-2">3</div>
          </div>
        </div>
        <div className="col-3">
          <Card type="inner" title="Score" className="lead-score-card">
            <div className="lead-score">6</div>
          </Card>
        </div>
      </div>
      <div className="icon gold-medal"></div>
    </Card>
  )
}

export default LeadCard
