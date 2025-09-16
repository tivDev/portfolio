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
        title: "Push Notification App",
        description: "A push notification service for web and mobile apps, delivering real-time updates and alerts to users.",
        technologies: ["HTML/CSS", "JavaScript", "Python"],
        image: "https://sinch.com/wp-content/uploads/2024/08/Sinch-Blog-What-is-a-push-notification-handset_1400x1014-2.png",
        codeUrl: "https://github.com/example/ecommerce",
        demoUrl: "https://ecommerce.example.com"
    },
    {
        title: "Telegram Bot Send Message",
        description: "A Python script that sends a message to a Telegram chat using the Telegram Bot API.",
        technologies: ["Python"],
        image: "https://cdn.umnico.com/production/landing/en-article26.png",
        codeUrl: "https://github.com/example/ecommerce",
        demoUrl: "https://ecommerce.example.com"
    },
    {
        title: "Socket.io Realtime data",
        description: "A web application that displays real-time data using Socket.io and Node.js.",
        technologies: ["HTML/CSS", "JavaScript", "Node.js","MySQL","Socket.io"],
        image: "https://miro.medium.com/v2/resize:fit:1400/1*f0txX3ZKNu6tYilnteFyLA.jpeg",
        codeUrl: "https://github.com/example/task-manager",
        demoUrl: "https://tasks.example.com"
    }
];

const experiences = [
    {
        title: "Backend ERPNext Developer",
        company: "103 DiTech",
        date: "2025 - Present",
        description: "Design, develop, and maintain ERPNext apps for clients. Build APIs, automate workflows, enhance modules, and improve UIs with HTML/CSS/JavaScript.",
        technologies: ["Python", "Frappe Framework", "Jinja2", "HTML", "CSS", "JavaScript","Bootstrap", "jQuery","Tailwind CSS", "GitLab"],
        type: "work"
    },
    {
        title: "Internship - Backend ERPNext Developer",
        company: "103 DiTech",
        date: "2024",
        description: "Assisted in developing ERPNext modules and simple APIs, configuring DocTypes, and doing light front-end work with HTML/CSS/JavaScript.",
        technologies: ["Python", "Frappe Framework", "Jinja2", "HTML", "CSS", "JavaScript", "jQuery", "GitLab"],
        type: "work"
    },
    {
        title: "Bachelor's in Computer Science",
        company: "Code Academy",
        date: "2025-Present",
        description: "Completed intensive 12-week coding bootcamp focused on full stack JavaScript development. Built multiple projects including a social media platform and e-commerce site.",
        technologies: ["Java", "C#", "Node.js", "MongoDB"],
        type: "education"
    },
    {
        title: "Associate's in Web Development",
        company: "PNC",
        date: "2022 - 2024",
        description: "Graduated with honors from Passerelles numériques Cambodia (PNC). Studied software engineering, algorithms, databases, and modern web technologies.",
        technologies: ["HTML/CSS", "JavaScript", "Bootstrap", "PHP", "Node.js", "Vue.js", "Python", "Laravel", "MySQL", "Data Structures", "Linux", "Git", "GitHub", "Jira", "Figma", "Firebase", "Postman"],
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
        viewAllBtn.className = 'view-all-btn';
        viewAllBtn.style.width = '200px';
        viewAllBtn.innerHTML = 'View All <i class="fa-solid fa-arrow-right"></i>';
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