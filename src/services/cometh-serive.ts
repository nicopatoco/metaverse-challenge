import { API_URL, CANDIDATE_ID } from "../constants/constants";
import axios from "axios";

// Function to add a Cometh
async function addCometh(row: number, column: number, direction: string) {
  if (
    direction !== "up" &&
    direction !== "down" &&
    direction !== "right" &&
    direction !== "left"
  ) {
    throw new Error(`Wrong direction: ${direction}`);
  }
  try {
    const response = await axios.post(
      `${API_URL}/comeths`,
      {
        candidateId: CANDIDATE_ID,
        row,
        column,
        direction,
      },
      {
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header to JSON
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Failed to add Cometh: ${response.data.error}`);
    }

    console.log("Cometh added successfully");
  } catch (error) {
    console.error("Error adding Cometh:", error);
  }
}

// Function to delete a Cometh
async function deleteCometh(row: number, column: number) {
  try {
    const response = await axios.delete(`${API_URL}/comeths`, {
      data: {
        candidateId: CANDIDATE_ID,
        row,
        column,
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to delete Cometh: ${response.data.error}`);
    }

    console.log("Cometh deleted successfully");
  } catch (error) {
    console.error("Error deleting Cometh:", error);
  }
}

// Export the functions for external use
export { addCometh, deleteCometh };
