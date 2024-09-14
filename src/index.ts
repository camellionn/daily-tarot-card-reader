import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

interface TarotCardRequest {
    card: string;
}

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Tarot card readings
const readings: { [key: string]: string } = {
    // Major Arcana
    "The Fool": "The Fool represents new beginnings, adventures, and a fresh start. Embrace spontaneity and trust the journey.",
    "The Magician": "The Magician symbolizes resourcefulness, skill, and the ability to manifest your desires. You have the tools needed to succeed.",
    "The High Priestess": "The High Priestess represents intuition, wisdom, and mystery. Trust your inner voice and seek deeper understanding.",
    "The Empress": "The Empress symbolizes abundance, fertility, and nurturing. Embrace creativity and the beauty of nature.",
    "The Emperor": "The Emperor represents authority, structure, and stability. Take control of your life and establish order.",
    "The Hierophant": "The Hierophant symbolizes tradition, spirituality, and guidance. Seek knowledge and adhere to established beliefs.",
    "The Lovers": "The Lovers represents love, harmony, and choices. Follow your heart and make decisions based on your values.",
    "The Chariot": "The Chariot symbolizes determination, willpower, and triumph over obstacles. Stay focused and drive forward.",
    "Strength": "Strength represents courage, resilience, and inner strength. Face challenges with confidence and patience.",
    "The Hermit": "The Hermit symbolizes introspection, solitude, and inner guidance. Seek wisdom within and take time for self-reflection.",
    "Wheel of Fortune": "Wheel of Fortune represents cycles, change, and destiny. Embrace the ups and downs and adapt to the flow of life.",
    "Justice": "Justice symbolizes fairness, balance, and accountability. Seek truth and make decisions with integrity.",
    "The Hanged Man": "The Hanged Man represents pause, surrender, and seeing things from a new perspective. Embrace change and reflect before moving forward.",
    "Death": "Death symbolizes transformation, endings, and new beginnings. Let go of the old to make way for the new.",
    "Temperance": "Temperance represents balance, harmony, and moderation. Find equilibrium in all aspects of life and practice patience.",
    "The Devil": "The Devil symbolizes temptation, materialism, and bondage. Confront your fears and break free from unhealthy patterns.",
    "The Tower": "The Tower represents sudden upheaval, chaos, and revelation. Embrace change and rebuild on a stronger foundation.",
    "The Star": "The Star symbolizes hope, inspiration, and healing. Trust in the future and have faith in your dreams.",
    "The Moon": "The Moon represents illusion, intuition, and the unconscious. Navigate through confusion and trust your instincts.",
    "The Sun": "The Sun symbolizes joy, success, and vitality. Celebrate your achievements and embrace positivity.",
    "Judgment": "Judgment represents self-reflection, accountability, and rebirth. Evaluate your actions and embrace transformation.",
    "The World": "The World symbolizes completion, accomplishment, and fulfillment. Celebrate your achievements and enjoy a sense of wholeness.",
    
    // Minor Arcana
    // Wands
    "Ace of Wands": "The Ace of Wands represents inspiration, new opportunities, and creativity. Embrace new ventures with enthusiasm.",
    "Two of Wands": "The Two of Wands symbolizes planning, progress, and future possibilities. Make decisions and prepare for the journey ahead.",
    "Three of Wands": "The Three of Wands represents expansion, foresight, and exploration. Look beyond the horizon and take action.",
    "Four of Wands": "The Four of Wands symbolizes celebration, harmony, and stability. Enjoy the fruits of your labor and celebrate successes.",
    "Five of Wands": "The Five of Wands represents conflict, competition, and challenges. Embrace the struggle and find constructive ways to resolve disputes.",
    "Six of Wands": "The Six of Wands symbolizes victory, recognition, and achievement. Enjoy success and acknowledge your accomplishments.",
    "Seven of Wands": "The Seven of Wands represents defense, perseverance, and standing your ground. Stand firm in your beliefs and protect your position.",
    "Eight of Wands": "The Eight of Wands symbolizes swift movement, progress, and communication. Embrace rapid changes and seize opportunities.",
    "Nine of Wands": "The Nine of Wands represents resilience, endurance, and determination. Stay strong and persevere through challenges.",
    "Ten of Wands": "The Ten of Wands symbolizes burden, responsibility, and hard work. Manage your tasks effectively and seek support if needed.",
    "Page of Wands": "The Page of Wands represents enthusiasm, exploration, and creativity. Embrace new ideas and take inspired action.",
    "Knight of Wands": "The Knight of Wands symbolizes passion, adventure, and confidence. Pursue your goals with energy and determination.",
    "Queen of Wands": "The Queen of Wands represents charisma, creativity, and independence. Embrace your inner strength and lead with confidence.",
    "King of Wands": "The King of Wands symbolizes leadership, vision, and ambition. Take charge and pursue your goals with determination.",
    
    // Cups
    "Ace of Cups": "The Ace of Cups represents new emotional beginnings, love, and compassion. Embrace your feelings and open your heart.",
    "Two of Cups": "The Two of Cups symbolizes partnership, harmony, and mutual respect. Strengthen your connections and foster meaningful relationships.",
    "Three of Cups": "The Three of Cups represents celebration, friendship, and community. Enjoy social gatherings and share joyful moments.",
    "Four of Cups": "The Four of Cups symbolizes contemplation, apathy, and reevaluation. Reflect on your emotional state and seek fulfillment.",
    "Five of Cups": "The Five of Cups represents loss, grief, and regret. Acknowledge your feelings and focus on the positive aspects of life.",
    "Six of Cups": "The Six of Cups symbolizes nostalgia, childhood, and memories. Reconnect with your past and find joy in simple pleasures.",
    "Seven of Cups": "The Seven of Cups represents choices, illusions, and daydreams. Assess your options and make decisions based on clarity.",
    "Eight of Cups": "The Eight of Cups symbolizes departure, change, and seeking fulfillment. Leave behind what no longer serves you and pursue new paths.",
    "Nine of Cups": "The Nine of Cups represents satisfaction, contentment, and emotional well-being. Enjoy the rewards of your efforts and find happiness.",
    "Ten of Cups": "The Ten of Cups symbolizes emotional fulfillment, harmony, and family. Celebrate love and find joy in your relationships.",
    "Page of Cups": "The Page of Cups represents creativity, intuition, and emotional exploration. Embrace new feelings and artistic inspirations.",
    "Knight of Cups": "The Knight of Cups symbolizes romance, idealism, and pursuit of dreams. Follow your heart and seek emotional connections.",
    "Queen of Cups": "The Queen of Cups represents empathy, intuition, and emotional maturity. Nurture your feelings and support others with compassion.",
    "King of Cups": "The King of Cups symbolizes emotional balance, wisdom, and diplomacy. Lead with empathy and maintain harmony in your relationships.",
    
    // Swords
    "Ace of Swords": "The Ace of Swords represents clarity, truth, and mental breakthroughs. Embrace new ideas and seek intellectual understanding.",
    "Two of Swords": "The Two of Swords symbolizes indecision, conflict, and choices. Seek balance and weigh your options carefully.",
    "Three of Swords": "The Three of Swords represents heartbreak, grief, and emotional pain. Acknowledge your feelings and seek healing.",
    "Four of Swords": "The Four of Swords symbolizes rest, recovery, and contemplation. Take time to recharge and reflect on your thoughts.",
    "Five of Swords": "The Five of Swords represents conflict, tension, and defeat. Address disputes and focus on resolution rather than victory.",
    "Six of Swords": "The Six of Swords symbolizes transition, travel, and moving forward. Embrace change and leave behind difficulties.",
    "Seven of Swords": "The Seven of Swords represents strategy, deception, and caution. Be mindful of your actions and avoid dishonesty.",
    "Eight of Swords": "The Eight of Swords symbolizes restriction, fear, and feeling trapped. Overcome limitations and seek freedom through awareness.",
    "Nine of Swords": "The Nine of Swords represents anxiety, worry, and sleepless nights. Address your fears and find ways to alleviate stress.",
    "Ten of Swords": "The Ten of Swords symbolizes betrayal, loss, and endings. Accept the conclusion of a situation and seek new beginnings.",
    "Page of Swords": "The Page of Swords represents curiosity, vigilance, and intellect. Stay alert and pursue knowledge with enthusiasm.",
    "Knight of Swords": "The Knight of Swords symbolizes action, ambition, and assertiveness. Pursue your goals with determination and decisiveness.",
    "Queen of Swords": "The Queen of Swords represents clarity, independence, and analytical thinking. Approach situations with logic and fairness.",
    "King of Swords": "The King of Swords symbolizes authority, intellect, and strategic thinking. Lead with wisdom and make decisions based on reason.",
    
    // Pentacles
    "Ace of Pentacles": "The Ace of Pentacles represents new financial opportunities, prosperity, and growth. Embrace material and spiritual abundance.",
    "Two of Pentacles": "The Two of Pentacles symbolizes balance, adaptability, and juggling responsibilities. Manage your resources and priorities effectively.",
    "Three of Pentacles": "The Three of Pentacles represents teamwork, skill, and craftsmanship. Collaborate and build on your abilities to achieve success.",
    "Four of Pentacles": "The Four of Pentacles symbolizes security, control, and materialism. Assess your relationship with possessions and find balance.",
    "Five of Pentacles": "The Five of Pentacles represents hardship, loss, and financial struggles. Seek support and focus on recovery and resilience.",
    "Six of Pentacles": "The Six of Pentacles symbolizes generosity, balance, and sharing. Give and receive with an open heart and maintain fairness.",
    "Seven of Pentacles": "The Seven of Pentacles represents patience, assessment, and long-term planning. Reflect on your progress and invest in future growth.",
    "Eight of Pentacles": "The Eight of Pentacles symbolizes diligence, mastery, and skill development. Work hard and focus on honing your craft.",
    "Nine of Pentacles": "The Nine of Pentacles represents self-sufficiency, luxury, and achievement. Enjoy the rewards of your efforts and appreciate your success.",
    "Ten of Pentacles": "The Ten of Pentacles symbolizes legacy, wealth, and family. Celebrate your achievements and build a foundation for future generations.",
    "Page of Pentacles": "The Page of Pentacles represents ambition, opportunity, and learning. Embrace new experiences and pursue your goals with dedication.",
    "Knight of Pentacles": "The Knight of Pentacles symbolizes responsibility, reliability, and hard work. Stay committed and methodical in your pursuits.",
    "Queen of Pentacles": "The Queen of Pentacles represents nurturing, practicality, and abundance. Create a supportive environment and manage resources effectively.",
    "King of Pentacles": "The King of Pentacles symbolizes success, stability, and financial acumen. Lead with confidence and achieve your goals through practical efforts.",
};

// Route to handle tarot readings
app.post('/generate-reading', (req, res) => {
    const { card }: TarotCardRequest = req.body;

    const reading = readings[card] || "No specific reading available for this card.";
    res.json({ reading });
});

// Start the server 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
