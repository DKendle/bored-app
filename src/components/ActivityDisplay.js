import React from 'react'
import activityArray from '../data/activities'

export default function ActivityDisplay() {

    //console.log(activityArray)

    const list = activityArray.map((a) => {
        return <li key={a.id}>{a.title}</li>
    })

    return (
        <div className="act-list">
            <h3>Activities</h3>
            <ul>
                {list}
            </ul>
        </div>
    )
}

