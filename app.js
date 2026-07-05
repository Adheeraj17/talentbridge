/**
 * TalentBridge - Smart Job Portal
 * Core Client-Side SPA Application Engine & Mock Database
 */

// ==========================================
// 1. MOCK DATABASE (INITIAL STATE)
// ==========================================
const DEFAULT_JOBS = [
  {
    id: "job-1",
    title: "Senior Product UX Designer",
    companyId: "comp-1",
    companyName: "CloudScale Inc.",
    logoLetter: "C",
    location: "San Francisco, CA (Hybrid)",
    salary: "$140,000 - $170,000",
    experience: "5+ Years",
    type: "Full-time",
    category: "Design",
    skills: ["Figma", "Design Systems", "UX Research", "Prototyping", "SaaS UI"],
    responsibilities: [
      "Lead design vision for the core CloudScale analytics suite.",
      "Partner with Product Managers and Engineering leads to scope and implement complex SaaS dashboard features.",
      "Conduct customer usability sessions and translate findings into clickable, interactive prototypes.",
      "Collaborate with other designers to build and expand our scalable design system."
    ],
    qualifications: [
      "Bachelor's or Master's degree in Interaction Design, Human-Computer Interaction, or equivalent experience.",
      "Strong portfolio showcasing high-fidelity SaaS applications, systems thinking, and data visualizations.",
      "Expert knowledge of Figma, HTML/CSS layout concepts, and micro-interactions."
    ],
    benefits: ["Equity Options", "Unlimited PTO", "Premium Health & Dental", "Work from Home Budget", "Annual Learning Stipend"],
    description: "CloudScale is a premier cloud monitoring system. We are looking for a Senior Product Designer to spearhead our dashboard UX revamp. You will run customer interviews, craft UI specs, and deliver stunning features.",
    postedDate: "2 days ago",
    views: 142,
    applications: 24,
    status: "active"
  },
  {
    id: "job-2",
    title: "Full Stack Engineer (Node.js & React)",
    companyId: "comp-2",
    companyName: "ApexFinancial",
    logoLetter: "A",
    location: "New York, NY (On-site)",
    salary: "$150,000 - $185,000",
    experience: "3+ Years",
    type: "Full-time",
    category: "Engineering",
    skills: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "AWS"],
    responsibilities: [
      "Build secure backend services for transaction management and financial reporting.",
      "Develop responsive, pixel-perfect frontend pages matching specifications precisely.",
      "Optimize database queries and storage pipelines for low-latency operations.",
      "Write comprehensive unit and integration tests to guarantee service reliability."
    ],
    qualifications: [
      "Degree in Computer Science, Software Engineering, or equivalent practical background.",
      "Deep understanding of Node.js eventloop, state management, and modern Web Security principles.",
      "Familiarity with financial systems, double-entry bookkeeping, or ledger systems is a plus."
    ],
    benefits: ["401(k) Match", "Comp Healthcare", "Commuter Benefits", "Catered Lunch Daily", "Annual Bonus Package"],
    description: "ApexFinancial empowers millions with micro-investment solutions. Join our core transactions squad and develop secure, scalable, and responsive payment flows.",
    postedDate: "4 days ago",
    views: 280,
    applications: 38,
    status: "active"
  },
  {
    id: "job-3",
    title: "Lead AI Researcher & ML Engineer",
    companyId: "comp-3",
    companyName: "NeuralFlow Labs",
    logoLetter: "N",
    location: "Remote (US/Canada)",
    salary: "$190,000 - $240,000",
    experience: "6+ Years",
    type: "Full-time",
    category: "Data Science",
    skills: ["Python", "PyTorch", "LLMs", "NLP", "Model Fine-tuning"],
    responsibilities: [
      "Architect and fine-tune large language models for specialized semantic search jobs.",
      "Design training pipelines on distributed GPU clusters.",
      "Publish internal research papers and translate novel architectures into production APIs."
    ],
    qualifications: [
      "PhD or research Master's degree in ML, AI, NLP, or quantitative fields.",
      "Proven track record of shipping production machine learning products at scale.",
      "Publications at major venues (NeurIPS, ICML, CVPR) is a major plus."
    ],
    benefits: ["Remote Work Allowance", "High-End Workstation Setup", "Wellness Budget", "Quarterly Retreads", "Stock Grants"],
    description: "NeuralFlow Labs is creating cognitive middleware. We are looking for an expert machine learning engineer to architect our next generation search and recommendation tools.",
    postedDate: "1 week ago",
    views: 520,
    applications: 104,
    status: "active"
  },
  {
    id: "job-4",
    title: "Senior Product Manager - Growth",
    companyId: "comp-4",
    companyName: "AppVantage Studio",
    logoLetter: "V",
    location: "Austin, TX (Remote)",
    salary: "$130,000 - $160,000",
    experience: "4+ Years",
    type: "Contract",
    category: "Product Management",
    skills: ["A/B Testing", "Mixpanel", "SQL", "User Acquisition", "Growth Hacking"],
    responsibilities: [
      "Own expansion experiments and monetization conversion rates across our mobile client suite.",
      "Analyze funnel drop-offs and prioritize product updates to optimize engagement.",
      "Write specs, map product briefs, and coordinate growth sprints with design and dev squads."
    ],
    qualifications: [
      "4+ years of Product Management experience in high-growth mobile or consumer SaaS firms.",
      "Data-driven strategist with expert competence in SQL, telemetry, and cohort analysis.",
      "High communication index, skilled in managing cross-functional dependencies."
    ],
    benefits: ["Flexible Schedule", "Annual Retreat", "Health Stipend", "Unlimited Learning Resources"],
    description: "AppVantage Studio publishes award-winning productivity and growth utilities. Lead our cross-functional onboarding and activation squad to supercharge retention metrics.",
    postedDate: "2 weeks ago",
    views: 195,
    applications: 19,
    status: "active"
  }
];

const DEFAULT_COMPANIES = [
  {
    id: "comp-1",
    name: "CloudScale Inc.",
    industry: "DevOps & Cloud Computing",
    rating: 4.8,
    location: "San Francisco, CA",
    employees: "150 - 500",
    verified: true,
    website: "https://cloudscale.io",
    overview: "CloudScale builds cloud monitoring instrumentation to provide engineering teams with end-to-end visibility. We empower over 20,000 developers across startups and Fortune 500s alike.",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    ],
    reviews: [
      { author: "Lead UI Engineer", text: "Excellent engineering standards. True design-first culture, great team cohesion and premium equipment budget.", rating: 5, date: "3 months ago" },
      { author: "Staff Systems Dev", text: "Exciting technical problems, though scaling pace implies occasional crunch schedules. Highly rewarding stock option growth.", rating: 4.5, date: "6 months ago" }
    ]
  },
  {
    id: "comp-2",
    name: "ApexFinancial",
    industry: "Fintech & Banking",
    rating: 4.2,
    location: "New York, NY",
    employees: "500 - 1000",
    verified: true,
    website: "https://apexfinancial.com",
    overview: "ApexFinancial simplifies investments for everyday users. We operate with structural compliance, low fees, and user experience excellence.",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    ],
    reviews: [
      { author: "Risk Officer", text: "Corporate culture is steady and benefits are top notch. Pace can be slow due to rigorous auditing regulations.", rating: 4, date: "1 month ago" }
    ]
  },
  {
    id: "comp-3",
    name: "NeuralFlow Labs",
    industry: "Artificial Intelligence",
    rating: 4.9,
    location: "Remote",
    employees: "50 - 150",
    verified: false, // Verification pending
    website: "https://neuralflow.ai",
    overview: "NeuralFlow Labs delivers foundation AI middleware. We do cutting edge research and integrate it into simple APIs for developer communities.",
    gallery: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
    ],
    reviews: [
      { author: "ML Infrastructure Lead", text: "Fast-moving place! Working on GPU training rigs is amazing. Autonomy level is very high.", rating: 5, date: "2 weeks ago" }
    ]
  }
];

const DEFAULT_APPLICATIONS = [
  {
    id: "app-1",
    jobId: "job-1",
    jobTitle: "Senior Product UX Designer",
    companyName: "CloudScale Inc.",
    applicantId: "seeker-1",
    applicantName: "Alex Mercer",
    applicantEmail: "alex.mercer@gmail.com",
    status: "applied", // applied, shortlisted, scheduled, offered, rejected
    appliedDate: "2026-07-03",
    coverLetter: "I'd love to help design CloudScale's analytics portal. I've designed several monitoring frameworks before.",
    resume: "resume_current.pdf",
    timeline: [
      { status: "applied", label: "Application Submitted", date: "2026-07-03", description: "Your profile was sent to CloudScale Inc." }
    ]
  },
  {
    id: "app-2",
    jobId: "job-2",
    jobTitle: "Full Stack Engineer (Node.js & React)",
    companyName: "ApexFinancial",
    applicantId: "seeker-1",
    applicantName: "Alex Mercer",
    applicantEmail: "alex.mercer@gmail.com",
    status: "scheduled",
    appliedDate: "2026-06-28",
    coverLetter: "Strong Node/React developer eager to scale transactional logic securely.",
    resume: "resume_current.pdf",
    timeline: [
      { status: "applied", label: "Application Submitted", date: "2026-06-28", description: "ApexFinancial received your details." },
      { status: "shortlisted", label: "Candidate Shortlisted", date: "2026-06-30", description: "Recruiter marked your resume as highly matching." },
      { status: "scheduled", label: "Interview Scheduled", date: "2026-07-01", description: "Technical screening set for July 6th at 10:00 AM." }
    ],
    interview: {
      type: "Technical Screening",
      date: "2026-07-06",
      time: "10:00",
      interviewer: "Sarah Jenkins (Engineering Manager)",
      link: "https://meet.google.com/tb-recruitment"
    }
  }
];

const DEFAULT_MESSAGES = [
  {
    id: "msg-1",
    from: "recruiter-1", // Sarah (CloudScale)
    fromName: "Sarah Jenkins (CloudScale)",
    to: "seeker-1",
    text: "Hi Alex, thank you for applying to the Senior UX Designer role. We love your SaaS portfolio! Can you let us know your general availability next week?",
    time: "Yesterday, 3:14 PM",
    unread: true
  },
  {
    id: "msg-2",
    from: "seeker-1",
    fromName: "Alex Mercer",
    to: "recruiter-1",
    text: "Thanks Sarah! I am available on Monday afternoon and Wednesday morning. Looking forward to chatting.",
    time: "Yesterday, 4:02 PM",
    unread: false
  }
];

const DEFAULT_AUDIT_LOGS = [
  { action: "Platform Startup", user: "System", details: "TalentBridge instance loaded successfully.", timestamp: "2026-07-05 12:07:00" },
  { action: "User Session", user: "Guest", details: "Switched viewport to guest landing page.", timestamp: "2026-07-05 12:07:15" }
];

const DEFAULT_PROFILE = {
  name: "Alex Mercer",
  title: "Lead UX Architect & Designer",
  email: "alex.mercer@gmail.com",
  phone: "+1 (555) 321-9876",
  location: "Brooklyn, NY",
  website: "https://alexmercer.design",
  avatar: "AM",
  bio: "Passionate product designer with 6+ years building dashboard interfaces, SaaS software, and responsive client ecosystems. Veteran in design systems, prototyping, and qualitative user testing.",
  completion: 85,
  experience: [
    { title: "Senior SaaS Designer", company: "Interlinked Solutions", period: "2023 - Present", description: "Owner of design tokens and core interface templates. Increased retention by 14% via onboarding redesigns." },
    { title: "Interaction Designer", company: "Frictionless Tech", period: "2020 - 2023", description: "Designed workflow systems, CRM tools, and visual layouts for enterprise clients." }
  ],
  education: [
    { degree: "Bachelor of Science in UX Design", school: "Pratt Institute", period: "2016 - 2020" }
  ],
  skills: ["Figma", "Design Systems", "UX Research", "Wireframing", "HTML & CSS", "Prototyping"],
  projects: [
    { name: "Omni Dashboard System", description: "An open-source library of customizable metrics widgets, used by over 5,000 projects globally." }
  ],
  certificates: [
    { name: "Nielsen Norman Group UX Certificate", issuer: "NN/g", year: "2024" }
  ],
  resumeFile: "Alex_Mercer_CV_2026.pdf"
};

// ==========================================
// 2. STATE MANAGER
// ==========================================
class Database {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem("tb_initialized")) {
      localStorage.setItem("tb_jobs", JSON.stringify(DEFAULT_JOBS));
      localStorage.setItem("tb_companies", JSON.stringify(DEFAULT_COMPANIES));
      localStorage.setItem("tb_applications", JSON.stringify(DEFAULT_APPLICATIONS));
      localStorage.setItem("tb_messages", JSON.stringify(DEFAULT_MESSAGES));
      localStorage.setItem("tb_audit", JSON.stringify(DEFAULT_AUDIT_LOGS));
      localStorage.setItem("tb_profile", JSON.stringify(DEFAULT_PROFILE));
      localStorage.setItem("tb_saved_jobs", JSON.stringify(["job-2"]));
      localStorage.setItem("tb_initialized", "true");
    }
  }

  get(key) {
    return JSON.parse(localStorage.getItem(`tb_${key}`));
  }

  set(key, value) {
    localStorage.setItem(`tb_${key}`, JSON.stringify(value));
  }

  log(action, user, details) {
    const logs = this.get("audit") || [];
    logs.unshift({
      action,
      user,
      details,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19)
    });
    this.set("audit", logs);
  }
}

const db = new Database();

const appState = {
  role: "guest", // guest, seeker, recruiter, admin
  view: "landing", // landing, search-jobs, job-details, dashboard, profile, etc.
  selectedJobId: null,
  selectedCompanyId: null,
  notificationList: [
    { id: 1, text: "ApexFinancial scheduled a Technical Screening with you.", date: "1 day ago", read: false },
    { id: 2, text: "Your company CloudScale Inc. has been successfully verified.", date: "3 days ago", read: true }
  ],
  collapsedSidebar: false
};

// ==========================================
// 3. ROUTER / NAV MANAGER
// ==========================================
const ROLES_PERMISSIONS = {
  guest: ["landing", "about", "pricing", "faq", "contact", "login", "register", "forgot-password", "reset-password", "privacy", "terms", "job-details", "company-details"],
  seeker: ["landing", "about", "pricing", "faq", "contact", "privacy", "terms", "job-details", "company-details", "seeker-dashboard", "seeker-profile", "seeker-search", "seeker-saved", "seeker-applied", "seeker-messages", "seeker-settings"],
  recruiter: ["recruiter-dashboard", "recruiter-company", "recruiter-post-job", "recruiter-jobs", "recruiter-applicants", "recruiter-calendar", "recruiter-settings"],
  admin: ["admin-dashboard", "admin-users", "admin-companies", "admin-jobs", "admin-audit", "admin-settings"]
};

function navigateTo(hash) {
  window.location.hash = hash;
}

function checkAccess(role, view) {
  // Normalize views
  let normalized = view;
  if (view.startsWith("job-details")) normalized = "job-details";
  if (view.startsWith("company-details")) normalized = "company-details";

  const allowed = ROLES_PERMISSIONS[role] || [];
  return allowed.includes(normalized);
}

function handleRouting() {
  const hash = window.location.hash.substring(1) || "landing";
  let targetView = hash.split("?")[0];
  
  // Extract query params if any
  const queryParts = hash.split("?");
  const query = {};
  if (queryParts[1]) {
    queryParts[1].split("&").forEach(pair => {
      const parts = pair.split("=");
      query[parts[0]] = parts[1];
    });
  }

  // Set IDs if passed
  if (targetView === "job-details" && query.id) {
    appState.selectedJobId = query.id;
  }
  if (targetView === "company-details" && query.id) {
    appState.selectedCompanyId = query.id;
  }

  // Security Access Validation
  if (!checkAccess(appState.role, targetView)) {
    // If not allowed, send to appropriate default dashboard or login
    if (appState.role === "guest") {
      targetView = "login";
      db.log("Access Blocked", "Guest", `Tried to open page #${targetView}. Redirected to login.`);
    } else {
      targetView = "access-denied";
      db.log("Access Blocked", appState.role, `Unauthorized access blocked for page #${targetView}.`);
    }
  }

  appState.view = targetView;
  db.log("Navigate View", appState.role === "guest" ? "Guest" : appState.role, `Opened page #${targetView}`);
  
  // Render corresponding layouts
  updateLayoutWrapper();
  renderActiveView(targetView);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateLayoutWrapper() {
  const publicLayout = document.getElementById("public-layout");
  const panelLayout = document.getElementById("panel-layout");
  
  if (appState.role === "guest" || ["landing", "about", "pricing", "faq", "contact", "login", "register", "forgot-password", "reset-password", "privacy", "terms", "job-details", "company-details"].includes(appState.view)) {
    publicLayout.style.display = "flex";
    panelLayout.style.display = "none";
    updatePublicNavbarActiveLink();
  } else {
    publicLayout.style.display = "none";
    panelLayout.style.display = "flex";
    renderSidebarMenu();
    updateSidebarActiveItem();
    updatePanelNavbarInfo();
  }
}

function updatePublicNavbarActiveLink() {
  const links = document.querySelectorAll(".public-navbar .nav-link");
  links.forEach(link => {
    const href = link.getAttribute("href").substring(1);
    if (href === appState.view) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function renderSidebarMenu() {
  const menuList = document.getElementById("sidebar-menu-list");
  let menuHtml = "";
  
  if (appState.role === "seeker") {
    menuHtml = `
      <a href="#seeker-dashboard" class="sidebar-item" id="side-seeker-dashboard">
        <span class="material-symbols-rounded">dashboard</span>
        <span class="sidebar-label">Dashboard</span>
      </a>
      <a href="#seeker-profile" class="sidebar-item" id="side-seeker-profile">
        <span class="material-symbols-rounded">account_circle</span>
        <span class="sidebar-label">My Profile</span>
      </a>
      <a href="#seeker-search" class="sidebar-item" id="side-seeker-search">
        <span class="material-symbols-rounded">travel_explore</span>
        <span class="sidebar-label">Search Jobs</span>
      </a>
      <a href="#seeker-saved" class="sidebar-item" id="side-seeker-saved">
        <span class="material-symbols-rounded">bookmarks</span>
        <span class="sidebar-label">Saved Jobs</span>
      </a>
      <a href="#seeker-applied" class="sidebar-item" id="side-seeker-applied">
        <span class="material-symbols-rounded">assignment_turned_in</span>
        <span class="sidebar-label">Applied Jobs</span>
      </a>
      <a href="#seeker-messages" class="sidebar-item" id="side-seeker-messages">
        <span class="material-symbols-rounded">mail</span>
        <span class="sidebar-label">Messages</span>
      </a>
      <div class="sidebar-divider"></div>
      <a href="#seeker-settings" class="sidebar-item" id="side-seeker-settings">
        <span class="material-symbols-rounded">settings</span>
        <span class="sidebar-label">Security Settings</span>
      </a>
    `;
  } else if (appState.role === "recruiter") {
    menuHtml = `
      <a href="#recruiter-dashboard" class="sidebar-item" id="side-recruiter-dashboard">
        <span class="material-symbols-rounded">dashboard</span>
        <span class="sidebar-label">Dashboard</span>
      </a>
      <a href="#recruiter-company" class="sidebar-item" id="side-recruiter-company">
        <span class="material-symbols-rounded">corporate_fare</span>
        <span class="sidebar-label">Company Profile</span>
      </a>
      <a href="#recruiter-post-job" class="sidebar-item" id="side-recruiter-post-job">
        <span class="material-symbols-rounded">post_add</span>
        <span class="sidebar-label">Post a Job</span>
      </a>
      <a href="#recruiter-jobs" class="sidebar-item" id="side-recruiter-jobs">
        <span class="material-symbols-rounded">work</span>
        <span class="sidebar-label">Manage Jobs</span>
      </a>
      <a href="#recruiter-applicants" class="sidebar-item" id="side-recruiter-applicants">
        <span class="material-symbols-rounded">groups</span>
        <span class="sidebar-label">Applicants List</span>
      </a>
      <a href="#recruiter-calendar" class="sidebar-item" id="side-recruiter-calendar">
        <span class="material-symbols-rounded">calendar_month</span>
        <span class="sidebar-label">Interview Calendar</span>
      </a>
      <div class="sidebar-divider"></div>
      <a href="#recruiter-settings" class="sidebar-item" id="side-recruiter-settings">
        <span class="material-symbols-rounded">settings</span>
        <span class="sidebar-label">Recruiter Settings</span>
      </a>
    `;
  } else if (appState.role === "admin") {
    menuHtml = `
      <a href="#admin-dashboard" class="sidebar-item" id="side-admin-dashboard">
        <span class="material-symbols-rounded">dashboard</span>
        <span class="sidebar-label">Admin Dashboard</span>
      </a>
      <a href="#admin-users" class="sidebar-item" id="side-admin-users">
        <span class="material-symbols-rounded">manage_accounts</span>
        <span class="sidebar-label">Manage Users</span>
      </a>
      <a href="#admin-companies" class="sidebar-item" id="side-admin-companies">
        <span class="material-symbols-rounded">domain_verification</span>
        <span class="sidebar-label">Verify Companies</span>
      </a>
      <a href="#admin-jobs" class="sidebar-item" id="side-admin-jobs">
        <span class="material-symbols-rounded">work_history</span>
        <span class="sidebar-label">Manage Jobs</span>
      </a>
      <a href="#admin-audit" class="sidebar-item" id="side-admin-audit">
        <span class="material-symbols-rounded">security</span>
        <span class="sidebar-label">Audit Security Logs</span>
      </a>
      <div class="sidebar-divider"></div>
      <a href="#admin-settings" class="sidebar-item" id="side-admin-settings">
        <span class="material-symbols-rounded">settings_applications</span>
        <span class="sidebar-label">System Settings</span>
      </a>
    `;
  }
  
  menuList.innerHTML = menuHtml;
  updateSidebarActiveItem();
}

function updateSidebarActiveItem() {
  const items = document.querySelectorAll(".sidebar-menu .sidebar-item");
  items.forEach(item => {
    const id = item.getAttribute("id");
    if (id === `side-${appState.view}`) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function updatePanelNavbarInfo() {
  const headerTitle = document.getElementById("panel-header-title");
  const sidebarUsername = document.getElementById("sidebar-username");
  const sidebarUserrole = document.getElementById("sidebar-userrole");
  const sidebarAvatar = document.getElementById("sidebar-avatar");
  const panelShortcut = document.getElementById("panel-profile-shortcut");
  
  const profile = db.get("profile") || DEFAULT_PROFILE;
  
  if (appState.role === "seeker") {
    headerTitle.textContent = "Seeker Workspace";
    sidebarUsername.textContent = profile.name;
    sidebarUserrole.textContent = profile.title;
    sidebarAvatar.textContent = profile.avatar;
    panelShortcut.textContent = profile.avatar;
    panelShortcut.setAttribute("href", "#seeker-profile");
  } else if (appState.role === "recruiter") {
    headerTitle.textContent = "Recruiter Operations";
    sidebarUsername.textContent = "Sarah Jenkins";
    sidebarUserrole.textContent = "Hiring Director, CloudScale";
    sidebarAvatar.textContent = "SJ";
    panelShortcut.textContent = "SJ";
    panelShortcut.setAttribute("href", "#recruiter-company");
  } else if (appState.role === "admin") {
    headerTitle.textContent = "System Administration";
    sidebarUsername.textContent = "Admin Root";
    sidebarUserrole.textContent = "Platform Overseer";
    sidebarAvatar.textContent = "AD";
    panelShortcut.textContent = "AD";
    panelShortcut.setAttribute("href", "#admin-dashboard");
  }
}

// ==========================================
// 4. RENDERING VIEWS ENGINE
// ==========================================
function renderActiveView(view) {
  const publicContent = document.getElementById("public-content");
  const panelContent = document.getElementById("panel-content");
  
  // Detach old content
  publicContent.innerHTML = "";
  panelContent.innerHTML = "";
  
  const container = (appState.role === "guest" || ["landing", "about", "pricing", "faq", "contact", "login", "register", "forgot-password", "reset-password", "privacy", "terms", "job-details", "company-details"].includes(view)) 
    ? publicContent 
    : panelContent;
    
  switch (view) {
    case "landing":
      container.innerHTML = getLandingHtml();
      setupLandingListeners();
      break;
    case "about":
      container.innerHTML = getAboutHtml();
      break;
    case "pricing":
      container.innerHTML = getPricingHtml();
      break;
    case "faq":
      container.innerHTML = getFAQHtml();
      break;
    case "contact":
      container.innerHTML = getContactHtml();
      setupContactListeners();
      break;
    case "login":
      container.innerHTML = getLoginHtml();
      setupLoginListeners();
      break;
    case "register":
      container.innerHTML = getRegisterHtml();
      setupRegisterListeners();
      break;
    case "forgot-password":
      container.innerHTML = getForgotPasswordHtml();
      setupForgotPasswordListeners();
      break;
    case "reset-password":
      container.innerHTML = getResetPasswordHtml();
      setupResetPasswordListeners();
      break;
    case "privacy":
      container.innerHTML = getPrivacyHtml();
      break;
    case "terms":
      container.innerHTML = getTermsHtml();
      break;
    case "job-details":
      container.innerHTML = getJobDetailsHtml(appState.selectedJobId);
      setupJobDetailsListeners(appState.selectedJobId);
      break;
    case "company-details":
      container.innerHTML = getCompanyDetailsHtml(appState.selectedCompanyId);
      setupCompanyDetailsListeners(appState.selectedCompanyId);
      break;
      
    // Seeker Pages
    case "seeker-dashboard":
      container.innerHTML = getSeekerDashboardHtml();
      setupSeekerDashboardListeners();
      break;
    case "seeker-profile":
      container.innerHTML = getSeekerProfileHtml();
      setupSeekerProfileListeners();
      break;
    case "seeker-search":
      container.innerHTML = getSeekerSearchHtml();
      setupSeekerSearchListeners();
      break;
    case "seeker-saved":
      container.innerHTML = getSeekerSavedHtml();
      setupSeekerSavedListeners();
      break;
    case "seeker-applied":
      container.innerHTML = getSeekerAppliedHtml();
      setupSeekerAppliedListeners();
      break;
    case "seeker-messages":
      container.innerHTML = getSeekerMessagesHtml();
      setupSeekerMessagesListeners();
      break;
    case "seeker-settings":
      container.innerHTML = getSeekerSettingsHtml();
      setupSeekerSettingsListeners();
      break;
      
    // Recruiter Pages
    case "recruiter-dashboard":
      container.innerHTML = getRecruiterDashboardHtml();
      setupRecruiterDashboardListeners();
      break;
    case "recruiter-company":
      container.innerHTML = getRecruiterCompanyHtml();
      setupRecruiterCompanyListeners();
      break;
    case "recruiter-post-job":
      container.innerHTML = getRecruiterPostJobHtml();
      setupRecruiterPostJobListeners();
      break;
    case "recruiter-jobs":
      container.innerHTML = getRecruiterJobsHtml();
      setupRecruiterJobsListeners();
      break;
    case "recruiter-applicants":
      container.innerHTML = getRecruiterApplicantsHtml();
      setupRecruiterApplicantsListeners();
      break;
    case "recruiter-calendar":
      container.innerHTML = getRecruiterCalendarHtml();
      setupRecruiterCalendarListeners();
      break;
    case "recruiter-settings":
      container.innerHTML = getRecruiterSettingsHtml();
      setupRecruiterSettingsListeners();
      break;

    // Admin Pages
    case "admin-dashboard":
      container.innerHTML = getAdminDashboardHtml();
      setupAdminDashboardListeners();
      break;
    case "admin-users":
      container.innerHTML = getAdminUsersHtml();
      setupAdminUsersListeners();
      break;
    case "admin-companies":
      container.innerHTML = getAdminCompaniesHtml();
      setupAdminCompaniesListeners();
      break;
    case "admin-jobs":
      container.innerHTML = getAdminJobsHtml();
      setupAdminJobsListeners();
      break;
    case "admin-audit":
      container.innerHTML = getAdminAuditHtml();
      setupAdminAuditListeners();
      break;
    case "admin-settings":
      container.innerHTML = getAdminSettingsHtml();
      setupAdminSettingsListeners();
      break;

    // Error states
    case "access-denied":
      container.innerHTML = getAccessDeniedHtml();
      break;
    case "error-404":
    default:
      container.innerHTML = get404Html();
      break;
  }
  
  // Set up floating label animations on newly rendered form controls
  setupFloatingLabels();
}

// ==========================================
// 5. VIEW MARKUP BUILDERS & LOGIC HANDLERS
// ==========================================

// Helper: stars builder
function getStarsHtml(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += `<span class="material-symbols-rounded filled">star</span>`;
    } else if (i - 0.5 <= rating) {
      stars += `<span class="material-symbols-rounded">star_half</span>`;
    } else {
      stars += `<span class="material-symbols-rounded">star</span>`;
    }
  }
  return `<div class="stars-rating">${stars}</div>`;
}

// LANDING
function getLandingHtml() {
  const jobs = db.get("jobs") || [];
  const activeJobs = jobs.filter(j => j.status === "active").slice(0, 4);
  const companies = db.get("companies") || [];
  
  let featuredJobsHtml = "";
  activeJobs.forEach(job => {
    featuredJobsHtml += `
      <div class="card job-card">
        <div class="job-card-header">
          <div class="job-company-info">
            <div class="user-avatar company-logo" style="border-radius: var(--radius);">${job.logoLetter}</div>
            <div>
              <h4 class="card-title" style="font-size: 1rem;"><a href="#job-details?id=${job.id}">${job.title}</a></h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary);">${job.companyName}</p>
            </div>
          </div>
          <button class="btn-icon btn-sm btn-save-job" data-id="${job.id}" title="Bookmark">
            <span class="material-symbols-rounded">bookmark</span>
          </button>
        </div>
        <div class="job-details-meta">
          <div class="job-meta-item"><span class="material-symbols-rounded" style="font-size:16px;">location_on</span> ${job.location}</div>
          <div class="job-meta-item"><span class="material-symbols-rounded" style="font-size:16px;">payments</span> ${job.salary}</div>
          <div class="job-meta-item"><span class="material-symbols-rounded" style="font-size:16px;">schedule</span> ${job.type}</div>
        </div>
        <div class="job-tags">
          ${job.skills.slice(0, 3).map(skill => `<span class="badge badge-secondary">${skill}</span>`).join('')}
        </div>
        <div class="job-footer">
          <span class="badge badge-primary">${job.category}</span>
          <a href="#job-details?id=${job.id}" class="btn btn-secondary btn-sm">View details <span class="material-symbols-rounded" style="font-size:16px;">arrow_forward</span></a>
        </div>
      </div>
    `;
  });

  return `
    <!-- Hero Section -->
    <header class="hero-section">
      <span class="hero-badge">v1.2.0 • Premium Recruitment Suite</span>
      <h2 class="hero-title">Connecting Elite Talents to Innovative Companies</h2>
      <p class="hero-subtitle">TalentBridge provides job discovery and hiring optimization for modern design, dev, product, and leadership squads.</p>
      
      <!-- Search Form -->
      <form class="hero-search-container" id="hero-search-form">
        <div class="hero-search-input-group">
          <span class="material-symbols-rounded icon">search</span>
          <input type="text" id="hero-keyword" placeholder="Job title, keywords, or skills..." required>
        </div>
        <div class="hero-search-input-group divider-left">
          <span class="material-symbols-rounded icon">location_on</span>
          <input type="text" id="hero-location" placeholder="City, state, or remote...">
        </div>
        <button type="submit" class="btn btn-primary" style="height: 52px; padding: 0 var(--space-3);">Find Jobs</button>
      </form>
    </header>

    <!-- Stats Panel -->
    <section style="background-color: white; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: var(--space-4) 0;">
      <div style="max-width: 1200px; margin:0 auto; display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-3); text-align: center;">
        <div>
          <div style="font-size: 2.25rem; font-weight: 700; color: var(--primary);">12,450+</div>
          <p style="font-size: 0.9rem; color: var(--text-secondary); font-weight:500;">Active Job Openings</p>
        </div>
        <div>
          <div style="font-size: 2.25rem; font-weight: 700; color: var(--primary);">450+</div>
          <p style="font-size: 0.9rem; color: var(--text-secondary); font-weight:500;">Verified Corporations</p>
        </div>
        <div>
          <div style="font-size: 2.25rem; font-weight: 700; color: var(--primary);">98.4%</div>
          <p style="font-size: 0.9rem; color: var(--text-secondary); font-weight:500;">Success Match Rate</p>
        </div>
      </div>
    </section>

    <!-- Categories Grid -->
    <section style="padding: var(--space-6) 0;">
      <div class="section-title-wrapper">
        <h3 class="section-title">Popular Job Categories</h3>
        <p class="section-subtitle">Search jobs by core operational disciplines.</p>
      </div>
      <div class="categories-grid">
        <div class="category-card">
          <div class="category-icon"><span class="material-symbols-rounded">code</span></div>
          <h4 class="category-name">Engineering</h4>
          <span class="category-count">1,240 jobs</span>
        </div>
        <div class="category-card">
          <div class="category-icon"><span class="material-symbols-rounded">palette</span></div>
          <h4 class="category-name">Design</h4>
          <span class="category-count">840 jobs</span>
        </div>
        <div class="category-card">
          <div class="category-icon"><span class="material-symbols-rounded">monitoring</span></div>
          <h4 class="category-name">Product Management</h4>
          <span class="category-count">480 jobs</span>
        </div>
        <div class="category-card">
          <div class="category-icon"><span class="material-symbols-rounded">bar_chart</span></div>
          <h4 class="category-name">Data Science</h4>
          <span class="category-count">350 jobs</span>
        </div>
      </div>
    </section>

    <!-- Latest Jobs Section -->
    <section style="background-color: var(--background); padding: var(--space-6) 0; border-top: 1px solid var(--border);">
      <div class="section-title-wrapper">
        <h3 class="section-title">Latest Job Opportunities</h3>
        <p class="section-subtitle">Fresh listings uploaded by premium companies in the last 24 hours.</p>
      </div>
      <div class="latest-jobs-grid">
        ${featuredJobsHtml}
      </div>
      <div style="text-align: center; margin-top: var(--space-3);">
        <a href="#seeker-search" class="btn btn-primary btn-lg">Browse All Jobs</a>
      </div>
    </section>
  `;
}

function setupLandingListeners() {
  const form = document.getElementById("hero-search-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const keyword = document.getElementById("hero-keyword").value;
      const location = document.getElementById("hero-location").value;
      
      // Update role automatically to seeker to allow search display (or prompt user)
      if (appState.role === "guest") {
        setRole("seeker");
      }
      
      navigateTo(`seeker-search?kw=${encodeURIComponent(keyword)}&loc=${encodeURIComponent(location)}`);
    });
  }

  // Handle bookmark button click
  document.querySelectorAll(".btn-save-job").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      
      if (appState.role === "guest") {
        showToast("Please register or login as Job Seeker to bookmark jobs.", "warning");
        navigateTo("login");
        return;
      }
      
      const jobId = btn.getAttribute("data-id");
      let saved = db.get("saved_jobs") || [];
      if (saved.includes(jobId)) {
        saved = saved.filter(id => id !== jobId);
        btn.querySelector(".material-symbols-rounded").classList.remove("filled");
        showToast("Job removed from saved list.", "info");
      } else {
        saved.push(jobId);
        btn.querySelector(".material-symbols-rounded").classList.add("filled");
        showToast("Job bookmarked successfully!", "success");
      }
      db.set("saved_jobs", saved);
    });
  });
}

// ABOUT PAGE
function getAboutHtml() {
  return `
    <div style="max-width: 800px; margin: var(--space-5) auto; padding: 0 var(--space-3);">
      <h2 class="hero-title" style="font-size: 2.5rem; text-align: center; margin-bottom: var(--space-2);">Bridging Talents & Teams</h2>
      <p style="color: var(--text-secondary); text-align: center; font-size: 1.1rem; margin-bottom: var(--space-4);">TalentBridge was established in 2026 with a single thesis: enterprise recruitment does not need to be an administrative bottleneck.</p>
      
      <div class="card" style="margin-bottom: var(--space-3); padding: var(--space-4);">
        <h3 class="card-title" style="margin-bottom: var(--space-2);">Our Core Platform Thesis</h3>
        <p style="margin-bottom: var(--space-2);">We align recruiting pipelines by automating scheduling, processing data tables with sorting controls, providing robust candidate tracking dashboards, and removing friction from resume matching.</p>
        <p>Whether you are a software developer looking for your next challenge, or a company seeking elite operators, TalentBridge delivers tools to optimize your matches.</p>
      </div>

      <div class="stat-card-grid">
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Offices</span>
            <span class="stat-value">SF & NY</span>
          </div>
          <div class="stat-icon-wrapper primary"><span class="material-symbols-rounded">domain</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Team Members</span>
            <span class="stat-value">85+ Devs</span>
          </div>
          <div class="stat-icon-wrapper success"><span class="material-symbols-rounded">group</span></div>
        </div>
      </div>
    </div>
  `;
}

// PRICING PAGE
function getPricingHtml() {
  return `
    <div style="max-width: 1000px; margin: var(--space-5) auto; padding: 0 var(--space-3);">
      <h2 class="hero-title" style="font-size: 2.5rem; text-align: center; margin-bottom: var(--space-2);">Simple, Transparent Pricing</h2>
      <p style="color: var(--text-secondary); text-align: center; font-size: 1.1rem; margin-bottom: var(--space-5);">Choose the workspace capacity that fits your recruitment pace.</p>
      
      <div class="pricing-grid">
        <div class="pricing-card">
          <h4 class="card-title" style="font-size: 1.25rem;">Free Tier</h4>
          <p style="color: var(--text-secondary);">For seekers and early founders</p>
          <div class="price-value">$0 <span class="price-sub">/ mo</span></div>
          <ul class="pricing-features-list">
            <li class="pricing-feature-item"><span class="material-symbols-rounded">check</span> Search and apply to unlimited jobs</li>
            <li class="pricing-feature-item"><span class="material-symbols-rounded">check</span> Basic profile listing</li>
            <li class="pricing-feature-item"><span class="material-symbols-rounded">check</span> 1 active posted job listing</li>
          </ul>
          <a href="#register" class="btn btn-secondary btn-full">Get Started</a>
        </div>

        <div class="pricing-card featured">
          <div class="pricing-badge">Most Popular</div>
          <h4 class="card-title" style="font-size: 1.25rem;">Pro Recruiter</h4>
          <p style="color: var(--text-secondary);">For growing enterprise teams</p>
          <div class="price-value">$199 <span class="price-sub">/ mo</span></div>
          <ul class="pricing-features-list">
            <li class="pricing-feature-item"><span class="material-symbols-rounded">check</span> 10 active job listings</li>
            <li class="pricing-feature-item"><span class="material-symbols-rounded">check</span> Advanced applicant sorting table</li>
            <li class="pricing-feature-item"><span class="material-symbols-rounded">check</span> Unified calendar & interview setup</li>
            <li class="pricing-feature-item"><span class="material-symbols-rounded">check</span> verified badge pending review</li>
          </ul>
          <a href="#register" class="btn btn-primary btn-full">Subscribe Pro</a>
        </div>

        <div class="pricing-card">
          <h4 class="card-title" style="font-size: 1.25rem;">Enterprise</h4>
          <p style="color: var(--text-secondary);">For global recruitment squads</p>
          <div class="price-value">$499 <span class="price-sub">/ mo</span></div>
          <ul class="pricing-features-list">
            <li class="pricing-feature-item"><span class="material-symbols-rounded">check</span> Unlimited job postings</li>
            <li class="pricing-feature-item"><span class="material-symbols-rounded">check</span> Priority applicant support</li>
            <li class="pricing-feature-item"><span class="material-symbols-rounded">check</span> Analytics exports & Audit integration</li>
          </ul>
          <a href="#contact" class="btn btn-secondary btn-full">Contact Sales</a>
        </div>
      </div>
    </div>
  `;
}

// FAQ PAGE
function getFAQHtml() {
  return `
    <div style="max-width: 800px; margin: var(--space-5) auto; padding: 0 var(--space-3);">
      <h2 class="hero-title" style="font-size: 2.5rem; text-align: center; margin-bottom: var(--space-2);">Frequently Asked Questions</h2>
      <p style="color: var(--text-secondary); text-align: center; font-size: 1.1rem; margin-bottom: var(--space-5);">Clear answers regarding recruitment licenses, profiles, and operations.</p>
      
      <div style="display: flex; flex-direction: column; gap: var(--space-2);">
        <div class="card">
          <h4 class="card-title" style="font-size: 1.05rem; margin-bottom: 8px;">How does company verification work?</h4>
          <p class="card-body">Recruiters submit company profiles which are routed to the Admin dashboard. The administrator reviews credentials, audits references, and grants a verification checkmark.</p>
        </div>
        <div class="card">
          <h4 class="card-title" style="font-size: 1.05rem; margin-bottom: 8px;">Is it free for Job Seekers?</h4>
          <p class="card-body">Yes! Job Seekers can search, bookmark, track applications, upload resumes, and engage in real-time messages for free.</p>
        </div>
        <div class="card">
          <h4 class="card-title" style="font-size: 1.05rem; margin-bottom: 8px;">How do I swap user roles in this prototype?</h4>
          <p class="card-body">Use the floating tools widget in the bottom-left corner. Click the gear icon, select a role (Guest, Seeker, Recruiter, Admin), and the platform will switch context dynamically.</p>
        </div>
      </div>
    </div>
  `;
}

// CONTACT PAGE
function getContactHtml() {
  return `
    <div style="max-width: 600px; margin: var(--space-5) auto; padding: 0 var(--space-3);">
      <h2 class="hero-title" style="font-size: 2.5rem; text-align: center; margin-bottom: var(--space-2);">Get in Touch</h2>
      <p style="color: var(--text-secondary); text-align: center; font-size: 1.1rem; margin-bottom: var(--space-4);">Submit a support ticket and our customer relations squad will reply shortly.</p>
      
      <div class="card">
        <form id="contact-form">
          <div class="form-group">
            <label class="form-label" for="contact-name">Full Name</label>
            <input type="text" id="contact-name" class="form-control" required placeholder="John Doe">
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-email">Email Address</label>
            <input type="email" id="contact-email" class="form-control" required placeholder="john@example.com">
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-msg">Message</label>
            <textarea id="contact-msg" class="form-control" rows="5" required placeholder="How can we assist your squad today?"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full" style="margin-top: var(--space-2);">Submit Ticket</button>
        </form>
      </div>
    </div>
  `;
}

function setupContactListeners() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you! Your ticket was submitted successfully.", "success");
      form.reset();
    });
  }
}

// LOGIN PAGE
function getLoginHtml() {
  return `
    <div style="max-width: 420px; margin: var(--space-5) auto; padding: 0 var(--space-3);">
      <div class="card" style="padding: var(--space-4);">
        <div style="text-align: center; margin-bottom: var(--space-3);">
          <div class="logo-icon" style="margin: 0 auto 12px auto; width: 48px; height: 48px;">
            <span class="material-symbols-rounded filled" style="font-size: 28px;">hub</span>
          </div>
          <h3 class="card-title" style="font-size: 1.5rem;">Welcome Back</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Sign in to manage your talent portal</p>
        </div>
        
        <form id="login-form">
          <div class="floating-group">
            <input type="email" id="login-email" class="floating-input" placeholder=" " required value="alex.mercer@gmail.com">
            <label class="floating-label">Email Address</label>
          </div>
          
          <div class="floating-group">
            <input type="password" id="login-pass" class="floating-input" placeholder=" " required value="password123">
            <label class="floating-label">Password</label>
          </div>
          
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-2); font-size: 0.85rem;">
            <label class="custom-checkbox">
              <input type="checkbox" id="login-remember">
              <span class="checkbox-box"></span>
              <span>Remember me</span>
            </label>
            <a href="#forgot-password" style="color: var(--primary); font-weight: 500;">Forgot Password?</a>
          </div>
          
          <button type="submit" class="btn btn-primary btn-full">Sign In</button>
        </form>
        
        <div style="text-align: center; margin-top: var(--space-3); font-size: 0.875rem; color: var(--text-secondary);">
          Don't have an account? <a href="#register" style="color: var(--primary); font-weight: 600;">Register here</a>
        </div>
      </div>
    </div>
  `;
}

function setupLoginListeners() {
  const form = document.getElementById("login-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      
      // Auto assign role based on email context or default to seeker
      if (email.includes("admin")) {
        setRole("admin");
      } else if (email.includes("recruiter") || email.includes("cloudscale")) {
        setRole("recruiter");
      } else {
        setRole("seeker");
      }
      
      showToast("Logged in successfully!", "success");
    });
  }
}

// REGISTER PAGE
function getRegisterHtml() {
  return `
    <div style="max-width: 460px; margin: var(--space-4) auto; padding: 0 var(--space-3);">
      <div class="card" style="padding: var(--space-4);">
        <div style="text-align: center; margin-bottom: var(--space-3);">
          <h3 class="card-title" style="font-size: 1.5rem;">Create Account</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Join TalentBridge recruitment environment</p>
        </div>
        
        <form id="register-form">
          <div class="form-group">
            <label class="form-label">Join as a:</label>
            <div style="display: flex; gap: var(--space-2); margin-bottom: 4px;">
              <label class="custom-radio" style="flex: 1; padding: 10px; border: 1px solid var(--border); border-radius: var(--radius); text-align: center; justify-content: center;">
                <input type="radio" name="register-role" value="seeker" checked>
                <span class="radio-circle"></span>
                <span style="font-weight: 500;">Job Seeker</span>
              </label>
              <label class="custom-radio" style="flex: 1; padding: 10px; border: 1px solid var(--border); border-radius: var(--radius); text-align: center; justify-content: center;">
                <input type="radio" name="register-role" value="recruiter">
                <span class="radio-circle"></span>
                <span style="font-weight: 500;">Recruiter</span>
              </label>
            </div>
          </div>
          
          <div class="floating-group">
            <input type="text" id="reg-name" class="floating-input" placeholder=" " required>
            <label class="floating-label">Full Name</label>
          </div>
          
          <div class="floating-group">
            <input type="email" id="reg-email" class="floating-input" placeholder=" " required>
            <label class="floating-label">Email Address</label>
          </div>
          
          <div class="floating-group">
            <input type="password" id="reg-pass" class="floating-input" placeholder=" " required>
            <label class="floating-label">Password</label>
          </div>
          
          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: var(--space-2);">
            By checking below, you agree to our <a href="#privacy" style="color: var(--primary);">Privacy policy</a> and legal structures.
          </div>
          
          <button type="submit" class="btn btn-primary btn-full">Create Account</button>
        </form>
      </div>
    </div>
  `;
}

function setupRegisterListeners() {
  const form = document.getElementById("register-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const roleRadio = document.querySelector('input[name="register-role"]:checked').value;
      const name = document.getElementById("reg-name").value;
      
      setRole(roleRadio);
      if (roleRadio === "seeker") {
        const prof = db.get("profile") || DEFAULT_PROFILE;
        prof.name = name;
        db.set("profile", prof);
      }
      
      showToast("Account established successfully!", "success");
    });
  }
}

// FORGOT PASSWORD
function getForgotPasswordHtml() {
  return `
    <div style="max-width: 420px; margin: var(--space-5) auto; padding: 0 var(--space-3);">
      <div class="card" style="padding: var(--space-4);">
        <h3 class="card-title" style="font-size: 1.25rem; text-align: center; margin-bottom: 8px;">Reset Password</h3>
        <p style="color: var(--text-secondary); text-align: center; font-size: 0.9rem; margin-bottom: var(--space-3);">Submit your verified account email to request a reset link.</p>
        
        <form id="forgot-form">
          <div class="floating-group">
            <input type="email" id="forgot-email" class="floating-input" placeholder=" " required>
            <label class="floating-label">Email Address</label>
          </div>
          <button type="submit" class="btn btn-primary btn-full">Request Reset Link</button>
        </form>
        <div style="text-align: center; margin-top: var(--space-2); font-size: 0.85rem;">
          <a href="#login" style="color: var(--text-secondary);">Return to login</a>
        </div>
      </div>
    </div>
  `;
}
function setupForgotPasswordListeners() {
  const form = document.getElementById("forgot-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Password reset request sent! Check your inbox.", "success");
      navigateTo("reset-password");
    });
  }
}

// RESET PASSWORD
function getResetPasswordHtml() {
  return `
    <div style="max-width: 420px; margin: var(--space-5) auto; padding: 0 var(--space-3);">
      <div class="card" style="padding: var(--space-4);">
        <h3 class="card-title" style="font-size: 1.25rem; text-align: center; margin-bottom: 8px;">Create New Password</h3>
        <form id="reset-form">
          <div class="floating-group">
            <input type="password" id="reset-pass1" class="floating-input" placeholder=" " required>
            <label class="floating-label">New Password</label>
          </div>
          <div class="floating-group">
            <input type="password" id="reset-pass2" class="floating-input" placeholder=" " required>
            <label class="floating-label">Confirm New Password</label>
          </div>
          <button type="submit" class="btn btn-primary btn-full">Save Password</button>
        </form>
      </div>
    </div>
  `;
}
function setupResetPasswordListeners() {
  const form = document.getElementById("reset-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const p1 = document.getElementById("reset-pass1").value;
      const p2 = document.getElementById("reset-pass2").value;
      if (p1 !== p2) {
        showToast("Passwords do not match.", "danger");
        return;
      }
      showToast("New password configured. Please login.", "success");
      navigateTo("login");
    });
  }
}

// PRIVACY & TERMS
function getPrivacyHtml() { return `<div style="max-width: 800px; margin: var(--space-4) auto; padding: var(--space-3);"><h2 class="hero-title" style="font-size: 2rem; margin-bottom: 12px;">Privacy Policy</h2><div class="card"><p class="card-body">Your data privacy is audited under ISO 27001 structures. TalentBridge secures details, handles resume documents securely, and never exports data to external scraping tools.</p></div></div>`; }
function getTermsHtml() { return `<div style="max-width: 800px; margin: var(--space-4) auto; padding: var(--space-3);"><h2 class="hero-title" style="font-size: 2rem; margin-bottom: 12px;">Terms & Conditions</h2><div class="card"><p class="card-body">By accessing TalentBridge, users agree to recruitment behaviors: submitting accurate logs, refraining from automated scraping, and complying with local hiring policies.</p></div></div>`; }

// JOB DETAILS PAGE
function getJobDetailsHtml(id) {
  const jobs = db.get("jobs") || [];
  const job = jobs.find(j => j.id === id) || jobs[0];
  const company = (db.get("companies") || []).find(c => c.id === job.companyId) || { overview: "Premium SaaS Enterprise." };
  
  const saved = db.get("saved_jobs") || [];
  const isSaved = saved.includes(job.id);
  
  const applications = db.get("applications") || [];
  const hasApplied = applications.some(a => a.jobId === job.id);

  return `
    <div style="max-width: 1200px; margin: var(--space-3) auto; padding: 0 var(--space-3);">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#landing" class="breadcrumbs-item">Home</a>
        <a href="#seeker-search" class="breadcrumbs-item">Jobs</a>
        <span class="breadcrumbs-item active">${job.title}</span>
      </div>

      <div class="job-details-layout">
        <!-- Main Info -->
        <div style="display: flex; flex-direction: column; gap: var(--space-3);">
          <div class="card" style="padding: var(--space-4);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-2);">
              <div style="display: flex; gap: var(--space-2);">
                <div class="user-avatar avatar-lg company-logo">${job.logoLetter}</div>
                <div>
                  <h2 class="hero-title" style="font-size: 1.75rem; text-align: left;">${job.title}</h2>
                  <p style="font-size: 1.1rem; font-weight: 500; color: var(--text-secondary);"><a href="#company-details?id=${job.companyId}">${job.companyName}</a></p>
                </div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="btn-icon btn-save-detail" data-id="${job.id}">
                  <span class="material-symbols-rounded ${isSaved ? 'filled' : ''}">bookmark</span>
                </button>
                <button class="btn btn-secondary btn-share-job"><span class="material-symbols-rounded">share</span> Share</button>
              </div>
            </div>

            <div class="job-details-meta" style="margin-bottom: var(--space-3); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 12px 0;">
              <div class="job-meta-item"><span class="material-symbols-rounded">location_on</span> ${job.location}</div>
              <div class="job-meta-item"><span class="material-symbols-rounded">payments</span> ${job.salary}</div>
              <div class="job-meta-item"><span class="material-symbols-rounded">work</span> ${job.experience}</div>
              <div class="job-meta-item"><span class="material-symbols-rounded">schedule</span> ${job.type}</div>
            </div>

            <div style="margin-bottom: var(--space-3);">
              <h4 class="form-label" style="font-size: 1.05rem;">Job Description</h4>
              <p style="color: var(--text-secondary); line-height: 1.6;">${job.description}</p>
            </div>

            <div style="margin-bottom: var(--space-3);">
              <h4 class="form-label" style="font-size: 1.05rem;">Key Responsibilities</h4>
              <ul style="padding-left: var(--space-2); color: var(--text-secondary); display:flex; flex-direction:column; gap:6px;">
                ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
              </ul>
            </div>

            <div style="margin-bottom: var(--space-3);">
              <h4 class="form-label" style="font-size: 1.05rem;">Qualifications Required</h4>
              <ul style="padding-left: var(--space-2); color: var(--text-secondary); display:flex; flex-direction:column; gap:6px;">
                ${job.qualifications.map(q => `<li>${q}</li>`).join('')}
              </ul>
            </div>

            <div style="margin-bottom: var(--space-3);">
              <h4 class="form-label" style="font-size: 1.05rem;">Benefits & Perks</h4>
              <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${job.benefits.map(b => `<span class="badge badge-success"><span class="material-symbols-rounded" style="font-size:14px;">check_circle</span> ${b}</span>`).join('')}
              </div>
            </div>
            
            <div style="border-top: 1px solid var(--border); padding-top: var(--space-2); display: flex; justify-content: flex-end;">
              ${hasApplied 
                ? `<button class="btn btn-success" disabled><span class="material-symbols-rounded">done</span> Application Submitted</button>`
                : `<button class="btn btn-primary btn-lg" id="btn-apply-job" data-id="${job.id}">Apply to this job</button>`
              }
            </div>
          </div>
        </div>

        <!-- Sidebar Info -->
        <div style="display: flex; flex-direction: column; gap: var(--space-3);">
          <div class="card">
            <h4 class="card-title" style="margin-bottom: 8px;">Company Overview</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">${company.overview}</p>
            <a href="#company-details?id=${job.companyId}" class="btn btn-secondary btn-sm btn-full">View Company Details</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupJobDetailsListeners(id) {
  const applyBtn = document.getElementById("btn-apply-job");
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      if (appState.role === "guest") {
        showToast("Please register or login as a Job Seeker to apply.", "warning");
        navigateTo("login");
        return;
      }
      
      const jobs = db.get("jobs") || [];
      const job = jobs.find(j => j.id === id);
      
      document.getElementById("apply-job-id").value = id;
      document.getElementById("apply-job-title-desc").textContent = `${job.title} at ${job.companyName}`;
      
      // Open modal
      const modal = document.getElementById("apply-job-modal");
      modal.classList.add("active");
    });
  }

  // Save/Bookmark toggle
  const saveBtn = document.querySelector(".btn-save-detail");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      if (appState.role === "guest") {
        showToast("Please register or login as a Job Seeker to bookmark jobs.", "warning");
        navigateTo("login");
        return;
      }
      let saved = db.get("saved_jobs") || [];
      if (saved.includes(id)) {
        saved = saved.filter(savedId => savedId !== id);
        saveBtn.querySelector(".material-symbols-rounded").classList.remove("filled");
        showToast("Job removed from saved list.", "info");
      } else {
        saved.push(id);
        saveBtn.querySelector(".material-symbols-rounded").classList.add("filled");
        showToast("Job bookmarked successfully!", "success");
      }
      db.set("saved_jobs", saved);
    });
  }

  // Share link
  const shareBtn = document.querySelector(".btn-share-job");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href);
      showToast("Job link copied to clipboard!", "success");
    });
  }
}

// COMPANY DETAILS PAGE
function getCompanyDetailsHtml(id) {
  const companies = db.get("companies") || [];
  const comp = companies.find(c => c.id === id) || companies[0];
  const jobs = (db.get("jobs") || []).filter(j => j.companyId === comp.id && j.status === "active");

  return `
    <div style="max-width: 1000px; margin: var(--space-3) auto; padding: 0 var(--space-3);">
      <div class="card" style="padding: var(--space-4); margin-bottom: var(--space-3);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: var(--space-2);">
          <div style="display:flex; gap: var(--space-2);">
            <div class="user-avatar avatar-lg company-logo" style="background-color: var(--primary-light); color: var(--primary); font-weight:700;">${comp.name[0]}</div>
            <div>
              <h2 class="hero-title" style="font-size: 1.75rem; text-align:left; display:inline-flex; align-items:center; gap:8px;">
                ${comp.name} 
                ${comp.verified ? `<span class="material-symbols-rounded filled" style="color: var(--primary);" title="Verified Company">verified</span>` : ''}
              </h2>
              <p style="color:var(--text-secondary); font-size:1.05rem;">${comp.industry}</p>
            </div>
          </div>
          <a href="${comp.website}" target="_blank" class="btn btn-secondary"><span class="material-symbols-rounded">language</span> Website</a>
        </div>

        <div class="job-details-meta" style="margin-bottom: var(--space-3);">
          <div class="job-meta-item"><span class="material-symbols-rounded">location_on</span> ${comp.location}</div>
          <div class="job-meta-item"><span class="material-symbols-rounded">group</span> ${comp.employees} employees</div>
          <div class="job-meta-item"><span class="material-symbols-rounded">star</span> ${comp.rating} Rating</div>
        </div>

        <div style="margin-bottom: var(--space-3);">
          <h4 class="form-label" style="font-size:1.05rem;">About Us</h4>
          <p style="color:var(--text-secondary); line-height:1.6;">${comp.overview}</p>
        </div>

        <div style="margin-bottom: var(--space-3);">
          <h4 class="form-label" style="font-size:1.05rem;">Office Gallery</h4>
          <div class="company-profile-gallery">
            ${comp.gallery.map(img => `<img src="${img}" class="company-gallery-img" alt="Office gallery">`).join('')}
          </div>
        </div>
      </div>

      <!-- Tabs for reviews/jobs -->
      <div class="tabs-container" id="company-tabs">
        <button class="tab-btn active" data-tab="tab-comp-jobs">Open Jobs (${jobs.length})</button>
        <button class="tab-btn" data-tab="tab-comp-reviews">Reviews (${comp.reviews.length})</button>
      </div>

      <div id="tab-comp-jobs" class="company-tab-panel">
        <div style="display:grid; grid-template-columns: 1fr; gap: var(--space-2);">
          ${jobs.map(job => `
            <div class="card" style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <h4 class="card-title" style="font-size: 1.05rem;"><a href="#job-details?id=${job.id}">${job.title}</a></h4>
                <p style="font-size:0.85rem; color:var(--text-secondary);">${job.location} • ${job.salary}</p>
              </div>
              <a href="#job-details?id=${job.id}" class="btn btn-secondary btn-sm">Apply Now</a>
            </div>
          `).join('')}
          ${jobs.length === 0 ? `<div class="empty-state"><span class="material-symbols-rounded empty-state-icon">work_off</span><h4 class="empty-state-title">No Open Openings</h4></div>` : ''}
        </div>
      </div>

      <div id="tab-comp-reviews" class="company-tab-panel" style="display:none;">
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:var(--space-2);">
            <h4 class="card-title">Employee Reviews</h4>
            <button class="btn btn-primary btn-sm" id="btn-add-review">Add Review</button>
          </div>
          
          <!-- Quick Add Review Form -->
          <form id="add-review-form" style="display:none; border-bottom:1px solid var(--border); padding-bottom:var(--space-2); margin-bottom:var(--space-2);">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Title / Role</label>
                <input type="text" id="review-role" class="form-control" required placeholder="e.g. Senior Analyst">
              </div>
              <div class="form-group">
                <label class="form-label">Rating (1-5)</label>
                <input type="number" id="review-rating" class="form-control" min="1" max="5" value="5" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Your Review</label>
              <textarea id="review-text" class="form-control" rows="3" required placeholder="What is it like to work here?"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Submit Review</button>
          </form>

          <div class="company-reviews-list">
            ${comp.reviews.map(rev => `
              <div class="company-review-item">
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                  <span style="font-weight:600; color:var(--text-primary);">${rev.author}</span>
                  <span style="font-size:0.8rem; color:var(--text-secondary);">${rev.date}</span>
                </div>
                <div style="margin-bottom:6px;">${getStarsHtml(rev.rating)}</div>
                <p style="font-size:0.9rem; color:var(--text-secondary);">${rev.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupCompanyDetailsListeners(id) {
  const tabs = document.querySelectorAll("#company-tabs .tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const target = tab.getAttribute("data-tab");
      document.querySelectorAll(".company-tab-panel").forEach(panel => {
        panel.style.display = panel.getAttribute("id") === target ? "block" : "none";
      });
    });
  });

  // Review Show Form
  const addReviewBtn = document.getElementById("btn-add-review");
  const reviewForm = document.getElementById("add-review-form");
  if (addReviewBtn && reviewForm) {
    addReviewBtn.addEventListener("click", () => {
      reviewForm.style.display = reviewForm.style.display === "none" ? "block" : "none";
    });
    
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const role = document.getElementById("review-role").value;
      const rating = parseFloat(document.getElementById("review-rating").value);
      const text = document.getElementById("review-text").value;
      
      const companies = db.get("companies") || [];
      const index = companies.findIndex(c => c.id === id);
      
      if (index !== -1) {
        companies[index].reviews.unshift({
          author: role,
          text: text,
          rating: rating,
          date: "Just now"
        });
        db.set("companies", companies);
        showToast("Review submitted successfully!", "success");
        renderActiveView(appState.view);
      }
    });
  }
}


// ==========================================
// 6. JOB SEEKER WORKSPACE RENDERING
// ==========================================
function getSeekerDashboardHtml() {
  const profile = db.get("profile") || DEFAULT_PROFILE;
  const applications = (db.get("applications") || []).filter(a => a.applicantId === "seeker-1");
  const saved = db.get("saved_jobs") || [];
  
  // Counts
  const interviewsCount = applications.filter(a => a.status === "scheduled").length;

  return `
    <div style="display:flex; flex-direction:column; gap: var(--space-3);">
      
      <!-- Welcome Header -->
      <div class="card" style="background: linear-gradient(135deg, var(--primary) 0%, #1D4ED8 100%); color: white;">
        <h2 style="font-size: 1.5rem; font-weight:700;">Welcome back, ${profile.name}!</h2>
        <p style="opacity: 0.9; font-size: 0.95rem;">You have ${applications.length} active applications under review and ${interviewsCount} pending interviews this week.</p>
      </div>

      <!-- Stats Grid -->
      <div class="stat-card-grid">
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Applications Sent</span>
            <span class="stat-value">${applications.length}</span>
          </div>
          <div class="stat-icon-wrapper primary"><span class="material-symbols-rounded">assignment_turned_in</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Interviews</span>
            <span class="stat-value">${interviewsCount}</span>
          </div>
          <div class="stat-icon-wrapper success"><span class="material-symbols-rounded">calendar_month</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Saved Listings</span>
            <span class="stat-value">${saved.length}</span>
          </div>
          <div class="stat-icon-wrapper warning"><span class="material-symbols-rounded">bookmark</span></div>
        </div>
      </div>

      <!-- Two Column Layout -->
      <div style="display:grid; grid-template-columns: 1fr; gap:var(--space-3); align-items:start;" class="form-row">
        <!-- Col 1: Applications Timeline & Quick actions -->
        <div style="display:flex; flex-direction:column; gap: var(--space-3);">
          <div class="card">
            <h4 class="card-title" style="margin-bottom:var(--space-2);">Quick Actions</h4>
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:8px;">
              <a href="#seeker-search" class="btn btn-secondary btn-sm"><span class="material-symbols-rounded">search</span> Find Jobs</a>
              <a href="#seeker-profile" class="btn btn-secondary btn-sm"><span class="material-symbols-rounded">edit</span> Edit Profile</a>
            </div>
          </div>

          <div class="card">
            <h4 class="card-title" style="margin-bottom: var(--space-3);">Applications Analytics</h4>
            <!-- Pure CSS Chart -->
            <div class="chart-bars-container">
              <div class="chart-bar-wrapper">
                <div class="chart-bar-fill" style="height: ${applications.length > 0 ? (applications.filter(a => a.status === 'applied').length / applications.length) * 100 : 0}%;">
                  <span class="chart-bar-tooltip">${applications.filter(a => a.status === 'applied').length} Applied</span>
                </div>
                <span class="chart-label">Applied</span>
              </div>
              <div class="chart-bar-wrapper">
                <div class="chart-bar-fill" style="height: ${applications.length > 0 ? (applications.filter(a => a.status === 'scheduled').length / applications.length) * 100 : 0}%; background:var(--success);">
                  <span class="chart-bar-tooltip">${applications.filter(a => a.status === 'scheduled').length} Interview</span>
                </div>
                <span class="chart-label">Interview</span>
              </div>
              <div class="chart-bar-wrapper">
                <div class="chart-bar-fill" style="height: ${applications.length > 0 ? (applications.filter(a => a.status === 'offered').length / applications.length) * 100 : 0}%; background:var(--warning);">
                  <span class="chart-bar-tooltip">${applications.filter(a => a.status === 'offered').length} Offered</span>
                </div>
                <span class="chart-label">Offered</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Col 2: Recent Activity Timeline -->
        <div class="card">
          <h4 class="card-title" style="margin-bottom: var(--space-3);">Hiring Timeline Tracker</h4>
          <div class="timeline">
            ${applications.length > 0 ? applications.map(app => `
              <div class="timeline-item completed">
                <div class="timeline-time">${app.appliedDate}</div>
                <div class="timeline-title">${app.jobTitle}</div>
                <div class="timeline-description">Status: <span class="badge ${app.status === 'scheduled' ? 'badge-success' : 'badge-primary'}">${app.status}</span> at ${app.companyName}</div>
              </div>
            `).join('') : '<div class="empty-state-desc">No active applications currently tracking.</div>'}
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupSeekerDashboardListeners() {}

// SEEKER PROFILE
function getSeekerProfileHtml() {
  const profile = db.get("profile") || DEFAULT_PROFILE;
  
  return `
    <div style="display:flex; flex-direction:column; gap: var(--space-3);">
      
      <!-- Meter Card -->
      <div class="card">
        <div class="completion-container">
          <div class="completion-header">
            <span>Profile Completion Index</span>
            <span>${profile.completion}%</span>
          </div>
          <div class="completion-bar">
            <div class="completion-fill" style="width: ${profile.completion}%;"></div>
          </div>
        </div>
      </div>

      <!-- Core Details Grid -->
      <div style="display:grid; grid-template-columns: 1fr; gap:var(--space-3); align-items:start;" class="form-row">
        <!-- Left Side Profile fields -->
        <div style="display:flex; flex-direction:column; gap:var(--space-3);">
          
          <div class="card">
            <div style="display:flex; gap:16px; align-items:center; margin-bottom:var(--space-3);">
              <div class="user-avatar avatar-lg" style="background-color: var(--primary-light); color: var(--primary); font-weight:700;">${profile.avatar}</div>
              <div>
                <h3 class="card-title">${profile.name}</h3>
                <p style="color:var(--text-secondary);">${profile.title}</p>
                <p style="font-size:0.85rem; color:var(--text-muted);">${profile.location}</p>
              </div>
            </div>
            
            <form id="edit-profile-form">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Full Name</label>
                  <input type="text" id="prof-name" class="form-control" value="${profile.name}" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Job Title</label>
                  <input type="text" id="prof-title" class="form-control" value="${profile.title}" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input type="email" id="prof-email" class="form-control" value="${profile.email}" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Phone</label>
                  <input type="text" id="prof-phone" class="form-control" value="${profile.phone}">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Personal Statement / Bio</label>
                <textarea id="prof-bio" class="form-control" rows="3">${profile.bio}</textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-sm">Update Details</button>
            </form>
          </div>

          <!-- Skills Tagging -->
          <div class="card">
            <h4 class="card-title" style="margin-bottom:var(--space-2);">Skill Endorsements</h4>
            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">
              ${profile.skills.map(s => `<span class="badge badge-primary" style="display:inline-flex; align-items:center; gap:4px;">${s} <span class="material-symbols-rounded btn-remove-skill" data-skill="${s}" style="font-size:12px; cursor:pointer;">close</span></span>`).join('')}
            </div>
            <form id="add-skill-form" style="display:flex; gap:8px;">
              <input type="text" id="new-skill-input" class="form-control" style="padding: 6px 12px;" placeholder="Add skill (e.g. SQL)" required>
              <button type="submit" class="btn btn-secondary btn-sm">Add</button>
            </form>
          </div>
        </div>

        <!-- Right Side CV Uploads / Work Experience -->
        <div style="display:flex; flex-direction:column; gap:var(--space-3);">
          <!-- Resume Locker -->
          <div class="card">
            <h4 class="card-title" style="margin-bottom:12px;">Uploaded CV Document</h4>
            <div style="border:1px solid var(--border); border-radius:var(--radius); padding:12px; display:flex; align-items:center; justify-content:space-between; background-color:var(--background);">
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="material-symbols-rounded" style="color:var(--danger); font-size:32px;">description</span>
                <div>
                  <div style="font-weight:600; font-size:0.9rem;">${profile.resumeFile}</div>
                  <span style="font-size:0.75rem; color:var(--text-secondary);">PDF • 142 KB</span>
                </div>
              </div>
              <div style="display:flex; gap:4px;">
                <button class="btn btn-secondary btn-sm" id="btn-preview-resume" title="Preview Resume"><span class="material-symbols-rounded">visibility</span></button>
                <button class="btn btn-secondary btn-sm" id="btn-download-resume" title="Download Resume"><span class="material-symbols-rounded">download</span></button>
              </div>
            </div>
            
            <div style="margin-top:12px;">
              <label class="form-label" style="font-size:0.85rem;">Upload new version</label>
              <input type="file" id="profile-resume-upload" class="form-control" style="font-size:0.85rem; padding:6px;">
            </div>
          </div>

          <!-- Professional Work History -->
          <div class="card">
            <h4 class="card-title" style="margin-bottom:12px;">Experience Timeline</h4>
            <div class="timeline">
              ${profile.experience.map(exp => `
                <div class="timeline-item completed">
                  <div class="timeline-time">${exp.period}</div>
                  <div class="timeline-title">${exp.title}</div>
                  <div class="timeline-description"><strong>${exp.company}</strong> — ${exp.description}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupSeekerProfileListeners() {
  // Update Profile Text Form
  const form = document.getElementById("edit-profile-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const profile = db.get("profile") || DEFAULT_PROFILE;
      profile.name = document.getElementById("prof-name").value;
      profile.title = document.getElementById("prof-title").value;
      profile.email = document.getElementById("prof-email").value;
      profile.phone = document.getElementById("prof-phone").value;
      profile.bio = document.getElementById("prof-bio").value;
      
      db.set("profile", profile);
      showToast("Profile details updated successfully!", "success");
      updatePanelNavbarInfo();
    });
  }

  // Skills handlers
  const addSkillForm = document.getElementById("add-skill-form");
  if (addSkillForm) {
    addSkillForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = document.getElementById("new-skill-input").value.trim();
      if (!val) return;
      
      const profile = db.get("profile") || DEFAULT_PROFILE;
      if (!profile.skills.includes(val)) {
        profile.skills.push(val);
        profile.completion = Math.min(100, profile.completion + 2);
        db.set("profile", profile);
        showToast(`Skill '${val}' added.`, "success");
        renderActiveView(appState.view);
      }
    });
  }

  document.querySelectorAll(".btn-remove-skill").forEach(btn => {
    btn.addEventListener("click", () => {
      const skill = btn.getAttribute("data-skill");
      const profile = db.get("profile") || DEFAULT_PROFILE;
      profile.skills = profile.skills.filter(s => s !== skill);
      db.set("profile", profile);
      showToast(`Skill '${skill}' removed.`, "info");
      renderActiveView(appState.view);
    });
  });

  // Resume Download and Preview triggers
  const previewBtn = document.getElementById("btn-preview-resume");
  const downloadBtn = document.getElementById("btn-download-resume");
  const uploadInput = document.getElementById("profile-resume-upload");

  if (previewBtn) {
    previewBtn.addEventListener("click", () => {
      openResumePreviewModal();
    });
  }
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      showToast("Downloading CV file Alex_Mercer_CV_2026.pdf...", "success");
    });
  }
  if (uploadInput) {
    uploadInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const profile = db.get("profile") || DEFAULT_PROFILE;
        profile.resumeFile = file.name;
        db.set("profile", profile);
        showToast(`Resume uploaded: ${file.name}`, "success");
        renderActiveView(appState.view);
      }
    });
  }
}

// SEEKER SEARCH
function getSeekerSearchHtml() {
  const jobs = db.get("jobs") || [];
  const saved = db.get("saved_jobs") || [];

  return `
    <div style="display:flex; flex-direction:column; gap: var(--space-3);">
      
      <!-- Filter Top Panel -->
      <div class="card filter-card">
        <form id="search-filter-form">
          <div class="filter-grid">
            <div class="form-group" style="margin-bottom:0;">
              <label class="form-label" style="font-size:0.75rem;">Keywords</label>
              <input type="text" id="filter-keyword" class="form-control" style="padding: 8px 12px;" placeholder="Title, company, etc.">
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <label class="form-label" style="font-size:0.75rem;">Location</label>
              <input type="text" id="filter-location" class="form-control" style="padding: 8px 12px;" placeholder="City or remote">
            </div>
            <div class="form-group" style="margin-bottom:0;">
              <label class="form-label" style="font-size:0.75rem;">Employment Type</label>
              <select id="filter-type" class="form-control" style="padding: 8px 12px;">
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Contract">Contract</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
            <div class="form-group" style="margin-bottom:0; display:flex; align-items:flex-end;">
              <button type="submit" class="btn btn-primary btn-sm btn-full" style="height:38px;">Apply Filters</button>
            </div>
          </div>
        </form>
      </div>

      <!-- Job List Results Area -->
      <div style="display:grid; grid-template-columns: 1fr; gap:var(--space-2);" id="job-search-results">
        <!-- Rendered by JS -->
      </div>
    </div>
  `;
}

function setupSeekerSearchListeners() {
  const form = document.getElementById("search-filter-form");
  
  // Pull default queries from hash if present
  const hash = window.location.hash;
  let initKw = "";
  let initLoc = "";
  if (hash.includes("?")) {
    const params = hash.split("?")[1].split("&");
    params.forEach(p => {
      const parts = p.split("=");
      if (parts[0] === "kw") initKw = decodeURIComponent(parts[1] || "");
      if (parts[0] === "loc") initLoc = decodeURIComponent(parts[1] || "");
    });
  }

  const kwInput = document.getElementById("filter-keyword");
  const locInput = document.getElementById("filter-location");
  if (kwInput && initKw) kwInput.value = initKw;
  if (locInput && initLoc) locInput.value = initLoc;

  const performFilter = () => {
    const keyword = kwInput.value.toLowerCase();
    const location = locInput.value.toLowerCase();
    const type = document.getElementById("filter-type").value;
    
    let jobs = db.get("jobs") || [];
    jobs = jobs.filter(j => j.status === "active");
    
    if (keyword) {
      jobs = jobs.filter(j => j.title.toLowerCase().includes(keyword) || j.companyName.toLowerCase().includes(keyword) || j.skills.some(s => s.toLowerCase().includes(keyword)));
    }
    if (location) {
      jobs = jobs.filter(j => j.location.toLowerCase().includes(location));
    }
    if (type) {
      jobs = jobs.filter(j => j.type === type);
    }
    
    const resultsContainer = document.getElementById("job-search-results");
    const saved = db.get("saved_jobs") || [];
    
    if (jobs.length === 0) {
      resultsContainer.innerHTML = `
        <div class="empty-state">
          <span class="material-symbols-rounded empty-state-icon">search_off</span>
          <h4 class="empty-state-title">No Matching Jobs</h4>
          <p class="empty-state-desc">Try widening your filters or input terms.</p>
        </div>
      `;
      return;
    }
    
    let html = "";
    jobs.forEach(job => {
      const isSaved = saved.includes(job.id);
      html += `
        <div class="card job-card">
          <div class="job-card-header">
            <div class="job-company-info">
              <div class="user-avatar company-logo">${job.logoLetter}</div>
              <div>
                <h4 class="card-title" style="font-size: 1.05rem;"><a href="#job-details?id=${job.id}">${job.title}</a></h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary);">${job.companyName}</p>
              </div>
            </div>
            <button class="btn-icon btn-sm btn-save-search" data-id="${job.id}">
              <span class="material-symbols-rounded ${isSaved ? 'filled' : ''}">bookmark</span>
            </button>
          </div>
          <div class="job-details-meta">
            <div class="job-meta-item"><span class="material-symbols-rounded" style="font-size:16px;">location_on</span> ${job.location}</div>
            <div class="job-meta-item"><span class="material-symbols-rounded" style="font-size:16px;">payments</span> ${job.salary}</div>
            <div class="job-meta-item"><span class="material-symbols-rounded" style="font-size:16px;">schedule</span> ${job.type}</div>
          </div>
          <div class="job-footer">
            <span class="badge badge-primary">${job.category}</span>
            <a href="#job-details?id=${job.id}" class="btn btn-secondary btn-sm">Details</a>
          </div>
        </div>
      `;
    });
    
    resultsContainer.innerHTML = html;
    
    // Save triggers inside search results
    document.querySelectorAll(".btn-save-search").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        let savedList = db.get("saved_jobs") || [];
        if (savedList.includes(id)) {
          savedList = savedList.filter(sId => sId !== id);
          btn.querySelector(".material-symbols-rounded").classList.remove("filled");
          showToast("Job removed from saved list.", "info");
        } else {
          savedList.push(id);
          btn.querySelector(".material-symbols-rounded").classList.add("filled");
          showToast("Job saved successfully!", "success");
        }
        db.set("saved_jobs", savedList);
      });
    });
  };

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      performFilter();
    });
  }
  
  // Run on load
  performFilter();
}

// SAVED JOBS
function getSeekerSavedHtml() {
  const savedIds = db.get("saved_jobs") || [];
  const allJobs = db.get("jobs") || [];
  const savedJobs = allJobs.filter(j => savedIds.includes(j.id));

  return `
    <div style="display:flex; flex-direction:column; gap:var(--space-2);">
      <h3 class="card-title">Bookmarked Job Listings</h3>
      <div style="display:grid; grid-template-columns: 1fr; gap:var(--space-2);" id="saved-jobs-container">
        ${savedJobs.map(job => `
          <div class="card" style="display:flex; justify-content:space-between; align-items:center;" id="saved-card-${job.id}">
            <div style="display:flex; gap:12px; align-items:center;">
              <div class="user-avatar company-logo">${job.logoLetter}</div>
              <div>
                <h4 class="card-title" style="font-size:1.05rem;"><a href="#job-details?id=${job.id}">${job.title}</a></h4>
                <p style="font-size:0.85rem; color:var(--text-secondary);">${job.companyName} • ${job.location}</p>
              </div>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-danger btn-sm btn-unsave" data-id="${job.id}"><span class="material-symbols-rounded">delete</span> Remove</button>
              <a href="#job-details?id=${job.id}" class="btn btn-primary btn-sm">Apply</a>
            </div>
          </div>
        `).join('')}
        ${savedJobs.length === 0 ? `
          <div class="empty-state">
            <span class="material-symbols-rounded empty-state-icon">bookmark_border</span>
            <h4 class="empty-state-title">No Saved Jobs</h4>
            <p class="empty-state-desc">Browse our directory and click the bookmark bookmark badge to store job opportunities.</p>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function setupSeekerSavedListeners() {
  document.querySelectorAll(".btn-unsave").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      let saved = db.get("saved_jobs") || [];
      saved = saved.filter(sId => sId !== id);
      db.set("saved_jobs", saved);
      
      const card = document.getElementById(`saved-card-${id}`);
      if (card) card.remove();
      
      showToast("Job removed from bookmarks.", "info");
      if (saved.length === 0) {
        renderActiveView(appState.view);
      }
    });
  });
}

// APPLIED JOBS
function getSeekerAppliedHtml() {
  const applications = (db.get("applications") || []).filter(a => a.applicantId === "seeker-1");

  return `
    <div style="display:flex; flex-direction:column; gap:var(--space-3);">
      <h3 class="card-title">Applied Applications Track</h3>
      <div style="display:grid; grid-template-columns: 1fr; gap:var(--space-3);">
        ${applications.map(app => `
          <div class="card" style="padding:var(--space-3);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:12px;">
              <div>
                <h4 class="card-title" style="font-size:1.1rem;">${app.jobTitle}</h4>
                <p style="font-size:0.875rem; color:var(--text-secondary); font-weight:500;">${app.companyName}</p>
              </div>
              <span class="badge ${app.status === 'scheduled' ? 'badge-success' : 'badge-primary'}">${app.status}</span>
            </div>
            
            <!-- Application steps checklist -->
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px; font-size:0.8rem; font-weight:600; color:var(--text-secondary);">
              <div style="display:flex; align-items:center; gap:4px; color:var(--success);"><span class="material-symbols-rounded" style="font-size:16px;">check_circle</span> Application Submitted</div>
              <div style="display:flex; align-items:center; gap:4px; ${['shortlisted', 'scheduled', 'offered'].includes(app.status) ? 'color:var(--success);' : ''}"><span class="material-symbols-rounded" style="font-size:16px;">${['shortlisted', 'scheduled', 'offered'].includes(app.status) ? 'check_circle' : 'pending'}</span> Shortlist Review</div>
              <div style="display:flex; align-items:center; gap:4px; ${['scheduled', 'offered'].includes(app.status) ? 'color:var(--success);' : ''}"><span class="material-symbols-rounded" style="font-size:16px;">${['scheduled', 'offered'].includes(app.status) ? 'check_circle' : 'pending'}</span> Interview Rounds</div>
              <div style="display:flex; align-items:center; gap:4px; ${app.status === 'offered' ? 'color:var(--success);' : ''}"><span class="material-symbols-rounded" style="font-size:16px;">${app.status === 'offered' ? 'check_circle' : 'pending'}</span> Final Offer</div>
            </div>
            
            <!-- Interview info box -->
            ${app.interview ? `
              <div class="alert alert-success" style="margin-top:12px; margin-bottom:0;">
                <span class="material-symbols-rounded" style="margin-top:2px;">video_call</span>
                <div style="width: 100%;">
                  <div class="alert-title">Technical screening scheduled!</div>
                  <div class="alert-message" style="margin-bottom: 8px;">
                    Date: ${app.interview.date} at ${app.interview.time} | Host: ${app.interview.interviewer}
                  </div>
                  <a href="${app.interview.link}" target="_blank" class="btn btn-success btn-sm"><span class="material-symbols-rounded" style="font-size:16px;">video_chat</span> Join Interview Room</a>
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
        ${applications.length === 0 ? `
          <div class="empty-state">
            <span class="material-symbols-rounded empty-state-icon">assignment_late</span>
            <h4 class="empty-state-title">No Active Applications</h4>
            <p class="empty-state-desc">You haven't submitted profiles to any jobs yet. Check out the job search module.</p>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function setupSeekerAppliedListeners() {}

// MESSAGES (CHAT BOARD)
function getSeekerMessagesHtml() {
  const msgs = db.get("messages") || [];
  
  return `
    <div class="chat-container">
      <!-- Contact Sidebar -->
      <div class="chat-sidebar">
        <div class="chat-search">
          <input type="text" class="table-search-input" style="padding: 6px 12px 6px 36px;" placeholder="Search discussions...">
        </div>
        <div class="chat-list">
          <div class="chat-user-item active">
            <div class="user-avatar avatar-sm">SJ</div>
            <div class="chat-user-details">
              <div class="chat-user-header">
                <span class="chat-user-name">Sarah Jenkins (CloudScale)</span>
                <span class="chat-time">3:14 PM</span>
              </div>
              <p class="chat-preview">${msgs[msgs.length - 1] ? msgs[msgs.length - 1].text : ''}</p>
            </div>
            <span class="chat-unread-badge"></span>
          </div>
        </div>
      </div>

      <!-- Chat Body -->
      <div class="chat-main-pane">
        <div class="chat-pane-header">
          <div class="user-avatar avatar-sm">SJ</div>
          <div>
            <h4 class="chat-user-name">Sarah Jenkins</h4>
            <span style="font-size:0.75rem; color:var(--success); font-weight:600; display:flex; align-items:center; gap:2px;"><span style="background-color:var(--success); width:6px; height:6px; border-radius:50%; display:block;"></span> Active now</span>
          </div>
        </div>
        
        <div class="chat-messages-scroll" id="chat-scroller">
          ${msgs.map(m => `
            <div class="chat-bubble ${m.from === 'seeker-1' ? 'outgoing' : 'incoming'}">
              <p>${m.text}</p>
              <span class="chat-bubble-time">${m.time}</span>
            </div>
          `).join('')}
        </div>
        
        <form class="chat-input-bar" id="chat-input-form">
          <textarea id="chat-msg-text" class="chat-textarea" placeholder="Compose message..." required></textarea>
          <button type="submit" class="btn btn-primary" style="height:44px;"><span class="material-symbols-rounded">send</span></button>
        </form>
      </div>
    </div>
  `;
}

function setupSeekerMessagesListeners() {
  const scroller = document.getElementById("chat-scroller");
  if (scroller) {
    scroller.scrollTop = scroller.scrollHeight;
  }

  const form = document.getElementById("chat-input-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("chat-msg-text");
      const val = input.value.trim();
      if (!val) return;
      
      const msgs = db.get("messages") || [];
      msgs.push({
        id: `msg-${Date.now()}`,
        from: "seeker-1",
        fromName: "Alex Mercer",
        to: "recruiter-1",
        text: val,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        unread: false
      });
      db.set("messages", msgs);
      input.value = "";
      
      showToast("Message sent.", "success");
      renderActiveView(appState.view);
    });
  }
}

// SETTINGS
function getSeekerSettingsHtml() {
  return `
    <div style="max-width:600px; margin:0 auto; display:flex; flex-direction:column; gap:var(--space-3);">
      <div class="card">
        <h4 class="card-title" style="margin-bottom:var(--space-2);">Account Security</h4>
        <form id="change-pass-form">
          <div class="form-group">
            <label class="form-label">Current Password</label>
            <input type="password" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="form-label">New Password</label>
            <input type="password" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="form-label">Confirm New Password</label>
            <input type="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary btn-sm">Update Password</button>
        </form>
      </div>

      <div class="card" style="border-color:var(--danger-light);">
        <h4 class="card-title" style="color:var(--danger); margin-bottom:8px;">Deactivate Platform Membership</h4>
        <p style="font-size:0.875rem; color:var(--text-secondary); margin-bottom:12px;">Deactivating deletes candidate history, application timelines, uploaded resumes, and removes account access immediately.</p>
        <button class="btn btn-danger btn-sm" id="btn-delete-acct">Deactivate Account</button>
      </div>
    </div>
  `;
}

function setupSeekerSettingsListeners() {
  const form = document.getElementById("change-pass-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Security password configured successfully.", "success");
      form.reset();
    });
  }
  
  const delBtn = document.getElementById("btn-delete-acct");
  if (delBtn) {
    delBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to permanently delete your TalentBridge account? This cannot be undone.")) {
        db.log("Delete Account", appState.role, "User self-deactivated account credentials.");
        showToast("Account successfully removed.", "info");
        setRole("guest");
      }
    });
  }
}


// ==========================================
// 7. RECRUITER WORKSPACE RENDERING
// ==========================================
function getRecruiterDashboardHtml() {
  const jobs = (db.get("jobs") || []).filter(j => j.companyId === "comp-1");
  const applications = db.get("applications") || [];
  
  return `
    <div style="display:flex; flex-direction:column; gap: var(--space-3);">
      
      <!-- Welcome Header -->
      <div class="card" style="background: linear-gradient(135deg, var(--primary) 0%, #1D4ED8 100%); color: white;">
        <h2 style="font-size: 1.5rem; font-weight:700;">Welcome back, Sarah!</h2>
        <p style="opacity: 0.9; font-size: 0.95rem;">Manage job openings and evaluate applicant pipelines for CloudScale Inc.</p>
      </div>

      <!-- Stats Grid -->
      <div class="stat-card-grid">
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Active Job Openings</span>
            <span class="stat-value">${jobs.length}</span>
          </div>
          <div class="stat-icon-wrapper primary"><span class="material-symbols-rounded">work</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Total Applications</span>
            <span class="stat-value">${applications.length}</span>
          </div>
          <div class="stat-icon-wrapper success"><span class="material-symbols-rounded">groups</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Interviews Set</span>
            <span class="stat-value">${applications.filter(a => a.status === 'scheduled').length}</span>
          </div>
          <div class="stat-icon-wrapper warning"><span class="material-symbols-rounded">calendar_month</span></div>
        </div>
      </div>

      <!-- Two Columns -->
      <div style="display:grid; grid-template-columns: 1fr; gap:var(--space-3); align-items:start;" class="form-row">
        <!-- Dashboard Left: Analytics & Quick Actions -->
        <div style="display:flex; flex-direction:column; gap:var(--space-3);">
          <div class="card">
            <h4 class="card-title" style="margin-bottom:var(--space-2);">Quick Operations</h4>
            <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:8px;">
              <a href="#recruiter-post-job" class="btn btn-primary btn-sm"><span class="material-symbols-rounded">post_add</span> Post a Job</a>
              <a href="#recruiter-applicants" class="btn btn-secondary btn-sm"><span class="material-symbols-rounded">groups</span> View Applicants</a>
            </div>
          </div>

          <div class="card">
            <h4 class="card-title" style="margin-bottom:var(--space-3);">Weekly Traffic Analytics</h4>
            <div class="chart-bars-container">
              <div class="chart-bar-wrapper">
                <div class="chart-bar-fill" style="height: 60%;">
                  <span class="chart-bar-tooltip">120 views</span>
                </div>
                <span class="chart-label">Mon</span>
              </div>
              <div class="chart-bar-wrapper">
                <div class="chart-bar-fill" style="height: 85%;">
                  <span class="chart-bar-tooltip">170 views</span>
                </div>
                <span class="chart-label">Tue</span>
              </div>
              <div class="chart-bar-wrapper">
                <div class="chart-bar-fill" style="height: 50%;">
                  <span class="chart-bar-tooltip">100 views</span>
                </div>
                <span class="chart-label">Wed</span>
              </div>
              <div class="chart-bar-wrapper">
                <div class="chart-bar-fill" style="height: 95%;">
                  <span class="chart-bar-tooltip">190 views</span>
                </div>
                <span class="chart-label">Thu</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Dashboard Right: Recent applicant profiles -->
        <div class="card">
          <h4 class="card-title" style="margin-bottom:var(--space-2);">Recent Incoming Applications</h4>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${applications.slice(0, 3).map(app => `
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:8px;">
                <div>
                  <div style="font-weight:600; color:var(--text-primary);">${app.applicantName}</div>
                  <span style="font-size:0.75rem; color:var(--text-secondary);">${app.jobTitle}</span>
                </div>
                <a href="#recruiter-applicants" class="btn btn-secondary btn-sm" style="font-size:0.75rem; padding:4px 8px;">Review</a>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function setupRecruiterDashboardListeners() {}

// COMPANY PROFILE
function getRecruiterCompanyHtml() {
  const companies = db.get("companies") || [];
  const comp = companies.find(c => c.id === "comp-1") || companies[0];

  return `
    <div style="display:flex; flex-direction:column; gap:var(--space-3);">
      <div class="card">
        <h4 class="card-title" style="margin-bottom:var(--space-3);">Edit Corporate Workspace</h4>
        <form id="edit-company-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Company Name</label>
              <input type="text" id="comp-edit-name" class="form-control" value="${comp.name}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Industry Classification</label>
              <input type="text" id="comp-edit-industry" class="form-control" value="${comp.industry}" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Corporate Office Headquarters</label>
              <input type="text" id="comp-edit-loc" class="form-control" value="${comp.location}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Employee Count Index</label>
              <select id="comp-edit-size" class="form-control">
                <option value="1-50" ${comp.employees === '1-50' ? 'selected' : ''}>1 - 50 employees</option>
                <option value="50-150" ${comp.employees === '50-150' ? 'selected' : ''}>50 - 150 employees</option>
                <option value="150-500" ${comp.employees === '150-500' ? 'selected' : ''}>150 - 500 employees</option>
                <option value="500-1000" ${comp.employees === '500-1000' ? 'selected' : ''}>500 - 1,000 employees</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Company Website URL</label>
            <input type="url" id="comp-edit-url" class="form-control" value="${comp.website}" required>
          </div>
          <div class="form-group">
            <label class="form-label">Corporate Bio Overview</label>
            <textarea id="comp-edit-overview" class="form-control" rows="4" required>${comp.overview}</textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-sm">Save Profiles</button>
        </form>
      </div>

      <div class="card">
        <h4 class="card-title" style="margin-bottom:var(--space-2);">Office Gallery Media</h4>
        <div class="company-profile-gallery">
          ${comp.gallery.map(img => `<img src="${img}" class="company-gallery-img">`).join('')}
        </div>
      </div>
    </div>
  `;
}

function setupRecruiterCompanyListeners() {
  const form = document.getElementById("edit-company-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const companies = db.get("companies") || [];
      const index = companies.findIndex(c => c.id === "comp-1");
      
      if (index !== -1) {
        companies[index].name = document.getElementById("comp-edit-name").value;
        companies[index].industry = document.getElementById("comp-edit-industry").value;
        companies[index].location = document.getElementById("comp-edit-loc").value;
        companies[index].employees = document.getElementById("comp-edit-size").value;
        companies[index].website = document.getElementById("comp-edit-url").value;
        companies[index].overview = document.getElementById("comp-edit-overview").value;
        
        db.set("companies", companies);
        showToast("Company profile details updated.", "success");
      }
    });
  }
}

// POST JOB
function getRecruiterPostJobHtml() {
  return `
    <div class="card" style="max-width:800px; margin: 0 auto;">
      <h4 class="card-title" style="margin-bottom:var(--space-3);">Create / Broadcast New Job Posting</h4>
      <form id="post-job-form">
        <div class="form-group">
          <label class="form-label">Job Title Role</label>
          <input type="text" id="post-job-title" class="form-control" placeholder="e.g. Staff Full Stack Engineer" required>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Classification Category</label>
            <select id="post-job-cat" class="form-control" required>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Product Management">Product Management</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Employment Type</label>
            <select id="post-job-type" class="form-control" required>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Salary Range Bracket</label>
            <input type="text" id="post-job-salary" class="form-control" placeholder="e.g. $130,000 - $160,000" required>
          </div>
          <div class="form-group">
            <label class="form-label">Experience Required</label>
            <input type="text" id="post-job-exp" class="form-control" placeholder="e.g. 3+ Years" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Job Location / Hybrid policies</label>
          <input type="text" id="post-job-loc" class="form-control" placeholder="e.g. Austin, TX (Remote)" required>
        </div>
        <div class="form-group">
          <label class="form-label">Skills Endorsements Needed (Comma delimited)</label>
          <input type="text" id="post-job-skills" class="form-control" placeholder="React, Node.js, SQL" required>
        </div>
        <div class="form-group">
          <label class="form-label">Job Description Brief</label>
          <textarea id="post-job-desc" class="form-control" rows="4" placeholder="Brief statement detailing team missions..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Broadcast Opportunity</button>
      </form>
    </div>
  `;
}

function setupRecruiterPostJobListeners() {
  const form = document.getElementById("post-job-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("post-job-title").value;
      const cat = document.getElementById("post-job-cat").value;
      const type = document.getElementById("post-job-type").value;
      const salary = document.getElementById("post-job-salary").value;
      const exp = document.getElementById("post-job-exp").value;
      const loc = document.getElementById("post-job-loc").value;
      const skills = document.getElementById("post-job-skills").value.split(",").map(s => s.trim());
      const desc = document.getElementById("post-job-desc").value;
      
      const jobs = db.get("jobs") || [];
      const newJob = {
        id: `job-${Date.now()}`,
        title,
        companyId: "comp-1",
        companyName: "CloudScale Inc.",
        logoLetter: "C",
        location: loc,
        salary,
        experience: exp,
        type,
        category: cat,
        skills,
        responsibilities: ["Contribute values directly to CloudScale system core."],
        qualifications: ["Expert proficiency within the stated job specifications."],
        benefits: ["Premium Dental & Health", "PTO benefits"],
        description: desc,
        postedDate: "Just now",
        views: 0,
        applications: 0,
        status: "active"
      };
      
      jobs.unshift(newJob);
      db.set("jobs", jobs);
      db.log("Post Job", "Recruiter", `Broadcasted new job opening: ${title}`);
      showToast(`Job listing '${title}' broadcasted successfully!`, "success");
      navigateTo("recruiter-jobs");
    });
  }
}

// MANAGE JOBS
function getRecruiterJobsHtml() {
  const jobs = (db.get("jobs") || []).filter(j => j.companyId === "comp-1");

  return `
    <div style="display:flex; flex-direction:column; gap:var(--space-2);">
      <div class="table-container">
        <div class="table-header-bar">
          <h3 class="table-title">Manage Company Job Listings</h3>
          <a href="#recruiter-post-job" class="btn btn-primary btn-sm"><span class="material-symbols-rounded">add</span> Post New Job</a>
        </div>
        <div class="table-wrapper">
          <table class="enterprise-table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Classification</th>
                <th>Views</th>
                <th>Applications</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${jobs.map(job => `
                <tr id="row-${job.id}">
                  <td><div style="font-weight:600; color:var(--text-primary);">${job.title}</div><span style="font-size:0.75rem; color:var(--text-secondary);">${job.location}</span></td>
                  <td>${job.category} • ${job.type}</td>
                  <td>${job.views}</td>
                  <td>${job.applications}</td>
                  <td><span class="badge badge-success">${job.status}</span></td>
                  <td>
                    <button class="btn btn-secondary btn-sm btn-delete-job" data-id="${job.id}">Delete</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function setupRecruiterJobsListeners() {
  document.querySelectorAll(".btn-delete-job").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      if (confirm("Are you sure you want to permanently delete this job listing?")) {
        let jobs = db.get("jobs") || [];
        jobs = jobs.filter(j => j.id !== id);
        db.set("jobs", jobs);
        
        const row = document.getElementById(`row-${id}`);
        if (row) row.remove();
        
        db.log("Delete Job", "Recruiter", `Removed job opening listing ID: ${id}`);
        showToast("Job listing deleted.", "info");
      }
    });
  });
}

// APPLICANTS LIST
function getRecruiterApplicantsHtml() {
  const applications = db.get("applications") || [];

  return `
    <div style="display:flex; flex-direction:column; gap:var(--space-3);">
      
      <!-- Filter and Bulk Actions Bar -->
      <div class="card filter-card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <div style="display:flex; gap:8px;">
            <button class="btn btn-secondary btn-sm" id="bulk-shortlist-btn">Bulk Shortlist</button>
            <button class="btn btn-danger btn-sm" id="bulk-reject-btn">Bulk Reject</button>
          </div>
          <div class="table-search-wrapper">
            <span class="material-symbols-rounded table-search-icon">search</span>
            <input type="text" id="candidate-search-input" class="table-search-input" placeholder="Search applicant names...">
          </div>
        </div>
      </div>

      <!-- Main Candidates Table -->
      <div class="table-container">
        <div class="table-wrapper">
          <table class="enterprise-table">
            <thead>
              <tr>
                <th width="40px"><input type="checkbox" id="select-all-candidates-checkbox"></th>
                <th>Candidate Name</th>
                <th>Role Applied</th>
                <th>Applied Date</th>
                <th>Stage Status</th>
                <th>Action Menu</th>
              </tr>
            </thead>
            <tbody id="candidates-table-body">
              ${applications.map(app => `
                <tr id="app-row-${app.id}">
                  <td><input type="checkbox" class="candidate-row-select" value="${app.id}"></td>
                  <td>
                    <div class="table-user-cell">
                      <div class="user-avatar avatar-sm">AM</div>
                      <div class="table-user-info">
                        <span class="table-user-name">${app.applicantName}</span>
                        <span class="table-user-email">${app.applicantEmail}</span>
                      </div>
                    </div>
                  </td>
                  <td>${app.jobTitle}</td>
                  <td>${app.appliedDate}</td>
                  <td><span class="badge ${app.status === 'scheduled' ? 'badge-success' : 'badge-primary'}" id="app-badge-${app.id}">${app.status}</span></td>
                  <td>
                    <div style="display:flex; gap:4px;">
                      <button class="btn btn-secondary btn-sm btn-action-shortlist" data-id="${app.id}">Shortlist</button>
                      <button class="btn btn-secondary btn-sm btn-action-schedule" data-id="${app.id}" data-name="${app.applicantName}">Schedule</button>
                      <button class="btn btn-secondary btn-sm btn-action-preview" data-name="${app.applicantName}">Resume</button>
                      <button class="btn btn-danger btn-sm btn-action-reject" data-id="${app.id}">Reject</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function setupRecruiterApplicantsListeners() {
  const searchInput = document.getElementById("candidate-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const val = e.target.value.toLowerCase();
      document.querySelectorAll("#candidates-table-body tr").forEach(row => {
        const name = row.querySelector(".table-user-name").textContent.toLowerCase();
        row.style.display = name.includes(val) ? "" : "none";
      });
    });
  }

  // Row Select All checkboxes
  const selectAll = document.getElementById("select-all-candidates-checkbox");
  if (selectAll) {
    selectAll.addEventListener("change", (e) => {
      document.querySelectorAll(".candidate-row-select").forEach(cb => {
        cb.checked = e.target.checked;
      });
    });
  }

  // Shortlist action
  document.querySelectorAll(".btn-action-shortlist").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      updateApplicationStatus(id, "shortlisted");
    });
  });

  // Reject action
  document.querySelectorAll(".btn-action-reject").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      updateApplicationStatus(id, "rejected");
    });
  });

  // Schedule Interview modal open
  document.querySelectorAll(".btn-action-schedule").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const name = btn.getAttribute("data-name");
      
      document.getElementById("schedule-application-id").value = id;
      document.getElementById("schedule-candidate-name").value = name;
      
      document.getElementById("schedule-interview-modal").classList.add("active");
    });
  });

  // Preview Resume mock PDF popup
  document.querySelectorAll(".btn-action-preview").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      openResumePreviewModal(name);
    });
  });
}

function updateApplicationStatus(appId, newStatus) {
  const applications = db.get("applications") || [];
  const index = applications.findIndex(a => a.id === appId);
  if (index !== -1) {
    applications[index].status = newStatus;
    applications[index].timeline.unshift({
      status: newStatus,
      label: newStatus === "shortlisted" ? "Candidate Shortlisted" : "Application Rejected",
      date: new Date().toISOString().substring(0, 10),
      description: newStatus === "shortlisted" ? "Recruiter moved you to shortlist folder." : "Application was closed."
    });
    db.set("applications", applications);
    db.log("Update Application", "Recruiter", `Set status of application ${appId} to: ${newStatus}`);
    
    // Update badge in UI without full reload
    const badge = document.getElementById(`app-badge-${appId}`);
    if (badge) {
      badge.textContent = newStatus;
      badge.className = `badge ${newStatus === 'shortlisted' ? 'badge-primary' : 'badge-danger'}`;
    }
    showToast(`Applicant stage set to: ${newStatus}`, "success");
  }
}

// INTERVIEW CALENDAR
function getRecruiterCalendarHtml() {
  const applications = db.get("applications") || [];
  const scheduledApps = applications.filter(a => a.status === "scheduled" && a.interview);

  return `
    <div style="display:flex; flex-direction:column; gap:var(--space-3);">
      
      <div class="calendar-container">
        <div class="calendar-header">
          <h3 class="card-title">Interview Schedule Calendar (July 2026)</h3>
          <div style="display:flex; gap:4px;">
            <button class="btn btn-secondary btn-sm" disabled><span class="material-symbols-rounded">chevron_left</span> Prev</button>
            <button class="btn btn-secondary btn-sm" disabled>Next <span class="material-symbols-rounded">chevron_right</span></button>
          </div>
        </div>

        <div class="calendar-grid">
          <div class="calendar-day-header">Sun</div>
          <div class="calendar-day-header">Mon</div>
          <div class="calendar-day-header">Tue</div>
          <div class="calendar-day-header">Wed</div>
          <div class="calendar-day-header">Thu</div>
          <div class="calendar-day-header">Fri</div>
          <div class="calendar-day-header">Sat</div>
        </div>

        <div class="calendar-days-grid">
          <!-- Calendar offset placeholder days -->
          <div class="calendar-cell muted"><span class="calendar-cell-num">28</span></div>
          <div class="calendar-cell muted"><span class="calendar-cell-num">29</span></div>
          <div class="calendar-cell muted"><span class="calendar-cell-num">30</span></div>
          
          <!-- Month July July 1st to 10th -->
          <div class="calendar-cell"><span class="calendar-cell-num">1</span></div>
          <div class="calendar-cell"><span class="calendar-cell-num">2</span></div>
          <div class="calendar-cell"><span class="calendar-cell-num">3</span></div>
          <div class="calendar-cell"><span class="calendar-cell-num">4</span></div>
          
          <!-- Week 2 -->
          <div class="calendar-cell"><span class="calendar-cell-num">5</span></div>
          
          <!-- Mon July 6th - Interview Scheduled! -->
          <div class="calendar-cell" style="background-color: var(--primary-light);">
            <span class="calendar-cell-num">6</span>
            ${scheduledApps.map(app => `
              <div class="calendar-event success" title="${app.interview.type} with ${app.applicantName} at ${app.interview.time}">
                ${app.interview.time} ${app.applicantName}
              </div>
            `).join('')}
          </div>
          
          <div class="calendar-cell"><span class="calendar-cell-num">7</span></div>
          <div class="calendar-cell"><span class="calendar-cell-num">8</span></div>
          <div class="calendar-cell"><span class="calendar-cell-num">9</span></div>
          <div class="calendar-cell"><span class="calendar-cell-num">10</span></div>
          <div class="calendar-cell"><span class="calendar-cell-num">11</span></div>
          
          <!-- Rest of cells -->
          ${Array.from({length: 20}, (_, i) => `
            <div class="calendar-cell"><span class="calendar-cell-num">${12 + i}</span></div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function setupRecruiterCalendarListeners() {
  document.querySelectorAll(".calendar-event").forEach(evt => {
    evt.addEventListener("click", () => {
      alert(evt.getAttribute("title"));
    });
  });
}

// RECRUITER SETTINGS
function getRecruiterSettingsHtml() {
  return `
    <div style="max-width:600px; margin:0 auto;" class="card">
      <h4 class="card-title" style="margin-bottom:var(--space-2);">Recruitment Workspace Parameters</h4>
      <form id="rec-settings-form">
        <div class="form-group">
          <label class="custom-checkbox">
            <input type="checkbox" checked>
            <span class="checkbox-box"></span>
            <span>Enable automated matching indicators on candidate applications</span>
          </label>
        </div>
        <div class="form-group">
          <label class="custom-checkbox">
            <input type="checkbox" checked>
            <span class="checkbox-box"></span>
            <span>Notify engineering leads on new technical submissions</span>
          </label>
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Save Configs</button>
      </form>
    </div>
  `;
}
function setupRecruiterSettingsListeners() {
  const form = document.getElementById("rec-settings-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Recruiter configurations updated.", "success");
    });
  }
}


// ==========================================
// 8. ADMINISTRATOR WORKSPACE RENDERING
// ==========================================
function getAdminDashboardHtml() {
  const jobs = db.get("jobs") || [];
  const comps = db.get("companies") || [];
  const logs = db.get("audit") || [];

  return `
    <div style="display:flex; flex-direction:column; gap:var(--space-3);">
      <!-- Summary Grid -->
      <div class="stat-card-grid">
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Platform Active Jobs</span>
            <span class="stat-value">${jobs.length}</span>
          </div>
          <div class="stat-icon-wrapper primary"><span class="material-symbols-rounded">work</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Registered Organizations</span>
            <span class="stat-value">${comps.length}</span>
          </div>
          <div class="stat-icon-wrapper success"><span class="material-symbols-rounded">corporate_fare</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-info">
            <span class="stat-label">Unverified Companies</span>
            <span class="stat-value">${comps.filter(c => !c.verified).length}</span>
          </div>
          <div class="stat-icon-wrapper warning"><span class="material-symbols-rounded">domain_verification</span></div>
        </div>
      </div>

      <!-- Quick Platform Actions -->
      <div class="card">
        <h4 class="card-title" style="margin-bottom:12px;">Immediate System Interventions</h4>
        <div style="display:flex; gap:8px;">
          <a href="#admin-companies" class="btn btn-primary btn-sm">Process Company Verification Queue</a>
          <a href="#admin-audit" class="btn btn-secondary btn-sm">Inspect Security Logs</a>
        </div>
      </div>

      <!-- Audit Summary -->
      <div class="card">
        <h4 class="card-title" style="margin-bottom:12px;">Recent Infrastructure Logs</h4>
        <div style="display:flex; flex-direction:column; gap:8px; font-size:0.85rem; font-family:monospace;">
          ${logs.slice(0, 4).map(l => `
            <div style="display:flex; gap:12px; border-bottom:1px solid var(--border); padding-bottom:4px;">
              <span style="color:var(--text-muted);">${l.timestamp}</span>
              <span style="font-weight:600; color:var(--primary);">${l.action}</span>
              <span style="color:var(--text-secondary);">${l.details} [User: ${l.user}]</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
function setupAdminDashboardListeners() {}

// ADMIN USERS
function getAdminUsersHtml() {
  return `
    <div class="table-container">
      <div class="table-header-bar">
        <h3 class="table-title">Manage Registered Users</h3>
      </div>
      <div class="table-wrapper">
        <table class="enterprise-table">
          <thead>
            <tr>
              <th>User Details</th>
              <th>Membership Tier</th>
              <th>Status</th>
              <th>Action Panel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="table-user-cell">
                  <div class="user-avatar avatar-sm">AM</div>
                  <div class="table-user-info">
                    <span class="table-user-name">Alex Mercer</span>
                    <span class="table-user-email">alex.mercer@gmail.com</span>
                  </div>
                </div>
              </td>
              <td>Job Seeker</td>
              <td><span class="badge badge-success">active</span></td>
              <td><button class="btn btn-danger btn-sm" onclick="showToast('Candidate user account disabled.', 'warning');">Disable</button></td>
            </tr>
            <tr>
              <td>
                <div class="table-user-cell">
                  <div class="user-avatar avatar-sm">SJ</div>
                  <div class="table-user-info">
                    <span class="table-user-name">Sarah Jenkins</span>
                    <span class="table-user-email">sarah.j@cloudscale.io</span>
                  </div>
                </div>
              </td>
              <td>Recruiter Workspace</td>
              <td><span class="badge badge-success">active</span></td>
              <td><button class="btn btn-danger btn-sm" onclick="showToast('Recruiter account credentials locked.', 'warning');">Lock Access</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function setupAdminUsersListeners() {}

// ADMIN COMPANIES
function getAdminCompaniesHtml() {
  const companies = db.get("companies") || [];

  return `
    <div class="table-container">
      <div class="table-header-bar">
        <h3 class="table-title">Verify Registered Organizations</h3>
      </div>
      <div class="table-wrapper">
        <table class="enterprise-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Location</th>
              <th>Rating</th>
              <th>Verified Status</th>
              <th>Verify Trigger</th>
            </tr>
          </thead>
          <tbody>
            ${companies.map(c => `
              <tr id="comp-row-${c.id}">
                <td style="font-weight:600; color:var(--text-primary);">${c.name}</td>
                <td>${c.location}</td>
                <td>${c.rating} / 5.0</td>
                <td>
                  <span class="badge ${c.verified ? 'badge-success' : 'badge-warning'}" id="comp-badge-${c.id}">
                    ${c.verified ? 'Verified' : 'Pending Verification'}
                  </span>
                </td>
                <td>
                  ${c.verified 
                    ? `<button class="btn btn-secondary btn-sm" disabled>Fully verified</button>`
                    : `<button class="btn btn-primary btn-sm btn-verify-comp" data-id="${c.id}">Approve verification badge</button>`
                  }
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function setupAdminCompaniesListeners() {
  document.querySelectorAll(".btn-verify-comp").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const companies = db.get("companies") || [];
      const idx = companies.findIndex(c => c.id === id);
      
      if (idx !== -1) {
        companies[idx].verified = true;
        db.set("companies", companies);
        db.log("Verify Company", "Admin", `Approved credentials and badge for company ID: ${id}`);
        
        // Update UI immediately
        const badge = document.getElementById(`comp-badge-${id}`);
        if (badge) {
          badge.textContent = "Verified";
          badge.className = "badge badge-success";
        }
        btn.replaceWith(Object.assign(document.createElement('button'), {
          className: 'btn btn-secondary btn-sm',
          disabled: true,
          textContent: 'Fully verified'
        }));
        showToast("Company verification badge approved!", "success");
      }
    });
  });
}

// ADMIN JOBS
function getAdminJobsHtml() {
  const jobs = db.get("jobs") || [];
  return `
    <div class="table-container">
      <div class="table-header-bar">
        <h3 class="table-title">Audit Global Job Databases</h3>
      </div>
      <div class="table-wrapper">
        <table class="enterprise-table">
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Title</th>
              <th>Company</th>
              <th>Stage</th>
              <th>Intervention</th>
            </tr>
          </thead>
          <tbody>
            ${jobs.map(j => `
              <tr>
                <td>${j.id}</td>
                <td style="font-weight:600;">${j.title}</td>
                <td>${j.companyName}</td>
                <td><span class="badge badge-success">${j.status}</span></td>
                <td><button class="btn btn-danger btn-sm" onclick="alert('Moderator warning sent to publisher.');">Flag listing</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function setupAdminJobsListeners() {}

// ADMIN AUDIT LOGS
function getAdminAuditHtml() {
  const logs = db.get("audit") || [];
  return `
    <div class="table-container">
      <div class="table-header-bar">
        <h3 class="table-title">Security & Platform Audit Logs</h3>
      </div>
      <div class="table-wrapper">
        <table class="enterprise-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action Category</th>
              <th>Operator</th>
              <th>Operation Details</th>
            </tr>
          </thead>
          <tbody>
            ${logs.map(l => `
              <tr>
                <td>${l.timestamp}</td>
                <td style="font-weight:600; color:var(--primary);">${l.action}</td>
                <td>${l.user}</td>
                <td>${l.details}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function setupAdminAuditListeners() {}

// ADMIN SETTINGS
function getAdminSettingsHtml() {
  return `
    <div style="max-width:600px; margin:0 auto;" class="card">
      <h4 class="card-title" style="margin-bottom:var(--space-2);">Global System Parameters</h4>
      <form id="admin-settings-form">
        <div class="form-group">
          <label class="form-label">Platform Maintenance Mode</label>
          <select class="form-control">
            <option value="disabled">Disabled (Active Operations)</option>
            <option value="enabled">Enabled (Read-Only State)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Company Registration Auto-Approval</label>
          <select class="form-control">
            <option value="manual">Manual review queue</option>
            <option value="auto">Auto verify registrations</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Save Global Configs</button>
      </form>
    </div>
  `;
}
function setupAdminSettingsListeners() {
  const form = document.getElementById("admin-settings-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Global system configurations saved successfully.", "success");
    });
  }
}


// ==========================================
// 9. ERROR VIEWS
// ==========================================
function getAccessDeniedHtml() {
  return `
    <div class="empty-state" style="padding:var(--space-6) var(--space-4);">
      <span class="material-symbols-rounded empty-state-icon" style="color:var(--danger);">lock</span>
      <h3 class="empty-state-title">Access Denied</h3>
      <p class="empty-state-desc">Your user role does not possess structural access privileges to inspect this interface container.</p>
      <a href="#landing" class="btn btn-primary" onclick="setRole('guest');">Return to safety</a>
    </div>
  `;
}

function get404Html() {
  return `
    <div class="empty-state" style="padding:var(--space-6) var(--space-4);">
      <span class="material-symbols-rounded empty-state-icon">error</span>
      <h3 class="empty-state-title">Page Not Found</h3>
      <p class="empty-state-desc">The requested route has been moved, removed, or is currently unavailable.</p>
      <a href="#landing" class="btn btn-primary">Return Home</a>
    </div>
  `;
}


// ==========================================
// 10. REUSABLE UI ENGINE (Floating labels, Toasts, Modals)
// ==========================================

function setupFloatingLabels() {
  document.querySelectorAll(".floating-input").forEach(input => {
    // Set initially if value preset
    if (input.value.trim() !== "") {
      input.placeholder = ""; // required for :not(:placeholder-shown) logic
    }
    
    input.addEventListener("focus", () => {
      input.placeholder = "";
    });
    input.addEventListener("blur", () => {
      if (input.value.trim() === "") {
        input.placeholder = " ";
      }
    });
  });
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "info";
  if (type === "success") icon = "check_circle";
  if (type === "warning") icon = "warning";
  if (type === "danger") icon = "error";
  
  toast.innerHTML = `
    <span class="material-symbols-rounded">${icon}</span>
    <span>${message}</span>
    <button class="toast-close"><span class="material-symbols-rounded" style="font-size:16px;">close</span></button>
  `;
  
  container.appendChild(toast);
  
  // Close handler
  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.remove();
  });
  
  // Auto expire
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

function openResumePreviewModal(name = "Alex Mercer") {
  const modal = document.getElementById("resume-preview-modal");
  const docBody = document.getElementById("resume-preview-doc-body");
  const title = document.getElementById("resume-preview-title");
  
  title.textContent = `Resume Preview - ${name}`;
  
  docBody.innerHTML = `
    <div style="border-bottom: 2px solid var(--primary); padding-bottom: 12px; margin-bottom: 16px;">
      <h2 style="font-size: 1.5rem; color: var(--text-primary); font-weight: 700;">${name}</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem;">Software Architect & Senior UX Specialist | Brooklyn, NY</p>
      <p style="color: var(--primary); font-size: 0.85rem; font-weight:500;">alex.mercer@gmail.com | +1 (555) 321-9876 | www.alexmercer.design</p>
    </div>
    <div style="margin-bottom: 12px;">
      <h3 style="font-size: 1rem; color: var(--primary); font-weight: 600; text-transform: uppercase; margin-bottom: 6px;">Professional Bio</h3>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">Results-driven architect with a decade of expertise managing frontend UI tokens, structuring databases, and driving growth KPI funnels.</p>
    </div>
    <div>
      <h3 style="font-size: 1rem; color: var(--primary); font-weight: 600; text-transform: uppercase; margin-bottom: 6px;">Relevant Competences</h3>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">Figma Design Systems, Wireframing, Technical UX Research, HTML & CSS, Node.js backend logic, PostgreSQL schema architecture.</p>
    </div>
  `;
  
  modal.classList.add("active");
}

function setRole(role) {
  appState.role = role;
  
  // Set developer active buttons classes
  document.querySelectorAll(".sandbox-role-btn").forEach(btn => {
    if (btn.getAttribute("data-role") === role) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  db.log("Swap Developer Role", "System", `Swapped active persona context to: ${role}`);
  
  // Redirect to respective view dashboard or landing
  if (role === "guest") {
    navigateTo("landing");
  } else if (role === "seeker") {
    navigateTo("seeker-dashboard");
  } else if (role === "recruiter") {
    navigateTo("recruiter-dashboard");
  } else if (role === "admin") {
    navigateTo("admin-dashboard");
  }
}

// ==========================================
// 11. GENERAL APP INITIALIZATIONS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Setup Router event listeners
  window.addEventListener("hashchange", handleRouting);
  
  // 2. Setup Sidebar Collapsing Toggle
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("panel-main");
  const collapseBtn = document.getElementById("sidebar-collapse-btn");
  
  if (collapseBtn) {
    collapseBtn.addEventListener("click", () => {
      appState.collapsedSidebar = !appState.collapsedSidebar;
      if (appState.collapsedSidebar) {
        sidebar.classList.add("collapsed");
        main.classList.add("expanded");
        collapseBtn.querySelector(".material-symbols-rounded").textContent = "menu";
      } else {
        sidebar.classList.remove("collapsed");
        main.classList.remove("expanded");
        collapseBtn.querySelector(".material-symbols-rounded").textContent = "menu_open";
      }
    });
  }

  // Mobile sidebar drawers
  const mobileToggle = document.getElementById("sidebar-mobile-toggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // 3. Sandbox widget toggle
  const widgetToggle = document.getElementById("sandbox-toggle-btn");
  const widgetContainer = document.getElementById("sandbox-widget");
  if (widgetToggle) {
    widgetToggle.addEventListener("click", () => {
      widgetContainer.classList.toggle("active");
    });
  }

  // Setup Role Swapper Click events
  document.querySelectorAll(".sandbox-role-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const role = btn.getAttribute("data-role");
      setRole(role);
      widgetContainer.classList.remove("active");
    });
  });

  // 4. Modal Overlays universal close triggers
  document.querySelectorAll(".modal-overlay").forEach(modal => {
    modal.querySelectorAll(".modal-close-btn").forEach(close => {
      close.addEventListener("click", () => {
        modal.classList.remove("active");
      });
    });
    
    // Close on overlay backdrop click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });

  // 5. Apply Job Modal Submission Action
  const applyForm = document.getElementById("apply-job-form");
  if (applyForm) {
    // Show upload path toggle on select
    const resumeSelect = document.getElementById("apply-resume-select");
    const uploadGrp = document.getElementById("apply-new-file-group");
    resumeSelect.addEventListener("change", () => {
      uploadGrp.style.display = resumeSelect.value === "new" ? "block" : "none";
    });

    applyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const jobId = document.getElementById("apply-job-id").value;
      const coverLetter = document.getElementById("apply-cover-letter").value;
      
      let resumeName = "resume_current.pdf";
      if (resumeSelect.value === "new") {
        const fileInput = document.getElementById("apply-new-file");
        if (fileInput.files.length > 0) {
          resumeName = fileInput.files[0].name;
        } else {
          showToast("Please choose a file or drag one into the uploader.", "warning");
          return;
        }
      }
      
      const jobs = db.get("jobs") || [];
      const job = jobs.find(j => j.id === jobId);
      
      const applications = db.get("applications") || [];
      const newApp = {
        id: `app-${Date.now()}`,
        jobId: jobId,
        jobTitle: job.title,
        companyName: job.companyName,
        applicantId: "seeker-1",
        applicantName: "Alex Mercer",
        applicantEmail: "alex.mercer@gmail.com",
        status: "applied",
        appliedDate: new Date().toISOString().substring(0, 10),
        coverLetter: coverLetter,
        resume: resumeName,
        timeline: [
          { status: "applied", label: "Application Submitted", date: new Date().toISOString().substring(0, 10), description: `Your profile was delivered to ${job.companyName}.` }
        ]
      };
      
      applications.push(newApp);
      db.set("applications", applications);
      
      // Update job applications count
      const jobIdx = jobs.findIndex(j => j.id === jobId);
      if (jobIdx !== -1) {
        jobs[jobIdx].applications += 1;
        db.set("jobs", jobs);
      }
      
      db.log("Apply Job", "Seeker", `Submitted CV application for: ${job.title} at ${job.companyName}`);
      
      // Close modal
      document.getElementById("apply-job-modal").classList.remove("active");
      applyForm.reset();
      uploadGrp.style.display = "none";
      
      showToast("Application submitted successfully!", "success");
      
      // Re-route to dashboard/applied track
      navigateTo("seeker-applied");
    });
  }

  // 6. Schedule Interview Modal Action
  const scheduleForm = document.getElementById("schedule-interview-form");
  if (scheduleForm) {
    scheduleForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const appId = document.getElementById("schedule-application-id").value;
      const type = document.getElementById("schedule-type").value;
      const date = document.getElementById("schedule-date").value;
      const time = document.getElementById("schedule-time").value;
      const interviewer = document.getElementById("schedule-interviewer").value;
      const link = document.getElementById("schedule-link").value;
      
      const applications = db.get("applications") || [];
      const idx = applications.findIndex(a => a.id === appId);
      
      if (idx !== -1) {
        applications[idx].status = "scheduled";
        applications[idx].interview = { type, date, time, interviewer, link };
        applications[idx].timeline.unshift({
          status: "scheduled",
          label: "Interview Scheduled",
          date: new Date().toISOString().substring(0, 10),
          description: `${type} details configured for ${date} at ${time}.`
        });
        db.set("applications", applications);
        db.log("Schedule Interview", "Recruiter", `Set technical interview slot for applicant ID ${appId}`);
        
        document.getElementById("schedule-interview-modal").classList.remove("active");
        showToast("Interview scheduled & Candidate notified!", "success");
        renderActiveView(appState.view);
      }
    });
  }

  // 7. Notification bells dropdown trigger
  const bell = document.getElementById("notification-bell-btn");
  const notificationBox = document.getElementById("notification-dropdown");
  if (bell && notificationBox) {
    bell.addEventListener("click", (e) => {
      e.stopPropagation();
      notificationBox.classList.toggle("active");
    });
    
    document.addEventListener("click", () => {
      notificationBox.classList.remove("active");
    });

    notificationBox.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    
    // Mark read
    const markReadBtn = document.getElementById("mark-notifications-read-btn");
    const countBadge = document.getElementById("unread-notification-count");
    if (markReadBtn && countBadge) {
      markReadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        appState.notificationList.forEach(n => n.read = true);
        countBadge.style.display = "none";
        renderNotificationsDropdownList();
        showToast("All notifications cleared.", "info");
      });
    }
  }

  // Render Initial Notifications List
  renderNotificationsDropdownList();

  // 8. Run Router setup
  handleRouting();
});

function renderNotificationsDropdownList() {
  const list = document.getElementById("notification-dropdown-list");
  if (list) {
    list.innerHTML = appState.notificationList.map(n => `
      <div style="font-size:0.8rem; border-bottom:1px solid var(--border); padding-bottom:6px; margin-bottom:4px; ${!n.read ? 'font-weight:600; color:var(--text-primary);' : 'color:var(--text-secondary);'}">
        <p>${n.text}</p>
        <span style="font-size:0.7rem; color:var(--text-muted);">${n.date}</span>
      </div>
    `).join('');
  }
}
