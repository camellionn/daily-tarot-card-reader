import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

interface TarotCardRequest {
    card: string;
}

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Route to handle tarot readings
app.post('/generate-reading', (req,res) => {
    const { card } : TarotCardRequest = req.body;

    const readings: { [key: string] : string } = {
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

