export const BASE_URL = "https://hp-api.onrender.com/api";

export const getCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/characters`);
    if (!response.ok) throw new Error('response was not ok');
    return await response.json();
  } catch (error) {
    console.error("failed to fetch:", error);
  }
};
