import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  backendData,
  web3Data,
  frontendData,
} from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
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
  ];

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
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Stacks I use</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, i) => (
          <div className="item" key={i}>
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
