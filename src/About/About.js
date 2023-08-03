import React from 'react';
import { useTranslation } from 'react-i18next';
import team from "../img/web-team.png"
import "./About.css"

function About() {
    const { t } = useTranslation();

    return (
        <section className="about" id="about">
            <div className="title reveal">
                <div className="section-title">{t("about")}</div>
            </div>
            <div className="content">
                <div className="column col-left reveal">
                    <div className="img-card">
                        <img src={team} alt="" />
                    </div>
                </div>
                <div className="column col-right reveal">
                    <h2 className="content-title">{t("biz")}</h2>
                    <p className="paragraph-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ad perspiciatis. Sapiente doloremque asperiores doloribus facere eum eveniet molestiae aliquid tenetur beatae ex aperiam tempora eos nisi, nulla amet, harum perferendis impedit est? Iure repellat laudantium minima ducimus deleniti aliquid?</p>
                </div>
            </div>
        </section>
    );
}

export default About;
