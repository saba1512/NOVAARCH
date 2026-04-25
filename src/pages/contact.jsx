import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.fromTo(".contact-info > *", 
        { 
            x: -50, 
            opacity: 0 
        },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(".contact-form", 
        { 
            x: 50, 
            opacity: 0 
        },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        {/* მარცხენა მხარე: ინფორმაცია */}
        <div className="contact-info">
          <span className="subtitle">Get in Touch</span>
          <h2 className="contact-title">
            Let's Build Your <span className="gold-text">Dream Together.</span>
          </h2>
          <p className="contact-desc">
            Ready to start your next architectural masterpiece? Reach out to us for a consultation.
          </p>
          
          <div className="info-items">
            <div className="info-item">
              <span className="gold-text">Location:</span>
              <p>Khashuri, Georgia</p>
            </div>
            <div className="info-item">
              <span className="gold-text">Email:</span>
              <p>contact@novaarch.ge</p>
            </div>
            <div className="info-item">
              <span className="gold-text">Phone:</span>
              <p>+995 555 00 00 00</p>
            </div>
          </div>
        </div>

        {/* მარჯვენა მხარე: ფორმა */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Tell us about your project" rows="5" required></textarea>
          <button type="submit" className="archi-outline-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;