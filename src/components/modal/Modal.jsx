
import { AppContext } from '../../App';
import ReactPlayer from 'react-player'
import React from 'react';

import portfolioData from '../../DATA';
// import {portfolioData} from '../../DATA'

function Modal(props) {
    const {modalOpen, setModalOpen, portfolioIndex} = React.useContext(AppContext)

    return (
        <div className={`${modalOpen ? 'active' : ''} modal`}>
        
        <div  className="modal__wrappper"> 

        <div className="modal__container">
            
                <svg 
                onClick={() => setModalOpen(false)}
                
                className="modal__cross" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div className="modal__content">
                    <div className="modal-video__wrapper">
                        <div className="modal__video">
                            <ReactPlayer
                            className="react__player"
                            controls = {true}
                            volume={0.4}
                            height='600px'
                            width='340px'
                            // playing = {false}
                            style={{borderRadius: '10px'}}
                            playing={true}
                            light = {`${portfolioData[portfolioIndex].img}`}
                            url={`${portfolioData[portfolioIndex].video}`}>

                            </ReactPlayer>
                        </div>
                    </div>

                    <div className="modal__info">
                        <h3 className="title title-s-margin">Description</h3>
                        <p className="modal-info__goal">{`${portfolioData[portfolioIndex].goal}`}</p>

                        {
                            portfolioData[portfolioIndex].views &&
                            <div className="modal__result">
                                <h3 className="title title-s-margin">Results:</h3>
                                <h3 className=" modal-info__views">{`${portfolioData[portfolioIndex].views} views`}</h3>
                            </div>
                        }

                        <h3 className="title title-s-margin">Video production workflow</h3>
                        <ul className="modal-info__list">
                            {
                                portfolioData[portfolioIndex].stages.map((item) => {
                                    return (<li className="modal-info__item">{item}</li>)
                                })
                            }
                        </ul>

                            {
                                portfolioData[portfolioIndex].link &&  <a href={`${portfolioData[portfolioIndex].link}`} target="_blank" className="link modal-info__link">Link</a>
                            }
                    

                        {
                            portfolioData[portfolioIndex].viewPic ?
                            <img 
                            className="modal__viewPic"
                            src={portfolioData[portfolioIndex].viewPic} alt="" />
                            : 
                            ''
                        }
                    </div>
            </div>
            
        
        </div>

        <div className="modal__footer">

        </div>

        </div>
        </div>
    );
}

export default Modal;