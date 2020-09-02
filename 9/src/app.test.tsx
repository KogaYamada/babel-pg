import * as React from "react"
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import {generateHelloworld, App} from "./App"

test("mounted text", ()=>{
  const {getByTestId} = render(<App />)
  expect(getByTestId("text")).toHaveTextContent("Hello, World!!")
})