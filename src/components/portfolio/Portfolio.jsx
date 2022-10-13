import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  backendData,
  web3Data,
  frontendData,
} from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState("web3");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web3",
      title: "Web3"
    },
    {
      id: "frontend",
      title: "Front End"
    },
    {
      id: "backend",
      title: "Back End"
    },   
  ];

  useEffect(() => {
    switch (selected) {
      case 'web3':
        setData(web3Data)
        break;
      case 'frontend':
        setData(frontendData)
        break;
      case 'backend':
        setData(backendData)
        break;
      default:
        setData(web3Data)
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
