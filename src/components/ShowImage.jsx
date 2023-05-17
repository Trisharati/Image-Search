import React from 'react'

const ShowImage = ({image}) => {
  return (
    <div>
        <img src={image.urls.small}/>
    </div>
  )
}

export default ShowImage