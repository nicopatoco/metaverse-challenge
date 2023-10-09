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
exports.fetchGoalMap = void 0;
const constants_1 = require("../constants/constants");
// Function to fetch data from the API
function fetchGoalMap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${constants_1.API_URL}map/${constants_1.CANDIDATE_ID}/goal`);
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    });
}
exports.fetchGoalMap = fetchGoalMap;
