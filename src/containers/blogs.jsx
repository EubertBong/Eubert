import React, { useEffect } from "react";
import AOS from "aos";

const BlogsPage = () => {
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  return (
    <section className="blogs-page-section py-5 position-relative">
      <div className="container position-relative" style={{ zIndex: 2, overflow: 'hidden' }}>
        <div className="row text-center mb-5" data-aos="fade-down">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title">
              MY BLOGS
            </h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle">
              Blog content has been removed.
            </p>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-12">
            <div className="text-center mt-5">
              <p className="text-white-50 fs-5">
                No blog posts are currently available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;

