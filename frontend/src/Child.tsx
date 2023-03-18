import {Link} from "react-router-dom";
import {useState} from "react";

const Child = () => {
  const [time, setTime] = useState("")
  const current = async () => {
    return fetch("/api/time")
      .then(async resp => {
        const text = await resp.text()
        setTime(text)
      })
  }

  return (
      <div className="bg-blue-100">
        <div className="text-xl">
          <p>This is Child.tsx.</p>
        </div>
        <div>
          <button className="border border-amber-400 bg-amber-300 rounded-lg px-4 py-1 hover:bg-amber-200" onClick={current}>get current time</button>
          <p>The current time is {time}</p>
        </div>
        <p className="text-3xl font-bold underline mt-4">
          <Link to={"/"} >Link to Home ⬅️️</Link>
        </p>
      </div>
    )
}

export default Child