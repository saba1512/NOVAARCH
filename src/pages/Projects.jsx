import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Modern Glass Villa",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Urban Concept Office",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Minimalist Loft",
    category: "Interior",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80"
  }
];

function Projects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.fromTo(".project-card", 
        { 
          y: 60, 
          opacity: 0,
          scale: 0.9 
        }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.2, 
          stagger: 0.3, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-section" ref={sectionRef}>
      <div className="projects-header">
        <span className="subtitle">Our Works</span>
        <h2 className="section-title">Featured <span className="gold-text">Projects</span></h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <div className="project-overlay">
                <span className="project-category">{project.category}</span>
                <h3 className="project-name">{project.title}</h3>
                <div className="project-link">View Details</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;