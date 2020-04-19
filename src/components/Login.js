import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Button } from 'antd'
import ImageCard from './ImageCard'
import { setAuthUser } from '../actions/authUser'

class Login extends Component {
  state = {
    selectedUser: '',
    disabled: true,
    loading: false
  }

  handleChange = (value) => {
    this.setState({
      selectedUser: value,
      disabled: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { selectedUser } = this.state
    new Promise((res, _rej) => {
      this.setState({ loading: true })
      setTimeout(() => res(), 500)
    }).then(() => {
      this.props.dispatch(setAuthUser(selectedUser))
    })
  }

  render() {
    const { users } = this.props

    return (
      <div className="login-container">
        <div className="card">
          <h5 className="card-header text-center">Would You Rather</h5>
          <form onSubmit={this.handleSubmit}>
            <div className="card-body">
              <div className="form-group">
                <div className="login-img"></div>
                <p>Please sign-in to continue</p>
                <Select defaultValue="" style={{ width: '100%' }} onChange={this.handleChange}>
                  <Select.Option value="" disabled>
                    <span className="disabled">Select a User to login</span>
                  </Select.Option>
                  {users.length > 0 && users.map(({ id, avatarURL, name }, i) =>
                    <Select.Option key={i} value={id}>
                      <ImageCard url={avatarURL} name={name} small={true} />
                      <span className="option-name">{name}</span>
                    </Select.Option>
                  )}
                </Select>
              </div>
              <Button
                className="login-btn"
                htmlType="submit"
                loading={this.state.loading}
                disabled={this.state.disabled}
              >Sign In</Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(Login)
