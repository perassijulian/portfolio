import './works.scss';
import { ArrowBackIos } from '@material-ui/icons';
import { useState } from 'react';
import { worksData } from '../../data';

const Works = () => {
  const [slideSelected, setSlideSelected] = useState(1);

  const handleSliding = (side) => {
    if (side === 'right') {
      if (slideSelected === (worksData.length-1)) {
        setSlideSelected(0)
      } else {
        setSlideSelected(slideSelected+1)
      }
    } else {
      if (slideSelected === 0) {
        setSlideSelected(worksData.length)
      } else {
        setSlideSelected(slideSelected-1)
      }
    }
  }

  return (
    <div className='works' id='works'>
      <h1 className='works--title'>Works I have done</h1>
      <div 
        className='slider'
        style={{ transform: `translateX(-${(slideSelected*100)}vw)` }}
      >
        {worksData.map(d => (
          <div className='container'>
            <div className='item'>
              <div className='left'>
                <h1>{d.title}</h1>
                <p>{d.desc}</p>
                <div className='buttons'>
                  <button>LIVE DEMO</button>
                  <a href={d.github}>
                    <button>GITHUB</button>
                  </a>
                </div>
              </div>
              <div className='right'>
                <img src={d.img} alt='work screenshot'/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIos className='arrow left' onClick={() => handleSliding('left')}/>
      <ArrowBackIos className='arrow right' onClick={() => handleSliding('right')}/>
    </div>
  )
}

export default Works