import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { setAuthUser } from '../actions/authUser'
import ImageCard from './ImageCard'

const AppHeader = ({ authUser, users, setAuthUser }) => {
  const handleLogout = (e) => {
    e.preventDefault()
    setAuthUser(null)
    localStorage.clear()
  }

  return (
    <div className="nav-items">
      <div className="navbar-links d-flex">
        <NavLink activeClassName="is-active" to="/questions">Questions</NavLink>
        <NavLink activeClassName="is-active" to="/new_poll">New Poll</NavLink>
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

export default connect(mapStateToProps, { setAuthUser })(AppHeader)