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
exports.deletePolyanet = exports.addPolyanet = void 0;
const constants_1 = require("../constants/constants");
const axios_1 = require("axios");
// Function to add a Polyanet
function addPolyanet(row, column) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(`${constants_1.API_URL}/polyanets`, {
                candidateId: constants_1.CANDIDATE_ID,
                row,
                column,
            }, {
                headers: {
                    "Content-Type": "application/json", // Set the Content-Type header to JSON
                },
            });
            if (response.status !== 200) {
                throw new Error(`Failed to add Polyanet: ${response.data.error}`);
            }
            console.log("Polyanet added successfully");
        }
        catch (error) {
            console.error("Error adding Polyanet:", error);
        }
    });
}
exports.addPolyanet = addPolyanet;
// Function to delete a Polyanet
function deletePolyanet(row, column) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(`${constants_1.API_URL}/polyanets`, {
                data: {
                    candidateId: constants_1.CANDIDATE_ID,
                    row,
                    column,
                },
            });
            if (response.status !== 200) {
                throw new Error(`Failed to delete Polyanet: ${response.data.error}`);
            }
            console.log("Polyanet deleted successfully");
        }
        catch (error) {
            console.error("Error deleting Polyanet:", error);
        }
    });
}
exports.deletePolyanet = deletePolyanet;
