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

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Basic MCP Server Setup",
    description: "Learn the fundamentals of creating your first MCP server with Python",
    fullDescription: "This project walks you through creating a basic Model Context Protocol server using Python. You'll learn how to set up the server, handle client connections, and implement basic context sharing functionality. Perfect for beginners who want to understand the core concepts of MCP.",
    level: "basic",
    tags: ["Python", "MCP", "Server", "Beginner"],
    language: "python",
    createdAt: "2024-01-15",
    codeSnippet: `import asyncio
from mcp import Server, Context

class BasicMCPServer:
    def __init__(self):
        self.server = Server()
        self.context = Context()
    
    async def handle_request(self, request):
        """Handle incoming MCP requests"""
        try:
            response = await self.process_context(request)
            return {"status": "success", "data": response}
        except Exception as e:
            return {"status": "error", "message": str(e)}
    
    async def process_context(self, request):
        """Process context information"""
        context_data = request.get("context", {})
        self.context.update(context_data)
        return self.context.get_relevant_info()

if __name__ == "__main__":
    server = BasicMCPServer()
    asyncio.run(server.start())`,
    downloadUrl: "/downloads/basic-mcp-server.zip",
    githubUrl: "https://github.com/example/basic-mcp-server"
  },
  {
    id: "2",
    title: "JavaScript MCP Client",
    description: "Build a robust MCP client using modern JavaScript and WebSocket connections",
    fullDescription: "This intermediate project demonstrates how to create a feature-rich MCP client in JavaScript. You'll implement real-time communication, context synchronization, and error handling. The project includes examples of connecting to multiple MCP servers and managing context state efficiently.",
    level: "intermediate",
    tags: ["JavaScript", "WebSocket", "Client", "Real-time"],
    language: "javascript",
    createdAt: "2024-01-20",
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
      
      this.ws.onopen = () => {
        console.log('Connected to MCP server');
        resolve(true);
      };
      
      this.ws.onmessage = (event) => {
        this.handleMessage(JSON.parse(event.data));
      };
      
      this.ws.onerror = (error) => {
        reject(error);
      };
    });
  }

  async sendContext(contextId, data) {
    const message = {
      type: 'context_update',
      contextId,
      data,
      timestamp: Date.now()
    };
    
    this.ws.send(JSON.stringify(message));
  }

  handleMessage(message) {
    const handler = this.eventHandlers.get(message.type);
    if (handler) {
      handler(message);
    }
  }
}`,
    downloadUrl: "/downloads/javascript-mcp-client.zip",
    githubUrl: "https://github.com/example/javascript-mcp-client"
  },
  {
    id: "3",
    title: "Advanced MCP Architecture",
    description: "Scalable microservices architecture with distributed MCP protocol implementation",
    fullDescription: "An advanced implementation showcasing enterprise-grade MCP architecture. This project demonstrates how to build a scalable, distributed system with multiple MCP servers, load balancing, fault tolerance, and advanced context management. Includes Docker containers, Kubernetes configurations, and monitoring setup.",
    level: "advanced",
    tags: ["Microservices", "Docker", "Kubernetes", "Scalability", "Python"],
    language: "python",
    createdAt: "2024-01-25",
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
        """Initialize distributed components"""
        self.redis_pool = await aioredis.create_redis_pool(
            self.cluster_config['redis_url']
        )
        
        config.load_incluster_config()
        self.k8s_client = client.CoreV1Api()
    
    async def handle_distributed_context(self, context_data):
        """Handle context across multiple nodes"""
        with self.metrics['latency'].time():
            # Distribute context to relevant nodes
            nodes = await self.discover_active_nodes()
            
            tasks = []
            for node in nodes:
                task = self.send_context_to_node(node, context_data)
                tasks.append(task)
            
            results = await asyncio.gather(*tasks, return_exceptions=True)
            return self.aggregate_results(results)
    
    async def discover_active_nodes(self):
        """Discover active MCP nodes in cluster"""
        pods = self.k8s_client.list_namespaced_pod(
            namespace='mcp-system',
            label_selector='app=mcp-server'
        )
        
        return [pod.status.pod_ip for pod in pods.items 
                if pod.status.phase == 'Running']`,
    downloadUrl: "/downloads/advanced-mcp-architecture.zip",
    githubUrl: "https://github.com/example/advanced-mcp-architecture"
  },
  {
    id: "4",
    title: "MCP Database Integration",
    description: "Integrate MCP with various databases for persistent context storage",
    fullDescription: "This project shows how to integrate MCP servers with different database systems including PostgreSQL, MongoDB, and Redis. Learn about context persistence, query optimization, and real-time synchronization between database state and MCP context.",
    level: "intermediate",
    tags: ["Database", "PostgreSQL", "MongoDB", "Redis", "Python"],
    language: "python",
    createdAt: "2024-01-18",
    codeSnippet: `import asyncio
import asyncpg
from motor.motor_asyncio import AsyncIOMotorClient
import aioredis

class MCPDatabaseConnector:
    def __init__(self, db_configs):
        self.postgres = None
        self.mongo = None
        self.redis = None
        self.configs = db_configs
    
    async def initialize_connections(self):
        # PostgreSQL connection
        self.postgres = await asyncpg.connect(
            self.configs['postgres']['url']
        )
        
        # MongoDB connection
        self.mongo = AsyncIOMotorClient(
            self.configs['mongo']['url']
        ).mcp_database
        
        # Redis connection
        self.redis = await aioredis.create_redis_pool(
            self.configs['redis']['url']
        )
    
    async def store_context(self, context_id, context_data):
        """Store context in multiple databases"""
        # Store in PostgreSQL for structured queries
        await self.postgres.execute(
            "INSERT INTO contexts (id, data, created_at) VALUES ($1, $2, NOW())",
            context_id, context_data
        )
        
        # Store in MongoDB for flexible schema
        await self.mongo.contexts.insert_one({
            "_id": context_id,
            "data": context_data,
            "timestamp": datetime.utcnow()
        })
        
        # Cache in Redis for fast access
        await self.redis.setex(
            f"context:{context_id}", 
            3600,  # 1 hour TTL
            json.dumps(context_data)
        )`,
    downloadUrl: "/downloads/mcp-database-integration.zip"
  },
  {
    id: "5",
    title: "Real-time MCP Dashboard",
    description: "Build a React dashboard for monitoring MCP server performance and contexts",
    fullDescription: "Create a comprehensive dashboard for monitoring MCP server metrics, active contexts, and real-time performance data. This project uses React, WebSockets, and Chart.js to provide live insights into your MCP infrastructure.",
    level: "intermediate",
    tags: ["React", "Dashboard", "WebSocket", "Monitoring", "JavaScript"],
    language: "javascript",
    createdAt: "2024-01-22",
    codeSnippet: `import React, { useState, useEffect } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import io from 'socket.io-client';

const MCPDashboard = () => {
  const [metrics, setMetrics] = useState({
    activeContexts: 0,
    requestsPerSecond: 0,
    responseTime: 0,
    errorRate: 0
  });
  
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('ws://localhost:8080');
    
    newSocket.on('metrics_update', (data) => {
      setMetrics(prevMetrics => ({
        ...prevMetrics,
        ...data
      }));
    });
    
    setSocket(newSocket);
    
    return () => newSocket.close();
  }, []);

  const chartData = {
    labels: ['Active', 'Idle', 'Error'],
    datasets: [{
      data: [
        metrics.activeContexts,
        metrics.idleContexts || 0,
        metrics.errorContexts || 0
      ],
      backgroundColor: ['#4CAF50', '#FFC107', '#F44336']
    }]
  };

  return (
    <div className="dashboard-container">
      <div className="metrics-grid">
        <MetricCard 
          title="Active Contexts" 
          value={metrics.activeContexts}
          color="primary"
        />
        <MetricCard 
          title="Requests/sec" 
          value={metrics.requestsPerSecond}
          color="secondary"
        />
        <MetricCard 
          title="Response Time" 
          value={\`\${metrics.responseTime}ms\`}
          color="accent"
        />
      </div>
      
      <div className="chart-container">
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};`,
    downloadUrl: "/downloads/mcp-dashboard.zip"
  },
  {
    id: "6",
    title: "MCP Security Implementation",
    description: "Implement authentication, authorization, and encryption for MCP communications",
    fullDescription: "Learn how to secure your MCP infrastructure with proper authentication mechanisms, role-based access control, and end-to-end encryption. This advanced project covers JWT tokens, OAuth2 integration, and secure context sharing protocols.",
    level: "advanced",
    tags: ["Security", "Authentication", "Encryption", "JWT", "Python"],
    language: "python",
    createdAt: "2024-01-28",
    codeSnippet: `import jwt
import bcrypt
from cryptography.fernet import Fernet
from datetime import datetime, timedelta

class MCPSecurityManager:
    def __init__(self, secret_key, encryption_key):
        self.secret_key = secret_key
        self.cipher = Fernet(encryption_key)
        self.active_tokens = set()
    
    async def authenticate_user(self, username, password):
        """Authenticate user credentials"""
        user = await self.get_user(username)
        if not user:
            return None
            
        if bcrypt.checkpw(password.encode(), user['password_hash']):
            return self.generate_token(user)
        return None
    
    def generate_token(self, user):
        """Generate JWT token for authenticated user"""
        payload = {
            'user_id': user['id'],
            'username': user['username'],
            'roles': user['roles'],
            'exp': datetime.utcnow() + timedelta(hours=24),
            'iat': datetime.utcnow()
        }
        
        token = jwt.encode(payload, self.secret_key, algorithm='HS256')
        self.active_tokens.add(token)
        return token
    
    def verify_token(self, token):
        """Verify and decode JWT token"""
        try:
            if token not in self.active_tokens:
                return None
                
            payload = jwt.decode(token, self.secret_key, algorithms=['HS256'])
            return payload
        except jwt.ExpiredSignatureError:
            self.active_tokens.discard(token)
            return None
    
    async def encrypt_context(self, context_data):
        """Encrypt sensitive context data"""
        serialized = json.dumps(context_data).encode()
        return self.cipher.encrypt(serialized)`,
    downloadUrl: "/downloads/mcp-security.zip"
  }
];

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