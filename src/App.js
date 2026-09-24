import React, { useEffect } from 'react'
import AOS from 'aos';
import MyRouter from './routes';
import { HelmetProvider } from 'react-helmet-async';
import './styles/custom.scss';
import './styles/bootstrap.scss';
import './styles/styles.scss';
import './styles/font-awesome.scss';
import "aos/dist/aos.css";

function App() {
  // Initialize AOS once for every route so pages opened directly still animate in
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-out-cubic", // smoother easing function
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      anchorPlacement: "top-bottom", // defines which position of the element should be used to trigger animation
    });

    // Refresh AOS on window resize for better performance
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HelmetProvider>
      <div>
        <MyRouter />
      </div>
    </HelmetProvider>
  );
}

export default App;
