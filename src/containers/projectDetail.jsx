import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AOS from "aos";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, [id]);

  const PROJECTS_DATA = {
    "fleetmule-platform": {
      id: "fleetmule-platform",
      source: "/img/projects/fleetmule-app.png",
      title: "FleetMule Compliance Platform",
      description:
        "Multi-tenant safety and DOT compliance platform with an AI assistant for fleet teams.",
      category: "SaaS Platform",
      technologies: ["Multi-Tenant SaaS", "AI Assistant", "Compliance Workflows", "Admin Portals", "Performance"],
      year: "2023 - Present",
      longDescription:
        "FleetMule automates safety and DOT compliance for transportation companies. I architected its multi-tenant platform and led delivery of the web app, where fleet teams manage multiple carriers from one workspace. Molly, the built-in AI assistant, answers questions like which documents a driver is missing, and a Needs Attention feed flags medical certificates and CDLs before they expire. I built the reusable component library behind the app, which made UI development 30% faster. I also cut response latency by 40% through data modeling and query optimization, and cut deployment time by 60% with automated testing.",
      features: [
        "AI assistant (Molly) that answers compliance questions per carrier",
        "Needs Attention feed for expiring medical certificates and CDLs",
        "Multi-carrier workspace with isolated tenant data",
        "Notifications, inbox, and task management",
        "MuleSign for in-app document signing",
        "40% lower latency and 60% faster deployments",
      ],
      liveUrl: "https://app.fleetmule.com/",
    },
    "fleetmule-website": {
      id: "fleetmule-website",
      source: "/img/projects/fleetmule-web.png",
      title: "FleetMule Marketing Website",
      description:
        "Public product website with an MC number lookup for free compliance reviews.",
      category: "Marketing Website",
      technologies: ["Landing Page", "Lead Capture", "Responsive Design", "Dark Mode"],
      year: "2023 - Present",
      longDescription:
        "The public face of FleetMule, built to turn fleet operators into demo bookings. The hero invites visitors to enter their MC number for a free, 20-minute compliance review. The rest of the site covers FleetMule's workflows, AI team, tools, integrations, and pricing. Working from the design team's Figma files, I turned the designs into a fast, responsive site with light and dark themes.",
      features: [
        "MC number lookup that starts a free compliance review",
        "Book-a-demo calls to action throughout the site",
        "Sections for workflows, AI team, tools, integrations, and pricing",
        "Light and dark theme toggle",
        "Responsive layout from desktop to mobile",
        "Direct entry point into the app login",
      ],
      liveUrl: "https://fleetmule.com/",
    },
    "kyc-hospitality": {
      id: "kyc-hospitality",
      source: "/img/projects/kyc-hospitality.png",
      title: "KYC Hospitality Hotel Operations Suite",
      description:
        "Unified hotel operations suite that replaces 25+ legacy systems.",
      category: "Enterprise Web App",
      technologies: ["Hospitality", "Guest Messaging", "Operations", "Payments", "Integrations"],
      year: "2021 - 2023",
      longDescription:
        "KYC Hospitality brings hotel operations into one system of record, replacing 25+ legacy tools. I revamped its enterprise applications and client-facing portals, and migrated monolithic applications to a scalable service architecture with APIs and background workers, which improved maintainability by 40%. I also connected payment gateways and external APIs behind token-based authentication, tuned rendering and queries for faster load times, and mentored the team on secure development practices.",
      features: [
        "Multi-channel guest messaging and hotel team messaging",
        "Guest request tracking and fulfilment",
        "Housekeeping, engineering, and front desk operations",
        "Concierge, security, and F&B modules",
        "Lost & found and package management",
        "Payment gateway and external API integrations",
      ],
      liveUrl: "https://www.kychospitality.com/",
    },
    "bosso": {
      id: "bosso",
      source: "/img/projects/bosso.png",
      title: "Bosso Operations Platform",
      description:
        "Multi-office platform for sales, scheduling, installs, inventory, and service tickets.",
      category: "Operations Platform",
      technologies: ["Dashboards", "Scheduling", "Inventory", "Multi-Office", "Reporting"],
      longDescription:
        "Bosso is an operations platform for a multi-office installation business. Its dashboard shows new sales, install-ready jobs, scheduled work, and open service tickets at a glance, along with installation quality-control pass rates and footage status for every office. Beyond the dashboard, it runs the rest of the business: users and members, sales leaderboards and commission tracking, the sales pipeline, calendars and scheduling, installs, inventory and warehouse, service tickets, reports, org charts, organizations, and franchises.",
      features: [
        "Weekly KPI cards for sales, installs, schedules, and tickets",
        "Quality-control pass-rate tracking for installs",
        "Company-wide footage overview across offices",
        "Leaderboard and commission tracking for sales teams",
        "Pipeline, calendar, and scheduling tools",
        "Inventory, warehouse, and franchise management",
      ],
      liveUrl: "https://bosso.vision/",
    },
  };

  const project = PROJECTS_DATA[id];

  if (!project) {
    return (
      <section className="project-detail-section py-5 position-relative">
        <div className="container">
          <div className="text-center py-5">
            <h1 className="text-white mb-3">Project Not Found</h1>
            <p className="text-white-50 mb-4">The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn btn-primary">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-section py-5 position-relative">
      <div className="container position-relative" style={{ zIndex: 2, overflow: 'hidden' }}>
        {/* Back Button */}
        <div className="mb-4" data-aos="fade-right">
          <button
            onClick={() => navigate(-1)}
            className="project-detail-back-btn"
          >
            <i className="fa fa-arrow-left me-2"></i>
            Back to Projects
          </button>
        </div>

        {/* Hero Section */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <div className="project-detail-hero">
              <img
                src={project.source}
                alt={project.title}
                className="project-detail-image"
              />
              <div className="project-detail-overlay">
                <div className="project-detail-hero-content">
                  <span className="project-detail-category">{project.category}</span>
                  <h1 className="project-detail-title">{project.title}</h1>
                  <p className="project-detail-subtitle">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row">
          <div className="col-lg-8">
            {/* Description */}
            <div className="project-detail-card mb-4" data-aos="fade-up" data-aos-delay="100">
              <h3 className="project-detail-section-title">About This Project</h3>
              <p className="project-detail-text">{project.longDescription}</p>
            </div>

            {/* Features */}
            <div className="project-detail-card mb-4" data-aos="fade-up" data-aos-delay="200">
              <h3 className="project-detail-section-title">Key Features</h3>
              <ul className="project-detail-features">
                {project.features.map((feature, index) => (
                  <li key={index} data-aos="fade-left" data-aos-delay={300 + index * 50}>
                    <i className="fa fa-check-circle me-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="project-detail-sidebar" data-aos="fade-left" data-aos-delay="100">
              {/* Project Info */}
              <div className="project-info-card mb-4">
                <h5 className="project-info-title">Project Information</h5>
                <div className="project-info-item">
                  <span className="project-info-label">Category</span>
                  <span className="project-info-value">{project.category}</span>
                </div>
                {project.year && (
                  <div className="project-info-item">
                    <span className="project-info-label">Year</span>
                    <span className="project-info-value">{project.year}</span>
                  </div>
                )}
                <div className="project-info-item">
                  <span className="project-info-label">Focus Areas</span>
                  <div className="project-tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-action-buttons">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn project-action-btn-primary"
                >
                  <i className="fa fa-external-link-alt me-2"></i>
                  View Live Site
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn project-action-btn-secondary"
                  >
                    <i className="fa-brands fa-github me-2"></i>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;

