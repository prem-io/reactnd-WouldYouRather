import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { setAuthUser } from '../actions/authUser'
import ImageCard from './ImageCard'

const AppHeader = ({ authUser, users, setAuthUser, history }) => {
  const handleLogout = (e) => {
    e.preventDefault()
    setAuthUser(null)
    history.push('/')
  }

  return (
    <div className="nav-items">
      <div className="navbar-links d-flex">
        <NavLink activeClassName="is-active" to="/questions">Questions</NavLink>
        <NavLink activeClassName="is-active" to="/add">New Poll</NavLink>
        <NavLink activeClassName="is-active" to="/leaderboard">Leader Board</NavLink>
      </div>
      <div className="navbar-profile">
        <ImageCard url={users[authUser].avatarURL} small={true} />
        <span className="user-name">{users[authUser].name}</span>
        <Button className="nav-btn" shape="round" onClick={handleLogout}>
          Logout<span className="logout" />
        </Button>
      </div>
    </div>
  )
}

function mapStateToProps({ users, authUser }) {
  return {
    authUser,
    users
  }
}

export default withRouter(connect(mapStateToProps, { setAuthUser })(AppHeader))