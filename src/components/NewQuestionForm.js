import React, { Component } from 'react'
import { Card, Input, Button, message } from 'antd'
import { connect } from 'react-redux'
import { postQuestion } from '../actions/shared'

export class NewQuestionForm extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    isLoading: false
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { authUser } = this.props
    new Promise((res, _rej) => {
      this.setState({ isLoading: true })
      this.props.dispatch(postQuestion(optionOneText, optionTwoText, authUser))
      setTimeout(() => {
        message.success('Created a New Poll')
        res('success')
      }, 1000)
    }).then(() => {
      this.setState({
        optionOneText: '',
        optionTwoText: '',
        isLoading: false
      })
      this.props.history.push('/questions')
    })
  }

  render() {
    const { optionOne, optionTwo, isLoading } = this.state
    const btnDisabled = (optionOne === '' && optionTwo === '') ? true : false
    return (
      <div className="row questions-container">
        <div className="col-12 br">
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Create a New Poll"
            className="new-card"
          >
            <form onSubmit={this.handleSubmit}>
              <h6 className="mb-3">Would you rather..</h6>
              <Input name="optionOneText" loading="true" value={this.state.optionOneText} onChange={this.onChange} placeholder="Enter Option One" required />
              <div className="h-line">OR</div>
              <Input name="optionTwoText" value={this.state.optionTwoText} onChange={this.onChange} placeholder="Enter Option Two" required />
              <Button htmlType="submit" className="btn que-btn mt-4" style={{ height: '45px' }} loading={isLoading} disabled={btnDisabled}>Submit</Button>
            </form>
          </Card>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authUser }) {
  return { authUser }
}

export default connect(mapStateToProps)(NewQuestionForm)
