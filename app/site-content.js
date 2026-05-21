export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Docs", href: "/docs" },
  { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
  { label: "GitHub", href: "https://github.com/iotkit-in/hub.iotkit.in", external: true },
];

export const footerSections = {
  products: [
    { label: "Fuse", href: "https://fuse.iotkit.in", description: "fuse.iotkit.in" },
    { label: "Nova", href: "https://nova.iotkit.in", description: "nova.iotkit.in" },
    { label: "IoTKit", href: "https://iotkit.in", description: "iotkit.in" },
  ],
  resources: [
    { label: "Docs", href: "/docs" },
    { label: "GitHub", href: "https://github.com/iotkit-in/hub.iotkit.in", external: true },
    { label: "API", href: "/docs#api" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
};

export const platformStats = [
  { label: "Active Projects", value: "128" },
  { label: "Contributors", value: "54" },
  { label: "Domains Issued", value: "1,240" },
  // Temporarily hidden per request
  // { label: "Open Source PRs", value: "386" },
];

export const howItWorks = [
  {
    title: "Fork Repository",
    text: "Start from the public repository and keep the process open source from day one.",
  },
  {
    title: "Add record in cname.js",
    text: "Map your subdomain to a dashboard, hosting target, or hardware demo endpoint.",
  },
  {
    title: "Create Pull Request",
    text: "Submit your project with a working preview and a short description of the build.",
  },
  {
    title: "Approval Process",
    text: "We review for project quality, IoT relevance, and abuse policy compliance.",
  },
  {
    title: "Your subdomain goes live",
    text: "After approval, your project is published at a clean public address.",
  },
];

export const featuredProjects = [
  {
    name: "Smart Irrigation",
    description: "ESP32 dashboard for moisture monitoring, irrigation automation, and alerts.",
    stack: "ESP32, MQTT, Next.js",
    slug: "smart-irrigation",
  },
  {
    name: "Air Quality Monitor",
    description: "Realtime sensor panel with trend charts and low-latency telemetry updates.",
    stack: "Raspberry Pi, WebSocket, Tailwind",
    slug: "air-quality-monitor",
  },
  {
    name: "GPS Tracker",
    description: "Track a field device, visualize movement, and share a live status page.",
    stack: "Node-RED, Mapbox, MQTT",
    slug: "gps-tracker",
  },
  {
    name: "Home Automation",
    description: "Glassy control room for fans, lights, scenes, and remote switching.",
    stack: "ESP32, Web UI, API Keys",
    slug: "home-automation",
  },
];

export const latestBlogs = [
  {
    title: "How to Deploy an ESP32 Dashboard",
    description: "A practical workflow for shipping a public device panel with a clean domain.",
    slug: "deploy-esp32-dashboard",
  },
  {
    title: "MQTT for Student Projects",
    description: "A simple guide to build realtime telemetry demos that feel production ready.",
    slug: "mqtt-student-projects",
  },
  {
    title: "Raspberry Pi Realtime Panels",
    description: "Turn a Raspberry Pi into a polished operations dashboard with live metrics.",
    slug: "raspberry-pi-panels",
  },
];

export const whyWeStarted = [
  "Supporting open-source IoT builders who need a stable public home.",
  "Helping students and hackathon teams ship faster with less infrastructure overhead.",
  "Giving robotics clubs, startups, and makerspaces a shared launch path.",
  "Building a community layer around dashboards, APIs, and hardware demos.",
];

export const badges = ["Verified Project", "Student Builder", "Open Source Contributor", "Hackathon Winner"];

export const starterTemplates = [
  "Next.js IoT Dashboard",
  "MQTT Client Console",
  "ESP32 Realtime Panel",
  "Node-RED Starter",
  "WebSocket Starter",
];
