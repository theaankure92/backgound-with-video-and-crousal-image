import './Hero.css'
import arrow from '../../assets/arrow.png'
import play from '../../assets/play.png'

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, PlayStatus }) => {
  return (
    <div className='hero'>
      <div className="hero-text">

        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className='hero-explore'>
        {/* <p>explore featue</p> */}
        {/* <img src={arrow} alt=''></img> */}
      </div>
      <div className="hero-dot-play">
        <ul className='hero-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount===0? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount===1? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount===2? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className='hero-play'>
          <img onClick={()=>setPlayStatus(!PlayStatus)} src={PlayStatus?pause:play} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Hero
