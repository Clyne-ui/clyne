export const portfolioData = {
  name: 'Clyne  Wafula',
  title: 'Full Stack Software Engineer & Systems Architect',
  email: 'clynewafula1@gmail.com',
  github: 'https://github.com/Clyne-ui',
  profileImage: '/images/profil.jpeg',

  summary: `A passionate Full Stack Software Engineer and Systems Architect with expertise in building 
scalable, high-performance systems. Specialized in designing robust backend architectures, developing 
feature-rich frontend applications, and orchestrating cloud infrastructure. Proven track record of 
leading technical initiatives that improve system reliability and user experience.`,

  skills: {
    backend: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5', 'CSS3'],
    tools: ['Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD', 'Linux', 'Nginx'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Elasticsearch'],
    methodologies: ['Agile', 'REST APIs', 'GraphQL', 'Microservices', 'System Design', 'DevOps'],
  },

  projects: [
    {
      title: 'Scalable E-Commerce Platform',
      description: 'Built a full-stack e-commerce platform handling 10k+ daily active users with real-time inventory management and payment processing.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
      achievements: ['50% faster checkout experience', '99.9% uptime', 'Real-time inventory sync'],
      link: 'https://bachlystore.vercel.app/',
    },
    {
      title: 'Distributed System Monitor',
      description: 'Designed and implemented a comprehensive monitoring solution for distributed microservices with real-time alerting.',
      technologies: ['Python', 'Kubernetes', 'Prometheus', 'Grafana', 'ELK Stack'],
      achievements: ['Detects anomalies in <2s', 'Monitors 1000+ metrics', 'Custom alert rules'],
      link: '#',
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Created an interactive analytics dashboard processing millions of data points for business intelligence.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'WebSockets'],
      achievements: ['Sub-second data updates', 'Custom visualizations', '100+ concurrent users'],
      link: '#',
    },
  ],

  experience: [
    {
      company: 'Tech Innovation Corp',
      position: 'Senior Full Stack Engineer',
      duration: '2024 - Present',
      description: 'Led development of microservices architecture, managed team of 5 engineers, reduced deployment time by 70%.',
    },
    {
      company: 'Digital Solutions Ltd',
      position: 'Full Stack Engineer',
      duration: '2022 - 2024',
      description: 'Developed RESTful APIs, implemented frontend features in React, optimized database queries for 10x performance improvement.',
    },
    {
      company: 'StartUp Ventures',
      position: 'Junior Developer',
      duration: '2020 - 2022',
      description: 'Contributed to full stack development, learned modern development practices, assisted in system design decisions.',
    },
  ],

  education: [
    {
      school: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      graduation: '2019',
      details: 'Specialized in Software Engineering and Systems Architecture',
    },
    {
      school: 'Online Learning Platform',
      degree: 'AWS Certified Solutions Architect',
      graduation: '2021',
      details: 'Professional level certification in cloud architecture',
    },
  ],

  softSkills: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration', 'Project Management', 'Mentoring', 'Adaptability'],

  hobbies: [
    { name: 'Open Source Contribution', description: 'Active contributor to several popular open-source projects' },
    { name: 'Technical Writing', description: 'Published articles on system design and backend architecture' },
    { name: 'Code Golf', description: 'Enjoys writing elegant, concise solutions to complex problems' },
    { name: 'Gaming', description: 'Competitive gaming enthusiast, values strategy and teamwork' },
  ],
};
