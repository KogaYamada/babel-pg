import {generateHelloworld} from "./App"

test("Hello Worldを返す", ()=>{
  const actual = generateHelloworld()
  expect(actual).toBe("Hello, World!!")
})