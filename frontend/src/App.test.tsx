import {render, screen} from "@testing-library/react";
import App from "./App";
import {MemoryRouter} from "react-router-dom";

test("test App", () => {
  render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  )
  expect(screen.queryByText("This is App.tsx.")).toBeInTheDocument()
})
