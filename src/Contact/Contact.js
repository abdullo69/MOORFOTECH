import { useTranslation } from 'react-i18next';
import "./Contact.css"
function Contact() {
    const { t } = useTranslation()
    return (
        <section class="contact" id="contact">
            <div class="title reveal">
                <div class="section-title">{t("contact")}</div>
            </div>
            <div class="content">
                <div class="row">
                    <div class="card">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="info">
                            <h3>{t("address")}</h3>
                            <span>{t("shahar")}</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="info">
                            <h3>{t("tel")}</h3>
                            <span>+9989 90 000 00 00</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="info">
                            <h3>{t("email")}</h3>
                            <span>moorfotech.gmail.com</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="contact-icon">
                            <i class="fas fa-globe"></i>
                        </div>
                        <div class="info">
                            <h3>{t("website")}</h3>
                            <span>MOORFOTECH LLC.com</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="contact-form reveal">
                        <h3>{t("xabar")}</h3>
                        <div class="input-box">
                            <input type="text" placeholder={t("ism")} />
                        </div>
                        <div class="input-box">
                            <input type="text" placeholder={t("Email")} />
                        </div>
                        <div class="input-box">
                            <textarea rows="8" cols="80" placeholder={t("Xabar")}></textarea>
                        </div>
                        <div class="input-box">
                            <input type="submit" class="send-btn" value={t("yuborish")} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
