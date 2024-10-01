import PropTypes from 'prop-types'
const DisplayNotes = ({ data }) => {
    return (
        <div className="container">
            {data.map((note) => (
                <div className="note" key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                    <p>{note.priority}</p>
                </div>
            ))}
        </div>
    )
}

DisplayNotes.propTypes = {
    data: PropTypes.array
}

export default DisplayNotes