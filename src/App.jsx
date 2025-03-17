import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Exam from './component/Exam8/Exam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Exam />
    </>
  )
}

export default App
