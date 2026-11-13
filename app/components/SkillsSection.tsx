"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  "Android",
  "Kotlin",
  "Android Studio",
  "Git / Azure DevOps",
  "Jira",
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Java / Spring Boot",
  "PostgreSQL / MongoDB",
  "GenAI / RAG",
];

function SectionMarker() {
  return (
    <div className="section-marker">
      <span>[ 02 / 09 ]</span>
      <span>SKILLS</span>
    </div>
  );
}

export default function SkillsSection({ github }: { github: string }) {
  const runwayRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const runway = runwayRef.current;
    const skillsWindow = windowRef.current;
    const ribbon = ribbonRef.current;
    if (!runway || !skillsWindow || !ribbon) return;

    const updateActiveSkill = () => {
      const maxShift = Math.max(0, ribbon.scrollWidth - skillsWindow.clientWidth);
      runway.style.height = `calc(100svh + ${maxShift}px)`;
      const runwayTop = runway.getBoundingClientRect().top + window.scrollY;
      const scrollProgress = Math.min(maxShift, Math.max(0, window.scrollY - runwayTop));
      const nextIndex = maxShift === 0
        ? 0
        : Math.min(skills.length - 1, Math.round((scrollProgress / maxShift) * (skills.length - 1)));
      ribbon.style.transform = `translate3d(-${scrollProgress}px, 0, 0)`;
      setSkillIndex((current) => current === nextIndex ? current : nextIndex);
    };

    updateActiveSkill();
    window.addEventListener("scroll", updateActiveSkill, { passive: true });
    window.addEventListener("resize", updateActiveSkill);
    return () => {
      window.removeEventListener("scroll", updateActiveSkill);
      window.removeEventListener("resize", updateActiveSkill);
    };
  }, []);

  return (
    <section className="content-section skills" id="skills">
      <SectionMarker />
      <div className="skills-runway" ref={runwayRef}>
        <div className="skills-sticky">
          <div className="skill-mesh-art" aria-hidden="true" />
          <div className="skills-intro-row">
            <h2>Technical toolkit.</h2>
            <div className="skills-description">
              <p>
                Professional experience in Android engineering, with independent
                full-stack projects across React, Node.js, Java, Spring Boot, and
                databases. Exploring practical GenAI and RAG applications.
              </p>
              {/* <a className="outline-link" href={github}>
                <span>VIEW GITHUB</span>
                <span className="link-arrow" aria-hidden="true">↗</span>
              </a> */}
            </div>
          </div>
          <div className="skills-window" ref={windowRef} aria-label="Technical skills">
            <div
              className="skills-ribbon"
              ref={ribbonRef}
            >
              {skills.map((skill) => (
                <span
                  className="skill-token"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <p className="skill-counter">
            [{String(skillIndex + 1).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}] · SCROLL TO EXPLORE
          </p>
        </div>
      </div>
    </section>
  );
}
