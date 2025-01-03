import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {

  const [count,setCount] = useState(0)

  function handleClick(){
    setCount(count+1)
  }
  

  return (
    <>
    <Button goClick = {handleClick} text = "Click me">
      <h1>{count}</h1>
    </Button>
      </>
  )
}

export default App
