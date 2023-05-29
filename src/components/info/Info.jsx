function Info() {
    return (
        <div className="info">
            <video class="info__bg" no-controls autoPlay loop playsInline muted
            src="./videos/main.mp4" type="video/mp4"
            >
            </video>
            <div className="info__overbg"></div>
            <div className="info__grid">
                <h2 className="info__title">
                   Алгоритмы социальных сетей будут работать на вас!
                </h2>
                {/* <div className="info__descr">
                    <p className="info-descr__text">
                        Вертикальные видео позволяют получить органические охваты. 
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default Info;