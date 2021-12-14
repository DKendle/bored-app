import React from 'react'
import activityArray from '../data/activities'
import Activity from './Activity'
import Form from './Form'
import { useState } from 'react'

export default function ActivityDisplay() {

    const [title, setTitle] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log("SUBMITTED")
    }

    function handleChange(e){
        setTitle(e.target.value)
        console.log(title)
    }

    return (
        <div className="act-dis">
            <h1>Activities</h1>
            <Activity activities={activityArray}/>
            <Form submit={handleSubmit} change={handleChange} title={title}/>
        </div>
    )
}
