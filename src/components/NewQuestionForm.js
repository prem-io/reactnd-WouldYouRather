import React, { Component } from 'react'
import { Card, Input } from 'antd'

export class NewQuestionForm extends Component {
  render() {
    return (
      <div className="row questions-container">
        <div className="col-12 br">
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Create a New Poll"
            className="new-card"
          >
            <div>
              <p>Complete the question:</p>
              <h6 className="mb-3">Would you rather..</h6>
              <Input placeholder="Enter Option One" />
              <div className="h-line">OR</div>
              <Input placeholder="Enter Option Two" />
              <button className="btn que-btn mt-4">Submit</button>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default NewQuestionForm
