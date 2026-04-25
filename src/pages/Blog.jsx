import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../pages/Blog.css";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    id: 1,
    date: "April 20, 2026",
    title: "The Future of Minimalist Architecture",
    category: "Design",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    date: "March 15, 2026",
    title: "How to Choose Materials for Luxury Villas",
    category: "Planning",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

function Blog() {
  const blogRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // ბლოგის ბარათების ანიმაცია
      gsap.fromTo(".blog-card", 
        { 
          y: 50, 
          opacity: 0 
        }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.4, // თითოეულ ბლოგს შორის დიდი დაშორება უფრო "Luxury"ა
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, blogRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="blog-section" ref={blogRef}>
      <div className="blog-header">
        <span className="subtitle">Latest News</span>
        <h2 className="section-title">From Our <span className="gold-text">Journal</span></h2>
      </div>

      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <div className="blog-img-box">
              <img src={blog.img} alt={blog.title} />
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