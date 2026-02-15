import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/Footer.css";
import { useSiteContent } from "../data/SiteContentContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { content } = useSiteContent();
  const { footer } = content;

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container py-4">
          <div className="row g-4 footer-grid">
            <div className="col-lg-4 col-md-4" data-aos="fade-up">
              <div className="footer-col">
                <h5 className="footer-title">{footer.title}</h5>
                <p className="footer-text">{footer.text}</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4"
              data-aos="fade-up"
              data-aos-delay="80">
              <div className="footer-col">
                <h5 className="footer-title">{footer.linksTitle}</h5>
                <ul className="footer-links">
                  {footer.links.map((link, index) => (
                    <li key={`footer-link-${index}`}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4"
              data-aos="fade-up"
              data-aos-delay="160">
              <div className="footer-col">
                <h5 className="footer-title">{footer.servicesTitle}</h5>
                <ul className="footer-links">
                  {footer.services.map((service, index) => (
                    <li key={`footer-service-${index}`}>
                      <a href={service.href}>{service.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <hr className="footer-divider" />
        </div>
      </div>
    </footer>
  );
}
