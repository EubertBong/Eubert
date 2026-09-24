import React, { useState, useEffect } from "react";
import AOS from "aos";
import PortfolioCard from "../components/PortfolioCard";

const PORTFOLIOS = [
  {
    source: "/img/projects/fleetmule-app.png",
    title: "FleetMule Compliance Platform",
    description:
      "Multi-tenant safety and DOT compliance platform where Molly, an AI assistant, helps fleet teams track drivers, documents, and expirations across every carrier they manage.",
    toLink: "#",
    direction: "left",
    category: "SaaS Platform",
    technologies: ["Multi-Tenant SaaS", "AI Assistant", "Compliance Workflows", "Admin Portals", "Performance"],
    year: "2023 - Present",
    projectId: "fleetmule-platform",
  },
  {
    source: "/img/projects/fleetmule-web.png",
    title: "FleetMule Marketing Website",
    description:
      "Public website for FleetMule, \"Safety & DOT Compliance on Autopilot\", with an MC number lookup that starts a free compliance review.",
    toLink: "#",
    direction: "right",
    category: "Marketing Website",
    technologies: ["Landing Page", "Lead Capture", "Responsive Design", "Dark Mode"],
    year: "2023 - Present",
    projectId: "fleetmule-website",
  },
  {
    source: "/img/projects/kyc-hospitality.png",
    title: "KYC Hospitality Hotel Operations Suite",
    description:
      "A unified suite of hotel systems covering guest messaging, requests, housekeeping, engineering, front desk operations, and more, replacing 25+ legacy tools.",
    toLink: "#",
    direction: "right",
    category: "Enterprise Web App",
    technologies: ["Hospitality", "Guest Messaging", "Operations", "Payments", "Integrations"],
    year: "2021 - 2023",
    projectId: "kyc-hospitality",
  },
  {
    source: "/img/projects/bosso.png",
    title: "Bosso Operations Platform",
    description:
      "Multi-office operations platform for an installation business, bringing sales, commissions, scheduling, installs, inventory, and service tickets into one dashboard.",
    toLink: "#",
    direction: "left",
    category: "Operations Platform",
    technologies: ["Dashboards", "Scheduling", "Inventory", "Multi-Office", "Reporting"],
    projectId: "bosso",
  },
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }, []);

  const categories = ["All", ...new Set(PORTFOLIOS.map((p) => p.category))];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(PORTFOLIOS);
    } else {
      setFilteredProjects(PORTFOLIOS.filter((p) => p.category === selectedCategory));
    }
    if (typeof AOS !== "undefined") {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [selectedCategory]);

  return (
    <section className="projects-page-section py-5 position-relative">
      <div className="container position-relative" style={{ zIndex: 2, overflow: "hidden" }}>
        <div className="row text-center mb-5" data-aos="fade-down">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title">MY PROJECTS</h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle">
              SaaS platforms, product websites, and enterprise operations systems
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-12 mb-4 mb-md-0">
            <div className="projects-filter-wrapper projects-filter-sidebar d-flex flex-column gap-3">
              <h5 className="filter-sidebar-title mb-3">Filter by Category</h5>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`project-filter-btn ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-9 col-12">
            <div className="projects-list-wrapper">
              {filteredProjects.map((portfolio, index) => (
                <PortfolioCard
                  key={portfolio.projectId}
                  source={portfolio.source}
                  title={portfolio.title}
                  description={portfolio.description}
                  toLink={portfolio.toLink}
                  direction={portfolio.direction}
                  index={index}
                  horizontal={true}
                  projectId={portfolio.projectId}
                />
              ))}
            </div>
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center mt-5" data-aos="fade-up">
            <p className="text-white-50 fs-5">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
