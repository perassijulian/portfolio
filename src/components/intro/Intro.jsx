import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Julian Perassi</h1>
          <h3>
            Fullstack developer
          </h3>
        </div>
        <a href="#works">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
