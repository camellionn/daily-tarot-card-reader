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
//Throttle function implementation for stars
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        const now = Date.now();
        if (lastRan && now < lastRan + limit) {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                lastRan = now;
                func(...args);
            }, limit - (now - lastRan));
        }
        else {
            lastRan = now;
            func(...args);
        }
    };
}
const throttledStars = throttle(stars, 500);
function getRandom(deck_length) {
    return Math.floor(Math.random() * deck_length);
}
document.getElementById("draw").onclick = function () {
    const idx = getRandom(deck.length);
    const currentCard = deck[idx];
    const displayElement = document.getElementById("display");
    const displayBox = document.getElementById("display-box");
    displayElement.innerHTML = `<h2>${currentCard.name}</h2>
<div class="flip-card-container">
        <div class="flip-card">
            <div class="flip-card-front">
                <img src="card-front.png" alt="card front">
            </div>
            <div class="flip-card-back">
                <img src="cards/${currentCard.image}.jpg" alt="${currentCard.name}" />
            </div>
        </div>
    </div>
    `;
    const newFlipCard = document.querySelector('.flip-card');
    const cardTitle = document.querySelector('h2');
    newFlipCard.onclick = function handleCardFlip() {
        return __awaiter(this, void 0, void 0, function* () {
            newFlipCard.classList.toggle("flip");
            cardTitle.style.display = "block";
            const previousReading = displayBox.querySelector('.reading');
            if (previousReading) {
                previousReading.remove();
            }
            const reading = yield getCardReading(currentCard.name);
            const readingElement = document.createElement('p');
            readingElement.classList.add('reading');
            readingElement.innerText = reading;
            displayBox.appendChild(readingElement);
            displayBox.style.display = "block";
        });
    };
    /*
    flipCard.addEventListener("mouseover", function() {
        if(flipCard.classList.contains("flip")) {
            flipCard.style.transform = "rotateY(180deg)";
        }
    });
    */
    newFlipCard.addEventListener("mouseout", function () {
        newFlipCard.style.transform = "rotateY(0deg)";
    });
    setInterval(throttledStars, 500);
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
