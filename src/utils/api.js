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

export async function searchGames(query) {
  const apiKey = import.meta.env.VITE_RAWG_API_KEY;
  const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${query}&page_size=9`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching games:", error);
    return [];
  }
}
