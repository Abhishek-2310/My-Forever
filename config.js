// config.js — only config values live here
window.CONFIG = {
  herName: "Chakkoo",
  yourName: "Abhiii",

  introText:
    "Hi Chakkaree 💖 I made this little game for you — from a land far far away — because even distance couldn’t stop me from loving you :.)",

  // Level 1
  q1: {
    text: "When did we start talking to each other?",
    choices: [
      { text: "December 22", correct: true },
      { text: "January 18", correct: false },
      { text: "Valentine’s Day", correct: false },
      { text: "I forgot 😈", correct: false }
    ],
    hint: "Hint: that day started everything."
  },

  // Level 2 (checkboxes — no wrong answers)
  q2: {
    text: "Which nicknames do I call you?",
    options: ["chakkoo", "vavee", "mwuthee", "shuttuu", "all of the above", "none of the above"],
    revealLine:
      "Whatever you pick… I love calling you names because it’s my way of saying: you’re mine, you’re special, and I’m obsessed with you. 💞"
  },

  // Level 3
  q3: {
    text: "Who started the grilling first?",
    choices: [
      { text: "Chakkoo 😇", correct: false },
      { text: "Abhiii 😈", correct: true },
      { text: "Mutual destruction 🔥", correct: false },
      { text: "Let’s not talk about this 😭", correct: false }
    ],
    reveal:
      "Okay yes… I grilled you first and it put you off a little 😅 But you stayed — and now you grill me back daily. Honestly? I love this version of us. 🔥💗"
  },

  // Would you rather
  wyr: [
    {
      a: "Endless video calls 📞",
      b: "long hugs without speaking 🤍",
      reveal: "One day soon, We’ll be together forever."
    },
    {
      a: "I stop grilling you forever 😇",
      b: "You keep grilling me forever 😌🔥",
      reveal: "We both know you’re choosing B 😭 (and I like it)"
    },
    {
      a: "A fancy date night ✨",
      b: "A simple day together doing nothing 🫶",
      reveal: "Anything with you becomes my favorite day."
    }
  ],

  // Memory cards
  cards: [
    "December 22 wasn’t just a day. It was the start of you becoming part of my day — and then my favorite part.",
    "January 18 being close to you felt calm, warm, and real. I still replay that day in my head everyday.",
    "The grilling era: I started it like a fool 😅 and you mastered it like a pro. Now it’s our love language."
  ],

  final: {
    phrase: "My Forever",
    hint: "Hint: “name of my insta highlights of us”"
  },

  proposalText:
    "From December 22 to January 18 and every day after — you became my favorite person. Even half way across the world, you feel close. I don’t want distance or time to stop us. I want a lifetime with you."
};
