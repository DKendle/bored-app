import React from 'react'


export default function Activity({activities}) {
    console.log(activities)

    const list = activities.map((a) => {
        return <li key={a.id}>{a.title}</li>
    })
    return (
        <>
            <ul>
                {list}
            </ul>
        </>
    )
}
