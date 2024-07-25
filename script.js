function card(name, image, description){
    this.name = name; 
    this.image = image;
    this.description = description;
}

var deck = [ 
    new card("The Fool", "0_TheFool"),
    new card("The Magician", "01_TheMagician"),  
    new card("The High Priestess", "02_TheHighPriestess"),  
    new card("The Empress", "03_TheEmpress"),  
    new card("The Emperor", "04_TheEmperor"),  
    new card("The Hierophant", "05_TheHierophant"),  
    new card("The Lovers", "06_TheLovers"),  
    new card("The Chariot", "07_TheChariot"),  
    new card("Strength", "08_Strength"),  
    new card("The Hermit", "09_TheHermit"),  
    new card("The Wheel of Fortune", "10_TheWheelOfFortune"),  
    new card("Justice", "11_Justice"),  
    new card("The Hanged Man", "12_TheHangedMan"),  
    new card("Death", "13_Death"),  
    new card("Temperance", "14_Temperance"),  
    new card("The Devil", "15_TheDevil"),  
    new card("The Tower", "16_TheTower"),  
    new card("The Star", "17_TheStar"),  
    new card("The Moon", "18_TheMoon"),  
    new card("The Sun", "19_TheSun"),  
    new card("Judgement", "20_Judgement"),  
    new card("The World", "22_TheWorld"),  
    new card("Two Of Cups", "23_TwoOfCups"),  
    new card("Three Of Cups", "24_ThreeOfCups"),  
    new card("Four Of Cups", "25_FourOfCups"),  
    new card("Five Of Cups", "26_FiveOfCups"),  
    new card("Six Of Cups", "27_SixOfCups"),  
    new card("Seven Of Cups", "28_SevenOfCups"),  
    new card("Eight Of Cups", "29_EightOfCups"),  
    new card("Nine Of Cups", "30_NineOfCups"),  
    new card("Ten Of Cups", "31_TenOfCups"),  
    new card("Ace Of Cups", "32_AceOfCups"),  
    new card("King Of Cups", "33_KingOfCups"),  
    new card("Knight Of Cups", "34_KnightOfCups"),  
    new card("Page Of Cups", "35_PageOfCups"),  
    new card("Queen of Cups", "36_QueenOfCups"),  
    new card("Two of Pentacles", "37_TwoOfPentacles"),  
    new card("Three of Pentacles", "38_ThreeOfPentacles"),  
    new card("Four of Pentacles", "39_FourOfPentacles"),  
    new card("Five of Pentacles", "40_FiveOfPentacles"),  
    new card("Six of Pentacles", "41_SixOfPentacles"),  
    new card("Seven of Pentacles", "42_SevenOfPentacles"),  
    new card("Eight of Pentacles", "43_EightOfPentacles"),  
    new card("Nine of Pentacles", "44_NineOfPentacles"),  
    new card("Ten of Pentacles", "45_TenOfPentacles"),  
    new card("Ace of Pentacles", "46_AceOfPentacles"),  
    new card("King of Pentacles", "47_KingOfPentacles"),  
    new card("Knight of Pentacles", "48_KnightOfPentacles"),  
    new card("Page of Pentacles", "49_PageOfPentacles"),  
    new card("Queen of Pentacles", "50_QueenOfPentacles"),  
    new card("Two of Swords", "51_TwoOfSwords"),  
    new card("Three of Swords", "52_ThreeOfSwords"),  
    new card("Four of Swords", "53_FourOfSwords"),  
    new card("Five of Swords", "54_FiveOfSwords"),  
    new card("Six of Swords", "55_SixOfSwords"),  
    new card("Seven of Swords", "56_SevenOfSwords"),  
    new card("Eight of Swords", "57_EightOfSwords"),  
    new card("Nine of Swords", "58_NineOfSwords"),  
    new card("Ten of Swords", "59_TenOfSwords"),  
    new card("Ace of Swords", "60_AceOfSwords"),  
    new card("King of Swords", "61_KingOfSwords"),  
    new card("Knight of Swords", "62_KnightOfSwords"),  
    new card("Page of Swords", "63_PageOfSwords"),  
    new card("Queen of Swords", "64_QueenOfSwords"),  
    new card("Two of Wands", "65_TwoOfWands"),  
    new card("Three of Wands", "66_ThreeOfWands"),  
    new card("Four of Wands", "67_FourOfWands"),  
    new card("Five of Wands", "68_FiveOfWands"),  
    new card("Six of Wands", "69_SixOfWands"),  
    new card("Seven of Wands", "70_SevenOfWands"),  
    new card("Eight of Wands", "71_EightOfWands"),  
    new card("Nine of Wands", "72_NineOfWands"),  
    new card("Ten of Wands", "73_TenOfWands"),  
    new card("Ace of Wands", "74_AceOfWands"),  
    new card("King of Wands", "75_KingOfWands"),  
    new card("Knight of Wands", "76_KnightOfWands"),  
    new card("Page of Wands", "77_PageOfWands"),  
    new card("Queen of Wands", "78_QueenOfWands"),  
];

function getRandom() {
    let randomNum = Math.floor(Math.random()*78);
    return randomNum; 
}

document.getElementById("draw").onclick = function() {
    var idx = getRandom();
    var currentCard = deck[idx];

document.getElementById("display").innerHTML = 
'<h2>' + currentCard.name + '</h2>' +
'<img src="cards/' + currentCard.image + '.jpg" alt=" ' + currentCard.name + '"/>';
}
