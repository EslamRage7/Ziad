import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/About.css";
import { useSiteContent } from "../data/SiteContentContext";

export default function About() {
  const { content } = useSiteContent();
  const { about } = content;

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container py-5">
        <div className="about-hero" data-aos="zoom-in">
          <div className="row align-items-center gy-4">
            <div className="col-lg-4" data-aos="fade-right">
              <div className="about-badge-card">
                <p className="badge-label">Tax & Audit</p>
                <h3>{about.subtitle}</h3>
                <p>{about.badgeText}</p>
              </div>
            </div>

            <div className="col-lg-8" data-aos="fade-left">
              <div className="about-info">
                <h2 className="section-title about-title">{about.title}</h2>

                {about.paragraphs.map((paragraph, index) => (
                  <p className="about-text" key={`about-p-${index}`}>
                    {paragraph}
                  </p>
                ))}

                <div className="about-features">
                  {about.features.map((feature, index) => (
                    <div
                      className="feature"
                      data-aos="fade-up"
                      data-aos-delay={80 + index * 80}
                      key={`about-feature-${index}`}>
                      <div className="feature-icon">{feature.icon}</div>
                      <div>
                        <h5>{feature.title}</h5>
                        <p>{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="about-achievements" data-aos="fade-up" data-aos-delay="300">
                  {about.achievements.map((achievement, index) => (
                    <div className="achievement-item" key={`about-achievement-${index}`}>
                      <div className="achievement-number">{achievement.value}</div>
                      <div className="achievement-label">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
