import {Outlet} from "react-router-dom";

const MainFrame = () => {
  return (
    <div>
      Hello World！
      <p>Contents is here ⬇️😀</p>
      <Outlet />
    </div>
  )
}

export default MainFrame