import React from 'react'
import ImageCard from './ImageCard'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'

const AppHeader = () => {
  return (
    <div className="nav-items">
      <div className="navbar-links d-flex">
        <NavLink activeClassName="is-active" to="/questions">Questions</NavLink>
        <NavLink activeClassName="is-active" to="/new-poll">New Poll</NavLink>
        <NavLink activeClassName="is-active" to="/leaderboard">Leader Board</NavLink>
      </div>
      <div className="navbar-profile">
        <ImageCard url={'https://reactnd-would-you-rather.netlify.com/images/avatars/fox.png'} small={true} />
        <span className="user-name">Prem Kumar</span>
        <Button className="nav-btn" shape="round">
          Logout<span className="logout" />
        </Button>
      </div>
    </div>
  )
}

export default AppHeader
