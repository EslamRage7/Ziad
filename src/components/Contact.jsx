import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import "./css/Contact.css";
import { useSiteContent } from "../data/SiteContentContext";

export default function Contact() {
  const { content } = useSiteContent();
  const { contact } = content;

  const iconById = {
    linkedin: <FaLinkedin />,
    whatsapp: <FaWhatsapp />,
    facebook: <FaFacebook />,
  };

  return (
    <section id="contact" className="contact">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title about-title">{contact.title}</h2>
          <p className="section-subtitle about-subtitle">{contact.subtitle}</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h5>{contact.phoneLabel}</h5>
                  <p>{contact.phone}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h5>{contact.emailLabel}</h5>
                  <p>{contact.email}</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h5>{contact.addressLabel}</h5>
                  <p>{contact.address}</p>
                </div>
              </div>

              <div className="social-links">
                <h5 className="mb-3">{contact.socialTitle}</h5>
                <div className="social-icons">
                  {contact.social.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      className={`social-icon social-${item.id}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}>
                      {iconById[item.id] || item.label.slice(0, 1)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-message-card">
              <h3>{contact.cardTitle}</h3>
              <p>{contact.cardText}</p>
              <a className="btn btn-primary btn-lg" href={`mailto:${contact.email}`}>
                {contact.cardCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
