import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchImage from './api'
import Searchbar from './components/Searchbar'
import ImageList from './components/ImageList'

function App() {
  const [image,setImage] = useState([])
  const handleSubmit = async(term)=>{
    const result = await SearchImage(term)
    setImage(result)
  }
  return (
  <div>
    <Searchbar onSubmit = {handleSubmit}/>
    <ImageList image = {image}/>
  </div>
  )
}

export default App
