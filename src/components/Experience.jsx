import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSiteContent } from "../data/SiteContentContext";
import "./css/Experience.css";

export default function Experience() {
  const { content } = useSiteContent();
  const { experienceSection, experiences } = content;

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title" data-aos="fade-up">
            {experienceSection?.title}
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            {experienceSection?.subtitle}
          </p>
        </div>

        <div className="experience-timeline">
          {(experiences || []).map((item, index) => (
            <article
              key={item.id}
              className="experience-card"
              data-aos="fade-up"
              data-aos-delay={index * 90}>
              <div className="experience-step">{String(index + 1).padStart(2, "0")}</div>
              <div className="experience-head">
                <h3>{item.role}</h3>
                <span className="experience-type">{item.employmentType}</span>
              </div>
              <p className="experience-company">{item.company}</p>
              <p className="experience-meta">
                {item.period} {item.location ? `| ${item.location}` : ""}
              </p>

              <ul className="experience-points">
                {(item.points || []).map((point, pointIndex) => (
                  <li key={`exp-${item.id}-point-${pointIndex}`}>{point}</li>
                ))}
              </ul>

              {item.skillsNote && <p className="experience-skills">{item.skillsNote}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
