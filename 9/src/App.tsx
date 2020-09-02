import * as React from "react"
import Img from "./example.png"
import "./reset.css"

export const generateHelloworld = ()=>{
  return "Hello, World!!!!!!!!!!!!!!!!"
}

export const App = ()=>{
  const [isMounted, setMount] = React.useState(false)
  React.useEffect(()=>{
    setMount(true)
  },[])
  return (
    <div data-testid="text">
     {isMounted && <div>
        {generateHelloworld()}
        <img src={Img} />
      </div>}
    </div>
  )
}