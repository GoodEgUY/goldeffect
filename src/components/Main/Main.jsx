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
              <button
                className="button"
                onClick={(window.location.href = "https://github.com/GoodEgUY")}
              >
                <img src="./images/icon1.png" alt="" className="ico" />
              </button>
              <button
                className="button"
                onClick={(window.location.href = "https://github.com/GoodEgUY")}
              >
                <p>LinkedIN</p>
                <img src="./images/icon1.png" alt="" className="ico" />
              </button>
              <button
                className="button"
                onClick={(window.location.href = "https://github.com/GoodEgUY")}
              >
                <p>Telegram</p>
                <img src="./images/Icon5.png" alt="" className="ico" />
              </button>
              <button
                className="button"
                onClick={(window.location.href = "https://github.com/GoodEgUY")}
              >
                <p>Inst</p>
                <img src="./images/icon1.png" alt="" className="ico" />
              </button>
            </div>
          ) : (
            <div className="dashbord">
              <div className="button">
                <p>GITHUB23</p>
                <img src="./images/icon1.png" alt="" className="ico" />
              </div>
              <div className="button">
                <p>Linkedin</p>
                <img src="./images/icon1.png" alt="" className="ico" />
              </div>
              <div className="button">
                <p>TG</p>
                <img src="./images/Icon5.png" alt="" className="ico" />
              </div>
              <div className="button">
                <p>Inst</p>
                <img src="./images/icon1.png" alt="" className="ico" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
