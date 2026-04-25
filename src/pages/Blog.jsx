import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../pages/Blog.css";

// სურათების იმპორტი (შეამოწმე შენი assets ფოლდერი!)
import blogImg1 from "../assets/blog-img-1.webp";
import blogImg2 from "../assets/blog-img-2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    id: 1,
    date: "April 20, 2026",
    title: "The Future of Minimalist Architecture",
    category: "Design",
    img: blogImg1
  },
  {
    id: 2,
    date: "March 15, 2026",
    title: "How to Choose Materials for Luxury Villas",
    category: "Planning",
    img: blogImg2
  }
];

function Blog() {
  const blogSectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const blogCards = gsap.utils.toArray(".blog-card");

      gsap.fromTo(blogCards, 
        { 
          y: 60, 
          opacity: 0 
        }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.3, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: blogSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            onEnter: () => ScrollTrigger.refresh() 
          }
        }
      );

    }, blogSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="blog-section" ref={blogSectionRef}>
      <div className="blog-header">
        <span className="subtitle">Latest News</span>
        <h2 className="section-title">From Our <span className="gold-text">Journal</span></h2>
      </div>

      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <div className="blog-img-box">
              <img src={blog.img} alt={blog.title} loading="lazy" />
              <span className="blog-category">{blog.category}</span>
            </div>
            <div className="blog-content">
              <span className="blog-date">{blog.date}</span>
              <h3>{blog.title}</h3>
              <p>Explore the latest trends in modern architecture and luxury lifestyle...</p>
              <button className="blog-link">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;