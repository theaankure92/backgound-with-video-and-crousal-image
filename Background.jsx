import './background.css';
import dummy from '../../assets/dummy.mp4'; // This is audio, not video
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop>
        <source src={dummy} type='video/mp4' />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={img3} className='background fade-in' alt='Background for heroCount 0' />;
  } else if (heroCount === 1) {
    return <img src={img2} className='background fade-in' alt='Background for heroCount 1' />;
  } else if (heroCount === 2) {
    return <img src={img3} className='background fade-in' alt='Background for heroCount 2' />;
  }
  return null; // In case none of the conditions are met
};

export default Background;
