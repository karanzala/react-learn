import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='space-y-6 p-9'>

      <h2 className='text-7xl font-bold'>Welcome to Tailwind CSS</h2>
      <p className='text-xl'>This is a simple example of using Tailwind CSS with React.</p>
    </div>
    </>
  )
}

export default App
