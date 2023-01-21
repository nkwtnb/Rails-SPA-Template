import {Link} from "react-router-dom";

const App = () => {
    return (
      <div className="bg-blue-100">
        <div className="text-xl">
          <p>This is Child.tsx.</p>
        </div>
        <p className="text-3xl font-bold underline mt-4">
          <Link to={"/"} >Link to Home ⬅️️</Link>
        </p>
      </div>
    )
}

export default App