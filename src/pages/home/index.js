import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlowBackground from "./GlowBackground";
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiDocker, 
  SiRubyonrails, 
  SiJavascript 
} from "react-icons/si";

const ICON_MAPPING = {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiRubyonrails,
  SiJavascript
};

const TechBadge = ({ name, iconName, color }) => {
  const Icon = ICON_MAPPING[iconName];
  return (
    <motion.div 
      className="tech-badge"
      style={{ "--tech-color": color }}
      whileHover={{ scale: 1.1 }}
    >
      {Icon && <Icon className="tech-icon" style={{ color }} />}
      <span>{name}</span>
    </motion.div>
  );
};

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <GlowBackground />

        <div className="intro_sec">
          <motion.div 
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-content-wrapper">
              <div className="hero-info">
                <motion.div 
                  className="avatar-wrapper"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                >
                  <img src={introdata.your_img_url} alt="profile" className="hero-avatar" />
                </motion.div>
                <div className="hero-header">
                  <motion.h2 
                    className="intro-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {introdata.title}
                  </motion.h2>

                  <motion.p 
                    className="hero-tagline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {introdata.tagline || introdata.description}
                  </motion.p>
                </div>

                <motion.div 
                  className="intro_btn-action"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link to="/portfolio" className="hero-cta cta-primary">
                    View Projects
                  </Link>
                  <a href={introdata.resume_url} className="hero-cta cta-secondary">
                    Download Resume
                  </a>
                </motion.div>
              </div>

              <motion.div 
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <div className="earth-container">
                  <div className="earth">
                    <div className="earth-texture"></div>
                  </div>
                  <div className="earth-overlay"></div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="tech-stack-preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {introdata.techstack.map((tech, i) => (
                <TechBadge key={i} name={tech.name} iconName={tech.icon} color={tech.color} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span>Scroll to explore</span>
          <div className="mouse">
            <motion.div 
              className="wheel"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    </HelmetProvider>
  );
};
