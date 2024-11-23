import "./main.css";
import { useState } from "react";

import Marquee from "react-fast-marquee";

import { motion } from "framer-motion";

function Main() {
  const [loaded, setLoaded] = useState(false);

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
          <div className="introWrapper wrappers">
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
          <div className="contentWrapper ">
            <div className="servicesWrapper wrappers">
              <h2 className="blockName">///SERVICES</h2>
              <motion.div
                className="serviceItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="./images/service1.svg"
                  alt=""
                  className={`image ${loaded ? "loaded" : ""}`}
                  onLoad={() => setLoaded(true)}
                />
                <p>Layout</p> <button className="mainButton">Make Order</button>
              </motion.div>
              <motion.div
                className="serviceItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="./images/service2.svg"
                  alt=""
                  className={`image ${loaded ? "loaded" : ""}`}
                  onLoad={() => setLoaded(true)}
                />
                <p>Server</p> <button className="mainButton">Make Order</button>
              </motion.div>
              <motion.div
                className="serviceItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="./images/service3.svg"
                  alt=""
                  className={`image ${loaded ? "loaded" : ""}`}
                  onLoad={() => setLoaded(true)}
                />
                <p>Full Project</p>{" "}
                <button className="mainButton">Make Order</button>
              </motion.div>
              <motion.div
                className="serviceItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="./images/service4.svg"
                  alt=""
                  className={`image ${loaded ? "loaded" : ""}`}
                  onLoad={() => setLoaded(true)}
                />
                <p>TG Bot</p> <button className="mainButton">Make Order</button>
              </motion.div>
              <motion.div
                className="serviceItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="./images/service5.svg"
                  alt=""
                  className={`image ${loaded ? "loaded" : ""}`}
                  onLoad={() => setLoaded(true)}
                />
                <p>Parcing Service</p>{" "}
                <button className="mainButton">Make Order</button>
              </motion.div>
              <motion.div
                className="serviceItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="./images/service6.svg"
                  alt=""
                  className={`image ${loaded ? "loaded" : ""}`}
                  onLoad={() => setLoaded(true)}
                />
                <p>Other..</p>
                <button className="mainButton">Make Order</button>
              </motion.div>
            </div>
            <div className="technologiesWrapper wrappers">
              <h2 className="blockName">///TECHNOLOGIES</h2>
              <motion.div
                className="techItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                HTML5/CSS3/JS(ES.6)
              </motion.div>
              <motion.div
                className="techItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                React.JS
              </motion.div>
              <motion.div
                className="techItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Gatsby.JS
              </motion.div>
              <motion.div
                className="techItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Next.JS
              </motion.div>
              <motion.div
                className="techItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Node.JS
              </motion.div>
              <motion.div
                className="techItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Django
              </motion.div>
              <motion.div
                className="techItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Python
              </motion.div>
              <motion.div
                className="techItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                PHP
              </motion.div>
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
