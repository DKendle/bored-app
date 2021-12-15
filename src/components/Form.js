import React from 'react'
import { useState } from 'react'


//State will be used to collect changes in the form and
//update the original state
export default function Form() {

    const [formData, setFormData] = useState({
        title: ""
    })

    const configObj ={
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/activities', 
        configObj)
        //function to post formData
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h3>Add a New Activity</h3>
            <form onSubmit={handleSubmit}id="new-activites">
                <input onChange={handleChange} type='text' name='title' value={formData.title}></input>
                <input type='submit' value='Submit' />

            </form>
        </div>
    )
}
