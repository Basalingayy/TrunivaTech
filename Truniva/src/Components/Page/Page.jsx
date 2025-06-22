import React, { useState } from "react";
import { Button } from "../../Components/Ui/button";
import { Card, CardContent } from "../../Components/Ui/Card";

// ...existing code...
import { Sparkles, Code2, Globe, Menu, X } from "lucide-react";
import { color, motion } from "framer-motion";
import Logo from "../../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const teamMembers = [
  { name: "Basalingayya Saraganachari", role: "CEO & Founder" },
  { name: "", role: "CTO" },
  { name: "", role: "Lead Engineer" },
];

const services = [
  {
    icon: <Sparkles size={28} />, title: "Creative Design", text: "Intuitive and modern UI/UX designs tailored to your brand.",
    details: "We create visually stunning and user-friendly designs that enhance your brand's digital presence."
  },
  {
    icon: <Code2 size={28} />, title: "Clean Code", text: "Well-structured, reusable and maintainable codebase.",
    details: "Our code is robust, scalable, and easy to maintain, ensuring long-term project success."
  },
  {
    icon: <Globe size={28} />, title: "Global Reach", text: "We deliver solutions that scale globally with performance.",
    details: "Our solutions are built to perform and scale, no matter where your users are located."
  }
];

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showService, setShowService] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle contact form
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }
    setFormStatus('Sending...');
    try {
      const response = await fetch('https://truniva-tech-xyaq.vercel.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setFormStatus('Thank you for contacting us!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setFormStatus(data.error || 'Failed to send message.');
      }
    } catch (error) {
      setFormStatus('Failed to send message.');
    }
    setTimeout(() => setFormStatus(''), 4000);
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3 sticky-top">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#" onClick={() => scrollToSection('hero')}>
          <motion.img
            src={Logo}
            alt="TrunivaTech"
            width="40"
            height="40"
            animate={{ rotate: [0, 10, -10, 0] }}
            whileHover={{ scale: 1.2, filter: 'drop-shadow(0 0 16px #0d6efd)' }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            style={{ cursor: 'pointer', filter: 'drop-shadow(0 0 8px #0d6efd)' }}
          />
          <span className="fw-bold fs-4 text-dark">TrunivaTech</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#hero" onClick={() => scrollToSection('hero')}>Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about" onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#services" onClick={() => scrollToSection('services')}>Services</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center text-center bg-white py-5">
        <motion.h1
          className="display-4 fw-bold text-dark"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Empowering Innovation with <span className="text-primary">TrunivaTech</span>
        </motion.h1>
        <p className="lead text-muted mb-4 w-75">
          We build modern, scalable digital solutions that drive your business forward.
        </p>
        <Button className="btn btn-primary btn-lg" onClick={() => scrollToSection('contact')}>Get Started</Button>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="fw-bold text-center mb-4">About Us</h2>
            <p className="text-center text-muted mb-5">
              TrunivaTech is an industry leader in delivering innovative technology solutions. Our mission is to empower businesses with cutting-edge digital products and services.
              <div className="text-center text-muted mb-5" style={{ backgroundColor: 'red' }}>
                <p>Company is still under development.
                   We are working on it.
                </p>
                
                </div>
              
            </p>
            <div className="row justify-content-center">
              {teamMembers.map((member, idx) => (
                <div className="col-md-4 mb-3" key={idx}>
                  <Card className="shadow-sm border-0 h-100 text-center">
                    <CardContent className="p-4">
                      <div className="mb-2 fw-bold fs-5">{member.name}</div>
                      <div className="text-primary mb-1">{member.role}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-white">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="fw-bold text-center mb-4">Our Services</h2>
            <div className="row g-4">
              {services.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Card className="shadow-sm border-0 h-100 text-center">
                      <CardContent className="p-4">
                        <div className="mb-3 text-primary">{item.icon}</div>
                        <h5 className="fw-semibold mb-2">{item.title}</h5>
                        <p className="text-muted">{item.text}</p>
                        <Button className="btn btn-success btn-sm mt-2" onClick={() => setShowService(index)}>
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Service Modal */}
        {showService !== null && (
          <div className="modal fade show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{services[showService].title}</h5>
                  <button type="button" className="btn-close" onClick={() => setShowService(null)}></button>
                </div>
                <div className="modal-body">
                  <p>{services[showService].details}</p>
                </div>
                <div className="modal-footer">
                  <Button className="btn btn-secondary" onClick={() => setShowService(null)}>Close</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="fw-bold text-center mb-4">Contact Us</h2>
            <div className="row justify-content-center">
              <div className="col-md-7">
                <form className="card shadow-sm p-4 bg-white" onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={form.name} onChange={handleFormChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={form.email} onChange={handleFormChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" name="message" rows="4" value={form.message} onChange={handleFormChange} required></textarea>
                  </div>
                  {formStatus && <div className="alert alert-info py-2">{formStatus}</div>}
                  <Button className="btn btn-primary w-100" type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 text-center mt-auto">
        <div>© {new Date().getFullYear()} TrunivaTech. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Page;
