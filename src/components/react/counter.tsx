import { useState } from "react";
import { actions } from "astro:actions";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [response, setResponse] = useState<string | null>(null);

  const handleClick = async () => {
    const { data, error } = await actions.sayHello({
      name: `Hello from Aditya!`,
    });
    if (error) {
      console.error("Error:", error);
    }
    console.log("Response from server:", data);
    setResponse(data || null);
  };

  return (
    <div className="pt-10 flex flex-col gap-3">
      <p>Counter: {counter}</p>
      <div className="flex gap-10 ">
        <button
          onClick={() => setCounter((c) => c + 1)}
          className="px-3 py-1 border rounded-md"
        >
          Increment
        </button>
        <button
          onClick={() => setCounter((c) => c - 1)}
          className="px-3 py-1 border rounded-md"
        >
          Decrement
        </button>
      </div>

      <div>
        <button
          onClick={handleClick}
          className="mt-5 px-3 py-1 border rounded-md bg-blue-500 text-white"
        >
          Submit Counter to Server
        </button>
        {response && <p className="mt-3">Server Response: {response}</p>}
      </div>
    </div>
  );
};

export default Counter;
