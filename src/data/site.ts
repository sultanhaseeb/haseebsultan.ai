export const site = {
  name: 'Haseeb Sultan',
  title: 'AI Platform Engineer',
  description: 'Haseeb Sultan is an AI Platform Engineer exploring AI infrastructure, LLMOps, agentic systems, MCP, Kubernetes, and AI security.',
  // Shared by the navigation, hero, and footer.
  social: {
    github: 'https://github.com/sultanhaseeb',
    linkedin: 'https://www.linkedin.com/in/haseeb-sultan-484416182/',
    email: 'mailto:hello@haseebsultan.ai',
  },
};

export const topics = ['Agentic AI', 'LLMOps', 'MCP', 'AI Infrastructure', 'Kubernetes for AI', 'AI Security', 'RAG', 'AI Agents'];

export const articles = [
  {
    title: "Understanding AI Agents From an Engineer's Perspective",
    description: 'A practical introduction to how AI agents work, including tools, memory, reasoning, workflows, and orchestration.',
    category: 'Agentic AI',
  },
  {
    title: 'Running AI Workloads on Kubernetes',
    description: 'Exploring the infrastructure challenges and architecture patterns behind running production AI systems.',
    category: 'AI Infrastructure',
  },
  {
    title: 'Building Secure MCP-Based AI Agents',
    description: 'Notes on designing secure Model Context Protocol architectures for enterprise AI agents.',
    category: 'AI Security',
  },
];

export const projects = [
  {
    title: 'Rocotal',
    description: 'Enterprise AI security and governance platform focused on protecting interactions between users, AI agents, and large language models.',
    topics: ['AI Security', 'LLM Guardrails', 'AI Governance'],
    icon: 'shield' as const,
  },
  {
    title: 'Secure Document Agent',
    description: 'An AI agent architecture for securely searching, reading, and interacting with enterprise documents using MCP.',
    topics: ['MCP', 'AI Agents', 'Security'],
    icon: 'document' as const,
  },
  {
    title: 'AI Infrastructure Explorer',
    description: 'An experiment around securely understanding and visualizing cloud infrastructure using AI-assisted workflows.',
    topics: ['Cloud', 'AI Infrastructure', 'Agents'],
    icon: 'layers' as const,
  },
];

export const workAreas = [
  { title: 'AI Platforms', description: 'Designing infrastructure and platforms for running AI applications and agentic systems reliably.', icon: 'layers' as const },
  { title: 'Agentic Systems', description: 'Exploring AI agents, tool use, workflows, orchestration, MCP, and multi-agent architectures.', icon: 'nodes' as const },
  { title: 'LLMOps', description: 'Deployment, observability, evaluation, reliability, scalability, and lifecycle management of LLM applications.', icon: 'terminal' as const },
  { title: 'AI Security', description: 'Prompt security, guardrails, MCP security, data protection, and secure enterprise AI architectures.', icon: 'shield' as const },
];
