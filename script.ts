class Card {
    name: string;
    image: string;
    description: string;


constructor (name: string, image: string, description: string = "Something cool"){
    this.name = name; 
    this.image = image;
    this.description = description;
}
}

var deck = [ 
    new Card("The Fool", "0_TheFool"),
    new Card("The Magician", "01_TheMagician"),  
    new Card("The High Priestess", "02_TheHighPriestess"),  
    new Card("The Empress", "03_TheEmpress"),  
    new Card("The Emperor", "04_TheEmperor"),  
    new Card("The Hierophant", "05_TheHierophant"),  
    new Card("The Lovers", "06_TheLovers"),  
    new Card("The Chariot", "07_TheChariot"),  
    new Card("Strength", "08_Strength"),  
    new Card("The Hermit", "09_TheHermit"),  
    new Card("The Wheel of Fortune", "10_TheWheelOfFortune"),  
    new Card("Justice", "11_Justice"),  
    new Card("The Hanged Man", "12_TheHangedMan"),  
    new Card("Death", "13_Death"),  
    new Card("Temperance", "14_Temperance"),  
    new Card("The Devil", "15_TheDevil"),  
    new Card("The Tower", "16_TheTower"),  
    new Card("The Star", "17_TheStar"),  
    new Card("The Moon", "18_TheMoon"),  
    new Card("The Sun", "19_TheSun"),  
    new Card("Judgement", "20_Judgement"),  
    new Card("The World", "22_TheWorld"),  
    new Card("Two Of Cups", "23_TwoOfCups"),  
    new Card("Three Of Cups", "24_ThreeOfCups"),  
    new Card("Four Of Cups", "25_FourOfCups"),  
    new Card("Five Of Cups", "26_FiveOfCups"),  
    new Card("Six Of Cups", "27_SixOfCups"),  
    new Card("Seven Of Cups", "28_SevenOfCups"),  
    new Card("Eight Of Cups", "29_EightOfCups"),  
    new Card("Nine Of Cups", "30_NineOfCups"),  
    new Card("Ten Of Cups", "31_TenOfCups"),  
    new Card("Ace Of Cups", "32_AceOfCups"),  
    new Card("King Of Cups", "33_KingOfCups"),  
    new Card("Knight Of Cups", "34_KnightOfCups"),  
    new Card("Page Of Cups", "35_PageOfCups"),  
    new Card("Queen of Cups", "36_QueenOfCups"),  
    new Card("Two of Pentacles", "37_TwoOfPentacles"),  
    new Card("Three of Pentacles", "38_ThreeOfPentacles"),  
    new Card("Four of Pentacles", "39_FourOfPentacles"),  
    new Card("Five of Pentacles", "40_FiveOfPentacles"),  
    new Card("Six of Pentacles", "41_SixOfPentacles"),  
    new Card("Seven of Pentacles", "42_SevenOfPentacles"),  
    new Card("Eight of Pentacles", "43_EightOfPentacles"),  
    new Card("Nine of Pentacles", "44_NineOfPentacles"),  
    new Card("Ten of Pentacles", "45_TenOfPentacles"),  
    new Card("Ace of Pentacles", "46_AceOfPentacles"),  
    new Card("King of Pentacles", "47_KingOfPentacles"),  
    new Card("Knight of Pentacles", "48_KnightOfPentacles"),  
    new Card("Page of Pentacles", "49_PageOfPentacles"),  
    new Card("Queen of Pentacles", "50_QueenOfPentacles"),  
    new Card("Two of Swords", "51_TwoOfSwords"),  
    new Card("Three of Swords", "52_ThreeOfSwords"),  
    new Card("Four of Swords", "53_FourOfSwords"),  
    new Card("Five of Swords", "54_FiveOfSwords"),  
    new Card("Six of Swords", "55_SixOfSwords"),  
    new Card("Seven of Swords", "56_SevenOfSwords"),  
    new Card("Eight of Swords", "57_EightOfSwords"),  
    new Card("Nine of Swords", "58_NineOfSwords"),  
    new Card("Ten of Swords", "59_TenOfSwords"),  
    new Card("Ace of Swords", "60_AceOfSwords"),  
    new Card("King of Swords", "61_KingOfSwords"),  
    new Card("Knight of Swords", "62_KnightOfSwords"),  
    new Card("Page of Swords", "63_PageOfSwords"),  
    new Card("Queen of Swords", "64_QueenOfSwords"),  
    new Card("Two of Wands", "65_TwoOfWands"),  
    new Card("Three of Wands", "66_ThreeOfWands"),  
    new Card("Four of Wands", "67_FourOfWands"),  
    new Card("Five of Wands", "68_FiveOfWands"),  
    new Card("Six of Wands", "69_SixOfWands"),  
    new Card("Seven of Wands", "70_SevenOfWands"),  
    new Card("Eight of Wands", "71_EightOfWands"),  
    new Card("Nine of Wands", "72_NineOfWands"),  
    new Card("Ten of Wands", "73_TenOfWands"),  
    new Card("Ace of Wands", "74_AceOfWands"),  
    new Card("King of Wands", "75_KingOfWands"),  
    new Card("Knight of Wands", "76_KnightOfWands"),  
    new Card("Page of Wands", "77_PageOfWands"),  
    new Card("Queen of Wands", "78_QueenOfWands"),  
];

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
}
