import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Service.css"
import team from "../img/team.jpg"
function Service() {
    const { t } = useTranslation();

    return (
        <section className="service" id="skills">
            <div className="title reveal">
                <div className="section-title">{t("xizmatlar")}</div>
            </div>
            <div className='ser'>
                <div className='service_text'>
                    <h1>{t("ish")}</h1>
                    <p>{t("xizmat1")}</p>
                    <p>{t("xizmat2")}</p>
                    <p>{t("xizmat3")}</p>
                    <p>{t("xizmat4")}</p>
                    <p>{t("xizmat5")}</p>
                    <p>{t("xizmat6")}</p>
                    <p>{t("xizmat7")}</p>
                    <p>{t("xizmat8")}</p>
                </div>
                <div className="service_img">
                    <img src={team} alt="" />
                </div>
            </div>
        </section >
    );
}

export default Service;
