import React from 'react'
import { useState } from 'react'


//State will be used to collect changes in the form and
//update the original state
export default function Form() {

    const [title, setTitle] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target)
    }

    function handleChange(e){
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Add a New Activity</h1>
            <form onSubmit={handleSubmit}id="new-activites">
                <input onChange={handleChange}type='text' name='Title' placeholder='Activity Title'></input>
                <input type='submit' value='Submit' />

            </form>
        </div>
    )
}
