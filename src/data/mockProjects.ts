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
    downloadUrl: "/downloads/basic-mcp-server.zip",
    githubUrl: "https://github.com/example/basic-mcp-server"
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
    githubUrl: "https://github.com/example/javascript-mcp-client"
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
    githubUrl: "https://github.com/example/advanced-mcp-architecture"
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
    codeSnippet: `import asyncio, json
import asyncpg
from motor.motor_asyncio import AsyncIOMotorClient
import aioredis
from datetime import datetime

class MCPDatabaseConnector:
    def __init__(self, db_configs):
        self.configs = db_configs
        self.postgres = None
        self.mongo = None
        self.redis = None
    
    async def initialize_connections(self):
        self.postgres = await asyncpg.connect(self.configs['postgres']['url'])
        self.mongo = AsyncIOMotorClient(self.configs['mongo']['url']).mcp_database
        self.redis = await aioredis.create_redis_pool(self.configs['redis']['url'])
    
    async def store_context(self, context_id, context_data):
        await self.postgres.execute(
            "INSERT INTO contexts (id, data, created_at) VALUES ($1, $2, NOW())",
            context_id, json.dumps(context_data)
        )
        await self.mongo.contexts.insert_one({"_id": context_id, "data": context_data, "timestamp": datetime.utcnow()})
        await self.redis.setex(`context:${context_id}`, 3600, json.dumps(context_data))`,
    downloadUrl: "/downloads/mcp-database-integration.zip"
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
    codeSnippet: `import React, { useState, useEffect } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import io from 'socket.io-client';

const MCPDashboard = () => {
  const [metrics, setMetrics] = useState({ activeContexts:0, requestsPerSecond:0, responseTime:0, errorRate:0 });
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('ws://localhost:8080');
    newSocket.on('metrics_update', (data) => setMetrics(prev => ({...prev, ...data})));
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  const chartData = { labels:['Active','Idle','Error'], datasets:[{ data:[metrics.activeContexts, metrics.idleContexts||0, metrics.errorContexts||0], backgroundColor:['#4CAF50','#FFC107','#F44336'] }] };

  return (
    <div className="dashboard-container">
      <Doughnut data={chartData}/>
    </div>
  );
};`,
    downloadUrl: "/downloads/mcp-dashboard.zip"
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
    codeSnippet: `import jwt, bcrypt
from cryptography.fernet import Fernet
from datetime import datetime, timedelta
import json

class MCPSecurityManager:
    def __init__(self, secret_key, encryption_key):
        self.secret_key = secret_key
        self.cipher = Fernet(encryption_key)
        self.active_tokens = set()
    
    async def authenticate_user(self, username, password):
        user = await self.get_user(username)
        if not user: return None
        if bcrypt.checkpw(password.encode(), user['password_hash']):
            return self.generate_token(user)
        return None
    
    def generate_token(self, user):
        payload = {'user_id': user['id'], 'username': user['username'], 'roles': user['roles'], 'exp': datetime.utcnow() + timedelta(hours=24), 'iat': datetime.utcnow()}
        token = jwt.encode(payload, self.secret_key, algorithm='HS256')
        self.active_tokens.add(token)
        return token`,
    downloadUrl: "/downloads/mcp-security.zip"
  },

  // ---------- 6 New Projects ----------
  {
    id: "7",
    title: "MCP + AI Integration",
    description: "Integrate MCP with LLMs to provide context-aware AI responses",
    fullDescription: "Integrates MCP servers with AI models for intelligent responses...",
    level: "advanced",
    tags: ["AI", "LLM", "OpenAI", "Python", "LangChain"],
    language: "python",
    createdAt: randomDate(startDate, endDate),
    codeSnippet: `# mcp_ai_integration.py
import os, asyncio, json
from aiohttp import web, ClientSession

OPENAI_KEY = os.getenv('OPENAI_API_KEY')

async def call_llm(prompt):
    headers = {"Authorization": f"Bearer {OPENAI_KEY}","Content-Type": "application/json"}
    payload = {"model":"gpt-4o-mini","input":prompt}
    async with ClientSession() as session:
        async with session.post("https://api.openai.com/v1/responses", json=payload, headers=headers) as resp:
            data = await resp.json()
            return data.get('output',[{}])[0].get('content','')

async def handle(request):
    body = await request.json()
    context = body.get('context', {})
    user_query = body.get('query', '')
    ctx_text = "\\n".join([f"{k}: {v}" for k,v in context.items()])
    prompt = f"Context:\\n{ctx_text}\\n\\nUser: {user_query}\\nAssistant:"
    answer = await call_llm(prompt)
    return web.json_response({"status":"ok","answer":answer})

app = web.Application()
app.router.add_post("/ask", handle)
if __name__ == '__main__':
    web.run_app(app, port=8081)`,
    downloadUrl: "/downloads/mcp-ai-integration.zip"
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
    codeSnippet: `// jest unit test: tests/mcp-client.test.js
const WebSocket = require('ws');
const MCPClient = require('../src/mcp-client');

test('client connects and receives welcome', async () => {
  const client = new MCPClient('ws://localhost:8080');
  await client.connect();
  const welcome = await client.waitFor('welcome', 2000);
  expect(welcome.type).toBe('welcome');
  client.close();
});`,
    downloadUrl: "/downloads/mcp-testing-framework.zip"
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
    codeSnippet: `import logging
from logging.handlers import RotatingFileHandler

logger = logging.getLogger('mcp_logger')
logger.setLevel(logging.INFO)
handler = RotatingFileHandler('mcp.log', maxBytes=1000000, backupCount=5)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)

def log_event(event_type, data):
    logger.info(f"{event_type}: {data}")
    
log_event("ServerStart", {"status": "ok"})`,
    downloadUrl: "/downloads/mcp-logging-system.zip"
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
    codeSnippet: `import click
import asyncio
from mcp import Server

@click.group()
def cli():
    pass

@click.command()
def start_server():
    server = Server()
    asyncio.run(server.start())
    click.echo("MCP server started!")

@click.command()
def stop_server():
    click.echo("Stopping server...")

cli.add_command(start_server)
cli.add_command(stop_server)

if __name__ == "__main__":
    cli()`,
    downloadUrl: "/downloads/mcp-cli-tool.zip"
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
    codeSnippet: `import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import io from 'socket.io-client';

const MCPAnalytics = () => {
  const [metrics, setMetrics] = useState({ activeContexts:0, requests:0, errors:0 });
  useEffect(() => {
    const socket = io('ws://localhost:8080');
    socket.on('update', (data) => setMetrics(data));
    return () => socket.close();
  }, []);
  const data = {
    labels: ['Active', 'Requests', 'Errors'],
    datasets: [{ data: [metrics.activeContexts, metrics.requests, metrics.errors], backgroundColor: ['#4CAF50','#2196F3','#F44336'] }]
  };
  return <Line data={data} />;
};

export default MCPAnalytics;`,
    downloadUrl: "/downloads/mcp-analytics-dashboard.zip"
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
    codeSnippet: `import asyncio
class MCPLoadBalancer:
    def __init__(self, servers):
        self.servers = servers
        self.index = 0

    async def route_request(self, request):
        server = self.servers[self.index]
        self.index = (self.index + 1) % len(self.servers)
        response = await server.handle_request(request)
        return response

# Example usage
class DummyServer:
    async def handle_request(self, req): return {"ok": True}

servers = [DummyServer() for _ in range(3)]
lb = MCPLoadBalancer(servers)
asyncio.run(lb.route_request({"context":"test"}))`,
    downloadUrl: "/downloads/mcp-multi-server-loadbalancer.zip"
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