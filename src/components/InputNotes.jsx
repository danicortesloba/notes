
import PropTypes from 'prop-types'
import { useState } from 'react'
const InputNotes = ({ updateData }) => {  
    const initialNote = {
        title: "",
        description: "",
        priority: ""
    }

    const [note, setNote] = useState(initialNote)

    const manageChange = (e) => {
        const { name, value } = e.target
        setNote({ ...note, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateData(note)
        setNote(initialNote)
    }
    

    return(
        <form className="container" onSubmit={handleSubmit}>
            <label htmlFor="title">
                <h3 className="label">Title</h3>
                <input
                className="input"
                id="title"
                type="text"
                name="title"
                onChange={manageChange}
                value={note.title}
                />
            </label>
            <label htmlFor="description">
                <h3 className="label">Description</h3>
                <textarea
                className="input"
                id="description"
                name="description"
                onChange={manageChange}
                value={note.description}
                />
            </label>
            <label htmlFor="priority">
                <h3 className="label">Priority</h3>
                <select
                className="input"
                id="priority"
                name="priority"
                onChange={manageChange}
                value={note.priority}
                >
                    <option value="Blank"></option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </label>
            <button
            className="submit"
            type="submit"
            >Submit</button>
        </form>
    )

}

InputNotes.propTypes = {
    updateData: PropTypes.func
}

export default InputNotes