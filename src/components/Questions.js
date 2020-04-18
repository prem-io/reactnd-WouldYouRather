import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
import QueCard from './QueCard'

const { TabPane } = Tabs
class Questions extends Component {
  render() {
    const { userQuestionData: { unanswered, answered } } = this.props
    console.log(unanswered, answered)

    return (
      <div className="row questions-container">
        <div className="col-12 br">
          <Tabs defaultActiveKey="1" type="card" size={'large'}>
            <TabPane tab="Unanswered" key="1">
              {unanswered.map(question => (
                <QueCard key={question.id} qid={question.id} unanswered={true} cardType={'CARD_PREVIEW'} />
              ))}
            </TabPane>
            <TabPane tab="Answered" key="2">
              {answered.map(question => (
                <QueCard key={question.id} qid={question.id} unanswered={false} cardType={'CARD_PREVIEW'} />
              ))}
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authUser, users, questions }) {
  const answeredIds = Object.keys(users[authUser].answers)
  const answered = Object.values(questions)
    .filter(question => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp)
  const unanswered = Object.values(questions)
    .filter(question => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp)

  return {
    userQuestionData: {
      answered,
      unanswered
    },
    questions,
    users
  }
}

export default connect(mapStateToProps)(Questions)
