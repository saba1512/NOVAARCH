import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// იმპორტები
import Stats from "../pages/Stats";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Testimonials from "../pages/Testimonials";
import "../pages/Home.css";

// ScrollTrigger-ის რეგისტრაცია
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const main = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline();
      tl.from(".hero-title", { 
        y: 100, 
        opacity: 0, 
        duration: 1.2, 
        ease: "power4.out" 
      })
      .from(".hero-description", { 
        y: 30, 
        opacity: 0, 
        duration: 1 
      }, "-=0.8")
      .from(".hero-image-box", { 
        scale: 1.2, 
        opacity: 0, 
        duration: 1.5, 
        ease: "power2.out" 
      }, "-=1");

      const sections = gsap.utils.toArray('section');
      sections.forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

    }, main);
    
    return () => ctx.revert(); // გასუფთავება
  }, []);

  return (
    <div className="archi-wrapper" ref={main}>
      <main className="hero-section">
        <div className="hero-watermark">N.A</div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="subtitle">Architecture & Design</span>
            <h1 className="hero-title">
              Crafting <br /> 
              <span className="gold-text">Perfect Spaces.</span>
            </h1>
            <p className="hero-description">
              We create spaces that blend structural integrity with timeless aesthetics. 
            </p>
            <button className="archi-outline-btn">Explore Works</button>
          </div>
          <div className="hero-image-box">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
              alt="Design project" 
            />
          </div>
        </div>
      </main>

      <Stats />
      <Services />
      <Blog />
      <Testimonials />
    </div>
  );
}

export default Home;