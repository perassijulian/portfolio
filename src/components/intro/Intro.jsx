import './intro.scss';
import { ArrowBackIos } from '@material-ui/icons';

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/julian.png' alt='profile' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, I'm</h2>
          <h1>Julian Perassi</h1>
          <h3>fullstack developer</h3>
        </div>
        <a href="#portfolio">
          <ArrowBackIos className='arrow'/>
        </a>
      </div>
    </div>
  )
}
export default Intro