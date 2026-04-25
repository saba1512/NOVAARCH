import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.fromTo(".about-image", 
        { x: -100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-image",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(".experience-badge", 
        { 
            scale: 0, 
            opacity: 0 
        },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1, 
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".about-image",
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(".about-content > *", 
        { 
            x: 50, 
            opacity: 0 
        },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-content",
            start: "top 85%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* სურათის მხარე */}
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Architecture" 
          />
          <div className="experience-badge">
            <span className="exp-number">12</span>
            <span className="exp-text">Years of <br/> Excellence</span>
          </div>
        </div>

        {/* ტექსტის მხარე */}
        <div className="about-content">
          <span className="subtitle">About Our Studio</span>
          <h2 className="about-title">
            We Design Houses That <span className="gold-text">Define Living.</span>
          </h2>
          <p className="about-text">
            Founded on the principles of innovation and precision, NOVAARCH has been 
            at the forefront of modern architecture for over a decade. We believe 
            that every structure should tell a story.
          </p>
          
          <div className="about-features">
            <div className="feature-item">
              <span className="gold-text">01.</span>
              <p>Innovative Planning</p>
            </div>
            <div className="feature-item">
              <span className="gold-text">02.</span>
              <p>Sustainable Materials</p>
            </div>
          </div>

          <button className="archi-outline-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default About;