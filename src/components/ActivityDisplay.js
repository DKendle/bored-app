import React from 'react'
import activityArray from '../data/activities'
import Activity from './Activity'

export default function ActivityDisplay() {
    return (
        <div className="act-dis">
            <h1>Activities</h1>
            <Activity activities={activityArray}/>
        </div>
    )
}
