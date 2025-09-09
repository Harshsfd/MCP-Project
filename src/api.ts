// API configuration
const API_URL = "http://localhost:5000/api"; // Change this for production

// Helper function for making API requests
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    throw error;
  }
}

// Contact form submission
export async function sendContactForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  return apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// Get services
export async function getServices() {
  return apiRequest("/services");
}

// Get testimonials
export async function getTestimonials() {
  return apiRequest("/testimonials");
}

// Get blogs
export async function getBlogs() {
  return apiRequest("/blogs");
}
