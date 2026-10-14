export const site = {
  name: 'Haseeb Sultan',
  title: 'AI Platform Engineer',
  description: 'Haseeb Sultan is a Dubai-based AI Platform Engineer with experience in DevOps, Azure, AWS, Google Cloud, Kubernetes, MLOps, and LLMOps.',
  // Shared by the navigation, hero, and footer.
  social: {
    github: 'https://github.com/sultanhaseeb',
    linkedin: 'https://www.linkedin.com/in/haseeb-sultan-484416182/',
    topmate: 'https://topmate.io/haseeb_sultan',
    email: 'mailto:hello@haseebsultan.ai',
  },
};

export const topics = ['Agentic AI', 'LLMOps', 'MCP', 'AI Infrastructure', 'Kubernetes for AI', 'AI Security', 'RAG', 'AI Agents'];

export const projects = [
  {
    title: 'Secure Document Agent',
    description: 'An AI agent architecture for securely searching, reading, and interacting with enterprise documents using MCP.',
    topics: ['MCP', 'AI Agents', 'Security'],
    icon: 'document' as const,
    flow: ['User request', 'Secure MCP agent', 'Enterprise documents'],
  },
  {
    title: 'AI Infrastructure Explorer',
    description: 'An experiment around securely understanding and visualizing cloud infrastructure using AI-assisted workflows.',
    topics: ['Cloud', 'AI Infrastructure', 'Agents'],
    icon: 'layers' as const,
    flow: ['Cloud APIs', 'Secure AI agent', 'Infrastructure view'],
  },
];

export const workAreas = [
  { title: 'AI Platforms', description: 'Designing infrastructure and platforms for running AI applications and agentic systems reliably.', icon: 'layers' as const },
  { title: 'Agentic Systems', description: 'Exploring AI agents, tool use, workflows, orchestration, MCP, and multi-agent architectures.', icon: 'nodes' as const },
  { title: 'LLMOps', description: 'Deployment, observability, evaluation, reliability, scalability, and lifecycle management of LLM applications.', icon: 'terminal' as const },
  { title: 'AI Security', description: 'Prompt security, guardrails, MCP security, data protection, and secure enterprise AI architectures.', icon: 'shield' as const },
];
