const BASE_URL = "https://api.rawg.io/api/";

export async function fetchPopularGames() {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;

  try {
    const response = await fetch(`${BASE_URL}games?key=${apiKey}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
