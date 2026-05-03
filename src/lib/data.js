export async function getAllTiles() {
  const res = await fetch("https://tiles-gallery-server-yj9h.onrender.com/data", {
    cache: "no-store", // always fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch tiles");
  }

  return res.json();
}