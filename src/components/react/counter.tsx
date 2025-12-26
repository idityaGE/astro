import { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="pt-10 flex flex-col gap-3">
      <p>Counter: {counter}</p>
      <div className="flex gap-10 ">
        <button onClick={() => setCounter((c) => c + 1)} className="px-3 py-1 border rounded-md">Increment</button>
        <button onClick={() => setCounter((c) => c - 1)} className="px-3 py-1 border rounded-md">Decrement</button>
      </div>
    </div >
  )
}

export default Counter