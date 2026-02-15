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
        <div className="text-center mb-5">
          <h2 className="section-title" data-aos="fade-up">
            {skillsSection?.title}
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            {skillsSection?.subtitle}
          </p>
        </div>

        <div className="skills-grid">
          {(skills || []).map((skill, index) => (
            <article
              key={skill.id}
              className="skill-card"
              data-aos="zoom-in-up"
              data-aos-delay={index * 70}>
              <div className="skill-glow"></div>
              <div className="skill-top">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
