import { API_URL, CANDIDATE_ID } from "../constants/constants";
import axios from "axios";

// Function to add a Polyanet
async function addPolyanet(row: number, column: number) {
  try {
    const response = await axios.post(
      `${API_URL}/polyanets`,
      {
        candidateId: CANDIDATE_ID,
        row,
        column,
      },
      {
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header to JSON
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Failed to add Polyanet: ${response.data.error}`);
    }

    console.log("Polyanet added successfully");
  } catch (error) {
    console.error("Error adding Polyanet:", error);
  }
}

// Function to delete a Polyanet
async function deletePolyanet(row: number, column: number) {
  try {
    const response = await axios.delete(`${API_URL}/polyanets`, {
      data: {
        candidateId: CANDIDATE_ID,
        row,
        column,
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to delete Polyanet: ${response.data.error}`);
    }

    console.log("Polyanet deleted successfully");
  } catch (error) {
    console.error("Error deleting Polyanet:", error);
  }
}

// Export the functions for external use
export { addPolyanet, deletePolyanet };
