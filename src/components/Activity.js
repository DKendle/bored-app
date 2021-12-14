import React from 'react'


export default function Activity({activities}) {
    console.log(activities)

    const list = activities.map((a) => {
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
