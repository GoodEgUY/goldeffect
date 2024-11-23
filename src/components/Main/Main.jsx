import "./main.css";
import { useState, useEffect } from "react";

import Marquee from "react-fast-marquee";
import "aos/dist/aos.css";
import AOS from "aos";

function Main() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      
      <div className="main">
        <div className="wrapper">
          <img src="./images/sphere2.svg" alt="" className="sphere" />
          {/*<div className="portNavigation">
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
                UiProject
                  ? "aboutPortfolioNavLink activeAbNL"
                  : "aboutPortfolioNavLink"
              }
              onClick={openUiProject}
            >
              Projects
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
          */}
          <div className="introWrapper">
            <h1>
              TURN AN <span>IDEA</span> INTO A <span>PROJECT</span>
            </h1>
            <p>
              I know how to solve it <span>turnkey</span>
            </p>
          </div>
          <div className="marquee">
            <Marquee speed={50} gradient={false}>
              <span style={{ marginRight: 100 }}>UP TO 20 PROJECTS</span>
              <span style={{ marginRight: 100 }}>LATEST TECHNOLOGIES</span>
              <span style={{ marginRight: 100 }}>FX/CRYPTO EXPIRIENCE</span>
            </Marquee>
          </div>
          <div className="contentWrapper">
            <div className="servicesWrapper">
              <div className="serviceItem">
                <img src="./images/service1.svg" alt="" className={`image ${loaded ? "loaded" : ""}`}
                onLoad={() => setLoaded(true)}/>
                <p>Layout</p> <button className="mainButton">Make Order</button>
              </div>
              <div className="serviceItem">
                <img src="./images/service2.svg" alt="" className={`image ${loaded ? "loaded" : ""}`}
                onLoad={() => setLoaded(true)} />
                <p>Server</p> <button className="mainButton">Make Order</button>
              </div>
              <div className="serviceItem">
                <img src="./images/service3.svg" alt="" className={`image ${loaded ? "loaded" : ""}`}
                onLoad={() => setLoaded(true)}/>
                <p>Full Project</p>{" "}
                <button className="mainButton">Make Order</button>
              </div>
              <div className="serviceItem">
                <img src="./images/service4.svg" alt="" className={`image ${loaded ? "loaded" : ""}`}
                onLoad={() => setLoaded(true)}/>
                <p>TG Bot</p> <button className="mainButton">Make Order</button>
              </div>
              <div className="serviceItem">
                <img src="./images/service5.svg" alt="" className={`image ${loaded ? "loaded" : ""}`}
                onLoad={() => setLoaded(true)}/>
                <p>Parcing Service</p>{" "}
                <button className="mainButton">Make Order</button>
              </div>
            </div>
            <div className="technologiesWrapper">
              <h2 className="blockName" data-aos="fade-up">
                ALL TECHNOLOGIES
              </h2>
              <div className="techItem" data-aos="fade-up">
                HTML5/CSS3/JS(ES.6)
              </div>
              <div className="techItem" data-aos="fade-up">
                React.JS
              </div>
              <div className="techItem" data-aos="fade-up">
                Gatsby.JS
              </div>
              <div className="techItem" data-aos="fade-up">
                Next.JS
              </div>
              <div className="techItem" data-aos="fade-up">
                Node.JS
              </div>
              <div className="techItem" data-aos="fade-up">
                Django
              </div>
              <div className="techItem" data-aos="fade-up">
                Python
              </div>
              <div className="techItem" data-aos="fade-up">
                PHP
              </div>
            </div>
          </div>
          {/*{startOpened ? (
            <div className="dashbord">
              <div className="dashboardStatistic">
                <div className="statisticItem">UP TO 20 PROJECTS COMPLETE</div>
                <div className="statisticItem">UP TO 20 PROJECTS COMPLETE</div>
                <div className="statisticItem"></div>
              </div>
              <a href="https://forms.gle/niy4LEhAn54ieree6">
                <div className="button">
                  <p>Замовити розробку</p>
                  <img src="./images/icon1.png" alt="" className="ico" />
                </div>
              </a>
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

              <a href="https://drive.google.com/file/d/1WmMyv6tPPNWeufI_P-uoICpJmE6YVA5Y/view?usp=drivesdk">
                <div className="button">
                  <p>CV</p>
                  <img src="./images/Icon5.png" alt="" className="ico" />
                </div>
              </a>
            </div>
          ) : null}{" "}
          {UxProject ? (
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
          ) : null}{" "}
          {UiProject ? <Projects /> : null}*/}
        </div>
      </div>
    </>
  );
}

export default Main;
