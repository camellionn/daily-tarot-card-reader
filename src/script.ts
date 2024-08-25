import {deck} from './card.js'
import { stars } from './stars.js';

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

    const flipCard = document.querySelector('.flip-card') as HTMLElement;
    const cardTitle = document.querySelector('h2') as HTMLElement;

    flipCard.addEventListener("click", function() {
        flipCard.classList.toggle("flip");
        cardTitle.style.display = "block";
    });

    /*
    flipCard.addEventListener("mouseover", function() {
        if(flipCard.classList.contains("flip")) {
            flipCard.style.transform = "rotateY(180deg)";
        }
    });
    */

    flipCard.addEventListener("mouseout", function() {
        flipCard.style.transform = "rotateY(0deg)";
    });

    setInterval(function () {
        stars();
    }, 50);
}

