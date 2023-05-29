
import React from "react";

const WorkData = [
    {
        title: 'Анализ идей',
        descr: 'Определяем идеи видео-контента, чтобы не только набрать миллионные просмотры, но и конвертирать их в лиды '
    },
    {
        title: 'Написание сценариев',
        descr: 'Пишем подробные текстовые сценарии с раскадровками для любого вида съемок:',
        list: ["Экспертный контент", 'Диалоговые сценки', 'Фэшн съемки']
    },
    {
        title: 'Съемки видео',
        descr: 'Снимаем видео в в оборудованной студии или в выбранной вами локации: учебный центр, магазин, салон красоты! Профессиональный свет, звук и камера помогут создать потрясающую картинку'
    },
    {
        title: 'Монтаж видео',
        descr: 'Монтаж любого уровня сложности! Мы можем создать креативные спецэффекты для видео, а можем добавить саунддизвйн и переходы, чтобы видео обрело динамику.'
    },
    {
        title: 'Высокие просмотры',
        descr: 'Смотрим, как видео-ролики набирают сотни тысяч просмотров:)'
    },

]

function Work () {
    const [active, setActive] = React.useState(0)

    return (
        <section className="work section-all">
            <div className="container">
                <div className="work__grid">
                    <div className="work-grid__menu">
                        <h2 className="work-menu__title">Процесс работы</h2>
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

                    </div>
                </div>

                <div className="work__accordion">

                <h2 className="work-menu__title">Процесс работы</h2>  

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