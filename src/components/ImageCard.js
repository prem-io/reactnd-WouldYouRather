import React from 'react'

const smallImg = {
  width: '25px',
  height: '25px'
}

const largeImg = {
  width: '80px',
  height: '80px'
}

const ImageCard = ({ url, name, small }) => {
  return (
    <img
      src={url}
      alt={`This is ${name} image`}
      className='img-card'
      style={small ? smallImg : largeImg}
    />
  )
}

export default ImageCard
