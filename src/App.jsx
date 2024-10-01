import { useState } from 'react'
import './App.css'
import InputNotes from './components/InputNotes'
import DisplayNotes from './components/DisplayNotes'
import FilterNotes from './components/FilterNotes'

function App() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState(data)

  const updateData = (newData) => {
    setData([...data, newData])
  }

  const filterData = (filter) => {
    setFilteredData(data.filter((note) => note.priority === filter))
}


  return (
    <div className="main">
    <InputNotes updateData={updateData} />
    <DisplayNotes data={filteredData.length > 0 ? filteredData : data} />
    <FilterNotes filterData={filterData}/>
    </div>
  )
}

export default App
