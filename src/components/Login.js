import React, { Component } from 'react'
import './app.css'
import { Select } from 'antd'

class Login extends Component {

  handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  render() {
    return (
      <div className="login-container">
        <div className="card">
          <h5 className="card-header text-center">Would You Rather</h5>
          <form>
            <div className="card-body">
              <div className="form-group">
                <div className="login-img"></div>
                <h5 className="card-title text-center">Sign In</h5>
                <div>
                  <Select defaultValue="" style={{ width: '100%' }} onChange={this.handleChange}>
                    <Select.Option value="" disabled>Select a User to login</Select.Option>
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    <Select.Option value="Yiminghe">yiminghe</Select.Option>
                  </Select>
                </div>
              </div>
              <button className="btn btn-primary w-100">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
