export const fetchSearchSuggestions = async (query) => {
  if (!query.trim()) {
    return []; // Return an empty array if the query is empty
  }

  try {
    const response = await fetch(`http://localhost:8000/api/watches?q=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch search suggestions");
    }
    const data = await response.json();

    // Filter and limit results to 5
    return data
      .filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);
  } catch (error) {
    console.error("Error fetching search suggestions:", error);
    return []; // Return an empty array in case of an error
  }
};