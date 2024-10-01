import PropTypes from 'prop-types'
const FilterNotes = ({ filterData }) => {
    return (

        <div className="container">
            <label htmlFor="priority">
                <h3 className="label">Filter by Priority</h3>
                <select
                className="input"
                id="filter"
                name="filter"
                onChange={(e)=>filterData(e.target.value)}
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
            >Filter</button>
        </div>
    )

}


FilterNotes.propTypes = {
    filterData: PropTypes.func
}
export default FilterNotes