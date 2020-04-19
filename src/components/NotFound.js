import React from 'react'

const NotFound = () => {
  return (
    <div className="container not-found">
      <div className="error-icon"></div>
      <p className="mt-3">Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
      <p>Try the menu links.</p>
    </div>
  )
}

export default NotFound
