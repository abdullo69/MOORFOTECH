import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./Home.css"
import biznes from "../img/biznes.png"
function Home() {
    const { t } = useTranslation()
    return (
        <section className="main" id="main">
            <div className="main_text">
                <h3>{t("hushkelibsz")}</h3>
                <h1>{t("biznes")}</h1>
                <a href="#portfolio"><button>{t("korish")}</button></a>
            </div>

            <div className="main_img">
                <img src={biznes} alt="" />
            </div>
        </section>
    );
}

export default Home;
