import { addCometh } from "./services/cometh-serive";
import { fetchGoalMap } from "./services/metaverse-service";
import { addPolyanet } from "./services/polyplanet-service";
import { addSoloon } from "./services/soloons-service";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createMetaverse(matrix: string[][]) {
  // Check if the matrix has rows
  if (matrix.length === 0) {
    console.log("Matrix has no rows.");
    return;
  }

  // Check if the matrix has columns
  if (matrix[0].length === 0) {
    console.log("Matrix has no columns.");
    return;
  }

  // Iterate through rows and columns
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      switch (matrix[row][col]) {
        case "POLYANET":
          await addPolyanet(row, col);
          break;
        case "BLUE_SOLOON":
          await addSoloon(row, col, "blue");
          break;
        case "RED_SOLOON":
          await addSoloon(row, col, "red");
          break;
        case "PURPLE_SOLOON":
          await addSoloon(row, col, "purple");
          break;
        case "WHITE_SOLOON":
          await addSoloon(row, col, "white");
          break;
        case "UP_COMETH":
          await addCometh(row, col, "up");
          break;
        case "RIGHT_COMETH":
          await addCometh(row, col, "right");
          break;
        case "DOWN_COMETH":
          await addCometh(row, col, "down");
          break;
        case "LEFT_COMETH":
          await addCometh(row, col, "left");
          break;
        default:
          console.log("SPACE");
      }
      if (matrix[row][col] !== "SPACE") {
        await delay(1000); // aboid too many requests
      }
    }
  }
}

async function metaverse() {
  const goalMap = await fetchGoalMap();
  createMetaverse(goalMap);

  // Example to delete a Polyanet
  // await deletePolyanet(2, 2);
}

metaverse();
