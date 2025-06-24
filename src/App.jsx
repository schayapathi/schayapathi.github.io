import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* TOP NAVIGATION BAR */}
        <nav className="navbar">
          <NavLink to="/" className="nav-brand font-arima">
            swati chayapathi
          </NavLink>
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/experience" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/leadership" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Leadership
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/community" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Community
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/experience" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          © {new Date().getFullYear()} Swati Chayapathi.
        </footer>
      </div>
    </Router>
  );
}

function Projects() {
  const projects = [
    {
      title: "Briefcase",
      description: "Social travel platform for sharing personalized itineraries and destination recommendations. Full-stack application with user authentication and real-time updates.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      duration: "Spring 2022",
      location: "San Jose, CA",
      logo: "/logos/briefcase.png" // You'll add this image later
    },
    {
      title: "Healthfirst (HackDavis)",
      description: "React Native app that analyzes voice-recorded symptoms using custom NLP model. Integrated GCP, Firebase, and Twilio for seamless healthcare communication. Best Hack using Twilio API.",
      tech: ["React Native", "Firebase", "Twilio", "NLP", "GCP"],
      duration: "Spring 2021",
      location: "Davis, CA",
      logo: "/logos/hackdavis.png" // You'll add this image later
    },
    {
      title: "Ray Tracer",
      description: "Advanced C++ ray tracer that renders photorealistic 3D scenes with Lambert/Phong shading, shadows, and anti-aliasing using OpenFrameworks.",
      tech: ["C++", "OpenFrameworks", "Computer Graphics", "3D Rendering"],
      duration: "Fall 2021",
      location: "San Jose, CA",
      logo: "/logos/raytracer.png" // You'll add this image later
    },
    {
      title: "3D Lunar Lander",
      description: "3D lunar lander game built in C++ using OpenGL. The player controls a lunar lander spacecraft, navigating through a 3D environment to land on the moon softly. The game features realistic physics, realistic terrain, and realistic spacecraft controls.",
      tech: ["C++", "OpenGL", "3D Graphics", "Game Development"],
      duration: "Spring 2021",
      location: "San Jose, CA",
      logo: "/logos/lunarlander.png" // You'll add this image later
    },
    {
      title: "2D Arcade Game",
      description: "2D arcade game built in C++ using OpenGL. The player controls a spacecraft, navigating through a 2D environment to shoot down enemies. The game features realistic physics, realistic terrain, and realistic spacecraft controls.",
      tech: ["C++", "OpenGL", "2D Graphics", "Game Development"],
      duration: "Spring 2021",
      location: "San Jose, CA",
      logo: "/logos/arcade.png" // You'll add this image later
    },
    {
      title: "finesse (finance essentials)",
      description: "Created a proof of concept for Finesse, a personal finance and investing education platform tailored for high school students, based on market research to improve on existing apps with a focus on engagement and age-appropriate learning.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      duration: "Fall 2020",
      location: "Palo Alto, CA",
      logo: "/logos/finesse.png" // You'll add this image later
    }
    
  ];

  return (
    <section data-aos="fade-up">
      <div className="section-header">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">A collection of technical projects showcasing full-stack development, machine learning, and creative problem-solving</p>
      </div>
      <div className="cards-grid">
        {projects.map((project, index) => (
          <div key={index} className="card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card-header">
              <img src={project.logo} alt={project.title} className="company-logo" />
              <h3 className="card-title">{project.title}</h3>
            </div>
            <p className="card-description">{project.description}</p>
            <div className="tags">
              {project.tech.map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
            <div className="card-meta">
              <span className="meta-duration">{project.duration}</span>
              <span className="meta-location">{project.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Software Engineer – Meta Reality Labs",
      description: "Built custom audio signal processing tools and automated Opus encoding workflows in C++ and React JS to enhance VoIP communication quality in VR experiences. Optimized audio latency and improved user experience across Meta's VR platform.",
      tech: ["C++", "Python", "React", "Audio Processing", "VR"],
      duration: "Sep 2023 – Mar 2025",
      location: "Burlingame, CA",
      logo: "/logos/meta.png" // You'll add this image later
    },
    {
      title: "Software Engineer – Walmart Labs",
      description: "Contributed to the redesign and implementation of the Taxes page within Walmart’s Seller Center platform for US and Canada, adapting to regulatory changes and delivering periodic releases. Utilized React JS to enhance user experience for third-party sellers managing taxes and compliance.",
      tech: ["Javascript", "React", "Node.js", "AWS", "Docker"],
      duration: "June 2023 – Sep 2023",
      location: "Sunnyvale, CA",
      logo: "/logos/walmart.png" // You'll add this image later
    },
    {
      title: "Software Engineer – Twilio",
      description: "Upgraded WebRTC libraries and redesigned cross-platform test applications for seamless video calling experiences. Implemented ES6 standards and React JS components for improved developer experience and system reliability.",
      tech: ["React", "WebRTC", "TypeScript", "ES6", "Video APIs"],
      duration: "Sep 2022 – Feb 2023",
      location: "San Francisco, CA",
      logo: "/logos/twilio.png" // You'll add this image later
    },
    {
      title: "Backend Developer Co-op – IBM",
      description: "Developed ML daemons for Db2AI platform, enhancing user experience through Java backend services and Figma prototyping. Modularized database evaluation processes and implemented SQL query optimization algorithms.",
      tech: ["Java", "React", "Figma", "Machine Learning", "SQL"],
      duration: "Jan 2022 – May 2022",
      location: "San Jose, CA",
      logo: "/logos/ibm.png" // You'll add this image later
    },
    {
      title: "Software Engineering Intern – Honeywell",
      description: "Developed and deployed RESTful CRUD APIs using TypeScript with comprehensive documentation. Implemented regex-based data validation systems for enterprise-level data integrity and security compliance.",
      tech: ["TypeScript", "Swagger", "DBeaver", "REST APIs", "Data Validation"],
      duration: "May 2021 – Aug 2021",
      location: "Atlanta, GA",
      logo: "/logos/honeywell.png" // You'll add this image later
    },
    {
      title: "Computer Science Intern - Next Gen Personal Finance",
      description: "Professional development registration system for finance educators with advanced filtering, course management, and progress tracking capabilities.",
      tech: ["Node.js", "SQL", "Bootstrap", "Express"],
      duration: "June 2019 – Aug 2019",
      location: "Palo Alto, CA",
      logo: "/logos/nextgen.png" // You'll add this image later
    }
  ];

  return (
    <section data-aos="fade-up">
      {/* Hero Section */}
      <div className="hero-section" data-aos="fade-up">
        <h1 className="hero-title font-arima">swati chayapathi</h1>
        <p className="hero-subtitle">software engineer</p>
        <p className="hero-description">
          Passionate software engineer with expertise in full-stack development, VR/AR technologies, and machine learning. 
          Experience at Meta Reality Labs, Twilio, IBM, and Honeywell, building scalable applications and innovative solutions 
          that enhance user experiences across web, mobile, and immersive platforms.
        </p>
        <div className="hero-icons">
          <a href="mailto:schayapathi01@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/schayapathi">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/swati-chayapathi/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Professional journey spanning VR/AR, telecommunications, AI/ML, and enterprise software development</p>
      </div>
      <div className="experience-grid">
        {experiences.map((role, index) => (
          <div key={index} className="card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card-header">
              <img src={role.logo} alt={role.title.split(' – ')[1]} className="company-logo" />
              <h3 className="card-title">{role.title}</h3>
            </div>
            <p className="card-description">{role.description}</p>
            <div className="tags">
              {role.tech.map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
            <div className="card-meta">
              <span className="meta-duration">{role.duration}</span>
              <span className="meta-location">{role.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Leadership() {
  const leadership = [
    {
      title: "External Vice President – Society of Women Engineers",
      description: "Led comprehensive outreach and empowerment initiatives for women in STEM fields, coordinating with industry sponsors and university departments. Successfully helped SWE earn the prestigious 'Student Organization of the Year' award through strategic planning and community engagement.",
      tags: ["Leadership", "STEM Advocacy", "Community Outreach", "Strategic Planning"],
      logo: "/logos/swe.png" // You'll add this image later
    },
    {
      title: "Student Assistant – Intro to Data Structures",
      description: "Mentored students in foundational computer science concepts including algorithms, data structures, and problem-solving methodologies. Conducted tutoring sessions, graded assignments, and provided personalized academic support to enhance student success rates.",
      tags: ["Teaching", "CS Education", "Mentoring", "Academic Support"],
      logo: "/logos/sjsu.png" // You'll add this image later
    },
    {
      title: "STEM CREW Intern - Girlstart",
      description: "Worked afterschool programs in Menlo Park to inspire and educate young girls about STEM fields. Helped organize and run events, and provided mentorship to girls curious about STEM careers.",
      tags: ["STEM Education", "Mentorship", "Community Outreach"],
      logo: "/logos/girlstart.png" // You'll add this image later
    }
  ];

  return (
    <section data-aos="fade-up">
      <div className="section-header">
        <h1 className="section-title">Leadership</h1>
        <p className="section-subtitle">Empowering communities through education, mentorship, and advocacy in technology and engineering</p>
      </div>
      <div className="leadership-grid">
        {leadership.map((role, index) => (
          <div key={index} className="leadership-card" data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="card-header">
              <img src={role.logo} alt={role.title.split(' – ')[1] || role.title} className="company-logo" />
              <h3 className="card-title">{role.title}</h3>
            </div>
            <p className="card-description">{role.description}</p>
            <div className="tags">
              {role.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Community() {
  const community = [
    {
      title: "Dance Teacher - Stratford School",
      description: "Led afterschool dance classes for 1st and 2nd graders, incorporating movement vocabulary, team-building exercises, and confidence-building games rooted in children’s dance pedagogy.",
      tags: ["Dance", "Teaching"],
      logo: "/logos/stratford.png"
    },
    {
      title: "Accenture Innovation Challenge - Feeding America",
      description: "Represented SJSU in the Accenture Innovation Challenge, developing a consulting solution to redirect surplus food from college dining halls to local food banks in partnership with Feeding America.",
      tags: ["Consulting", "Accessibility"],
      logo: "/logos/accenture.png" // You'll add this image later
    },
    {
      title: "Global Bhagavad Gita Convention - Design Lead",
      description: "Created the visual identity for the Global Bhagavad Gita Convention, including logo design, branding elements, and event collateral such as invitation and informational cards.",
      tags: ["Design", "Branding", "Graphic Design"],
      logo: "/logos/gbgc.png" // You'll add this image later
    },
    {
      title: "BrandX Challenge with Sephora",
      description: "Collaborated in a multidisciplinary team to design an immersive Sephoria experience for Sephora’s We Belong to Something Beautiful campaign, creating a mentor-guided pitch deck with participant journey, visual branding, interactive elements, and curated giveaways.",
      tags: ["Design", "Branding", "Graphic Design"],
      logo: "/logos/brandx.png" // You'll add this image later
    }
  ];

  return (
    <section data-aos="fade-up">
      <div className="section-header">
        <h1 className="section-title">Community</h1>
        <p className="section-subtitle">Engaging with communities through design, innovation, and mentorship</p>
      </div>
      <div className="leadership-grid">
        {community.map((role, index) => (
          <div key={index} className="leadership-card" data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="card-header">
              <img src={role.logo} alt={role.title.split(' – ')[1] || role.title} className="company-logo" />
              <h3 className="card-title">{role.title}</h3>
            </div>
            <p className="card-description">{role.description}</p>
            <div className="tags">
              {role.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;