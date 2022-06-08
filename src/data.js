export default [
  {
    id: 1,
    question: "what are the Sector Where Prolog Programming Language Is Used?",
    answers: [
      "	Automated reasoning",
      "Machine learning",
      "Robot planning",
      "all of the above",
    ],
    correct: "all of the above",
  },
  {
    id: 2,
    question: "dog('Buddy', likes('Buddy', toast)). - This statement is",
    answers: [
      "Rule & Horn Clause",
      "Fact & Horn Clause",
      "Horn Clause with Head and body",
      "Not a Horn clause",
    ],
    correct: "Fact & Horn Clause",
  },

  {
    id: 3,
    question: "	Which one of the following is not a variable?",
    answers: ["X_yz", "	g_23A", "	'_Xyz'", "B & C both"],
    correct: "B & C both",
  },
  {
    id: 4,
    question:
      "Which one from the options would return true/yes for given prolog program? boy(john,123) .girl(jane,234). student(john,123).",
    answers: [
      "	?- girl(jane,x).",
      "?- boy('john',123).",
      "All of above.",
      "None of above",
    ],
    correct: "?- boy('john',123).",
  },
  {
    id: 5,
    question: "A prolog query can be made up of only two subgoals.",
    answers: ["True", "False"],
    correct: "False",
  },
];
