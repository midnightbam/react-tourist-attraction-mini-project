// Get the base URL depending on environment
const getBaseURL = () => {
  // In production (Vercel), use relative API paths
  if (import.meta.env.PROD) {
    return "/api";
  }
  // In development, use localhost with /api prefix
  return "http://localhost:4001/api";
};

const BASE_URL = getBaseURL();

async function request(path) {
  const url = `${BASE_URL}${path}`;
  console.log("Fetching from:", url); // For debugging
  
  const res = await fetch(url);
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || `HTTP ${res.status}`);
  }
  return res.json();
}

export const api = {
  searchTrips(keywords = "") {
    const q = encodeURIComponent(keywords);
    return request(`/trips?keywords=${q}`);
  },
};
