export async function getAllTiles() {
  const res = await fetch("https://tiles-gallery-server-yj9h.onrender.com/data", {
    cache: "no-store", // always fresh data
  });

  return res.json();
}
export async function getSingleTile(id) {
  const res = await fetch(`https://tiles-gallery-server-yj9h.onrender.com/data/${id}`, {
    cache: "no-store",
  });
  return res.json();
}