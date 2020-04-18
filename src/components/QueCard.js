import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'

import ImageCard from './ImageCard'
import QuePreview from './QuePreview'
import QueQuestion from './QueQuestion'
import QueResult from './QueResult'

const cardTypes = {
  CARD_PREVIEW: QuePreview,
  CARD_QUESTION: QueQuestion,
  CARD_RESULT: QueResult
}

const CardContent = props => {
  const SpecificComponent = cardTypes[props.cardType]
  return <SpecificComponent {...props} />
}

const QueCard = (props) => {
  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={props.user.name + ' asks:'}
    >
      <div className="row m-0">
        <div className="col-4 line">
          <ImageCard url={props.user.avatarURL} large={true} />
        </div>
        <div className="col-8">
          <CardContent {...props} />
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
