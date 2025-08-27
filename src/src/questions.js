// Recovery Path (if Q2 = Yes)
export const questionsRecovery = [
  {
    key: "age",
    text: "Select your age group",
    options: [
      "18 or below",
      "18–24",
      "24–30",
      "30–35",
      "35–40",
      "40–45",
      "45–50",
      "50+"
    ],
    scores: [0, -1, -2, -3, -4, -5, -6, -7],
  },
  {
    key: "dandruff",
    text: "Scalp condition",
    options: ["Heavy dandruff", "Mild dandruff", "No dandruff"],
    scores: [-2, 0, 0],
  },
  {
    key: "skin",
    text: "Skin health",
    options: ["Pimples", "Dryness", "Oiliness", "No skin issues"],
    scores: [-3, -3, -3, 0],
  },
  {
    key: "sweating",
    text: "Sweating pattern",
    options: ["Excessive", "Normal", "Minimal"],
    scores: [-1, 0, 0],
  },
  {
    key: "family",
    text: "Family history of hair loss",
    options: ["None", "Father", "Grandfather", "Uncle", "Sibling"],
    scores: [0, -3, -1, -1, -3],
  },
  {
    key: "stress",
    text: "Stress level",
    options: ["High", "Moderate", "Low"],
    scores: [-2, -1, 0],
  },
  {
    key: "stage",
    text: "Stage of hair loss",
    options: ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"],
    scores: [-3, -7, -9, -11, -20],
  },
];

// Retention Path (if Q2 = No)
export const questionsRetention = [
  {
    key: "age",
    text: "Select your age group",
    options: [
      "18 or below",
      "18–24",
      "24–30",
      "30–35",
      "35–40",
      "40–45",
      "45–50",
      "50+"
    ],
    scores: [0, -1, -2, -3, -4, -5, -6, -7],
  },
  {
    key: "dandruff",
    text: "Scalp condition",
    options: ["Heavy dandruff", "Mild dandruff", "No dandruff"],
    scores: [-2, 0, 0],
  },
  {
    key: "skin",
    text: "Skin health",
    options: ["Pimples", "Dryness", "Oiliness", "No skin issues"],
    scores: [-3, -3, -3, 0],
  },
  {
    key: "sweating",
    text: "Sweating pattern",
    options: ["Excessive", "Normal", "Minimal"],
    scores: [-1, 0, 0],
  },
  {
    key: "family",
    text: "Family history of hair loss",
    options: ["None", "Father", "Grandfather", "Uncle", "Sibling"],
    scores: [0, -3, -1, -1, -3],
  },
  {
    key: "stress",
    text: "Stress level",
    options: ["High", "Moderate", "Low"],
    scores: [-2, -1, 0],
  },
];
