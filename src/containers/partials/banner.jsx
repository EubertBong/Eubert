import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import BackLogo from "../../components/BackLogo";

const BANNER = {
  skills: [
    "Senior Full Stack Developer",
    "SaaS Platform Engineer",
    "Performance-Focused Builder",
  ],
  skillLogos: [
    {source: 'img/icons/areas/code.svg', top:'60%', left: '10%', width: '220px'},
    {source: 'img/icons/areas/cloud.svg', top:'5%', left: '60%', width: '160px'},
    {source: 'img/icons/areas/layers.svg', top:'25%', left: '70%', width: '200px'},
    {source: 'img/icons/areas/database.svg', top:'70%', left: '85%', width: '110px'}],
  description: `Welcome to my portfolio!
    I'm Eubert Bong Nocepida, a Senior Full Stack Developer with 10+ years building scalable, responsive web applications and shipping production-ready features with minimal regressions.`
}

export default function Banner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: BANNER.skills,
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const text = `${BANNER.description}`;

  const sentences = text.split("\n").map((sentence) => sentence.trim());

  const waveText = sentences.map((sentence, sentenceIndex) => (
    <React.Fragment key={sentenceIndex}>
      {sentence.split("").map((char, charIndex) => (
        <span
          key={charIndex}
          className="wave-char"
          style={{ animationDelay: `${(sentenceIndex + charIndex) * 0.04}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <br />
    </React.Fragment>
  ));

  return (
    <header className="position-relative py-3 py-md-5 banner-section" style={{ minHeight: '100vh', height: 'auto', zIndex: 1, overflow: 'visible' }}>
      {/* Blurred edge at bottom */}
      <div className="banner-bottom-blur"></div>
      <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block" style={{ zIndex: 0, pointerEvents: 'none' }}>
        {BANNER.skillLogos.map((item, index) => {
          return <BackLogo
          key={index}
          source={item.source}
          top={item.top}
          left={item.left}
          width={item.width ? item.width : ''}
          className={"rotate"}
        />
        })}
      </div>
      <div className="container container-md px-3 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2 gap-md-4 py-4 py-md-6">
          <img
            src="/img/eubert.png"
            width="192"
            alt="Eubert Bong Nocepida"
            className="rounded-circle banner-photo"
            style={{ maxWidth: '196px', width: '100%', height: 'auto' }}
            data-aos="zoom-in-up"
            data-aos-mirror="true"
            data-aos-once="false"
          />

          <h1 className="xl-text mt-3 mt-md-5 text-center banner-title">
            <span data-aos="fade-left">I am an Experienced</span>
            <br className="d-none d-md-block" />
            <span className="d-block d-md-inline"> </span>
            <span
              className="primary-gradient-text fw-bold typed-text"
              data-aos="fade-right"
              ref={el}
            ></span>
          </h1>
          <p className="lead px-2 px-md-6 text-center wave-text banner-description">{waveText}</p>
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 gap-md-3 w-100 px-3" style={{ position: 'relative', zIndex: 2 }}>
            <a 
              href="#contact" 
              className="btn btn-primary text-white w-100 w-sm-auto px-4 px-md-5"
              tabIndex={0}
              style={{ position: 'relative', zIndex: 2 }}
            >
              GET IN TOUCH
            </a>
            <a 
              href="/img/Eubert_Bong_Nocepida_Resume.pdf"
              download
              className="btn btn-outline-primary text-white w-100 w-sm-auto px-4 px-md-5"
              tabIndex={0}
              style={{ position: 'relative', zIndex: 2 }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
