import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Homeowner",
    text: "NOVAARCH turned our vision into a masterpiece. Their attention to detail and modern approach is truly unique in the industry."
  },
  {
    id: 2,
    name: "Elena G.",
    role: "CEO of Urban Group",
    text: "Professionalism and innovation at its best. They delivered a commercial space that perfectly reflects our corporate identity."
  }
];

function Testimonials() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.fromTo(".testimonials-header", 
        { 
            opacity: 0, 
            y: 30 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: ".testimonials-header",
            start: "top 90%",
          }
        }
      );

      gsap.fromTo(".testimonial-card", 
        { 
          opacity: 0, 
          x: (index) => index % 2 === 0 ? -100 : 100
        }, 
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.5, 
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-header">
        <span className="subtitle">Client Stories</span>
        <h2 className="section-title">What They <span className="gold-text">Say About Us</span></h2>
      </div>

      <div className="testimonials-grid">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <div className="quote-icon">“</div>
            <p className="testimonial-text">{review.text}</p>
            <div className="client-info">
              <h4 className="client-name">{review.name}</h4>
              <span className="client-role">{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;