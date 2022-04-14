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
      <div 
        className='slider'
        style={{ transform: `translateX(-${(slideSelected*100)}vw)` }}
      >
        {worksData.map(d => (
          <div className='container'>
            <div className='item'>
              <div className='left'>
                <h1>{d.title}</h1>
              </div>
              <div className='right'>
                <h1>6556465</h1>
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