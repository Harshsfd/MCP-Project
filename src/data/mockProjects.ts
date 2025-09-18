export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  level: 'basic' | 'intermediate' | 'advanced';
  tags: string[];
  language: string;
  createdAt: string;
  codeSnippet: string;
  downloadUrl: string;
  imageUrl?: string;
  githubUrl?: string;
}

// Helper: random date between start and end
const randomDate = (start: Date, end: Date): string => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString();
};

// Start date: 25 July 2025
const startDate = new Date('2025-07-25');
const endDate = new Date(); // today

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Basic MCP Server Setup",
    description: "Learn the fundamentals of creating your first MCP server with Python",
    fullDescription: "This project walks you through creating a basic Model Context Protocol server using Python...",
    level: "basic",
    tags: ["Python", "MCP", "Server", "Beginner"],
    language: "python",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `import asyncio
from mcp import Server, Context

class BasicMCPServer:
    def __init__(self):
        self.server = Server()
        self.context = Context()
    
    async def handle_request(self, request):
        try:
            response = await self.process_context(request)
            return {"status": "success", "data": response}
        except Exception as e:
            return {"status": "error", "message": str(e)}
    
    async def process_context(self, request):
        context_data = request.get("context", {})
        self.context.update(context_data)
        return self.context.get_relevant_info()

if __name__ == "__main__":
    server = BasicMCPServer()
    asyncio.run(server.start())`,
    downloadUrl: "",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-1.jsx"
  },
  {
    id: "2",
    title: "JavaScript MCP Client",
    description: "Build a robust MCP client using modern JavaScript and WebSocket connections",
    fullDescription: "This intermediate project demonstrates how to create a feature-rich MCP client in JavaScript...",
    level: "intermediate",
    tags: ["JavaScript", "WebSocket", "Client", "Real-time"],
    language: "javascript",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `class MCPClient {
  constructor(serverUrl) {
    this.serverUrl = serverUrl;
    this.ws = null;
    this.contexts = new Map();
    this.eventHandlers = new Map();
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.serverUrl);
      this.ws.onopen = () => { console.log('Connected to MCP server'); resolve(true); };
      this.ws.onmessage = (event) => { this.handleMessage(JSON.parse(event.data)); };
      this.ws.onerror = (error) => { reject(error); };
    });
  }

  async sendContext(contextId, data) {
    const message = { type: 'context_update', contextId, data, timestamp: Date.now() };
    this.ws.send(JSON.stringify(message));
  }

  handleMessage(message) {
    const handler = this.eventHandlers.get(message.type);
    if (handler) handler(message);
  }
}`,
    downloadUrl: "/downloads/javascript-mcp-client.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-2.jsx"
  },
  {
    id: "3",
    title: "Advanced MCP Architecture",
    description: "Scalable microservices architecture with distributed MCP protocol implementation",
    fullDescription: "An advanced implementation showcasing enterprise-grade MCP architecture...",
    level: "advanced",
    tags: ["Microservices", "Docker", "Kubernetes", "Scalability", "Python"],
    language: "python",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `import asyncio
import aioredis
from kubernetes import client, config
from prometheus_client import Counter, Histogram

class DistributedMCPServer:
    def __init__(self, cluster_config):
        self.cluster_config = cluster_config
        self.redis_pool = None
        self.k8s_client = None
        self.metrics = {
            'requests': Counter('mcp_requests_total', 'Total MCP requests'),
            'latency': Histogram('mcp_request_duration', 'Request duration')
        }
    
    async def initialize(self):
        self.redis_pool = await aioredis.create_redis_pool(self.cluster_config['redis_url'])
        config.load_incluster_config()
        self.k8s_client = client.CoreV1Api()
    
    async def handle_distributed_context(self, context_data):
        with self.metrics['latency'].time():
            nodes = await self.discover_active_nodes()
            tasks = [self.send_context_to_node(node, context_data) for node in nodes]
            results = await asyncio.gather(*tasks, return_exceptions=True)
            return self.aggregate_results(results)
    
    async def discover_active_nodes(self):
        pods = self.k8s_client.list_namespaced_pod(
            namespace='mcp-system', label_selector='app=mcp-server'
        )
        return [pod.status.pod_ip for pod in pods.items if pod.status.phase == 'Running']`,
    downloadUrl: "/downloads/advanced-mcp-architecture.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-3.jsx"
  },
  {
    id: "4",
    title: "MCP Database Integration",
    description: "Integrate MCP with various databases for persistent context storage",
    fullDescription: "This project shows how to integrate MCP servers with PostgreSQL, MongoDB, and Redis...",
    level: "intermediate",
    tags: ["Database", "PostgreSQL", "MongoDB", "Redis", "Python"],
    language: "python",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `...`,
    downloadUrl: "/downloads/mcp-database-integration.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-4.jsx"
  },
  {
    id: "5",
    title: "Real-time MCP Dashboard",
    description: "Build a React dashboard for monitoring MCP server performance and contexts",
    fullDescription: "Create a dashboard for monitoring MCP server metrics, active contexts, and real-time performance data...",
    level: "intermediate",
    tags: ["React", "Dashboard", "WebSocket", "Monitoring", "JavaScript"],
    language: "javascript",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `...`,
    downloadUrl: "/downloads/mcp-dashboard.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-5.jsx"
  },
  {
    id: "6",
    title: "MCP Security Implementation",
    description: "Implement authentication, authorization, and encryption for MCP communications",
    fullDescription: "Secure MCP infrastructure with authentication, role-based access, and encryption...",
    level: "advanced",
    tags: ["Security", "Authentication", "Encryption", "JWT", "Python"],
    language: "python",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `...`,
    downloadUrl: "/downloads/mcp-security.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-6.jsx"
  },
  {
    id: "7",
    title: "MCP + AI Integration",
    description: "Integrate MCP with LLMs to provide context-aware AI responses",
    fullDescription: "Integrates MCP servers with AI models for intelligent responses...",
    level: "advanced",
    tags: ["AI", "LLM", "OpenAI", "Python", "LangChain"],
    language: "python",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `...`,
    downloadUrl: "/downloads/mcp-ai-integration.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-7.jsx"
  },
  {
    id: "8",
    title: "MCP Testing Framework",
    description: "Automated tests and load testing tools for MCP servers and clients",
    fullDescription: "Provides unit tests, integration tests, and load testing utilities...",
    level: "intermediate",
    tags: ["Testing","Jest","pytest","Load testing","JavaScript"],
    language: "javascript",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `...`,
    downloadUrl: "/downloads/mcp-testing-framework.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-8.jsx"
  },
  {
    id: "9",
    title: "MCP Logging System",
    description: "Centralized logging for all MCP servers and clients",
    fullDescription: "This project implements a centralized logging system using Python's logging module and ELK stack for real-time monitoring.",
    level: "intermediate",
    tags: ["Logging", "ELK", "Monitoring", "Python"],
    language: "python",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `...`,
    downloadUrl: "/downloads/mcp-logging-system.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-9.jsx"
  },
  {
    id: "10",
    title: "MCP CLI Tool",
    description: "Command-line interface for managing MCP servers and contexts",
    fullDescription: "Provides a CLI to start/stop MCP servers, view active contexts, and send context updates easily from terminal.",
    level: "basic",
    tags: ["CLI", "Python", "Tooling"],
    language: "python",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `...`,
    downloadUrl: "/downloads/mcp-cli-tool.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-10.jsx"
  },
  {
    id: "11",
    title: "MCP Analytics Dashboard",
    description: "Dashboard to visualize MCP context trends and server performance",
    fullDescription: "This project provides a React + Chart.js dashboard showing active contexts, request rate, errors, and historical trends.",
    level: "intermediate",
    tags: ["React", "Analytics", "Dashboard", "JavaScript"],
    language: "javascript",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `...`,
    downloadUrl: "/downloads/mcp-analytics-dashboard.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-11.jsx"
  },
  {
    id: "12",
    title: "MCP Multi-Server Load Balancer",
    description: "Automatically distributes context requests across multiple MCP servers",
    fullDescription: "Implements a load balancer for MCP servers using Python asyncio and round-robin request distribution.",
    level: "advanced",
    tags: ["Load Balancer", "Python", "AsyncIO", "Advanced"],
    language: "python",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `...`,
    downloadUrl: "/downloads/mcp-multi-server-loadbalancer.zip",
    githubUrl: "https://github.com/Harshsfd/MCP-PROJECT-SHOW/blob/main/MCP-12.jsx"
  }
];


// Helper functions
export const getProjectById = (id: string): Project | undefined => {
  return mockProjects.find(project => project.id === id);
};

export const getProjectsByLevel = (level: string): Project[] => {
  return mockProjects.filter(project => project.level === level);
};

export const searchProjects = (query: string): Project[] => {
  const lowerQuery = query.toLowerCase();
  return mockProjects.filter(project =>
    project.title.toLowerCase().includes(lowerQuery) ||
    project.description.toLowerCase().includes(lowerQuery) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};