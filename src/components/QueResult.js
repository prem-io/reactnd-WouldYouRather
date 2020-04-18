import React, { Fragment } from 'react'
import { Tag, Progress } from 'antd'

const QueResult = ({ qid, question }) => {
  return (
    <Fragment>
      <h6 className="text-left">Would you rather</h6>
      <div className="vote-card">
        <div>write Javascript</div>
        <Progress className="vote-percent" percent={30} size="small" />
        <div className="text-center">0 out of 2</div>
        <span className="vote-icon"></span>
      </div>
      <div className="vote-card">
        <div>write Python</div>
        <Progress className="vote-percent" percent={30} size="small" />
        <div className="text-center">0 out of 2</div>
      </div>
    </Fragment>
  )
}

export default QueResult
