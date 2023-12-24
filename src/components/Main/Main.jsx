import "./main.css";
import { useState } from "react";
import Projects from "./Projects/Projects";

function Main() {
 
  const [startOpened, setStartOpened] = useState(true);

  const [UxProject, setUxProject] = useState(false);
  const [UiProject, setUiProject] = useState(false);
  const openStart = () => {
    setStartOpened(true);
    setUxProject(false);
    setUiProject(false);
  };
  const openUxProject = () => {
    setStartOpened(false);
    setUxProject(true);
    setUiProject(false);
  };
  const openUiProject = () => {
    setStartOpened(false);
    setUxProject(false);
    setUiProject(true)
  };

  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        console.log('Permission for receiving notifications was granted');
        // Получаем токен
        getToken(messaging, { vapidKey: 'BNITij7os0zJH7E14wKNsVp_VroN6NI0qCZHpqCAODD04PTdyzyQwIP5O19ob1t0KVvYpGt2w4E-IF7yINt1Wu8' }).then(currentToken => {
            if (currentToken) {
                console.log('Notification Token:', currentToken);
                // Отправьте этот токен на ваш сервер, если нужно
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
    } else {
        console.log('Permission for receiving notifications was denied');
    }
});
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Здесь можно кастомизировать уведомления, например, показать их в интерфейсе
});

  // ff
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
          {startOpened ? (
            <div className="dashbord">
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
          ) : null } {UiProject ? <Projects/>: null}
        </div>
      </div>
    </>
  );
}

export default Main;
