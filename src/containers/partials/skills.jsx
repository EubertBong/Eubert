import React, { useEffect } from "react";
import AOS from "aos";
import SkillCard from "../../components/SkillCard";

const Skills = () => {
  // Ensure AOS is initialized and refreshed when Skills component mounts
  useEffect(() => {
    if (typeof AOS !== 'undefined' && AOS && typeof AOS.refresh === 'function') {
      // Don't re-initialize if already initialized (Banner component handles initialization)
      // Just refresh to detect new skill card elements
      setTimeout(() => {
        AOS.refresh();
      }, 300);
    }
  }, []);
  const SKILLS = [
    {
      source: "/img/icons/areas/code.svg",
      title: "Front-End Development",
      description:
        "Responsive, accessible interfaces built from reusable components, turning UI/UX designs into clean, functional products.",
      backColor: "#B4D8E72e",
      shadowColor: "#B4D8E7",
      direction: 'top-left'
    },
    {
      source: "/img/icons/areas/server.svg",
      title: "Back-End & APIs",
      description:
        "Secure, well-structured APIs and services, background workers, authentication, and payment and third-party integrations.",
      backColor: "#D0B7E62e",
      shadowColor: "#D0B7E6",
      direction: 'top'
    },
    {
      source: "/img/icons/areas/database.svg",
      title: "Data & Performance",
      description:
        "Data modeling, indexing, query tuning, and caching that keep applications fast under high concurrent traffic.",
      backColor: "#FAD4B12e",
      shadowColor: "#FAD4B1",
      direction: 'top-right'
    },
    {
      source: "/img/icons/areas/shield.svg",
      title: "Testing & Quality",
      description:
        "Automated unit, integration, and end-to-end testing, plus thorough code reviews that keep regressions out of production.",
      backColor: "#F2E6B12e",
      shadowColor: "#F2E6B1",
      direction: 'bottom-left'
    },
    {
      source: "/img/icons/areas/cloud.svg",
      title: "Delivery & Operations",
      description:
        "Git-based workflows, CI/CD pipelines, tested rollback paths, structured logging, and alerting for stable production systems.",
      backColor: "#E3B7D22e",
      shadowColor: "#E3B7D2",
      direction: 'bottom'
    },
    {
      source: "/img/icons/areas/layers.svg",
      title: "Architecture & Collaboration",
      description:
        "Multi-tenant SaaS and scalable architecture, clear documentation, mentoring, and Agile teamwork across time zones.",
      backColor: "#CBE6D72e",
      shadowColor: "#CBE6D7",
      direction: 'bottom-right'
    },
  ];

  return (
    <div className="section py-5 position-relative skills-section" style={{ zIndex: 10, overflow: 'visible' }}>
      {/* Blurred edge at top */}
      <div className="skills-top-blur"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title">MY SKILLS</h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle">
              Front-end, back-end, data, quality, delivery, and architecture
            </p>
          </div>
        </div>
        <div className="row align-items-stretch mb-5 g-3 g-md-4">
          {SKILLS.map((skill, index) => {
            return (
              <SkillCard
                key={index}
                source={skill.source}
                title={skill.title}
                description={skill.description}
                backColor={skill.backColor}
                shadowColor={skill.shadowColor}
                direction={skill.direction}
              />
            );
          })}
        </div>

        <div className="row gutter-50 mb-5 align-items-stretch"></div>
      </div>

      <div className="clear"></div>
    </div>
  );
};

export default Skills;
