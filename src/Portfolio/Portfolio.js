import React from 'react';
import "./Portfolio.css"
import img1 from "../img/Juice.png"
import img2 from "../img/manhattan.png"
import img3 from "../img/car-web.png"
import img4 from "../img/to be.jpg"
import { useTranslation } from 'react-i18next';
function Portfolio() {
    const { t } = useTranslation()
    return (
        <section className="work" id="portfolio">
            <div className="title reveal">
                <div className="section-title">{t("portfolio")}</div>
            </div>
            <div class="content">
                <div class="card reveal">
                    <a href="https://juice-com.vercel.app/">
                        <div class="card-img">
                            <img src={img1} alt="" />
                        </div>
                    </a>
                </div>

                <div class="card reveal">
                    <a href="https://manhattan-ten.vercel.app/">
                        <div class="card-img">
                            <img src={img2} />
                        </div>
                    </a>
                </div>



                <div class="card reveal">
                    <a href="https://car-web-eta.vercel.app/">
                        <div class="card-img">
                            <img src={img3} alt="" />
                        </div>
                    </a>
                </div>

                <div class="card reveal">
                    <div class="card-img">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
