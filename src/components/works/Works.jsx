import { useState } from "react";
import "./works.scss";
import { worksData } from '../../data';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < worksData.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {worksData.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div className='buttons'>
                  <a href={d.demo} target="_blank" rel="noreferrer noopener">
                    <button className='demo'>LIVE DEMO</button>
                  </a>
                  <a href={d.github} target="_blank" rel="noreferrer noopener">
                    <button className='github'>GITHUB</button>
                  </a>
                </div>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt="site showcase"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
