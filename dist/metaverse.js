"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cometh_serive_1 = require("./services/cometh-serive");
const metaverse_service_1 = require("./services/metaverse-service");
const polyplanet_service_1 = require("./services/polyplanet-service");
const soloons_service_1 = require("./services/soloons-service");
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function createMetaverse(matrix) {
    return __awaiter(this, void 0, void 0, function* () {
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
                        yield (0, polyplanet_service_1.addPolyanet)(row, col);
                        break;
                    case "BLUE_SOLOON":
                        yield (0, soloons_service_1.addSoloon)(row, col, "blue");
                        break;
                    case "RED_SOLOON":
                        yield (0, soloons_service_1.addSoloon)(row, col, "red");
                        break;
                    case "PURPLE_SOLOON":
                        yield (0, soloons_service_1.addSoloon)(row, col, "purple");
                        break;
                    case "WHITE_SOLOON":
                        yield (0, soloons_service_1.addSoloon)(row, col, "white");
                        break;
                    case "UP_COMETH":
                        yield (0, cometh_serive_1.addCometh)(row, col, "up");
                        break;
                    case "RIGHT_COMETH":
                        yield (0, cometh_serive_1.addCometh)(row, col, "right");
                        break;
                    case "DOWN_COMETH":
                        yield (0, cometh_serive_1.addCometh)(row, col, "down");
                        break;
                    case "LEFT_COMETH":
                        yield (0, cometh_serive_1.addCometh)(row, col, "left");
                        break;
                    default:
                        console.log("SPACE");
                }
                if (matrix[row][col] !== "SPACE") {
                    yield delay(1000); // aboid too many requests
                }
            }
        }
    });
}
function metaverse() {
    return __awaiter(this, void 0, void 0, function* () {
        const goalMap = yield (0, metaverse_service_1.fetchGoalMap)();
        createMetaverse(goalMap);
        // Example to delete a Polyanet
        // await deletePolyanet(2, 2);
    });
}
metaverse();
