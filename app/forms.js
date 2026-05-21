export const domainRequestFields = [
  { name: "name", label: "Your name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email address", type: "email", placeholder: "you@example.com" },
  { name: "projectName", label: "Project name", type: "text", placeholder: "Weather Station" },
  { name: "githubOrLiveUrl", label: "GitHub or live URL", type: "url", placeholder: "https://github.com/your-repo" },
  { name: "subdomain", label: "Requested subdomain", type: "text", placeholder: "weatherstation" },
  { name: "message", label: "Request details", type: "textarea", placeholder: "Tell us about the project, hosting target, and why it fits the IoT maker community." },
];

export const blogSubmissionFields = [
  { name: "name", label: "Your name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email address", type: "email", placeholder: "you@example.com" },
  { name: "blogTitle", label: "Blog title", type: "text", placeholder: "How I built a Raspberry Pi dashboard" },
  { name: "coverImageUrl", label: "Cover image URL", type: "url", placeholder: "https://..." },
  { name: "shortDescription", label: "Short description", type: "textarea", placeholder: "Summarize what the blog teaches and who it is for." },
  { name: "tags", label: "Tags", type: "text", placeholder: "ESP32, MQTT, Dashboard" },
  { name: "content", label: "Blog content", type: "textarea", placeholder: "Paste the article draft or outline here." },
];

export const projectSubmissionFields = [
  { name: "name", label: "Your name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email address", type: "email", placeholder: "you@example.com" },
  { name: "projectName", label: "Project name", type: "text", placeholder: "Smart Irrigation" },
  { name: "githubUrl", label: "GitHub URL", type: "url", placeholder: "https://github.com/your-repo" },
  { name: "liveUrl", label: "Live URL", type: "url", placeholder: "https://project.example.com" },
  { name: "techStack", label: "Tech stack", type: "text", placeholder: "ESP32, Next.js, MQTT" },
  { name: "summary", label: "Project summary", type: "textarea", placeholder: "Tell us what the project does and what hardware or services it uses." },
];
