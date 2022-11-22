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
              <a href="https://github.com/GoodEgUY">
                <div className="button">
                  <p>Telegram</p>
                  <img src="./images/Icon5.png" alt="" className="ico" />
                </div>
              </a>
              <a href="https://github.com/GoodEgUY">
                <div className="button">
                  <p>Instagram</p>
                  <img src="./images/Icon5.png" alt="" className="ico" />
                </div>
              </a>
            </div>
          ) : (
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
              <a href="https://github.com/GoodEgUY">
                <div className="button">
                  <p>Telegram</p>
                  <img src="./images/Icon5.png" alt="" className="ico" />
                </div>
              </a>
              <a href="https://github.com/GoodEgUY">
                <div className="button">
                  <p>Instagram</p>
                  <img src="./images/Icon5.png" alt="" className="ico" />
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
