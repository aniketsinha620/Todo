import { useLayoutEffect, useState } from 'react'
import './App.css'



function App() {
  const [input, setInput] = useState("")
  const [arr, setArr] = useState([])
  const [ans, setAns] = useState(false)



  const handleChange = (event) => {
    setInput(event.target.value)
    // console.log(input)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setAns(true)
    console.log(input)
    setArr([...arr, input])
    setInput("")
  }
  const handleClick = (index) => {
    let newArr =
      arr.filter((ele, i) => {
        return i !== index
      })
    setArr(newArr)
  }

  const display = arr.map((ele, i) => {
    return <li>{ele}
      <button onClick={() => handleClick(i)}>X</button>
    </li>
  })

  return (
    <div className="form">
      <h1>Get Things Done!</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text"
          value={input}
          onChange={handleChange} />
        <button className='btn'>ADD That</button>
      </form>
      {ans && <ul>{display}</ul>}
    </div>
  )
}

export default App
