import React, { Fragment } from 'react'
import { Radio } from 'antd'

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
}

const QueQuestion = ({ question, value, handlePoll, handleSubmit }) => {
  return (
    <Fragment>
      <h6 className="text-left">Would you rather</h6>
      <form onSubmit={handleSubmit}>
        <Radio.Group onChange={handlePoll} value={value} className="mt-2">
          <Radio style={radioStyle} value={1}>
            Option A
            </Radio>
          <Radio style={radioStyle} value={2}>
            Option B
            </Radio>
        </Radio.Group>
        <div className="mt-2">
          <button className="btn que-btn" type="submit">Poll</button>
        </div>
      </form>
    </Fragment>
  )
}

export default QueQuestion
