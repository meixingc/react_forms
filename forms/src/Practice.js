import { useState } from "react"

export default function Practice() {
    const initialState = {
        issueType: '',
        subject: '',
        message: ''
    }
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        setFormState(initialState)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='issueType'> Type of issue </label>
                <select id='issueType'>
                    <option value='outage'> Service Outage </option>
                    <option value='billing'> Billing </option>
                    <option value='cancel'> Cancel Service </option>
                </select>

                <label htmlFor='subject'> Subject </label>
                <input id='subject' type='text' onChange={handleChange} value={formState.subject}/>

                <label hmtlFor='message'> Message </label>
                <textarea id='message' cols='30' rows='10' onChange={handleChange} value={formState.message}></textarea>

                <button type='submit'> Send </button>
            </form>
        </div>
    )
}