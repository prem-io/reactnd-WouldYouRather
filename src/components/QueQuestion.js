import React, { Fragment } from 'react'
import { Radio } from 'antd'

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
}

const QueQuestion = ({ question, value, handlePoll, handleSubmit }) => {
  const btnDisabled = value === '' ? true : false
  console.log(question)
  return (
    <Fragment>
      <h6 className="text-left">Would you rather</h6>
      <form onSubmit={handleSubmit}>
        <Radio.Group onChange={handlePoll} value={value} className="mt-2">
          <Radio style={radioStyle} value={"optionOne"}>
            {question.optionOne.text}
          </Radio>
          <Radio style={radioStyle} value={"optionTwo"}>
            {question.optionTwo.text}
          </Radio>
        </Radio.Group>
        <div className="mt-2">
          <button className="btn que-btn" type="submit" disabled={btnDisabled}>Poll</button>
        </div>
      </form>
    </Fragment>
  )
}

export default QueQuestion
