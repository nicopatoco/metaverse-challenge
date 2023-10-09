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
exports.deleteSoloons = exports.addSoloon = void 0;
const constants_1 = require("../constants/constants");
const axios_1 = require("axios");
// Function to add a Soloon
function addSoloon(row, column, color) {
    return __awaiter(this, void 0, void 0, function* () {
        if (color !== "blue" &&
            color !== "red" &&
            color !== "purple" &&
            color !== "white") {
            throw new Error(`Wrong color: ${color}`);
        }
        try {
            const response = yield axios_1.default.post(`${constants_1.API_URL}/soloons`, {
                candidateId: constants_1.CANDIDATE_ID,
                row,
                column,
                color,
            }, {
                headers: {
                    "Content-Type": "application/json", // Set the Content-Type header to JSON
                },
            });
            if (response.status !== 200) {
                throw new Error(`Failed to add soloons: ${response.data.error}`);
            }
            console.log("Soloons added successfully");
        }
        catch (error) {
            console.error("Error adding soloons:", error);
        }
    });
}
exports.addSoloon = addSoloon;
// Function to delete a Soloons
function deleteSoloons(row, column) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(`${constants_1.API_URL}/soloons`, {
                data: {
                    candidateId: constants_1.CANDIDATE_ID,
                    row,
                    column,
                },
            });
            if (response.status !== 200) {
                throw new Error(`Failed to delete Soloons: ${response.data.error}`);
            }
            console.log("Soloons deleted successfully");
        }
        catch (error) {
            console.error("Error deleting Soloons:", error);
        }
    });
}
exports.deleteSoloons = deleteSoloons;
