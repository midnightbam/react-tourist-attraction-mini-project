export function safeThumbs(photos = [], count = 3) {
  const arr = Array.isArray(photos) ? photos.slice(1) : []; // รูปเล็กเริ่มจาก index 1
  if (arr.length >= count) return arr.slice(0, count);
  const pad = new Array(Math.max(0, count - arr.length)).fill(photos?.[0] ?? "");
  return [...arr, ...pad].slice(0, count);
}
