import { Job, Candidate, Company, LocationItem, Course, BlogPost, HelpArticle, FAQItem } from '../types';

export const mockJobs: Job[] = [
  {
    id: 'job-1',
    slug: 'chief-people-and-culture-officer-united-states-of-america',
    title: 'Chief People and Culture Officer',
    company: 'International Rescue Committee',
    companySlug: 'international-rescue-committee',
    location: 'United States of America',
    locationSlug: 'united-states-of-america',
    type: 'Full-time',
    salary: '$120,000 - $145,000 / yr',
    category: 'Human Resources',
    postedAt: 'Today',
    deadline: '2026-11-30',
    experienceLevel: 'Executive',
    matchScore: 94,
    isEasyApply: true,
    description: 'The Chief People and Culture Officer (CPCO) will lead human resource strategy, talent acquisition, total rewards, and foster an inclusive global organizational culture across international humanitarian missions.',
    responsibilities: [
      'Lead global HR operations across 40+ country offices',
      'Champion diversity, equity, and inclusion initiatives at leadership level',
      'Design modern talent retention and compensation frameworks',
      'Partner with the executive board to align organizational strategy with staff well-being'
    ],
    requirements: [
      '12+ years of senior executive human resources leadership in global organizations',
      'Demonstrated expertise in international labor laws and non-profit talent management',
      'Master’s degree in Human Resources, Organizational Psychology or related field',
      'Exceptional stakeholder communication and change management skills'
    ],
    benefits: [
      'Comprehensive international health & dental insurance',
      'Generous paid annual leave (30 days + public holidays)',
      'Global pension contribution scheme',
      'Remote flexibility with international travel allowance'
    ]
  },
  {
    id: 'job-2',
    slug: 'programme-management-senior-associate-united-states-of-america',
    title: 'Programme Management Senior Associate',
    company: 'UNOPS',
    companySlug: 'unops',
    location: 'United States of America',
    locationSlug: 'united-states-of-america',
    type: 'Remote',
    salary: '$78,000 - $92,000 / yr',
    category: 'Program Management',
    postedAt: '1 day ago',
    deadline: '2026-11-20',
    experienceLevel: 'Senior',
    matchScore: 89,
    isEasyApply: true,
    description: 'UNOPS is seeking a Programme Management Senior Associate to oversee multi-million dollar sustainable infrastructure and development portfolios, ensuring rigorous monitoring, risk analysis, and partner reporting.',
    responsibilities: [
      'Coordinate grant management, budget allocation, and financial tracking',
      'Prepare quarterly performance dashboards for donor partners',
      'Conduct field monitoring missions and compliance assessments',
      'Facilitate knowledge sharing between country teams and headquarters'
    ],
    requirements: [
      '6+ years of programme management experience within international development or UN system',
      'PRINCE2, PMP or MSP certification preferred',
      'Bachelors or Masters in International Relations, Public Administration, or Economics',
      'Fluency in English; proficiency in French or Spanish is an asset'
    ],
    benefits: [
      'UN scale compensation package',
      'Flexible remote work environment',
      'Education grant assistance for dependents',
      'Professional training credits'
    ]
  },
  {
    id: 'job-3',
    slug: 'team-leader-reset-programme-united-states-of-america',
    title: 'Team Leader RESET Programme',
    company: 'ReliefWeb Aid Partners',
    companySlug: 'international-rescue-committee',
    location: 'Addis Ababa, Ethiopia',
    locationSlug: 'addis-ababa',
    type: 'Full-time',
    salary: 'ETB 85,000 - 110,000 / mo',
    category: 'Operations',
    postedAt: '2 days ago',
    deadline: '2026-12-05',
    experienceLevel: 'Lead',
    matchScore: 88,
    isEasyApply: true,
    description: 'Lead the RESET Programme consortium, overseeing community resilience, livelihood recovery, and emergency disaster risk preparedness across vulnerable regional zones.',
    responsibilities: [
      'Provide strategic leadership and consortium governance for 5 international NGO partners',
      'Manage annual programme budgets exceeding $6 million',
      'Liaise directly with regional disaster risk management commissions and UN OCHA',
      'Oversee technical teams across WASH, food security, and cash-transfer systems'
    ],
    requirements: [
      '8+ years directing large-scale humanitarian or resilience-building consortiums',
      'Strong track record in Ethiopian regional operational coordination',
      'Proven capacity in donor compliance (EU, USAID, FCDO)',
      'Fluency in Amharic and English'
    ],
    benefits: [
      'Health insurance including dependent coverage',
      'Field mission hardship allowances',
      'Annual performance bonus',
      'Continuous leadership development'
    ]
  },
  {
    id: 'job-4',
    slug: 'immigration-legal-assistant-united-states-of-america',
    title: 'Immigration Legal Assistant',
    company: 'Irssl Legal Group',
    companySlug: 'irssl',
    location: 'United States of America',
    locationSlug: 'united-states-of-america',
    type: 'Hybrid',
    salary: '$52,000 - $64,000 / yr',
    category: 'Legal',
    postedAt: '3 days ago',
    deadline: '2026-11-25',
    experienceLevel: 'Mid-Level',
    matchScore: 82,
    isEasyApply: true,
    description: 'Assist immigration attorneys in assembling employment-based and family petitions, consular processing paperwork, and managing client correspondence with federal agencies.',
    responsibilities: [
      'Prepare form I-140, I-485, and PERM labor certification packets',
      'Draft client support letters and compile supporting financial evidence',
      'Maintain case management databases with accurate filing deadlines',
      'Conduct intake interviews with prospective corporate and individual clients'
    ],
    requirements: [
      '3+ years experience as an immigration paralegal or legal assistant',
      'Familiarity with INSZoom, Docketwise, or LawLogix software',
      'Bilingual proficiency (English and Spanish or Portuguese) strongly desired',
      'High attention to detail and confidential client information handling'
    ],
    benefits: [
      'Paid bar/paralegal CLE dues',
      '401(k) retirement plan with 4% company match',
      'Hybrid schedule (2 days in-office, 3 days remote)',
      'Subsidized public transit pass'
    ]
  },
  {
    id: 'job-5',
    slug: 'gerente-de-negocios-pj-sao-paulo-brasil',
    title: 'Gerente de Negócios PJ (Corporate Banking)',
    company: 'Lojas Renner Financial',
    companySlug: 'renner',
    location: 'São Paulo, Brasil',
    locationSlug: 'sao-paulo-brasil',
    type: 'On-site',
    salary: 'R$ 8.500 - 11.000 / mês',
    category: 'Finance & Banking',
    postedAt: '3 days ago',
    deadline: '2026-11-15',
    experienceLevel: 'Senior',
    matchScore: 80,
    isEasyApply: true,
    description: 'Responsável pela prospecção ativa de clientes corporativos (PME e grandes empresas), gestão de carteira de crédito e oferta de soluções de capital de giro e investimentos.',
    responsibilities: [
      'Gerenciamento e expansão de carteira comercial B2B',
      'Análise de risco de crédito, balanços patrimoniais e fluxo de caixa de empresas',
      'Negociação de operações estruturadas e antecipação de recebíveis',
      'Atendimento consultivo e fidelização de clientes jurídicos'
    ],
    requirements: [
      'Certificação CPA-20 ou CEA vigente (obrigatório)',
      'Experiência consolidada no segmento bancário corporativo PJ',
      'Superior completo em Administração, Economia ou Ciências Contábeis',
      'Excelente networking e perfil focado em metas de rentabilidade'
    ],
    benefits: [
      'Participação nos Lucros e Resultados (PLR semestral)',
      'Vale Refeição e Alimentação de R$ 1.800/mês',
      'Plano de saúde e odontológico Bradesco Saúde',
      'Auxílio creche e previdência privada'
    ]
  },
  {
    id: 'job-6',
    slug: 'senior-full-stack-engineer-remote',
    title: 'Senior Full Stack Software Engineer',
    company: 'Wrkzon Tech Innovations',
    companySlug: 'wrkzon',
    location: 'Remote / Worldwide',
    locationSlug: 'remote-worldwide',
    type: 'Remote',
    salary: '$65,000 - $90,000 / yr',
    category: 'Software Engineering',
    postedAt: 'Just now',
    deadline: '2026-12-15',
    experienceLevel: 'Senior',
    matchScore: 98,
    isEasyApply: true,
    description: 'Join the core platform engineering team building next-generation career intelligence, LaTeX CV generation, and AI agent matching infrastructure.',
    responsibilities: [
      'Architect robust web applications using React, TypeScript, and server rendering',
      'Develop high-throughput REST and GraphQL APIs backed by PostgreSQL and Redis',
      'Implement real-time job matching pipelines and AI agent orchestration flows',
      'Mentor junior software engineers and champion code quality standards'
    ],
    requirements: [
      '5+ years full-stack experience with React, Node.js or C#/Go',
      'Proficiency in relational databases, indexing, and scalable caching',
      'Strong eye for accessible UI components and modern CSS systems',
      'Experience with distributed systems and background queue processing'
    ],
    benefits: [
      '100% remote anywhere in the world',
      '$2,500 annual home office & equipment stipend',
      'Unlimited paid time off policy',
      'Annual company retreats in international locations'
    ]
  },
  {
    id: 'job-7',
    slug: 'senior-financial-accountant-addis-ababa',
    title: 'Senior Financial Accountant',
    company: 'FinCorp Global',
    companySlug: 'fincorp-global',
    location: 'Addis Ababa, Ethiopia',
    locationSlug: 'addis-ababa',
    type: 'Full-time',
    salary: 'ETB 45,000 - 65,000 / mo',
    category: 'Accounting & Finance',
    postedAt: '4 days ago',
    deadline: '2026-11-28',
    experienceLevel: 'Senior',
    matchScore: 84,
    isEasyApply: true,
    description: 'Seeking a licensed senior accountant to prepare monthly IFRS financial statements, coordinate external audits, and manage federal tax filings with the Ethiopian Ministry of Revenues.',
    responsibilities: [
      'Perform monthly reconciliations and general ledger closings',
      'Ensure 100% compliance with IFRS standards and local ERCA regulations',
      'Coordinate payroll tax, withholding tax, and VAT submissions',
      'Supervise junior bookkeeping and invoice auditing staff'
    ],
    requirements: [
      'ACCA, CPA, or BA in Accounting & Finance from an accredited university',
      '4+ years post-qualification accounting experience',
      'Advanced proficiency in ERP systems (Peachtree, SAP, or QuickBooks)',
      'Strong organizational leadership and integrity'
    ],
    benefits: [
      'Provident fund scheme (15% employer contribution)',
      'Comprehensive family medical coverage',
      'Transport allowance and mobile phone package',
      'Annual performance bonus'
    ]
  },
  {
    id: 'job-8',
    slug: 'ui-ux-product-designer-remote',
    title: 'Product Designer (UI/UX & Design Systems)',
    company: 'DesignFlow Studio',
    companySlug: 'designflow',
    location: 'Remote',
    locationSlug: 'remote-worldwide',
    type: 'Remote',
    salary: '$55,000 - $75,000 / yr',
    category: 'Design & Creative',
    postedAt: '5 days ago',
    deadline: '2026-12-10',
    experienceLevel: 'Mid-Level',
    matchScore: 86,
    isEasyApply: true,
    description: 'Shape the intuitive user journey for millions of job seekers and hiring managers. Create elegant component libraries, design token systems, and interactive prototypes.',
    responsibilities: [
      'Design modern, accessible interfaces across web and mobile viewports',
      'Conduct user testing sessions to uncover friction points in CV builder workflows',
      'Maintain and expand Figma design token libraries matching front-end implementations',
      'Collaborate tightly with engineering squads during sprint deliveries'
    ],
    requirements: [
      '3+ years designing complex SaaS or marketplace digital products',
      'Demonstrated portfolio showcasing end-to-end UX case studies',
      'Mastery of Figma, auto-layout, component variants, and interactive prototyping',
      'Familiarity with HTML/CSS constraints and accessibility (WCAG 2.1 AA)'
    ],
    benefits: [
      'Flexible working hours across timezones',
      'Latest MacBook Pro + 4K monitor setup provided',
      '$1,200 annual learning and conference budget',
      'Wellness and fitness membership subsidy'
    ]
  }
];

export const mockCandidates: Candidate[] = [
  {
    id: 'cand-1',
    slug: 'abebaw-alanche-1',
    name: 'Abebaw Alanche',
    headline: 'Senior Full-Stack Engineer & Cloud Architect',
    location: 'Addis Ababa, Ethiopia',
    locationSlug: 'addis-ababa',
    initials: 'AA',
    experienceYears: 7,
    availability: 'Immediately',
    preferredRole: 'Senior Full-Stack Engineer / Tech Lead',
    cvTemplate: 'AwsomeCV',
    skills: ['React', 'TypeScript', 'C# .NET', 'Blazor', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
    languages: ['English (Fluent)', 'Amharic (Native)'],
    isPublic: true,
    summary: 'Versatile software engineer with 7+ years of experience engineering high-performance web applications, distributed APIs, and cloud microservices. Proven expertise in React, C# .NET, Blazor, and database optimization.',
    workHistory: [
      {
        title: 'Lead Software Engineer',
        company: 'ZonTech Solutions',
        period: '2023 - Present',
        location: 'Addis Ababa',
        highlights: [
          'Led architecture of enterprise job matching engine serving 150k+ monthly active users',
          'Reduced API response times by 48% via Redis caching and query indexing',
          'Mentored a team of 8 frontend and backend engineers across agile sprints'
        ]
      },
      {
        title: 'Senior Full Stack Developer',
        company: 'EthioFin Innovations',
        period: '2020 - 2023',
        location: 'Addis Ababa',
        highlights: [
          'Engineered core payment gateway integrations handling ETB 200M+ monthly transactions',
          'Migrated legacy monolith to modular React and .NET microservices with Docker deployment'
        ]
      }
    ],
    education: [
      {
        degree: 'B.Sc. in Computer Science',
        school: 'Addis Ababa University',
        period: '2015 - 2019',
        honors: 'Graduated with Great Distinction (CGPA 3.84)'
      }
    ],
    projects: [
      {
        name: 'LaTeX CV Engine',
        description: 'Automated JSON-to-PDF rendering engine converting structured resumes into publishable LaTeX documents.',
        tools: ['TypeScript', 'LaTeX', 'Node.js']
      },
      {
        name: 'Micro-Payments Telegram Bot',
        description: 'Serverless bot enabling seamless peer-to-peer digital transfers via telebirr and Chapa APIs.',
        tools: ['Python', 'FastAPI', 'PostgreSQL']
      }
    ],
    certifications: [
      'AWS Certified Solutions Architect – Associate',
      'Microsoft Certified: Azure Developer Associate'
    ]
  },
  {
    id: 'cand-2',
    slug: 'selamawit-tadesse-2',
    name: 'Selamawit Tadesse',
    headline: 'Senior Accountant & Financial Analyst (ACCA)',
    location: 'Addis Ababa, Ethiopia',
    locationSlug: 'addis-ababa',
    initials: 'ST',
    experienceYears: 6,
    availability: '2 Weeks Notice',
    preferredRole: 'Financial Controller / Senior Accountant',
    cvTemplate: 'Classic',
    skills: ['IFRS Reporting', 'Financial Modeling', 'Peachtree', 'SAP ERP', 'Tax Compliance', 'Cost Analysis', 'Auditing'],
    languages: ['English (Fluent)', 'Amharic (Native)'],
    isPublic: true,
    summary: 'ACCA-qualified finance professional with over 6 years of leadership in corporate accounting, financial planning, and tax strategy across manufacturing and tech consulting sectors.',
    workHistory: [
      {
        title: 'Senior Financial Accountant',
        company: 'Horizon Industrial Corp',
        period: '2022 - Present',
        location: 'Addis Ababa',
        highlights: [
          'Spearheaded annual financial audits with zero non-conformity findings for 3 consecutive years',
          'Automated VAT and payroll tax reconciliation saving 25 hours per financial month-end'
        ]
      },
      {
        title: 'Financial Analyst',
        company: 'Bole Commercial Consultants',
        period: '2019 - 2022',
        location: 'Addis Ababa',
        highlights: [
          'Built discounted cash flow (DCF) models evaluating $15M in private equity investments',
          'Managed corporate credit lines and treasury liquidity forecasts'
        ]
      }
    ],
    education: [
      {
        degree: 'B.A. in Accounting and Finance',
        school: 'Unity University',
        period: '2015 - 2019',
        honors: 'Summa Cum Laude'
      }
    ],
    certifications: [
      'ACCA Affiliate (Association of Chartered Certified Accountants)',
      'Advanced Financial Modeling (FMVA) – CFI Institute'
    ]
  },
  {
    id: 'cand-3',
    slug: 'dawit-haile-3',
    name: 'Dawit Haile',
    headline: 'DevOps & Site Reliability Engineer',
    location: 'Remote / Worldwide',
    locationSlug: 'remote-worldwide',
    initials: 'DH',
    experienceYears: 5,
    availability: 'Immediately',
    preferredRole: 'DevOps Engineer / SRE',
    cvTemplate: 'Modern',
    skills: ['Kubernetes', 'Terraform', 'CI/CD Pipelines', 'AWS / GCP', 'Prometheus & Grafana', 'Linux Admin', 'Bash / Go'],
    languages: ['English (Fluent)', 'Amharic (Native)'],
    isPublic: true,
    summary: 'Cloud infrastructure engineer specialized in automating scalable zero-downtime deployments, Kubernetes cluster orchestration, and infrastructure-as-code with Terraform.',
    workHistory: [
      {
        title: 'Senior DevOps Engineer',
        company: 'Global Cloud Systems',
        period: '2022 - Present',
        location: 'Remote',
        highlights: [
          'Maintained 99.99% uptime across production Kubernetes clusters hosting 40+ microservices',
          'Constructed GitLab CI/CD pipelines reducing release deployment times from 45 mins to 6 mins'
        ]
      }
    ],
    education: [
      {
        degree: 'B.Sc. in Software Engineering',
        school: 'Adama Science & Technology University',
        period: '2016 - 2020'
      }
    ],
    certifications: [
      'Certified Kubernetes Administrator (CKA)',
      'HashiCorp Certified: Terraform Associate'
    ]
  },
  {
    id: 'cand-4',
    slug: 'carlos-silva-4',
    name: 'Carlos Silva',
    headline: 'Senior Mobile Engineer (iOS & Android)',
    location: 'São Paulo, Brasil',
    locationSlug: 'sao-paulo-brasil',
    initials: 'CS',
    experienceYears: 8,
    availability: '1 Month',
    preferredRole: 'Lead Mobile Developer',
    cvTemplate: 'Europass',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Redux / Zustand', 'Mobile App Security', 'REST APIs'],
    languages: ['Portuguese (Native)', 'English (Fluent)', 'Spanish (Conversational)'],
    isPublic: true,
    summary: 'Passionate mobile application architect with 8 years crafting top-rated consumer fintech and e-commerce applications downloaded by over 5 million users on App Store and Google Play.',
    workHistory: [
      {
        title: 'Lead Mobile Architect',
        company: 'Fintech Brasil Inc',
        period: '2021 - Present',
        location: 'São Paulo',
        highlights: [
          'Architected offline-first React Native mobile banking app rated 4.8 stars with 2M+ active installs',
          'Decreased app crash rate to 0.02% by standardizing Sentry monitoring and comprehensive unit testing'
        ]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Computer Engineering',
        school: 'Universidade de São Paulo (USP)',
        period: '2013 - 2018'
      }
    ],
    certifications: [
      'Meta Certified Mobile Application Engineer'
    ]
  }
];

export const mockCompanies: Company[] = [
  {
    id: 'comp-1',
    slug: 'international-rescue-committee',
    name: 'International Rescue Committee',
    logoUrl: '/images/brand/wrkzon-icon-nav.png',
    industry: 'Humanitarian & Non-profit',
    headquarters: 'New York, United States',
    website: 'https://www.rescue.org',
    size: '10,000+ employees',
    openJobsCount: 14,
    description: 'The International Rescue Committee responds to the world’s worst humanitarian crises, helping people to survive, recover, and rebuild their lives.',
    specialties: ['Emergency Response', 'Refugee Resettlement', 'Public Health', 'Human Rights']
  },
  {
    id: 'comp-2',
    slug: 'unops',
    name: 'UNOPS',
    logoUrl: '/images/brand/wrkzon-icon-nav.png',
    industry: 'International Organization',
    headquarters: 'Copenhagen, Denmark',
    website: 'https://www.unops.org',
    size: '5,000 - 10,000 employees',
    openJobsCount: 8,
    description: 'UNOPS mission is to help people build better lives and countries achieve peace and sustainable development through infrastructure and procurement.',
    specialties: ['Sustainable Infrastructure', 'Procurement Services', 'Project Management']
  },
  {
    id: 'comp-3',
    slug: 'irssl',
    name: 'Irssl Legal & Immigration',
    logoUrl: '/images/brand/wrkzon-icon-nav.png',
    industry: 'Legal Services',
    headquarters: 'Washington D.C., United States',
    website: 'https://www.irssl.org',
    size: '50 - 200 employees',
    openJobsCount: 4,
    description: 'Providing comprehensive immigration legal services, corporate visa processing, and advocacy for global mobility.',
    specialties: ['Immigration Law', 'Employment Petitions', 'Consular Services']
  },
  {
    id: 'comp-4',
    slug: 'renner',
    name: 'Lojas Renner',
    logoUrl: '/images/brand/wrkzon-icon-nav.png',
    industry: 'Retail & Consumer Services',
    headquarters: 'Porto Alegre, Brasil',
    website: 'https://www.lojasrenner.com.br',
    size: '10,000+ employees',
    openJobsCount: 22,
    description: 'One of Latin America’s largest fashion and financial service ecosystems with over 600 retail stores.',
    specialties: ['Omnichannel Retail', 'Consumer Credit', 'Supply Chain', 'E-commerce']
  },
  {
    id: 'comp-5',
    slug: 'wrkzon',
    name: 'Wrkzon Technologies',
    logoUrl: '/images/brand/wrkzon-icon-nav.png',
    industry: 'Human Capital & AI Technology',
    headquarters: 'Addis Ababa & Global Remote',
    website: 'https://www.wrkzon.com',
    size: '20 - 50 employees',
    openJobsCount: 6,
    description: 'Building modern career intelligence, LaTeX CV generation, and AI agent matching infrastructure to empower talent worldwide.',
    specialties: ['AI Job Matching', 'Automated Resume Builder', 'Job Agent', 'Career Intelligence']
  }
];

export const mockLocations: LocationItem[] = [
  { id: 'loc-1', slug: 'united-states-of-america', name: 'United States of America', country: 'United States', jobCount: 420, featured: true },
  { id: 'loc-2', slug: 'addis-ababa', name: 'Addis Ababa, Ethiopia', country: 'Ethiopia', jobCount: 185, featured: true },
  { id: 'loc-3', slug: 'remote-worldwide', name: 'Remote / Worldwide', country: 'Global', jobCount: 310, featured: true },
  { id: 'loc-4', slug: 'sao-paulo-brasil', name: 'São Paulo, Brasil', country: 'Brasil', jobCount: 142, featured: true },
  { id: 'loc-5', slug: 'london-united-kingdom', name: 'London, United Kingdom', country: 'United Kingdom', jobCount: 98, featured: false },
  { id: 'loc-6', slug: 'nairobi-kenya', name: 'Nairobi, Kenya', country: 'Kenya', jobCount: 64, featured: false },
  { id: 'loc-7', slug: 'dubai-united-arab-emirates', name: 'Dubai, UAE', country: 'United Arab Emirates', jobCount: 88, featured: false }
];

export const mockCourses: Course[] = [
  {
    id: 'course-1',
    slug: 'modern-full-stack-web-development',
    title: 'Modern Full-Stack Development with React & TypeScript',
    category: 'Software Engineering',
    instructor: 'Yonas Kebede (Lead Engineer)',
    rating: 4.9,
    reviewCount: 340,
    duration: '32 Hours',
    level: 'Intermediate',
    studentsCount: 1820,
    description: 'Master enterprise-level web development from component design systems to scalable REST APIs, automated testing, and CI/CD deployment.',
    syllabus: [
      { title: 'TypeScript Fundamentals & Advanced Generics', duration: '4 Hours' },
      { title: 'React 19 Hooks, Server Components & State Architecture', duration: '8 Hours' },
      { title: 'Tailwind CSS, Accessibility (a11y) & Design Tokens', duration: '6 Hours' },
      { title: 'Node.js, PostgreSQL & Relational Modeling', duration: '8 Hours' },
      { title: 'Docker, CI/CD & Production Deployment', duration: '6 Hours' }
    ]
  },
  {
    id: 'course-2',
    slug: 'ai-tools-for-job-search-and-productivity',
    title: 'AI Tools & Automation for Career Growth and Productivity',
    category: 'Career Development',
    instructor: 'Dr. Helen Brooks',
    rating: 4.8,
    reviewCount: 215,
    duration: '14 Hours',
    level: 'All Levels',
    studentsCount: 2450,
    description: 'Learn how to leverage modern AI tools to accelerate your job search, tailor resumes, simulate technical interviews, and automate routine workflows.',
    syllabus: [
      { title: 'How Applicant Tracking Systems (ATS) Parse Resumes', duration: '2 Hours' },
      { title: 'Prompt Engineering for CV Tailoring and Cover Letters', duration: '4 Hours' },
      { title: 'Simulating Mock Job Interviews with AI', duration: '4 Hours' },
      { title: 'Building Automated Job Alert Pipelines', duration: '4 Hours' }
    ]
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: '10-smart-ways-to-find-a-job-faster-in-2026',
    title: '10 Smart Ways to Find a Job Faster in 2026',
    excerpt: 'Navigating the modern employment market requires modern strategies. Learn how AI tools, direct networking, and tailored CVs can shorten your search by weeks.',
    category: 'Job Search Strategy',
    readTime: '6 min read',
    date: 'Sep 1, 2026',
    author: { name: 'Wrkzon Editorial Team', role: 'Career Insights' },
    tags: ['Career Tips', 'Job Search', 'Productivity'],
    content: `
Landing a role in 2026 is no longer about submitting 100 identical generic resumes. Recruiters rely on modern scanning algorithms and targeted matching pipelines, meaning candidates who apply strategically stand out immediately.

### 1. Optimize Your Resume for LaTeX and Structured ATS Parsing
Most modern applicant tracking systems ingest structured JSON resumes or clean, single-column LaTeX PDFs. Avoid heavy graphics or multi-column text tables that confuse text parsers. Wrkzon’s built-in CV Maker outputs LaTeX-grade typography with clear semantic hierarchy.

### 2. Tailor Each Application with Relevant Keywords
Read the job description carefully. If the role emphasizes "cross-functional stakeholder management" or "IFRS compliance," ensure those exact competencies appear prominently in your experience summary and bullet points.

### 3. Leverage AI Job Agents
Instead of manually refreshing job boards multiple times a day, connect your profile to an automated Job Agent. The agent scores live postings against your background and notifies you the instant high-match opportunities go live.

### 4. Tap Into Verified Telegram Channels and Bots
In many growing tech hubs across Africa and Latin America, real-time job highlights break first on Telegram. Join verified channels like @wrkzon_com for curated alerts without clutter.
    `
  },
  {
    id: 'blog-2',
    slug: 'how-to-answer-tell-me-about-yourself-1-minute-rule',
    title: 'How to Answer "Tell Me About Yourself" (The 1-Minute Rule)',
    excerpt: 'The opening interview question sets the tone for the entire conversation. Master the Present-Past-Future formula to answer with confidence and poise.',
    category: 'Interview Preparation',
    readTime: '5 min read',
    date: 'Oct 24, 2026',
    author: { name: 'Sara Jenkins', role: 'Executive Recruiter' },
    tags: ['Interviews', 'Communication', 'Hiring'],
    content: `
"Tell me about yourself" is the most common opening question in job interviews, yet it trips up more than 70% of candidates. Candidates often ramble through their entire chronological autobiography.

### The 1-Minute Formula: Present, Past, Future

- **Present (20 seconds):** Where you are right now, your current role, and your core domain of expertise.
- **Past (20 seconds):** 2 or 3 defining achievements or previous experiences that prove your track record.
- **Future (20 seconds):** Why you are excited about this specific opportunity and how your unique strengths directly align with what they need.

Practice speaking this formula aloud until you can comfortably deliver it within 60 seconds without filler words.
    `
  },
  {
    id: 'blog-3',
    slug: 'how-to-write-professional-cover-letter-motivation-letter-ethiopia',
    title: 'How to Write a Professional Cover Letter & Motivation Letter in Ethiopia',
    excerpt: 'Detailed guide on structuring an impactful cover letter for NGO, banking, and tech positions that catches the hiring manager’s attention.',
    category: 'CV & Cover Letters',
    readTime: '7 min read',
    date: 'Oct 11, 2026',
    author: { name: 'Abebe Mengistu', role: 'HR Consultant' },
    tags: ['Cover Letter', 'Ethiopia Jobs', 'NGO Careers'],
    content: `
A strong motivation letter bridges the gap between your resume facts and your personal drive. For competitive roles at UN agencies, humanitarian NGOs (like IRC or UNOPS), and financial institutions, your letter must convey both technical competence and alignment with the organization’s mandate.

### Structure of an Effective Letter
1. **The Header & Professional Salutation:** Address the specific hiring manager or recruitment committee.
2. **The Hook:** State the position applied for and a brief sentence summarizing why your profile fits the core challenge.
3. **The Proof:** Provide two concrete examples with measurable outcomes (e.g. "managed a consortium budget of $4M" or "reduced customer churn by 18%").
4. **The Value Call:** Explain how your background will help the team achieve its quarterly or annual goals.
5. **Polite Closing & Call to Action.**
    `
  },
  {
    id: 'blog-4',
    slug: 'why-ai-generated-cvs-get-rejected',
    title: 'Why AI-Generated CVs Get Rejected (And What Recruiters Want)',
    excerpt: 'Blindly copying ChatGPT resumes creates generic buzzwords that recruiters spot in seconds. Discover how to balance AI efficiency with genuine human impact.',
    category: 'CV & Cover Letters',
    readTime: '5 min read',
    date: 'Sep 26, 2026',
    author: { name: 'Wrkzon Insights', role: 'Career Advisory' },
    tags: ['AI Resume', 'Recruiter Advice', 'ATS'],
    content: `
While AI tools make generating text effortless, recruiters have quickly developed "AI fatigue." Vague phrases like "results-driven professional with a proven track record of synergizing team dynamics" raise red flags immediately.

### What Recruiters Actually Want:
- Specific numbers, metrics, and dollar amounts
- Clear technologies, tools, and methodologies named
- Concise action verbs followed by real organizational outcomes
- Authentic personal summaries that reflect actual career history
    `
  }
];

export const mockHelpArticles: HelpArticle[] = [
  {
    id: 'help-1',
    slug: 'help-account-sign-in',
    title: 'How to Sign In and Manage Your Wrkzon Account',
    category: 'Account & Profile',
    summary: 'Step-by-step instructions for signing into your seeker or employer account, password recovery, and profile visibility.',
    updatedAt: 'October 2026',
    content: `
### Signing In
To sign in to Wrkzon:
1. Click the **Log in** button in the top navigation bar.
2. Choose between **Job Seeker** or **Employer** tab depending on your account role.
3. Enter your registered email address and password.
4. Click **Sign In**.

### Forgot Password?
If you cannot remember your credentials, click the "Forgot password?" link on the login screen. Enter your email to receive an instant reset link.

### Profile Visibility
From your **Myzon** dashboard, you can toggle your public profile switch on or off at any time. When public, verified employers can view your sanitized CV and invite you to interview.
    `
  },
  {
    id: 'help-2',
    slug: 'how-to-use-cvmaker',
    title: 'Building a LaTeX-Quality CV with Wrkzon CV Maker',
    category: 'CV Maker',
    summary: 'Learn how to create, customize, and export professional PDF resumes using our multi-section builder and templates.',
    updatedAt: 'October 2026',
    content: `
### Getting Started with CV Maker
Wrkzon CV Maker allows anyone to create beautiful, recruiter-approved resumes without installing complicated LaTeX compilers.

### Available Templates
- **AwesomeCV:** Clean, modern academic and tech style with colored accents.
- **Classic:** Formal, elegant typography perfect for finance, law, and corporate roles.
- **Modern:** Streamlined minimalist layout designed for rapid ATS scanning.
- **Europass:** Standardized international format recognized by European institutions.
- **Francais:** Formatted specifically for francophone hiring standards.
- **Amharic:** Localized layout supporting Ethiopic script and regional styling.

### Exporting and Saving
You can export your resume as a clean PDF at any time, or download your data in JSON Resume format for easy backups.
    `
  },
  {
    id: 'help-3',
    slug: 'how-job-agent-works',
    title: 'How Wrkzon Job Agent Works for Seekers and Employers',
    category: 'Job Agent',
    summary: 'Discover the automated matching loop, early access waitlist, and notification system.',
    updatedAt: 'October 2026',
    content: `
### What is Job Agent?
Job Agent is an automated career assistant that continuously scans new job postings or candidate submissions, calculates compatibility scores, and facilitates rapid connections.

### For Seekers:
- Automated matching against your skills and career preferences
- Tailored CV highlight suggestions
- Status alerts via web notifications or Telegram bot

### For Employers:
- Automated candidate pre-screening and shortlisting
- Direct contact access to qualified talent
- Reduced time-to-hire by up to 60%
    `
  }
];

export const mockFAQs: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Wrkzon?',
    answer: 'Wrkzon is a modern career platform providing free professional CV building tools, live job listings, and an automated Job Agent that connects talent with hiring organizations worldwide.'
  },
  {
    category: 'General',
    question: 'Is Wrkzon completely free for job seekers?',
    answer: 'Yes! Building your CV, searching for jobs, exporting LaTeX-grade PDFs, and publishing your public candidate profile are 100% free with no hidden paywalls.'
  },
  {
    category: 'CV Maker',
    question: 'Can I import my existing resume into CV Maker?',
    answer: 'Yes. You can upload an existing PDF/Word resume or paste your JSON Resume file to automatically populate your personal info, experience, education, and skills.'
  },
  {
    category: 'CV Maker',
    question: 'What makes Wrkzon CVs different from regular builders?',
    answer: 'Wrkzon resumes are rendered using LaTeX-quality typographic rules, ensuring perfect margins, consistent line heights, and clean ATS compatibility that recruiters love.'
  },
  {
    category: 'Jobs & Applications',
    question: 'How do I apply for jobs on Wrkzon?',
    answer: 'Jobs with the "Easy Apply" badge can be applied to directly using your Wrkzon profile and saved CV with a single click. For other listings, direct links to the official employer career portals are provided.'
  },
  {
    category: 'Job Agent',
    question: 'How does the Job Agent early access work?',
    answer: 'Job Agent is currently rolling out in batches to early access waitlist members. You can join the waitlist in seconds by specifying whether you are looking for work or hiring.'
  },
  {
    category: 'Employers',
    question: 'How do employers post jobs on Wrkzon?',
    answer: 'Employers can register an account, navigate to the Employer Hub, and publish job listings with custom requirements, screening questions, and company branding.'
  }
];
