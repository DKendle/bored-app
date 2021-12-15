import React from 'react'
import { useState } from 'react'


//State will be used to collect changes in the form and
//update the original state
export default function Form() {

    const [title, setTitle] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            title: title
        }
        console.log(formData)
        //function to post formData
    }

    function handleChange(e){
        setTitle(e.target.value)
        console.log(title)
    }

    return (
        <div>
            <h1>Add a New Activity</h1>
            <form onSubmit={handleSubmit}id="new-activites">
                <input onChange={handleChange}type='text' name='Title' value={title}></input>
                <input type='submit' value='Submit' />

            </form>
        </div>
    )
}
