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
              <QueCard />
              <QueCard />
              <QueCard />
              <QueCard />
              <QueCard />
            </TabPane>
            <TabPane tab="Answered" key="2">
              <QueCard />
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Questions
