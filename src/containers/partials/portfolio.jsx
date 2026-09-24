import React, { useEffect } from "react";
import AOS from "aos";
import PortfolioCard from "../../components/PortfolioCard";

const PORTFOLIOS = [
  {
    source: "/img/projects/fleetmule-app.png",
    title: "FleetMule Compliance Platform",
    description:
      "Multi-tenant safety and DOT compliance platform where Molly, an AI assistant, helps fleet teams track drivers, documents, and expirations across every carrier they manage.",
    toLink: "#",
    direction: "left",
    projectId: "fleetmule-platform",
  },
  {
    source: "/img/projects/fleetmule-web.png",
    title: "FleetMule Marketing Website",
    description:
      "Public website for FleetMule, \"Safety & DOT Compliance on Autopilot\", with an MC number lookup that starts a free compliance review.",
    toLink: "#",
    direction: "right",
    projectId: "fleetmule-website",
  },
  {
    source: "/img/projects/kyc-hospitality.png",
    title: "KYC Hospitality Hotel Operations Suite",
    description:
      "A unified suite of hotel systems covering guest messaging, requests, housekeeping, engineering, front desk operations, and more, replacing 25+ legacy tools.",
    toLink: "#",
    direction: "right",
    projectId: "kyc-hospitality",
  },
  {
    source: "/img/projects/bosso.png",
    title: "Bosso Operations Platform",
    description:
      "Multi-office operations platform for an installation business, bringing sales, commissions, scheduling, installs, inventory, and service tickets into one dashboard.",
    toLink: "#",
    direction: "left",
    projectId: "bosso",
  },
];

const Portfolio = () => {
  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }, []);

  return (
    <section id="projects" className="mt-6 mb-5 pt-5 pb-5 position-relative">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title">PROJECTS</h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle">
              SaaS platforms, product websites, and enterprise operations systems
            </p>
          </div>
        </div>

        <div className="row g-4 mt-2">
          {PORTFOLIOS.map((portfolio, index) => {
            return (
              <PortfolioCard
                key={portfolio.projectId}
                source={portfolio.source}
                title={portfolio.title}
                description={portfolio.description}
                toLink={portfolio.toLink}
                direction={portfolio.direction}
                index={index}
                projectId={portfolio.projectId}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
