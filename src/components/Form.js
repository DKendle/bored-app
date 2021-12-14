import React from 'react'

//State will be used to collect changes in the form and
//update the original state
export default function Form({submit, change, title}) {

    return (
        <div>
            <h1>Add a New Activity</h1>
            <form onSubmit={submit}id="new-activites">
                <input onChange={change}type='text' name='Title' value={title}></input>
                <input type='submit' value='Submit' />

            </form>
        </div>
    )
}
