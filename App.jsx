import { useEffect, useState } from "react"
import Background from "./component/background/background"
import Navbar from "./component/navbar/navbar"
import Hero from "./component/hero/hero"

const App = () => {
  const heroData = [
    {"text1":"lorem",text2:"ipsum"},
    {"text1":"data",text2:"need"},
    {"text1":"to ",text2:"change"}
  ]
  const [heroCount,setheroCount] = useState(1)
  const [playStatus,setplayStatus] = useState(false)

// useEffect(() =>{
//   setInterval(()=>{
// setheroCount(()=>{
//   return count===2?0:count+1
// })
//   },3000)
// },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
      setPlayStatus={setplayStatus}
      heroData = {heroData}
      heroCount ={heroCount}
      setHeroCount ={setheroCount}
      playStatus = {playStatus}
      />
    </div>
  )
}

export default App
