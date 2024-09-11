var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { deck } from './card.js';
import { stars } from './stars.js';
function getRandom(deck_length) {
    return Math.floor(Math.random() * deck_length);
}
document.getElementById("draw").onclick = function () {
    const idx = getRandom(deck.length);
    const currentCard = deck[idx];
    const displayElement = document.getElementById("display");
    displayElement.innerHTML = `<h2>${currentCard.name}</h2>
<div class="flip-card-container">
        <div class="flip-card">
            <div class="flip-card-front">
                <p>Back</p>
            </div>
            <div class="flip-card-back">
                <img src="cards/${currentCard.image}.jpg" alt="${currentCard.name}" />
            </div>
        </div>
    </div>
    `;
    const flipCard = document.querySelector('.flip-card');
    const cardTitle = document.querySelector('h2');
    //Remove any existing event listeners to avoid duplicates
    flipCard.replaceWith(flipCard.cloneNode(true));
    //Re-select the flip card element after replacing it
    const newFlipCard = document.querySelector('.flip-card');
    newFlipCard.addEventListener("click", function () {
        return __awaiter(this, void 0, void 0, function* () {
            newFlipCard.classList.toggle("flip");
            cardTitle.style.display = "block";
            const previousReading = displayElement.querySelector('.reading');
            if (previousReading) {
                previousReading.remove();
            }
            const reading = yield getCardReading(currentCard.name);
            const readingElement = document.createElement('p');
            readingElement.classList.add('reading');
            readingElement.innerText = reading;
            displayElement.appendChild(readingElement);
        });
    });
    /*
    flipCard.addEventListener("mouseover", function() {
        if(flipCard.classList.contains("flip")) {
            flipCard.style.transform = "rotateY(180deg)";
        }
    });
    */
    flipCard.addEventListener("mouseout", function () {
        flipCard.style.transform = "rotateY(0deg)";
    });
    setInterval(function () {
        stars();
    }, 50);
};
//Function to get card reading from the backend
function getCardReading(card) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:3000/generate-reading', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ card }),
            });
            const data = yield response.json();
            return data.reading;
        }
        catch (error) {
            console.error('Error fetching card reading:', error);
            return 'Error fetching reading. Please try again.';
        }
    });
}
