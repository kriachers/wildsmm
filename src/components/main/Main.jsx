
import React from "react";

function Main() {
    return (
      <div className="main">

    <img class="main_pics main_pics--tt" src="./pics/tt.svg" alt="" />
    <img class="main_pics main_pics--yt" src="./pics/yt.svg" alt="" />

        <div className="main__content">
          <p className="main__title">
            <span className="main-title__span main-title__span--main">
              <span>
              Short-Form videos
              </span>
            </span>
            <span className="main-title__span main-title__span--small">
              <span>
              content creator
              </span>
            </span>
          </p>
          <p className="main__descr">
            I create short-form videos <br></br> with million views
          </p>

          <div className="main-button__wrapper">
            <a href="#portfolio">
            <div className="button main__button">Portfolio</div>
            </a>
          </div>
        </div>

        <video class="main__video main__video--right" no-controls autoPlay loop playsInline muted
        src="./videos/lilkko.mp4" type="video/mp4"
        >
        </video>

        <video class="main__video main__video--left" no-controls autoPlay loop playsInline muted
        src="./videos/bags.mp4" type="video/mp4"
        >
        </video>

       

       
      </div>
    );
}

export default Main;