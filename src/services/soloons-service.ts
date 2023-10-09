import { API_URL, CANDIDATE_ID } from "../constants/constants";
import axios from "axios";

// Function to add a Soloon
async function addSoloon(row: number, column: number, color: string) {
  if (
    color !== "blue" &&
    color !== "red" &&
    color !== "purple" &&
    color !== "white"
  ) {
    throw new Error(`Wrong color: ${color}`);
  }
  try {
    const response = await axios.post(
      `${API_URL}/soloons`,
      {
        candidateId: CANDIDATE_ID,
        row,
        column,
        color,
      },
      {
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header to JSON
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Failed to add soloons: ${response.data.error}`);
    }

    console.log("Soloons added successfully");
  } catch (error) {
    console.error("Error adding soloons:", error);
  }
}

// Function to delete a Soloons
async function deleteSoloons(row: number, column: number) {
  try {
    const response = await axios.delete(`${API_URL}/soloons`, {
      data: {
        candidateId: CANDIDATE_ID,
        row,
        column,
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to delete Soloons: ${response.data.error}`);
    }

    console.log("Soloons deleted successfully");
  } catch (error) {
    console.error("Error deleting Soloons:", error);
  }
}

// Export the functions for external use
export { addSoloon, deleteSoloons };
