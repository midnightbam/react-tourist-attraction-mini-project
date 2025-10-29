// Get the base URL depending on environment
const getBaseURL = () => {
  // Check for custom API URL first
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // In production (Vercel), use relative API paths
  if (import.meta.env.PROD) {
    // You can also use absolute URL if needed:
    // return "https://your-vercel-app.vercel.app/api";
    return "/api";
  }
  
  // In development, use localhost with /api prefix
  return "http://localhost:4001/api";
};

const BASE_URL = getBaseURL();

// Debug information
console.log("🔧 Environment:", import.meta.env.MODE);
console.log("🌐 API Base URL:", BASE_URL);

async function request(path) {
  const url = `${BASE_URL}${path}`;
  console.log("📡 Fetching from:", url); // For debugging
  
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const msg = await res.text();
      throw new Error(`API Error: ${res.status} - ${msg}`);
    }
    return res.json();
  } catch (error) {
    console.error("❌ API Request failed:", error.message);
    throw error;
  }
}

export const api = {
  searchTrips(keywords = "") {
    const q = encodeURIComponent(keywords);
    return request(`/trips?keywords=${q}`);
  },
};
