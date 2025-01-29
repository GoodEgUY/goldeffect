import "./main.css";
import { useState, useEffect, useRef } from "react";

import Marquee from "react-fast-marquee";
import Select from "react-select";
import { motion } from "framer-motion";

function Main() {
  const [loaded, setLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Управление модальным окном
  const [selectedOption, setSelectedOption] = useState(null); // Управление выбранной опцией
  const [tgName, setTgName] = useState(""); // Имя в Telegram
  const [comment, setComment] = useState(""); // Комментарий
  const modalRef = useRef(null);
  const options = [
    { value: "Layout", label: "Layout" },
    { value: "Server", label: "Server" },
    { value: "Full Project", label: "Full Project" },
    { value: "TG Bot", label: "TG Bot" },
    { value: "Parcing Service", label: "Parcing Service" },
    { value: "Other", label: "Other.." },
  ];
  // Открытие модального окна с передачей выбранной опции
  const openModal = (option) => {
    setSelectedOption(option);
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setTgName(""); // Очистка полей
    setComment("");
  };

  // Обработка отправки данных
  const handleSubmit = () => {
    console.log({
      selectedOption,
      tgName,
      comment,
    });
    closeModal(); // Закрыть модальное окно после отправки
  };
  const customStyles = {
    option: (base, state) => ({
      ...base,
      color: "#1a1a1a",
      padding: "10px 15px", // Внутренние отступы
      cursor: "pointer", // Курсор указателя
    }),
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Проверяем, что клик был вне модального окна
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Добавляем обработчик события
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Убираем обработчик при размонтировании
    };
  }, []);
  return (
    <>
      {isModalOpen && (
        <div className="modalWrapper">
          <div className="modalBody">
            <div className="modalHeader">
              <h2>TEXT TO US</h2>
            </div>
            <div className="form">
              <div className="inputWrapper">
                <label>Selected Service:</label>
                <Select
                  styles={customStyles}
                  options={options}
                  value={selectedOption}
                  onChange={(option) => setSelectedOption(option)}
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>
              <div className="inputWrapper">
                <label>Telegram Name:</label>
                <input
                  type="text"
                  placeholder="@yourname"
                  className="formInput"
                  value={tgName}
                  onChange={(e) => setTgName(e.target.value)}
                />
              </div>
              <div className="inputWrapper">
                <label>Comment:</label>
                <textarea
                  placeholder="Write your comment here..."
                  value={comment}
                  className="formTextarea"
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="modalActions">
                <button onClick={handleSubmit} className="primaryButton">
                  Submit
                </button>
                <button onClick={closeModal} className="mainButton">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="main">
        <div className="wrapper">
          <img src="./images/sphere2.svg" alt="" className="sphere" />
          <img src="./images/sphere2.svg" alt="" className="sphere2" />
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
              <span style={{ marginRight: 100 }}>FX/CRYPTO EXPERIENCE</span>
              <span style={{ marginRight: 100 }}>API INTEGRATIONS</span>
            </Marquee>
          </div>
          <div className="contentWrapper ">
            <div className="servicesWrapper wrappers">
              <h2 className="blockName">/\SERVICES</h2>
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
                <p>Layout</p>{" "}
                <button
                  className="mainButton"
                  onClick={() => openModal(options[0])}
                >
                  Make Order
                </button>
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
                <p>Server</p>{" "}
                <button
                  className="mainButton"
                  onClick={() => openModal(options[1])}
                >
                  Make Order
                </button>
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
                <button
                  className="mainButton"
                  onClick={() => openModal(options[2])}
                >
                  Make Order
                </button>
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
                <p>TG Bot</p>{" "}
                <button
                  className="mainButton"
                  onClick={() => openModal(options[3])}
                >
                  Make Order
                </button>
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
                <button
                  className="mainButton"
                  onClick={() => openModal(options[4])}
                >
                  Make Order
                </button>
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
                <button
                  className="mainButton"
                  onClick={() => openModal(options[5])}
                >
                  Make Order
                </button>
              </motion.div>
            </div>
            <div className="technologiesWrapper wrappers">
              <h2 className="blockName">/<span>\</span>TECHNOLOGIES</h2>
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

            <div className="casesWrapper wrappers">
            <img src="./images/robot.svg" alt="" className="sphere2" />
            <img src="./images/robot.svg" alt="" className="sphere" />
              <h2 className="blockName">/<span>\</span>SOME CASES</h2>
              <motion.div
                className="caseItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/monobank.png" alt="" />
                <h3>Monobank Payment Bot</h3>
                <p>A bot that checks payments from 10+ cards</p>
              </motion.div>
              <motion.div
                className="caseItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/clickflare.png" alt="" />
                <h3>ClickFlare Creator</h3>
                <p>This creates magic using API 3 services</p>
              </motion.div>
              <motion.div
                className="caseItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/quiz.png" alt="" />
                <h3>Dynamic Quiz Generator</h3>
                <p>
                  This creates a quiz based on parameters and can be embedded on
                  a website
                </p>
              </motion.div>
              <motion.div
                className="caseItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/cloudflare.png" alt="" />
                <h3>Cloudflare Panel</h3>
                <p>
                  This panel will protect your domain and link it to the server
                </p>
              </motion.div>
              <motion.div
                className="caseItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/tools.png" alt="" />
                <h3>Integration Tools</h3>
                <p>
                This is a solution that allows you to set validation for all forms on the site with one line of code
                </p>
                <ul>
                  <li><p>Any site depth (parameters are saved in storage)</p></li>
                  <li><p>Multi-language validation</p></li>
                  <li><p>Number verification via API</p></li>
                  <li><p>Integration into CRM</p></li>
                  </ul>
              </motion.div>
            </div>
            <div className="projectsWrapper wrappers">
              <h2 className="blockName">/<span>\</span>SOME PROJECTS</h2>
              <img src="./images/ira.svg" alt="" className="sphere2" />
              <img src="./images/ira.svg" alt="" className="sphere" />
              <motion.div
                className="projectItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/pods.png" alt="" />
                <div className="projectInfo">
                  <h3>Lunares</h3>
                  <a href="https://lunares.com.ua" className="mainButton">
                    Visit
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="projectItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/pods.png" alt="" />
                <div className="projectInfo">
                  <h3>PODS</h3>
                  <a href="https://pods.com.ua" className="mainButton">
                    Visit
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="projectItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/vipkalyan.png" alt="" />
                <div className="projectInfo">
                  <h3>VipKalyan</h3>
                  <a href="https://vipkalyan.com" className="mainButton">
                    Visit
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="projectItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/palermo.png" alt="" />
                <div className="projectInfo">
                  <h3>Palermo Kids</h3>
                  <a
                    href="https://keitering-palermo7.com.ua"
                    className="mainButton"
                  >
                    Visit
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="projectItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/orthoimplants.png" alt="" />
                <div className="projectInfo">
                  <h3>OrthoImplants</h3>
                  <a
                    href="https://www.ortodocs.com.ua/implant/"
                    className="mainButton"
                  >
                    Visit
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="projectItem"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img src="./images/interDent.png" alt="" />
                <div className="projectInfo">
                  <h3>InterDent</h3>
                  <a
                    href="https://medquiz.click/interdentimplant/"
                    className="mainButton"
                  >
                    Visit
                  </a>
                </div>
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
