import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./Navbar.css"
import { AiOutlineBars } from "react-icons/ai"
import { FaTimes } from "react-icons/fa"

const lang = [


    {
        id: 1,
        label: 'uz',
        title: 'UZ',
    },

    {
        id: 2,
        label: 'en',
        title: 'EN',
    },

    {
        id: 3,
        label: 'ru',
        title: 'RU',
    },

];

function Navbar() {
    const { i18n } = useTranslation();

    const changeLanguage = (e) => {
        let language = e.target.value;
        i18n.changeLanguage(language);
    };

    const { t } = useTranslation()

    const [isMobile, setIsMobile] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    };

    const closeMobileMenu = () => {
        setIsMobile(false);
    };

    return (
        <header>
            <a href="#" className="brand">
                <p>MoorfoTech LLC</p>
            </a>
            <div className={`menu-btn ${isMobile ? 'open' : ''}`} onClick={toggleMobileMenu}>
                {isMobile ? (<FaTimes className='bars' />) : (<AiOutlineBars className='bars' />)}
            </div>
            <div className={isMobile ? "nav active" : "navigation"}>
                <a href="#main" onClick={closeMobileMenu}>{t("Home")}</a>
                <a href="#about" onClick={closeMobileMenu}>{t('About')}</a>
                <a href="#skills" onClick={closeMobileMenu}>{t("Service")}</a>
                <a href="#portfolio" onClick={closeMobileMenu}>{t("Portfolio")}</a>
                <a href="#contact" onClick={closeMobileMenu}>{t("Contact")}</a>
                <a href="#footer" onClick={closeMobileMenu}>{t("Footer")}</a>
                <select onChange={changeLanguage}>
                    {lang.map((lan) => (
                        <option key={lan.id} value={lan.label}>
                            {lan.title}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    );
}

export default Navbar;
