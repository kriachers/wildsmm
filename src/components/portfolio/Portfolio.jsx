import Modal from "../modal/Modal";
import { AppContext } from '../../App';
import React from 'react';
import MyLoader from '../MyLoader'

import portfolioData from '../../DATA';

function Portfolio() {

    const {portfolioIndex, setPortfolioIndex} = React.useContext(AppContext)
    const {modalOpen, setModalOpen} = React.useContext(AppContext)
    const [portfolioItemsCount, setPortfolioItemsCount] = React.useState(6)

    function clickPotfolio (index) {
        setPortfolioIndex(index)
        setModalOpen(true)
        console.log(portfolioItemsCount)
        console.log(portfolioData.length)
        
    }

    return (
        <section className="section-all">
        <div id="portfolio" className="portfolio container ">

            <div className="portfolio__grid">

            {
                portfolioData.slice(0, portfolioItemsCount).map((item, index) => {
                    return (
                        <div 
                        onClick={() => clickPotfolio(index)}
                        className={`portfolio__item portfolio__item--${index}`}>
                            <img className="portfolio-item__img" src={`${item.img}`} alt="" />
                            <p className="portfolio-item__views">{`${item.views}`}</p>

                            <img src="play.svg" alt="" className="portfolio-item__play" />
   
                        </div>
                    )
                })
            }
            </div>


            {
                portfolioData.length - portfolioItemsCount > 0 &&
                
                <div className="button-wrapper">
                    <div 
                    className="button-block-outline"
                    onClick={() => setPortfolioItemsCount(portfolioItemsCount + 6)}>
                        Загрузить еще
                    </div>
                </div>
                
            }

        </div>


        {
            modalOpen ? 
            <Modal/>
            : ''
        }
        {/* <Modal/> */}
        </section>
    );
}

export default Portfolio;