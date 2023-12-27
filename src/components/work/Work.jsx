
import React from "react";

const WorkData = [
    {
        title: 'Idea Generation',
        descr: "I research the latest trends, popular topics, and audience interests and conduct the deep audience analysis in order to create the viral videos which will grab all the attention. "
    },
    {
        title: 'Script Writing',
        descr: "Once the idea is chosen, I create a script outlining the video's structure, key points, dialogues, and any necessary call-to-action.",
        list: ["Экспертный контент", 'Диалоговые сценки', 'Фэшн съемки']
    },
    {
        title: 'Video Shooting',
        descr: "The next stage is shooting video on a mobile phone. I can shoot video in various locations: lively streets, a  photo studio, or buzzing shopping centers and stores."
    },
    {
        title: 'Video Editing',
        media: './videos/editing.mp4',
        descr: `After filming, I edit the raw footage. This includes tasks such as selecting the best shots, adding visual effects or graphics, incorporating music or sound effects, and ensuring a smooth flow and coherence in the final product.`
    },
    {
        title: 'Publishing',
        descr: " Once the video is ready, I publish it on relevant platforms like YouTube, TikTok, Instagram, etc. I also promote the video through social media, collaborations, or other marketing strategies to reach a wider audience."
    },

]

function Work () {
    const [active, setActive] = React.useState(3)

    return (
        <section className="work section-all">
            <div className="container">
                <div className="work__grid">
                    <div className="work-grid__menu">
                        <h2 className="work-menu__title">Video Production Workflow</h2>
                        <ul className="work-grid__list">
                            {
                                WorkData.map((item, index) => {
                                    return(
                                        <li 
                                        onClick={() => setActive(index)}
                                        className=
                                            {`work-list__item
                                            ${active === index ? 'active' : ''} `}>
                                            {item.title}
                                            
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <div className="work-grid__info">
                        
                            <p className="work-info__descr">{WorkData[active].descr}</p>

                            {
                                WorkData[active].media ? 
                                    <div className="work-accordion-item__media">
                                         <video autoPlay muted loop playsInline className="work-accordion-media__video">
                                                <source src={WorkData[active].media} type="video/mp4" />
                                                  Your browser does not support the video tag.
                                          </video>
                                      </div>
                                      : 
                                      ''
                             }

                    </div>
                </div>

                <div className="work__accordion">

                <h2 className="work-menu__title">Video Production Workflow</h2>  

                <ul className="work-accordion__list">
                            {
                                WorkData.map((item, index) => {
                                    return(
                                        <li 
                                        onClick={() => setActive(index)}
                                        className=
                                        {`work-accordion__item
                                        ${active === index ? 'active' : ''} `}>

                                                <h3 className="work-accordion-item__title">
                                                {item.title}
                                                </h3>

                                                <div className="work-accordion-item__descr">
                                                {item.descr}

                                                {
                                                    item.media ? 
                                                    <div className="work-accordion-item__media">
                                                              <video autoPlay muted loop playsInline className="work-accordion-media__video">
                                                                <source src={item.media} type="video/mp4" />
                                                                Your browser does not support the video tag.
                                                            </video>
                                                    </div>
                                                    : 
                                                    ''
                                                }
                                                </div>

                                                

                                        </li>
                                    )
                                })
                            }
                        </ul>
                </div>
            </div>
        </section>
    );
}

export default Work ;