import "./main.css";
import { useState } from "react";

function Main() {
  const [startOpened, setStartOpened] = useState(true);

  const [UxProject, setUxProject] = useState(false);
  const openStart = () => {
    setStartOpened(true);
    setUxProject(false);
  };
  const openUxProject = () => {
    setStartOpened(false);
    setUxProject(true);
  };
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <img src="./images/tplinks.png" alt="" className="ava" />
          <div className="portNavigation">
            <p
              className={
                startOpened
                  ? "aboutPortfolioNavLink activeAbNL"
                  : "aboutPortfolioNavLink"
              }
              onClick={openStart}
            >
              Develop
            </p>
            <p
              className={
                UxProject
                  ? "aboutPortfolioNavLink activeAbNL"
                  : "aboutPortfolioNavLink"
              }
              onClick={openUxProject}
            >
              Other
            </p>
          </div>
          {startOpened ? (
            <div className="dashbord">
              
              <a href="https://github.com/GoodEgUY">
                <div className="button">
                  <p>Github</p>
                  <img src="./images/icon1.png" alt="" className="ico" />
                </div>
              </a>
              
              
              <a href="https://www.linkedin.com/in/ilya-pugachev-82b28a238/">
                <div className="button">
                  <p>LinkedIn</p>
                  <img src="./images/icon1.png" alt="" className="ico" />
                </div>
              </a>
             
              
              <a href="https://www.upwork.com/freelancers/~013e4b2c90983b7ccc">
                <div className="button">
                  <p>Upwork</p>
                  <img src="./images/icon1.png" alt="" className="ico" />
                </div>
              </a>
            
              <a href="mailto:aezakmi2508@gmail.com">
                <div className="button">
                  <p>Contact Email</p>
                  <img src="./images/Icon5.png" alt="" className="ico" />
                </div>
              </a>
            </div>
            
          ) :  null} { UxProject ? (
            
            <div className="dashbord">
              <a href="https://t.me/thepugga_pr">
                <div className="button">
                  <p>Telegram</p>
                  <img src="./images/Icon5.png" alt="" className="ico" />
                </div>
              </a>
              
              <a href="https://t.me/trapbomber">
                <div className="button">
                  <p>Music Channel TG</p>
                  <img src="./images/icon1.png" alt="" className="ico" />
                </div>
              </a>
              <a href="https://twitter.com/Thepugga1">
                <div className="button">
                  <p>Twitter</p>
                  <img src="./images/Icon5.png" alt="" className="ico" />
                </div>
              </a>
              <a href="https://soundcloud.com/thepugga">
                <div className="button">
                  <p>SoundCloud</p>
                  <img src="./images/Icon5.png" alt="" className="ico" />
                </div>
              </a>
            </div>
          ) : null }
        </div>
      </div>
    </>
  );
}

export default Main;
