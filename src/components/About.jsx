import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/About.css";
import { useSiteContent } from "../data/SiteContentContext";

export default function About() {
  const { content } = useSiteContent();
  const { about } = content;
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = about?.paragraphs || [];
  const leadParagraph = paragraphs[0] || "";
  const hasExtraContent = paragraphs.length > 3;
  const detailParagraphs = useMemo(
    () =>
      hasExtraContent && !isExpanded
        ? paragraphs.slice(1, 3)
        : paragraphs.slice(1),
    [paragraphs, hasExtraContent, isExpanded],
  );
  const subtitleTags = useMemo(
    () =>
      (about?.subtitle || "")
        .split("|")
        .map((tag) => tag.trim())
        .filter(Boolean),
    [about?.subtitle],
  );

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container py-5">
        <div className="about-shell" data-aos="zoom-in">
          {subtitleTags.length > 0 && (
            <div className="about-tags" data-aos="fade-up">
              {subtitleTags.map((tag, index) => (
                <span
                  className="about-tag"
                  data-aos="zoom-in"
                  data-aos-delay={index * 80}
                  key={`about-tag-${index}`}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="about-layout">
            <article className="about-story" data-aos="fade-right">
              <p className="about-kicker">Professional Summary</p>
              <h2 className="section-title about-title">{about.title}</h2>
              <p className="about-lead">{leadParagraph}</p>

              <div className="about-details">
                {detailParagraphs.map((paragraph, index) => (
                  <p key={`about-detail-${index}`}>{paragraph}</p>
                ))}
              </div>

              {hasExtraContent && (
                <button
                  type="button"
                  className="about-more-btn"
                  onClick={() => setIsExpanded((prev) => !prev)}>
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </article>

            <aside className="about-side">
              <div className="about-achievements" data-aos="fade-left">
                {about.achievements.map((achievement, index) => (
                  <div
                    className="achievement-item"
                    data-aos="fade-left"
                    data-aos-delay={80 + index * 100}
                    key={`about-achievement-${index}`}>
                    <div className="achievement-number">
                      {achievement.value}
                    </div>
                    <div className="achievement-label">{achievement.label}</div>
                  </div>
                ))}
              </div>

              <div
                className="about-focus-card"
                data-aos="fade-left"
                data-aos-delay="180">
                <p className="about-block-label">Core Strengths</p>
                <div className="about-features">
                  {about.features.map((feature, index) => (
                    <div
                      className="feature"
                      data-aos="fade-up"
                      data-aos-delay={120 + index * 90}
                      key={`about-feature-${index}`}>
                      <div className="feature-icon">{feature.icon}</div>
                      <div>
                        <h5>{feature.title}</h5>
                        <p>{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
