import React, { Component } from 'react'
import { Tabs } from 'antd'
import QueCard from './QueCard'

const { TabPane } = Tabs
class Questions extends Component {
  render() {
    return (
      <div className="row questions-container">
        <div className="col-12 br">
          <Tabs defaultActiveKey="1" type="card" size={'large'}>
            <TabPane tab="Unanswered" key="1">
              <QueCard unanswered={true} />
              <QueCard unanswered={true} />
              <QueCard unanswered={true} />
            </TabPane>
            <TabPane tab="Answered" key="2">
              <QueCard answered={true} />
              <QueCard answered={true} />
              <QueCard answered={true} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Questions
