// create your App component here
import React, { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState(null)
  useEffect(()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(d=>setData(d.message))
  },[])
  if (!data) {
    return <div>Loading...</div>;
  }
  return <div>
    <img alt="A Random Dog" src={ data} /> 
  </div>
}
export default App