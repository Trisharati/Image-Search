import React, { useState } from 'react'

const Searchbar = ({onSubmit}) => {
    const [term,setTerm] = useState("")
    const handleChange =(event) =>{
        setTerm(event.target.value)
    }
    const handleFormSubmit = (event)=>{
        event.preventDefault()
        onSubmit(term)
    }
    return (
    <div>
        <form onSubmit = {handleFormSubmit}>
            <label>What you want to search </label>
            <input value={term} onChange = {handleChange} />
        </form>
    </div>
  )
}

export default Searchbar