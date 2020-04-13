import { Card } from 'antd'

import React from 'react'
import ImageCard from './ImageCard'

const QueCard = ({ username = 'Joeylene', url = 'https://reactnd-would-you-rather.netlify.com/images/avatars/lion.png' }) => {
  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={username + ' asks:'}
      extra={<button className="btn que-btn">Answer Poll</button>}
    >
      <div className="row m-0">
        <div className="col-3 line">
          <ImageCard url={url} large={true} />
        </div>
        <div className="col-9">
          <h5 className="text-left">Would you rather</h5>
          <p className="text-center">write JavaScript<br />or...</p>
        </div>
      </div>
    </Card>
  )
}

export default QueCard
