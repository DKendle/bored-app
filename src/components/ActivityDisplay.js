import React from 'react'
//import activityArray from '../data/activities'
import { useState, useEffect } from 'react'

export default function ActivityDisplay() {

    const [aList, setAList] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/activities")
        .then((r) => r.json())
        .then((data) => {
            setAList(data)
        })

    }, [])
    console.log(aList)

    return (
        <div className="act-list">
            <h3>Activities</h3>
            <ul>
                {aList.map((a) => <li>{a.title}</li>)}
            </ul>
        </div>
    )
}

