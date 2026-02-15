import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSiteContent } from "../data/SiteContentContext";
import "./css/Skills.css";

export default function Skills() {
  const { content } = useSiteContent();
  const { skillsSection, skills } = content;

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="section-title" data-aos="fade-up">
            {skillsSection?.title}
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            {skillsSection?.subtitle}
          </p>
        </div>

        <div className="skills-stage" data-aos="zoom-in-up">
          <div className="skills-marquee">
            <div className="skills-track">
              {(skills || []).map((skill) => (
                <span className="skill-pill" key={`pill-a-${skill.id}`}>
                  {skill.name}
                </span>
              ))}
            </div>
            <div className="skills-track" aria-hidden="true">
              {(skills || []).map((skill) => (
                <span className="skill-pill" key={`pill-b-${skill.id}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-grid">
            {(skills || []).map((skill, index) => (
              <article
                key={skill.id}
                className="skill-card"
                data-aos="fade-up"
                data-aos-delay={index * 45}>
                <div className="skill-glow"></div>
                <div className="skill-top">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
                {skill.source && <span className="skill-source">{skill.source}</span>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
