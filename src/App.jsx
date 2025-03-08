import { useState } from 'react'
import { Button } from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button actiune={() => setCount(count + 1)} numeButon="butontest" />
      <p>{count}</p>
      sadfsdaffadsfsadd
    </div>
  )
}

export default App
