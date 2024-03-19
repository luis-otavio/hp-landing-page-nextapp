const BASE_URL = "https://hp-api.onrender.com/api/characters";

export const getCharacters = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch characters:", error);
  }
};
