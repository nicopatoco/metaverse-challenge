import { API_URL, CANDIDATE_ID } from "../constants/constants";

// Function to fetch data from the API
export async function fetchGoalMap() {
  try {
    const response = await fetch(`${API_URL}map/${CANDIDATE_ID}/goal`);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.goal;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
