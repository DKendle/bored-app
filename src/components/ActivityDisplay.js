import React from 'react'
import activityArray from '../data/activities'

export default function ActivityDisplay() {

    console.log(activityArray)

    const list = activityArray.map((a) => {
        return <li key={a.id} className='list'>{a.title}</li>
    })
    return (
        <div className="act-list">
            <ul>
                {list}
            </ul>
        </div>
    )
}

