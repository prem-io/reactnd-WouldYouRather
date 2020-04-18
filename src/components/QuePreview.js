import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const QuePreview = ({ unanswered, question, qid }) => {
  const buttonContent = unanswered ? 'Answer Poll' : 'Results'
  const results = !unanswered
  const questionDescription = question.optionOne.text.substring(0, 15)

  return (
    <Fragment>
      <h6 className="text-left">Would you rather</h6>
      <p className="text-center">{questionDescription}<br />or...</p>
      <div className="mt-2">
        <Link
          className="btn que-btn"
          to={{
            pathname: `/questions/${qid}`,
            state: { results: results }
          }}>
          {buttonContent}
        </Link>
      </div>
    </Fragment>
  )
}

export default QuePreview
