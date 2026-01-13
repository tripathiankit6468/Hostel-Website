import { useState } from 'react';
import { ChevronDown, Code2, BookOpen, Zap, Trophy } from 'lucide-react';

export default function PersonalizedLearning() {
  const [selectedYear, setSelectedYear] = useState('1st');
  const [selectedTrack, setSelectedTrack] = useState('programming');
  const [expandedModule, setExpandedModule] = useState(null);

  const yearData = {
    '1st': {
      programming: {
        title: '🎯 Core Programming Fundamentals',
        description: 'Master the basics of programming with C and foundational DSA',
        modules: [
          {
            id: 1,
            name: 'C Programming Mastery',
            icon: '🔤',
            duration: '45 days',
            topics: [
              'Variables, Data Types & Operators',
              'Control Flow (if, loops, switch)',
              'Functions & Recursion',
              'Arrays & Strings',
              'Pointers & Memory Management',
              'File Handling',
              'Structures & Unions'
            ],
            projects: [
              { name: 'Calculator with Functions', level: 'Easy' },
              { name: 'Student Management System', level: 'Medium' },
              { name: 'Library Management', level: 'Medium' },
              { name: 'File-based Database', level: 'Hard' }
            ],
            resources: [
              'GeeksforGeeks C Tutorial',
              'CodeWithHarry - C Course',
              'LeetCode Easy Problems (50+)',
              'HackerEarth C Practice'
            ]
          },
          {
            id: 2,
            name: 'Data Structures & Algorithms Basics',
            icon: '📊',
            duration: '60 days',
            topics: [
              'Arrays & Linked Lists',
              'Stacks & Queues',
              'Sorting Algorithms (Bubble, Selection, Insertion)',
              'Searching (Linear, Binary)',
              'Basics of Algorithm Complexity',
              'Time & Space Analysis',
              'Introduction to Problem Solving'
            ],
            projects: [
              { name: 'Array Manipulation Tool', level: 'Easy' },
              { name: 'Stack-based Expression Evaluator', level: 'Medium' },
              { name: 'Queue Management System', level: 'Medium' },
              { name: 'Sorting Algorithm Visualizer', level: 'Hard' }
            ],
            resources: [
              'Abdul Bari DSA Playlist',
              'GeeksforGeeks DSA',
              'LeetCode Easy DSA Problems',
              'InterviewBit DSA Track'
            ]
          }
        ],
        competitivePrep: {
          platforms: ['HackerRank', 'LeetCode', 'HackerEarth', 'CodeChef'],
          targetProblems: 'Solve 50+ Easy problems',
          contests: 'Join 5-6 contests'
        }
      },
      development: {
        title: '💻 Web Development Basics',
        description: 'Learn HTML, CSS, and JavaScript fundamentals',
        modules: [
          {
            id: 1,
            name: 'HTML5 & CSS3 Fundamentals',
            icon: '🎨',
            duration: '30 days',
            topics: [
              'HTML Structure & Semantics',
              'Form Elements & Validation',
              'CSS Selectors & Box Model',
              'Flexbox Layout',
              'CSS Grid',
              'Responsive Design',
              'CSS Animations & Transitions'
            ],
            projects: [
              { name: 'Personal Portfolio Website', level: 'Easy' },
              { name: 'Responsive Landing Page', level: 'Medium' },
              { name: 'Product Showcase Page', level: 'Medium' }
            ],
            resources: [
              'freeCodeCamp HTML & CSS',
              'MDN Web Docs',
              'Codecademy Web Development',
              'CSS-Tricks Articles'
            ]
          },
          {
            id: 2,
            name: 'JavaScript Fundamentals',
            icon: '⚡',
            duration: '45 days',
            topics: [
              'Variables, Data Types & Operators',
              'Functions & Scope',
              'ES6+ Features (Arrow, Destructuring, Spread)',
              'DOM Manipulation',
              'Event Handling',
              'Async/Await & Promises',
              'Local Storage & Sessions'
            ],
            projects: [
              { name: 'Todo List App', level: 'Easy' },
              { name: 'Weather App with API', level: 'Medium' },
              { name: 'Image Gallery with Filters', level: 'Medium' },
              { name: 'Quiz Application', level: 'Hard' }
            ],
            resources: [
              'JavaScript.info',
              'CodeWithHarry JavaScript',
              'freeCodeCamp JavaScript Course',
              'MDN JavaScript Guide'
            ]
          }
        ]
      }
    },
    '2nd': {
      programming: {
        title: '🚀 Advanced Programming',
        description: 'Java, Python, and intermediate DSA with real-world problems',
        modules: [
          {
            id: 1,
            name: 'Java Advanced',
            icon: '☕',
            duration: '50 days',
            topics: [
              'OOP Concepts (Classes, Inheritance, Polymorphism)',
              'Collections Framework',
              'Exception Handling',
              'Multithreading',
              'File I/O & Serialization',
              'JDBC Database Connection',
              'Design Patterns Basics'
            ],
            projects: [
              { name: 'Banking System', level: 'Medium' },
              { name: 'Employee Management Portal', level: 'Medium' },
              { name: 'Chat Application', level: 'Hard' },
              { name: 'E-commerce Database System', level: 'Hard' }
            ],
            resources: [
              'CodeWithHarry Java',
              'GeeksforGeeks Java',
              'Udemy Java Masterclass',
              'LeetCode Medium Problems'
            ]
          },
          {
            id: 2,
            name: 'Python for Data & Automation',
            icon: '🐍',
            duration: '45 days',
            topics: [
              'Python Syntax & OOP',
              'Pandas & NumPy',
              'File Handling & RegEx',
              'Web Scraping (BeautifulSoup)',
              'Automation Scripts',
              'Python Decorators & Generators',
              'Testing & Debugging'
            ],
            projects: [
              { name: 'Data Analysis Project', level: 'Medium' },
              { name: 'Web Scraper', level: 'Medium' },
              { name: 'Automation Bot', level: 'Hard' },
              { name: 'Machine Learning Basics', level: 'Hard' }
            ],
            resources: [
              'GeeksforGeeks Python',
              'Real Python',
              'Kaggle Python Tutorials',
              'DataCamp Python Course'
            ]
          },
          {
            id: 3,
            name: 'Intermediate DSA',
            icon: '🌳',
            duration: '60 days',
            topics: [
              'Trees & Binary Search Trees',
              'Graphs & Graph Algorithms',
              'Dynamic Programming Basics',
              'Advanced Sorting & Searching',
              'Greedy Algorithms',
              'Hashing & HashMaps',
              'Problem-Solving Strategies'
            ],
            projects: [
              { name: 'File System Tree', level: 'Medium' },
              { name: 'Social Network Graph', level: 'Hard' },
              { name: 'Route Optimizer', level: 'Hard' }
            ],
            resources: [
              'Abdul Bari Advanced DSA',
              'LeetCode Medium Problems (100+)',
              'InterviewBit DSA',
              'Striver DSA Sheet'
            ]
          }
        ]
      },
      development: {
        title: '🔗 Full-Stack Development',
        description: 'React, Node.js, and databases',
        modules: [
          {
            id: 1,
            name: 'React.js Mastery',
            icon: '⚛️',
            duration: '45 days',
            topics: [
              'Components & JSX',
              'State & Props',
              'Hooks (useState, useEffect, useContext)',
              'Routing with React Router',
              'State Management (Redux intro)',
              'API Integration',
              'Performance Optimization'
            ],
            projects: [
              { name: 'Blog Platform', level: 'Medium' },
              { name: 'E-commerce Store', level: 'Hard' },
              { name: 'Social Media App', level: 'Hard' }
            ],
            resources: [
              'React Official Documentation',
              'CodeWithHarry React',
              'freeCodeCamp React Course',
              'Scrimba React Tutorial'
            ]
          },
          {
            id: 2,
            name: 'Node.js & Express',
            icon: '🟢',
            duration: '40 days',
            topics: [
              'Node.js Basics & Modules',
              'Express Framework',
              'RESTful API Design',
              'Middleware & Authentication',
              'Database Integration',
              'Error Handling',
              'Deployment'
            ],
            projects: [
              { name: 'RESTful Blog API', level: 'Medium' },
              { name: 'User Authentication System', level: 'Hard' },
              { name: 'Real-time Chat Backend', level: 'Hard' }
            ],
            resources: [
              'Traversy Media Node.js',
              'CodeWithHarry Node.js',
              'The Net Ninja Node.js',
              'Official Node.js Documentation'
            ]
          },
          {
            id: 3,
            name: 'Databases & SQL',
            icon: '🗄️',
            duration: '35 days',
            topics: [
              'SQL Fundamentals',
              'Joins & Advanced Queries',
              'Database Design',
              'MongoDB & NoSQL',
              'Indexing & Optimization',
              'Backup & Security',
              'ORM (Sequelize/Mongoose)'
            ],
            projects: [
              { name: 'Database Design Project', level: 'Medium' },
              { name: 'Data Migration Tool', level: 'Hard' }
            ],
            resources: [
              'SQLZoo',
              'Mode Analytics SQL Tutorial',
              'MongoDB University',
              'GeeksforGeeks Database Design'
            ]
          }
        ]
      }
    },
    '3rd': {
      programming: {
        title: '⭐ Advanced Topics & Specialization',
        description: 'System design, advanced DSA, and competitive programming',
        modules: [
          {
            id: 1,
            name: 'Advanced DSA & CP',
            icon: '🎯',
            duration: '60 days',
            topics: [
              'Advanced DP Problems',
              'Graph Algorithms (Dijkstra, Floyd-Warshall)',
              'Segment Trees & Fenwick Trees',
              'Heavy-Light Decomposition',
              'Competitive Programming Techniques',
              'Math Concepts for CP',
              'Advanced Problem Solving'
            ],
            projects: [
              { name: 'Contest Solution Library', level: 'Hard' },
              { name: 'Algorithm Visualizer', level: 'Hard' }
            ],
            resources: [
              'Codeforces Blog',
              'LeetCode Hard Problems',
              'AtCoder Editorial',
              'Competitive Programmer Handbook'
            ]
          },
          {
            id: 2,
            name: 'System Design Basics',
            icon: '🏗️',
            duration: '40 days',
            topics: [
              'Scalability & Optimization',
              'Databases at Scale',
              'Caching Strategies',
              'Message Queues',
              'Microservices Architecture',
              'API Rate Limiting',
              'Case Studies (Twitter, Instagram, etc)'
            ],
            projects: [
              { name: 'Design a URL Shortener', level: 'Hard' },
              { name: 'Design a Chat System', level: 'Hard' }
            ],
            resources: [
              'System Design Interview',
              'Grokking System Design',
              'Alex Xu System Design',
              'YouTube System Design Channels'
            ]
          },
          {
            id: 3,
            name: 'C++ for Competitive Programming',
            icon: '🔧',
            duration: '45 days',
            topics: [
              'C++ STL & Collections',
              'Pointers & References',
              'Templates & Generics',
              'Performance Optimization',
              'Advanced CP Techniques',
              'Bit Manipulation',
              'Complex Algorithms Implementation'
            ],
            projects: [
              { name: 'High-performance Algorithm Solutions', level: 'Hard' }
            ],
            resources: [
              'CP-Algorithms',
              'GeeksforGeeks C++',
              'Competitive Programming book',
              'Codeforces Tutorials'
            ]
          }
        ]
      },
      development: {
        title: '🚀 Advanced Full-Stack & DevOps',
        description: 'Docker, Kubernetes, Microservices, and deployment',
        modules: [
          {
            id: 1,
            name: 'Docker & Containerization',
            icon: '📦',
            duration: '30 days',
            topics: [
              'Docker Basics & Images',
              'Containerization',
              'Docker Compose',
              'Networking & Volumes',
              'Docker Registry',
              'Best Practices',
              'CI/CD Integration'
            ],
            projects: [
              { name: 'Containerize Full-stack App', level: 'Hard' },
              { name: 'Multi-container Application', level: 'Hard' }
            ],
            resources: [
              'Docker Official Documentation',
              'Traversy Media Docker',
              'Docker for Developers Course',
              'Katacoda Docker Labs'
            ]
          },
          {
            id: 2,
            name: 'AWS & Cloud Services',
            icon: '☁️',
            duration: '50 days',
            topics: [
              'AWS Fundamentals (EC2, S3, RDS)',
              'Lambda & Serverless',
              'CloudFront & CDN',
              'IAM & Security',
              'Auto-scaling & Load Balancing',
              'Database Services',
              'Monitoring & Logging'
            ],
            projects: [
              { name: 'Deploy App on AWS', level: 'Hard' },
              { name: 'Serverless Application', level: 'Hard' }
            ],
            resources: [
              'AWS Documentation',
              'Linux Academy AWS Course',
              'Udemy AWS Solutions Architect',
              'A Cloud Guru AWS Training'
            ]
          },
          {
            id: 3,
            name: 'Advanced React & Performance',
            icon: '⚛️',
            duration: '40 days',
            topics: [
              'Advanced Hooks & Patterns',
              'Performance Optimization',
              'Code Splitting & Lazy Loading',
              'State Management (Redux, Zustand)',
              'TypeScript with React',
              'Testing (Jest, React Testing Library)',
              'Next.js Framework'
            ],
            projects: [
              { name: 'Production-Grade App', level: 'Hard' },
              { name: 'Next.js SaaS Platform', level: 'Hard' }
            ],
            resources: [
              'Epic React',
              'React Documentation',
              'Next.js Documentation',
              'Kent C. Dodds Courses'
            ]
          }
        ]
      }
    },
    '4th': {
      programming: {
        title: '🏆 Interview Prep & Specialization',
        description: 'Focus on interviews, hard problems, and specialization',
        modules: [
          {
            id: 1,
            name: 'DSA Interview Preparation',
            icon: '💼',
            duration: '90 days',
            topics: [
              'Company-specific patterns',
              'Mock interviews',
              'Behavioral questions',
              'System design interviews',
              'Problem analysis techniques',
              'Optimization strategies',
              'Communication skills'
            ],
            projects: [
              { name: 'Solve 300+ LeetCode Problems', level: 'Hard' },
              { name: 'Conduct Mock Interviews', level: 'Hard' }
            ],
            resources: [
              'LeetCode Hard Track',
              'InterviewBit',
              'Blind 75',
              'TakeUForward DSA'
            ]
          },
          {
            id: 2,
            name: 'Machine Learning Basics',
            icon: '🤖',
            duration: '60 days',
            topics: [
              'Python for ML',
              'Scikit-learn & Libraries',
              'Linear Regression & Classification',
              'Neural Networks Basics',
              'Natural Language Processing',
              'Deep Learning Introduction',
              'Project Development'
            ],
            projects: [
              { name: 'Movie Recommendation System', level: 'Hard' },
              { name: 'Sentiment Analysis Project', level: 'Hard' },
              { name: 'Predictive Model', level: 'Hard' }
            ],
            resources: [
              'Andrew Ng Machine Learning',
              'Fast.ai',
              'Kaggle ML Courses',
              'DeepLearning.AI Specialization'
            ]
          },
          {
            id: 3,
            name: 'Open Source Contribution',
            icon: '🌍',
            duration: 'Ongoing',
            topics: [
              'GitHub Workflow',
              'Open Source Best Practices',
              'Code Review Process',
              'Documentation',
              'Community Guidelines',
              'Version Control',
              'Contribution Etiquette'
            ],
            projects: [
              { name: 'Contribute to 5+ Projects', level: 'Hard' },
              { name: 'Create Your Own Library', level: 'Hard' }
            ],
            resources: [
              'First Timers Only',
              'Good First Issue',
              'Open Source Guides',
              'GitHub Documentation'
            ]
          }
        ]
      },
      development: {
        title: '💎 Enterprise Development & Leadership',
        description: 'Advanced patterns, architecture, and technical leadership',
        modules: [
          {
            id: 1,
            name: 'Microservices & Architecture',
            icon: '🏛️',
            duration: '50 days',
            topics: [
              'Microservices Pattern',
              'API Gateway',
              'Service Mesh (Istio)',
              'Event-driven Architecture',
              'CQRS Pattern',
              'Distributed Transactions',
              'Monitoring & Tracing'
            ],
            projects: [
              { name: 'Build Microservices System', level: 'Hard' },
              { name: 'Event-driven Application', level: 'Hard' }
            ],
            resources: [
              'Microservices Patterns',
              'System Design Interview',
              'Kubernetes Official Docs',
              'Istio Documentation'
            ]
          },
          {
            id: 2,
            name: 'Security & Best Practices',
            icon: '🔐',
            duration: '40 days',
            topics: [
              'OAuth & JWT',
              'OWASP Top 10',
              'Encryption & Hashing',
              'SQL Injection Prevention',
              'CORS & CSRF',
              'Security Headers',
              'Vulnerability Scanning'
            ],
            projects: [
              { name: 'Secure Application Audit', level: 'Hard' },
              { name: 'Implement Security Features', level: 'Hard' }
            ],
            resources: [
              'OWASP WebGoat',
              'Portswigger Web Security',
              'Security.txt',
              'CWE Top 25'
            ]
          },
          {
            id: 3,
            name: 'SaaS & Product Development',
            icon: '🚀',
            duration: '60 days',
            topics: [
              'Product Architecture',
              'Multi-tenancy',
              'Subscription Management',
              'Payment Integration',
              'Analytics & Metrics',
              'Growth Engineering',
              'Deployment & Scaling'
            ],
            projects: [
              { name: 'Build a SaaS MVP', level: 'Hard' },
              { name: 'Complete SaaS Platform', level: 'Hard' }
            ],
            resources: [
              'Indie Hackers',
              'The Lean Startup',
              'SaaS Architecture Guide',
              'Stripe Documentation'
            ]
          }
        ]
      }
    }
  };

  const getModulesByTrack = () => {
    const trackData = yearData[selectedYear]?.[selectedTrack];
    return trackData?.modules || [];
  };

  const renderModule = (module) => {
    const isExpanded = expandedModule === module.id;
    return (
      <div key={module.id} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all">
        <button
          onClick={() => setExpandedModule(isExpanded ? null : module.id)}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
        >
          <div className="flex items-center gap-4 flex-1">
            <span className="text-3xl">{module.icon}</span>
            <div>
              <h4 className="text-lg font-bold text-white">{module.name}</h4>
              <p className="text-sm text-slate-400">⏱️ {module.duration}</p>
            </div>
          </div>
          <ChevronDown 
            size={24} 
            className={`text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>

        {isExpanded && (
          <div className="px-6 pb-6 border-t border-slate-700 bg-slate-900/50">
            {/* Topics */}
            <div className="mb-6">
              <h5 className="text-sm font-bold text-amber-400 mb-3 flex items-center gap-2">
                <Code2 size={18} /> Topics to Learn
              </h5>
              <ul className="space-y-2">
                {module.topics.map((topic, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="text-green-400">✓</span> {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-6">
              <h5 className="text-sm font-bold text-blue-400 mb-3 flex items-center gap-2">
                <Zap size={18} /> Hands-on Projects
              </h5>
              <div className="space-y-2">
                {module.projects.map((project, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
                    <span className="text-sm text-white">{project.name}</span>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      project.level === 'Easy' ? 'bg-green-900/50 text-green-300' :
                      project.level === 'Medium' ? 'bg-yellow-900/50 text-yellow-300' :
                      'bg-red-900/50 text-red-300'
                    }`}>
                      {project.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h5 className="text-sm font-bold text-purple-400 mb-3 flex items-center gap-2">
                <BookOpen size={18} /> Recommended Resources
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {module.resources.map((resource, idx) => (
                  <div key={idx} className="bg-slate-800 p-2 rounded text-sm text-slate-300">
                    📚 {resource}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🎓 Personalized Learning Roadmap</h1>
          <p className="text-lg opacity-90">Choose your year and track to follow a customized learning path</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Year Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Select Your Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['1st', '2nd', '3rd', '4th'].map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`p-4 rounded-lg font-bold text-lg transition-all ${
                  selectedYear === year
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {year} Year
              </button>
            ))}
          </div>
        </div>

        {/* Track Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Select Your Learning Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setSelectedTrack('programming')}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedTrack === 'programming'
                  ? 'border-purple-500 bg-purple-900/30 text-white'
                  : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600'
              }`}
            >
              <div className="text-4xl mb-3">💻</div>
              <div className="font-bold text-lg">Programming & DSA</div>
              <div className="text-sm mt-2 opacity-75">Core languages, algorithms & competitive programming</div>
            </button>

            <button
              onClick={() => setSelectedTrack('development')}
              className={`p-6 rounded-lg border-2 transition-all ${
                selectedTrack === 'development'
                  ? 'border-blue-500 bg-blue-900/30 text-white'
                  : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600'
              }`}
            >
              <div className="text-4xl mb-3">🚀</div>
              <div className="font-bold text-lg">Web Development</div>
              <div className="text-sm mt-2 opacity-75">Frontend, backend, databases & deployment</div>
            </button>
          </div>
        </div>

        {/* Module Information */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-2">
              {yearData[selectedYear]?.[selectedTrack]?.title}
            </h3>
            <p className="text-slate-300">
              {yearData[selectedYear]?.[selectedTrack]?.description}
            </p>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-white">📚 Learning Modules</h2>
          {getModulesByTrack().map(module => renderModule(module))}
        </div>

        {/* Study Tips */}
        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-700/50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
            <Trophy size={28} /> Pro Tips for Success
          </h3>
          <ul className="space-y-3 text-slate-200">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">1</span>
              <span><strong>Consistency:</strong> Study 2-3 hours daily. Better to do 30 mins every day than 5 hours once a week</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">2</span>
              <span><strong>Build Projects:</strong> Don't just watch tutorials. Code along and build projects to reinforce learning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">3</span>
              <span><strong>Practice Problems:</strong> Solve problems on LeetCode/HackerRank daily (even 1 problem is good)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">4</span>
              <span><strong>Join Communities:</strong> Be part of coding groups, attend meetups, participate in contests</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">5</span>
              <span><strong>Document Your Learning:</strong> Write blogs, create GitHub repos, build a portfolio</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-2xl">6</span>
              <span><strong>Revise Regularly:</strong> Don't move forward without understanding. Revise difficult topics weekly</span>
            </li>
          </ul>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">300+</div>
            <div className="text-sm text-slate-400 mt-2">DSA Problems to Solve</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-sm text-slate-400 mt-2">Projects Suggested</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-400">200+</div>
            <div className="text-sm text-slate-400 mt-2">Learning Resources</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400">4</div>
            <div className="text-sm text-slate-400 mt-2">Year Pathways</div>
          </div>
        </div>
      </div>
    </div>
  );
}
