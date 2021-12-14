import React from 'react'

export default function Form() {
    return (
        <div>
            <h1>Add a New Activity</h1>
            <form id="new-activites">
                <input type='text' name='Title' placeholder='Title'></input>
                <input type='submit' name='Submit' />

            </form>
        </div>
    )
}
