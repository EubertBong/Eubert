import React, { useEffect } from "react";
import AOS from "aos";

const AboutPage = () => {
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  const experience = [
    {
      year: "Jun 2023 - Present",
      title: "Senior Software Engineer",
      company: "FleetMule - CA, United States",
      description:
        "Architected a multi-tenant SaaS platform serving hundreds of transportation companies and led end-to-end delivery of responsive administrative portals. Built a reusable component library that cut UI development time by 30%, reduced response latency by 40% through data modeling and query optimization, and cut deployment time by 60% with automated testing and Git-based workflows.",
    },
    {
      year: "Jul 2021 - May 2023",
      title: "Full Stack Developer",
      company: "KYC Hospitality - United States",
      description:
        "Revamped enterprise hospitality applications and client-facing portals. Migrated monolithic applications to a scalable service architecture with APIs and background workers, improving maintainability by 40%, connected payment gateways and external APIs behind token-based authentication, and mentored engineers on secure development practices.",
    },
    {
      year: "May 2019 - May 2021",
      title: "Full Stack Developer",
      company: "Everyrealm - NY, United States",
      description:
        "Developed cloud-native web applications supporting high-growth business initiatives. Reduced latency by over 30% through database optimization, rendering improvements, and caching, and improved release consistency with CI/CD pipelines and tested rollback paths for database migrations.",
    },
    {
      year: "Jan 2016 - Mar 2019",
      title: "Full Stack Developer",
      company: "Softwire - United Kingdom",
      description:
        "Designed enterprise web applications and secure APIs integrating internal services with external business platforms. Cut load times by 50% and production defects by 60% through performance optimization and automated testing, working in Agile teams across three regions.",
    },
  ];

  return (
    <section className="about-page-section py-5 position-relative">
      <div className="container position-relative" style={{ zIndex: 2, overflow: 'hidden' }}>
        {/* Header Section */}
        <div className="row text-center mb-5" data-aos="fade-down">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title">
              ABOUT ME
            </h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle">
              Get to know more about my journey, skills, and passion for technology
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="row mb-5">
          <div className="col-lg-12" data-aos="fade-up">
            <div className="about-content-card">
              <h3 className="about-section-title mb-4">Who I Am</h3>
              <p className="about-text">
                I'm Eubert Bong Nocepida, a Senior Full Stack Developer based in Malabon, Metro Manila, Philippines, with 10+ years building scalable, responsive web applications for companies in the United States and the United Kingdom.
              </p>
              <p className="about-text">
                I've architected multi-tenant SaaS platforms, modernized enterprise applications, and built reusable component systems that helped teams ship faster, including 40% faster load times and 60% quicker deployments.
              </p>
              <p className="about-text">
                I care about delivering production-ready features with minimal regressions and leaving codebases the next engineer can change without a walkthrough. I work best in collaborative Agile teams, bringing adaptability, curiosity, and clear communication across time zones.
              </p>
              <h3 className="about-section-title mb-4 mt-5">Education</h3>
              <p className="about-text">
                <strong>Bachelor of Science in Computer Science</strong><br />
                Nanjing University - 2012–2016
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="about-content-card">
              <h3 className="about-section-title mb-4 text-center">Experience</h3>
              <div className="experience-timeline">
                {experience.map((exp, index) => (
                  <div key={index} className="experience-item" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="experience-year">{exp.year}</div>
                    <div className="experience-content">
                      <h4 className="experience-title">{exp.title}</h4>
                      <p className="experience-company">{exp.company}</p>
                      <p className="experience-description">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
