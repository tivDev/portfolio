const skills = [
    {
        name: "HTML5",
        icon: "fab fa-html5",
        description: "Semantic markup for modern web applications with accessibility best practices.",
        category: "frontend",
        level: "Advanced"
    },
    {
        name: "CSS3",
        icon: "fab fa-css3-alt",
        description: "Responsive design, animations, and modern layout techniques with Flexbox/Grid.",
        category: "frontend",
        level: "Advanced"
    },
    {
        name: "JavaScript",
        icon: "fab fa-js",
        description: "ES6+ features, asynchronous programming, and DOM manipulation expertise.",
        category: "frontend",
        level: "Advanced"
    },
    {
        name: "React.js",
        icon: "fab fa-react",
        description: "Component-based architecture with hooks, context API, and performance optimization.",
        category: "frontend",
        level: "Intermediate"
    },
    {
        name: "Node.js",
        icon: "fab fa-node-js",
        description: "Building scalable server-side applications and RESTful APIs with Express.",
        category: "backend",
        level: "Intermediate"
    },
    {
        name: "Laravel",
        icon: "fab fa-laravel",
        description: "MVC architecture, Eloquent ORM, and robust backend solutions.",
        category: "backend",
        level: "Intermediate"
    },
    {
        name: "Python",
        icon: "fab fa-python",
        description: "Backend development with Django/Flask and data processing capabilities.",
        category: "backend",
        level: "Intermediate"
    },
    {
        name: "MySQL",
        icon: "fas fa-database",
        description: "Relational database design, complex queries, and performance optimization.",
        category: "database",
        level: "Intermediate"
    },
    {
        name: "MongoDB",
        icon: "fas fa-database",
        description: "NoSQL database design, aggregation pipelines, and document-oriented storage.",
        category: "database",
        level: "Intermediate"
    },
    {
        name: "PostgreSQL",
        icon: "fas fa-database",
        description: "Advanced SQL features, JSON support, and transactional integrity.",
        category: "database",
        level: "Beginner"
    },
    {
        name: "Git",
        icon: "fab fa-git-alt",
        description: "Version control, branching strategies, and collaborative workflows.",
        category: "tool",
        level: "Advanced"
    },
    {
        name: "NPM/Yarn",
        icon: "fab fa-npm",
        description: "Package management, script automation, and dependency management.",
        category: "tool",
        level: "Advanced"
    },
    {
        name: "VS Code",
        icon: "fas fa-code",
        description: "Customized development environment with essential extensions and shortcuts.",
        category: "tool",
        level: "Advanced"
    },
    {
        name: "TypeScript",
        icon: "fas fa-code",
        description: "Strongly typed JavaScript for more robust and maintainable codebases.",
        category: "frontend",
        level: "Intermediate"
    },
    {
        name: "Docker",
        icon: "fab fa-docker",
        description: "Containerization for consistent development and deployment environments.",
        category: "tool",
        level: "Beginner"
    }
];

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with product catalog, shopping cart, and secure checkout system. Implemented user authentication, product reviews, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        codeUrl: "https://github.com/example/ecommerce",
        demoUrl: "https://ecommerce.example.com"
    },
    {
        title: "Task Management App",
        description: "Productivity application for organizing tasks with drag-and-drop functionality, due date reminders, and team collaboration features.",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
        image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        codeUrl: "https://github.com/example/task-manager",
        demoUrl: "https://tasks.example.com"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application with 5-day forecast, location search, and interactive maps. Fetches data from multiple weather APIs.",
        technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Bootstrap"],
        image: "https://images.unsplash.com/photo-1561484930-974554019ade?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        codeUrl: "https://github.com/example/weather-app",
        demoUrl: "https://weather.example.com"
    },
    {
        title: "Social Media Analytics",
        description: "Dashboard for tracking social media metrics across multiple platforms with data visualization and export capabilities.",
        technologies: ["Python", "Django", "PostgreSQL", "D3.js"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        codeUrl: "https://github.com/example/social-analytics",
        demoUrl: "https://analytics.example.com"
    }
];

const experiences = [
    {
        title: "Senior Frontend Developer",
        company: "Tech Innovations Inc.",
        date: "2021 - Present",
        description: "Lead the frontend development team in building responsive web applications using React and TypeScript. Implemented performance optimizations that reduced load times by 40%.",
        technologies: ["React", "TypeScript", "Redux", "GraphQL", "Jest"],
        type: "work"
    },
    {
        title: "Full Stack Developer",
        company: "Digital Solutions LLC",
        date: "2018 - 2021",
        description: "Developed and maintained full stack applications using Node.js, Express, and MongoDB. Collaborated with UX designers to implement responsive interfaces.",
        technologies: ["Node.js", "Express", "MongoDB", "React", "Docker"],
        type: "work"
    },
    {
        title: "Junior Web Developer",
        company: "Web Craft Studios",
        date: "2016 - 2018",
        description: "Built and maintained websites for small businesses using WordPress and custom HTML/CSS/JavaScript solutions. Assisted with SEO optimizations.",
        technologies: ["WordPress", "PHP", "JavaScript", "jQuery"],
        type: "work"
    },
    {
        title: "Web Development Bootcamp",
        company: "Code Academy",
        date: "2017",
        description: "Completed intensive 12-week coding bootcamp focused on full stack JavaScript development. Built multiple projects including a social media platform and e-commerce site.",
        technologies: ["JavaScript", "HTML/CSS", "Node.js", "MongoDB"],
        type: "education"
    },
    {
        title: "Bachelor's in Computer Science",
        company: "State University",
        date: "2012 - 2016",
        description: "Graduated with honors. Focused on software engineering principles, algorithms, and database design.",
        technologies: ["Java", "C++", "SQL", "Data Structures"],
        type: "education"
    }
];

const container = document.getElementById('skillsContainer');
const projectsContainer = document.getElementById('projectsContainer');
const workTimeline = document.getElementById('workTimeline');
const educationTimeline = document.getElementById('educationTimeline');
const tabs = document.querySelectorAll('.tab');
const yearSpan = document.getElementById('year');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Set current year in footer
yearSpan.textContent = new Date().getFullYear();

// Mobile menu functionality
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skills pagination
const skillsPerPage = 6;

function renderSkills(filter, showAll = false) {
    container.innerHTML = '';
    let filtered = filter === 'all' ? [...skills] : skills.filter(skill => skill.category === filter);

    const skillsToShow = (filter === 'all' && !showAll) ? filtered.slice(0, skillsPerPage) : filtered;

    if (skillsToShow.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--subtext);">No skills found in this category</div>`;
        return;
    }

    skillsToShow.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
          <span class="skill-category">${skill.category.toUpperCase()}</span>
          <i class="skill-icon ${skill.icon}"></i>
          <div class="skill-name">${skill.name}</div>
          <div class="skill-description">${skill.description}</div>
        `;
        container.appendChild(card);
    });

    // Add "View All" button only for "All Skills" tab when not showing all
    if (filter === 'all' && !showAll && filtered.length > skillsPerPage) {
        const viewAllBtn = document.createElement('button');
        viewAllBtn.className = 'btn btn-primary';
        viewAllBtn.style.gridColumn = '1 / -1';
        viewAllBtn.style.margin = '0 auto';
        viewAllBtn.style.width = '200px';
        viewAllBtn.innerHTML = '<i class="fas fa-eye"></i> View All Skills';
        viewAllBtn.addEventListener('click', () => {
            renderSkills('all', true);
        });
        container.appendChild(viewAllBtn);
    }
}

function renderProjects() {
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
            <div class="project-actions">
              <a href="${project.codeUrl}" target="_blank" class="btn btn-outline">
                <i class="fas fa-code"></i> View Code
              </a>
              <a href="${project.demoUrl}" target="_blank" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        `;
        projectsContainer.appendChild(card);
    });
}

function renderTimeline(container, items) {
    container.innerHTML = '';

    items.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;

        const iconClass = item.type === 'work' ? 'fas fa-briefcase' : 'fas fa-graduation-cap';
        const iconColor = item.type === 'work' ? 'var(--primary)' : '#4cc9f0';

        timelineItem.innerHTML = `
          <div class="timeline-content">
            <div class="timeline-date">${item.date}</div>
            <h3 class="timeline-title">${item.title}</h3>
            <span class="timeline-company">
              <i class="${iconClass}" style="color: ${iconColor}; margin-right: 5px;"></i>
              ${item.company}
            </span>
            <p class="timeline-description">${item.description}</p>
            <div class="timeline-tech">
              ${item.technologies.map(tech => `<span class="timeline-tech-badge">${tech}</span>`).join('')}
            </div>
          </div>
        `;
        container.appendChild(timelineItem);
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderSkills(tab.dataset.category);
    });
});

// Initial render
renderSkills('all');
renderProjects();

// Separate work and education timelines
const workExperiences = experiences.filter(exp => exp.type === 'work');
const educationExperiences = experiences.filter(exp => exp.type === 'education');

renderTimeline(workTimeline, workExperiences);
renderTimeline(educationTimeline, educationExperiences);