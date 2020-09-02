import React, {FC, useState, useEffect} from 'react';



const App=() =>{
  const [text, setText] = useState("inital text")
  useEffect(()=>{
    setText("Mounted text")
  },[])
  return (
    <div>
      <p data-testid="text">{text}</p>
    </div>
  );
}

export default App;
