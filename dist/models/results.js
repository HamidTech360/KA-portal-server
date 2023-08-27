"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const mongoose_1 = __importStar(require("mongoose"));
//This schema is structured in the followng way
//The score field is expected to be an array of scrore arrays 
// e.g [["English", 20, 60], ["Maths", 20, 70], ["IRS", 20, 50]]
//
//  Here, every element is an array of a course result 
//   item1 in each inner array = course title
//   item2 in each inner array = semester 1 test score
//   item3 in each inner array = semester 1 exam score
//   item3 in each inner array = semester 2 test score
//   item4 in each inner array = semester 2 exam score
const resultSchema = new mongoose_1.default.Schema({
    regNumber: {
        type: String,
        required: true
    },
    session: {
        type: String,
        required: true
    },
    studentId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Student'
    },
    level: {
        type: String,
        required: true
    },
    scores: {
        type: [[String]],
        required: true
    },
    // examResult:{
    //     type:[[String]],
    //     required:true
    // }
}, { timestamps: true });
exports.Result = mongoose_1.default.models.Result || mongoose_1.default.model('Result', resultSchema);
