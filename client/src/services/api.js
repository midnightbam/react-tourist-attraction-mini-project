const BASE_URL = "http://localhost:4001";

async function request(path) {
  const res = await fetch(`${BASE_URL}${path}`);
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
