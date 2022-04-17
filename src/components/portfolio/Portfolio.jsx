import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import {
  backendData,
  web3Data,
  frontendData,
} from '../../data';
import './portfolio.scss';

const Portfolio = () => {
  const [selected, setSelected] = useState("backend")
  const [data, setData] = useState([])

  const list = [
    {
      id: "backend",
      title: "Back End"
    },   
    {
      id: "frontend",
      title: "Front End"
    },   
    {
      id: "web3",
      title: "Crypto"
    },   
  ]

  useEffect(() => {
    switch (selected) {
      case 'backend':
        setData(backendData)
        break;
      case 'web3':
        setData(web3Data)
        break;
      case 'frontend':
        setData(frontendData)
        break;
      default:
        setData(backendData)
        break;
    }
  }, [selected])
  
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Stacks I use</h1>
      <ul>
        {list.map(item=>
          <PortfolioList 
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
          )}
      </ul>
      <div className='wrapper'>
        {data.map(d=>{ return(
          <div key={d.id} className='item'>
            <img src={d.img} alt={d.title}></img>
            <h3>{d.title}</h3>
          </div>
        )})}
      </div>
    </div>
  )
}

export default Portfolio