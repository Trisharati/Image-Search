import React from 'react'
import ShowImage from './ShowImage'

const ImageList = ({image}) => {
    const renderedImage = image.map((image) =>{
        return <ShowImage key = {image.id} image={image}/>
    })
  return (
    <div>
        {renderedImage}
    </div>
  )
}

export default ImageList