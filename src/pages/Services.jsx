import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.fromTo(".service-card", 
        { 
          y: 50, 
          opacity: 0 
        }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-header">
        <span className="subtitle">Our Expertise</span>
        <h2 className="section-title">What We <span className="gold-text">Do Best</span></h2>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <span className="service-num">01</span>
          <h3>Architectural Planning</h3>
          <p>Innovative blueprints for modern living spaces.</p>
        </div>
        <div className="service-card">
          <span className="service-num">02</span>
          <h3>Interior Concept</h3>
          <p>Luxury interior designs that reflect your personality.</p>
        </div>
        <div className="service-card">
          <span className="service-num">03</span>
          <h3>Urban Design</h3>
          <p>Large scale architectural solutions for cities.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;