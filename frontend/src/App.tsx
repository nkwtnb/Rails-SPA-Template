import {Link} from "react-router-dom";

const App = () => {
    return (
      <div className="bg-orange-100">
        <div className="text-xl">
          <p>This is App.tsx.</p>
          <p>The image is from /public directory.</p>
        </div>
        <img src={"/sample-image.jpg"} width={300}/>
        <p className="text-3xl font-bold underline mt-4">
          <Link to={"child"} >Link to child➡️</Link>
        </p>
      </div>
    )
}

export default App