import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

// სურათების იმპორტი (დარწმუნდი, რომ სახელები სწორია!)
import projectImg1 from "../assets/project-img-1.avif";
import projectImg2 from "../assets/hero-img.avif";
import projectImg3 from "../assets/project-img-3.avif"; 

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  { id: 1, title: "Modern Glass Villa", category: "Residential", img: projectImg1 },
  { id: 2, title: "Urban Concept Office", category: "Commercial", img: projectImg2 },
  { id: 3, title: "Minimalist Loft", category: "Interior", img: projectImg3 }
];

function Projects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // ყველა ბარათის ანიმაცია
      const cards = gsap.utils.toArray(".project-card");
      
      gsap.fromTo(cards, 
        { 
          y: 100, 
          opacity: 0 
        }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current, // მთლიან სექციაზე მივაბათ
            start: "top 80%", // როცა სექციის ზედა ნაწილი ეკრანის 80%-ზეა
            toggleActions: "play none none none",
            onEnter: () => ScrollTrigger.refresh() // იძულებითი რეფრეში
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
              <img src={project.img} alt={project.title} loading="lazy" />
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