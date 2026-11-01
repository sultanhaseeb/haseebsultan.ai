// Lesson 04, the AI concepts guide: nine parts, each a group of concepts explained the same three ways.
// Concepts are numbered in order across the whole guide. To add one, append it to the right part; the
// numbers, progress map and cheat sheet follow. Part 5 also shows the protocol diagram (see the page).
export interface Concept {
  title: string;
  // In one line: what it is, in plain words.
  line: string;
  // Think of it like: an everyday picture.
  like: string;
  // Why it matters: where you meet it in real work.
  why: string;
  // The memory hook, repeated in the cheat sheet.
  hook: string;
}

export interface ConceptPart {
  name: string;
  // Shorter name for the progress map and the part bar.
  short: string;
  intro: string;
  concepts: Concept[];
}

export const conceptParts: ConceptPart[] = [
  {
    name: 'Foundations',
    short: 'Foundations',
    intro: 'Start here. These eight ideas explain what an AI model is and how it reads the world.',
    concepts: [
      {
        title: 'Generative AI',
        line: 'AI that creates new content, such as text, images, code, audio or video, instead of only analyzing data.',
        like: 'The difference between a critic and an artist. Older AI judged things (“is this email spam?”). Generative AI makes things (“write me a reply”).',
        why: 'It is the umbrella for ChatGPT, Claude, Gemini, image generators and coding assistants. Every other concept here sits under it.',
        hook: 'The artist, not the critic',
      },
      {
        title: 'Large Language Models (LLMs)',
        line: 'A model trained on huge amounts of text that predicts the next word, and through that learns to write, reason and answer.',
        like: 'Your phone’s autocomplete, scaled up a million times. It has read so much that predicting the next word starts to look like understanding.',
        why: 'LLMs are the engine inside almost every AI product today. Knowing they predict, rather than look up facts, explains both their power and their mistakes.',
        hook: 'Autocomplete, scaled a million times',
      },
      {
        title: 'Tokens & Tokenization',
        line: 'Tokens are the small chunks of text a model actually reads; tokenization is how text gets cut into them.',
        like: 'LEGO bricks. The model never sees whole sentences, only bricks. “Unbelievable” might become “un” + “believ” + “able”. In English, one token is roughly three-quarters of a word.',
        why: 'You pay per token, limits are counted in tokens, and speed is measured in tokens per second. Tokens are the currency of AI.',
        hook: 'The LEGO bricks of text',
      },
      {
        title: 'Embeddings',
        line: 'A way of turning words, sentences or images into lists of numbers that capture their meaning.',
        like: 'GPS coordinates for meaning. “Dog” and “puppy” land close together on the map; “dog” and “invoice” land far apart.',
        why: 'Embeddings power semantic search, recommendations and RAG. They let a computer find things by meaning, not just matching keywords.',
        hook: 'GPS coordinates for meaning',
      },
      {
        title: 'Context Window',
        line: 'The maximum amount of text a model can see and work with at one time, measured in tokens.',
        like: 'A desk. Everything on the desk, the conversation, documents and instructions, the model can use. Anything that falls off the desk is forgotten.',
        why: 'It decides how long a document you can paste, how long a chat stays coherent, and why agents need memory systems.',
        hook: 'The model’s desk',
      },
      {
        title: 'Hallucination',
        line: 'When an AI states something false or made-up with full confidence.',
        like: 'A student who never says “I don’t know” and bluffs a convincing answer instead.',
        why: 'It is the number one trust risk in AI. RAG, evals and guardrails exist largely to catch or prevent it. Always verify facts that matter.',
        hook: 'The confident bluffer',
      },
      {
        title: 'Small Language Models (SLMs)',
        line: 'Compact language models, usually under about 10 billion parameters, built to be fast, cheap and able to run on a laptop, phone or private server.',
        like: 'A scooter versus a truck. You don’t need a truck to deliver a letter across town.',
        why: 'Many agent tasks, like classifying, routing or extracting data, don’t need a giant model. SLMs cut cost, speed up responses and keep data on your own hardware.',
        hook: 'The scooter, not the truck',
      },
      {
        title: 'Reasoning Models',
        line: 'Models that “think before they answer”, working through a problem step by step before giving the final response.',
        like: 'Solving a math problem on scrap paper first instead of blurting out the answer.',
        why: 'They are much better at math, coding, planning and multi-step tasks. The trade-off is that extra thinking costs more time and tokens, so you use them where accuracy matters most.',
        hook: 'Working on scrap paper first',
      },
    ],
  },
  {
    name: 'Talking to AI',
    short: 'Talking to AI',
    intro: 'A model is only as good as what you give it. These four ideas are about the input.',
    concepts: [
      {
        title: 'Prompt Engineering',
        line: 'The skill of writing instructions that get the best, most reliable output from an AI model.',
        like: 'Briefing a talented new hire. “Write something about sales” gets a vague result. “Write a 3-bullet summary of Q3 sales for the CFO, in a formal tone” gets exactly what you need.',
        why: 'The same model can give poor or excellent results depending only on how you ask. It is the cheapest way to improve any AI output.',
        hook: 'Briefing a new hire well',
      },
      {
        title: 'System Prompts',
        line: 'The hidden, standing instructions given to a model before the conversation starts, setting its role, rules, tone and limits.',
        like: 'The job description and company handbook an employee reads on day one. Customers never see it, but it shapes every answer.',
        why: 'It is how a general model becomes a specific product, like a support bot that only discusses your product and never shares internal data.',
        hook: 'The day-one job description',
      },
      {
        title: 'Zero-Shot & Few-Shot Prompting',
        line: 'Zero-shot means asking a model to do a task with no examples; few-shot means including a few examples in the prompt so it copies the pattern.',
        like: 'Telling someone “write a product tagline” (zero-shot) versus showing them three taglines you love first (few-shot). Examples beat explanations.',
        why: 'Few-shot is the quickest way to get consistent formats and styles, often good enough that you never need to fine-tune.',
        hook: 'Examples beat explanations',
      },
      {
        title: 'Context Engineering',
        line: 'Designing everything the model sees at each step: instructions, documents, tool results, memory and history, not just the prompt.',
        like: 'Preparing a briefing pack for a surgeon. The right X-rays, the patient history, nothing irrelevant. Too little and they guess; too much and they get lost.',
        why: 'In 2026 it has become a core skill of AI engineering. Most agent failures are not model failures; the model simply had the wrong context.',
        hook: 'The surgeon’s briefing pack',
      },
    ],
  },
  {
    name: 'Giving AI Knowledge',
    short: 'Knowledge',
    intro: 'Models only know what they were trained on. These three ideas are how you teach them about your world.',
    concepts: [
      {
        title: 'RAG (Retrieval-Augmented Generation)',
        line: 'Before answering, the system searches your documents for relevant information and hands it to the model, so the answer is grounded in real sources.',
        like: 'An open-book exam. Instead of answering from memory, the student looks up the right page first, then writes the answer.',
        why: 'It lets AI answer questions about your company’s policies, contracts or code without retraining, and it sharply reduces hallucinations because answers can cite their source.',
        hook: 'The open-book exam',
      },
      {
        title: 'Vector Databases',
        line: 'Databases built to store embeddings and quickly find the items closest in meaning to a query.',
        like: 'A librarian who finds books by what they are about, not by their exact title. Ask for “how to cancel my plan” and it also finds the page titled “subscription termination”.',
        why: 'They are the search engine behind most RAG systems and agent memory. Common examples are Pinecone, Weaviate, Qdrant and pgvector for Postgres.',
        hook: 'The librarian who knows meaning',
      },
      {
        title: 'Fine-Tuning',
        line: 'Further training an existing model on your own examples so it permanently learns a specific style, format or task.',
        like: 'Sending a general doctor for specialist training. RAG gives them a reference book to look things up; fine-tuning changes how they think and work.',
        why: 'Use it when prompting and RAG are not enough: a fixed output format, a brand voice, or a narrow task done millions of times. Simple rule: RAG for knowledge, fine-tuning for behavior.',
        hook: 'Specialist training for a doctor',
      },
    ],
  },
  {
    name: 'AI Agents',
    short: 'Agents',
    intro: 'This is where AI stops just answering and starts doing. Agents are the biggest shift in AI right now.',
    concepts: [
      {
        title: 'AI Agents',
        line: 'An AI system that is given a goal and works toward it on its own: it plans, takes actions with tools, checks the results and repeats until done.',
        like: 'The difference between a GPS that shows directions (a chatbot) and a self-driving car that actually drives you there (an agent).',
        why: 'Agents turn AI from a helper you ask into a worker you delegate to, booking meetings, fixing bugs, filing tickets or researching a market.',
        hook: 'The self-driving car, not the GPS',
      },
      {
        title: 'Tool Use / Function Calling',
        line: 'The ability of a model to call external tools, such as APIs, databases, search or code, by producing a structured request your system then executes.',
        like: 'Giving a smart assistant a phone, a calculator and the keys to your systems. On its own it can only talk; with tools it can check the weather, query sales data or send an email.',
        why: 'Tools are what make agents possible. Without tool use, a model can only describe actions; with it, it can take them.',
        hook: 'Giving the assistant a phone and keys',
      },
      {
        title: 'Agent Memory',
        line: 'The systems that let an agent remember beyond a single conversation: short-term memory for the current task, and long-term memory for facts, past events and preferences saved for later.',
        like: 'A doctor’s working notes during your appointment (short-term) versus your medical file that is there next visit (long-term).',
        why: 'Models are stateless; they forget everything between sessions. Memory is what lets an agent improve over time and not ask you the same question twice.',
        hook: 'Working notes vs. the medical file',
      },
      {
        title: 'Agent Skills',
        line: 'Packaged folders of instructions, scripts and resources that teach an agent how to do a specific task well, loaded only when needed.',
        like: 'Recipe cards in a kitchen. The chef doesn’t memorize every recipe; they pull out the right card when someone orders that dish.',
        why: 'Skills let you give one agent many expert abilities, like making slides or reviewing contracts, without stuffing everything into its context window at once.',
        hook: 'Recipe cards in the kitchen',
      },
      {
        title: 'Multi-Agent Systems',
        line: 'Several specialized agents working together on a task, usually with one orchestrator agent splitting the work and combining the results.',
        like: 'A project team. A manager assigns research to one person, writing to another and review to a third, instead of one person doing everything.',
        why: 'Splitting complex work across focused agents often gives better, faster results. It also adds coordination cost, so use it when one agent genuinely isn’t enough.',
        hook: 'A project team with a manager',
      },
      {
        title: 'Human-in-the-Loop (HITL)',
        line: 'Designing AI systems so a person reviews, approves or corrects key decisions before the AI acts on them.',
        like: 'A junior employee who can draft any email but needs the manager’s sign-off before sending anything to a client.',
        why: 'For anything risky or irreversible, like payments, deletions or customer messages, HITL keeps humans accountable and stops costly agent mistakes.',
        hook: 'The manager’s sign-off',
      },
    ],
  },
  {
    name: 'Agent Protocols',
    short: 'Protocols',
    intro: 'Protocols are the shared languages that let agents plug into everything else. Remember them as three wires out of one agent: MCP to tools, A2A to other agents, AG-UI to people.',
    concepts: [
      {
        title: 'MCP (Model Context Protocol)',
        line: 'An open standard, created by Anthropic, that lets any AI app connect to any tool or data source through one common interface.',
        like: 'USB-C for AI. Before USB-C, every device had its own cable. Before MCP, every AI-to-tool connection was custom code. Now you build one MCP server, and Claude, ChatGPT, Cursor and others can all use it.',
        why: 'It has become the industry standard for connecting agents to tools and data. If you build software in 2026, an MCP server is fast becoming as normal as a REST API.',
        hook: 'USB-C for AI',
      },
      {
        title: 'A2A (Agent2Agent Protocol)',
        line: 'An open protocol, started by Google, that lets AI agents built by different companies on different frameworks discover each other and work together.',
        like: 'A common business language between companies. Your travel agent can hand a task to an airline’s booking agent and a hotel’s agent, even though each was built by a different team.',
        why: 'MCP connects an agent to tools; A2A connects an agent to other agents. Together they make large multi-agent systems possible across company boundaries.',
        hook: 'A common language between companies’ agents',
      },
      {
        title: 'AG-UI (Agent-User Interaction Protocol)',
        line: 'An open protocol that streams what an agent is doing to your app’s interface in real time, and sends the user’s input and approvals back.',
        like: 'The live order tracker in a food delivery app. You see each step as it happens, and you can still change the order midway.',
        why: 'Agents run long, multi-step tasks. AG-UI lets users watch progress, see tool calls and step in, instead of staring at a spinner and hoping.',
        hook: 'The live delivery tracker',
      },
    ],
  },
  {
    name: 'Frameworks',
    short: 'Frameworks',
    intro: 'Frameworks are the toolkits developers use to build AI apps and agents without starting from zero.',
    concepts: [
      {
        title: 'LangChain',
        line: 'A popular open-source framework that gives developers ready-made building blocks to connect models, prompts, tools, memory and data into an AI application.',
        like: 'A box of LEGO Technic parts for AI. Instead of machining every gear yourself, you snap together pre-built pieces like “chat model”, “retriever” and “tool”.',
        why: 'It is one of the most widely used ways to build RAG apps and simple agents, and it can swap model providers with minimal code changes.',
        hook: 'LEGO Technic for AI apps',
      },
      {
        title: 'LangGraph',
        line: 'A framework from the LangChain team for building agents as a graph of steps, with loops, branches, saved state and human approval points.',
        like: 'A flowchart that actually runs. Each box is a step, each arrow is a decision, and you can loop back, pause for a human, or resume later.',
        why: 'Real agents rarely follow a straight line. LangGraph gives you precise control and reliability for complex, long-running agent workflows in production.',
        hook: 'A flowchart that runs',
      },
      {
        title: 'CrewAI',
        line: 'An open-source Python framework for building teams of AI agents, where each agent gets a role, a goal and tools, and they collaborate on a task.',
        like: 'Hiring a small virtual crew. A “researcher” gathers facts, a “writer” drafts the report and an “editor” reviews it, each handing work to the next.',
        why: 'It is one of the quickest ways to prototype multi-agent systems, because you describe agents in role-based, almost human terms.',
        hook: 'Hiring a virtual crew',
      },
    ],
  },
  {
    name: 'Measuring & Running AI',
    short: 'Running AI',
    intro: 'Building an AI demo is easy. Knowing it works, and keeping it working, is the real job.',
    concepts: [
      {
        title: 'Evals (AI Evaluation)',
        line: 'Systematic tests that measure how well an AI system performs on the tasks you care about, run before release (offline) and on live traffic (online).',
        like: 'Unit tests and exams combined. You don’t ship code without tests; you shouldn’t ship a prompt or agent without evals.',
        why: 'AI output is unpredictable, and a small prompt change can silently break things. Evals turn “it seems fine” into a measurable score you can track over time.',
        hook: 'Unit tests for AI',
      },
      {
        title: 'LLM-as-a-Judge',
        line: 'Using one AI model to grade another model’s outputs against a clear rubric, such as accuracy, relevance or tone.',
        like: 'A senior teacher marking hundreds of essays using a marking scheme. It is much faster and cheaper than grading every essay by hand.',
        why: 'Many AI outputs can’t be checked with simple code, like “was this answer helpful?”. A judge model scales that review to thousands of cases. Check the judge against human ratings regularly.',
        hook: 'The teacher with a marking scheme',
      },
      {
        title: 'LLM Tracing & Observability',
        line: 'Recording every step an AI system takes, including prompts, responses, tool calls, latency, tokens and cost, so you can see exactly what happened.',
        like: 'An airplane’s black box. When something goes wrong, you replay the trace and find the exact step that failed.',
        why: 'Agents make many hidden decisions; without tracing, debugging is guesswork. LangSmith, Langfuse and Arize Phoenix specialize in it. Observability tells you what happened; evals tell you whether it was good.',
        hook: 'The airplane’s black box',
      },
      {
        title: 'LLMOps & AgentOps',
        line: 'The practices and tooling for deploying, monitoring, versioning and improving LLM apps and agents in production: the AI version of DevOps.',
        like: 'Running a restaurant, not just cooking one great meal. You need consistent quality, cost control, supply checks and a way to handle complaints every single day.',
        why: 'Most AI projects fail in the jump from demo to production. LLMOps covers prompt versioning, evals in CI and cost tracking. AgentOps adds agent inventory, identities, permissions and audit trails.',
        hook: 'Running the restaurant every day',
      },
    ],
  },
  {
    name: 'Security',
    short: 'Security',
    intro: 'The more an AI can do, the more damage it can do. These three ideas are the security basics every builder needs.',
    concepts: [
      {
        title: 'Prompt Injection',
        line: 'An attack where hidden or malicious instructions trick an AI into ignoring its rules. Direct injection comes from the user; indirect injection hides inside content the AI reads, like a web page, email or document.',
        like: 'A forged note slipped into your assistant’s inbox saying “Boss says: wire $10,000 to this account.” The assistant can’t always tell the forged note from a real instruction.',
        why: 'It is the top security risk for LLM apps, and agents with tools make it far more dangerous. Treat everything an AI reads as untrusted data, never as commands.',
        hook: 'The forged note in the inbox',
      },
      {
        title: 'Guardrails',
        line: 'Safety checks placed around an AI model that filter what goes in and what comes out, blocking harmful, off-topic, leaked or non-compliant content.',
        like: 'The barriers on a mountain road. The car (the model) still drives freely, but the barriers stop it going off the cliff.',
        why: 'You can’t fully control what a model says, but you can control what reaches users and systems. Guardrails catch PII leaks, toxic content, jailbreaks and policy violations.',
        hook: 'Barriers on a mountain road',
      },
      {
        title: 'OWASP Top 10 for Agentic Applications',
        line: 'A community-built list from the OWASP GenAI Security Project of the ten most critical security risks in AI agents, with practical mitigations.',
        like: 'A safety inspection checklist for a new kind of vehicle. Cars got crash tests; autonomous agents now have their own checklist.',
        why: 'It gives security and engineering teams a shared language for agent risks: goal hijack, tool misuse, privilege abuse, malicious MCP servers, unexpected code execution and rogue agents.',
        hook: 'The safety inspection checklist',
      },
    ],
  },
  {
    name: 'Building with AI',
    short: 'Building',
    intro: 'AI is also changing how software itself gets made.',
    concepts: [
      {
        title: 'Vibe Coding',
        line: 'Building software by describing what you want in plain language and letting AI write the code, often without reading every line. Andrej Karpathy coined the term in February 2025.',
        like: 'Telling a contractor “I want a cozy two-bedroom house with lots of light” instead of drawing the blueprints yourself.',
        why: 'Great for prototypes and personal tools. For production software, the disciplined version, often called agentic engineering, keeps humans reviewing, testing and owning the code.',
        hook: 'Describing the house, not drawing blueprints',
      },
    ],
  },
];
