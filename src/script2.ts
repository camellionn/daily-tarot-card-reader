import { deck } from './card.js';
import { stars } from './stars.js';

// Throttle function implementation for stars
function throttle(func: Function, limit: number) {
    let lastFunc: ReturnType<typeof setTimeout>;
    let lastRan: number;

    return function(...args: any[]) {
        const now = Date.now();
        if (lastRan && now < lastRan + limit) {
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
    return Math.floor(Math.random() * deck_length);
}

// Handle drawing 3 unique cards
document.getElementById('drawn-cards')!.onclick = function() {
    const drawCardsContainer = document.getElementById("display") as HTMLDivElement | null;
    if (!drawCardsContainer) return;

    drawCardsContainer.innerHTML = ''; // Clear previous cards

    const drawnCards: number[] = [];
    while (drawnCards.length < 3) {
        const idx = getRandom(deck.length);
        // Check if the index is already drawn
        let isUnique = true;
        for (let i = 0; i < drawnCards.length; i++) {
            if (drawnCards[i] === idx) {
                isUnique = false; // Not unique
                break;
            }
        }
        if (isUnique) {
            drawnCards.push(idx);
        }
    }

    drawnCards.forEach((cardIdx) => {
        const card = deck[cardIdx];

        const cardElement = document.createElement('div');
        cardElement.classList.add('card-display');

        cardElement.innerHTML = `
            <h2>${card.name}</h2>
            <div class="flip-card-container">
                <div class="flip-card">
                    <div class="flip-card-front">
                        <img src="card-front.png" alt="card front">
                    </div>
                    <div class="flip-card-back">
                        <img src="cards/${card.image}.jpg" alt="${card.name}" />
                    </div>
                </div>
            </div>
        `;

        drawCardsContainer.appendChild(cardElement);

        const flipCard = cardElement.querySelector('.flip-card') as HTMLElement;
        const cardTitle = cardElement.querySelector('h2') as HTMLElement;

        // Trigger animation
        setTimeout(() => {
            flipCard.classList.add('animate');
        }, 10);

        // Handle card flip
        flipCard.onclick = function handleCardFlip() {
            flipCard.classList.toggle('flip');
            cardTitle.style.display = 'block';
        };

        // Reset rotation on mouseout
        flipCard.addEventListener('mouseout', function() {
            flipCard.style.transform = "rotateY(0deg);"
        });
    });

    setInterval(throttledStars, 300); // Start stars animation
};
