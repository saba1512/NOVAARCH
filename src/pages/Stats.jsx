import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Stats.css";

gsap.registerPlugin(ScrollTrigger);

function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // 2. ციფრების ათვლის ანიმაცია (Count Up)
      gsap.utils.toArray(".stat-number").forEach((num) => {
        const targetValue = parseInt(num.innerText);
        
        gsap.fromTo(num, 
          { innerText: 0 }, 
          { 
            innerText: targetValue, 
            duration: 2, 
            snap: { innerText: 1 }, 
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-grid">
        <div className="stat-item">
          <h2 className="gold-text stat-number">12</h2>
          <p>Years Experience</p>
        </div>
        <div className="stat-item">
          <h2 className="gold-text stat-number">150</h2>
          <p>Projects Done</p>
        </div>
        <div className="stat-item">
          <h2 className="gold-text stat-number">20</h2>
          <p>Awards Won</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;