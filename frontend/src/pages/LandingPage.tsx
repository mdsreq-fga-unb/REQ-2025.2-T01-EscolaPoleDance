import { useState } from 'react'

export default function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold'>Lady's Escola de Pole Dance</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="font-bold">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}