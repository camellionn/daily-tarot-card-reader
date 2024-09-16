import {deck} from './card.js'
import { stars } from './stars.js';

//Throttle function implementation for stars
function throttle(func: Function, limit: number) {
    let lastFunc: ReturnType<typeof setTimeout>;
    let lastRan: number;

    return function(...args: any[]) {
        const now = Date.now();
        if(lastRan && now < lastRan + limit) {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                lastRan = now;
                func(...args);
            }, limit - (now - lastRan));
        } else {
            lastRan = now;
            func(...args);
        }
    };
}

const throttledStars = throttle(stars, 500);

function getRandom(deck_length: number): number {
    return Math.floor(Math.random()*deck_length);
}

document.getElementById("draw")!.onclick = function() {
    const idx = getRandom(deck.length);
    const currentCard = deck[idx];

const displayElement = document.getElementById("display") as HTMLDivElement | null;

displayElement!.innerHTML = `<h2>${currentCard.name}</h2>
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

    const newFlipCard = document.querySelector('.flip-card') as HTMLElement;
    const cardTitle = document.querySelector('h2') as HTMLElement;

    newFlipCard.onclick = async function handleCardFlip() {
        newFlipCard.classList.toggle("flip");
        cardTitle.style.display = "block";

        const previousReading = displayElement!.querySelector('.reading');
        if(previousReading) {
            previousReading.remove();
        }

        const reading = await getCardReading(currentCard.name);

        const readingElement = document.createElement('p');
        readingElement.classList.add('reading');
        readingElement.innerText = reading;
        displayElement!.appendChild(readingElement);
    };


    /*
    flipCard.addEventListener("mouseover", function() {
        if(flipCard.classList.contains("flip")) {
            flipCard.style.transform = "rotateY(180deg)";
        }
    });
    */

    newFlipCard.addEventListener("mouseout", function() {
       newFlipCard.style.transform = "rotateY(0deg)";
    });

    setInterval(throttledStars, 500);
};

//Function to get card reading from the backend
async function getCardReading(card: string): Promise<string> {
    try {
        const response = await fetch('http://localhost:3000/generate-reading', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ card }),
        });

        const data = await response.json();
        return data.reading;
    } catch (error) {
        console.error('Error fetching card reading:', error);
        return 'Error fetching reading. Please try again.';
    }
}

