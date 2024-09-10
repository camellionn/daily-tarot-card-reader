"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
//Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
//Route to handle tarot readings
app.post('/generate-reading', (req, res) => {
    const { card } = req.body;
    const readings = {
        "The Fool": "The Fool represents new beginnings, adventures, and a fresh start.",
        "The Magician": "The Magician symbolizes making things happen and being resourceful."
    };
    const reading = readings[card] ||
        "No specific reading available for this card.";
    res.json({ reading });
});
//Start the server 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
