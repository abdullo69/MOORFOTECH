import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Footer.css"
function Footer() {
    const { t } = useTranslation()
    return (
        <footer class="footer" id='footer'>
            <span class="footer-title">MOORFOTECH LLC</span>
            <p>{t("himoya")}</p>
        </footer>
    );
}

export default Footer;
