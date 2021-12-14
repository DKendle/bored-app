import React from 'react'

export default function Form() {

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target)
    }


    return (
        <div>
            <h1>Add a New Activity</h1>
            <form onSubmit={handleSubmit}id="new-activites">
                <input type='text' name='Title' placeholder='Activity Title'></input>
                <input type='submit' value='Submit' />

            </form>
        </div>
    )
}
