export const site = {
  name: 'Haseeb Sultan',
  title: 'AI Platform Engineer',
  description: 'Haseeb Sultan is a Dubai-based AI Platform Engineer with experience in DevOps, Azure, AWS, Google Cloud, Kubernetes, MLOps, and LLMOps.',
  // Shared by the navigation, hero, footer, and structured data.
  social: {
    github: 'https://github.com/sultanhaseeb',
    linkedin: 'https://www.linkedin.com/in/haseeb-sultan-484416182/',
    topmate: 'https://topmate.io/haseeb_sultan',
    email: 'mailto:hello@haseebsultan.ai',
  },
};

// Email signup through Kit. formId is the number in the form's Kit URL; the forms stay hidden until it is set.
// In Kit, the form redirects to /subscribe/check-your-inbox/ after signup and to /subscribe/confirmed/ after confirming.
const newsletterFormId = '10101370';
export const newsletter = {
  formId: newsletterFormId,
  action: `https://app.kit.com/forms/${newsletterFormId}/subscriptions`,
};

// Upcoming lesson topics, listed on /learning/.
export const topics = ['Agentic AI', 'LLMOps', 'MCP', 'AI Infrastructure', 'Kubernetes for AI', 'AI Security', 'RAG', 'AI Agents'];

// AI platform work with public code. The first entry is the flagship, featured on the homepage.
export const aiProjects = [
  {
    id: 'k8s-agent',
    title: 'k8s-agent',
    role: 'Open source · Design and build',
    summary: 'A Kubernetes dashboard with a Claude Code agent that answers questions about the cluster and deletes failing pods, inside guardrails that Kubernetes RBAC enforces rather than the prompt.',
    topics: ['Kubernetes', 'Claude Code', 'Go', 'FastAPI', 'Helm', 'RBAC', 'AI Agents', 'AI Security'],
    flow: ['Browser UI', 'Go policy gate', 'Claude Code agent', 'Kubernetes RBAC'],
    href: '/projects/k8s-agent/',
    linkLabel: 'Read the case study',
    repo: 'https://github.com/sultanhaseeb/k8s-agent',
  },
  {
    id: 'taskboard-mcp',
    title: 'Taskboard MCP',
    role: 'Open source · Python',
    summary: 'A small Model Context Protocol server that demonstrates all three MCP building blocks (tools, resources, and prompts) over STDIO and Streamable HTTP.',
    topics: ['MCP', 'Python', 'SQLite', 'AI Agents'],
    flow: ['MCP client', 'Taskboard server', 'SQLite'],
    href: '/learning/build-an-mcp-server/',
    linkLabel: 'Read the lesson',
    repo: 'https://github.com/sultanhaseeb/taskboard-mcp',
  },
];

// Ideas still being built, shown on /projects/ without links.
export const experiments = [
  {
    title: 'Secure Document Agent',
    description: 'An AI agent architecture for securely searching, reading, and interacting with enterprise documents using MCP.',
    topics: ['MCP', 'AI Agents', 'Security'],
    flow: ['User request', 'Secure MCP agent', 'Enterprise documents'],
  },
];
