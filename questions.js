/* ============================================================
   QUESTIONS FILE — this is the ONLY file you edit per test.
   Keep quiz-engine.html untouched; just swap this file out
   (or its contents) alongside it for each new test.

   Variable name must stay TEST_CONFIG — the engine looks for
   this exact name.
   ============================================================ */
const TEST_CONFIG = {

  // A short code to tell tests apart at a glance, e.g. "TEST 014"
  testCode: "TEST 001",

  title: "Sample Knowledge Check",
  intro: "Answer every question before time runs out. Your answers submit automatically when the clock hits zero.",

  // How long the taker gets once they hit "Start test", in minutes.
  timeLimitMinutes: 15,

  // Hard deadline — nobody can START the test after this moment.
  // Format: "YYYY-MM-DDTHH:MM:SS" in the taker's local time.
  deadline: "2026-12-31T23:59:59",

  // Questions: type "mc" (multiple choice, auto-graded) or
  // "short" (free-text, ungraded — shown to you for manual review).
  questions: [
    
    // =========================
    // READING (8 points)
    // =========================

    {
      type: "mc",
      prompt:
`Lisez le texte.

Marie habite à Lyon avec sa famille. Elle travaille dans une boulangerie du lundi au vendredi. Le samedi, elle fait les courses et le dimanche elle aime se promener dans le parc avec ses enfants.

Où travaille Marie ?`,
      points: 2,
      options: [
        "Dans une école",
        "Dans une boulangerie",
        "Dans un hôpital",
        "Dans une banque"
      ],
      correctIndex: 1
    },

    {
      type: "mc",
      prompt: "Quel jour Marie fait-elle les courses ?",
      points: 2,
      options: [
        "Lundi",
        "Vendredi",
        "Samedi",
        "Dimanche"
      ],
      correctIndex: 2
    },

    {
      type: "mc",
      prompt: "Avec qui Marie va-t-elle au parc ?",
      points: 2,
      options: [
        "Ses collègues",
        "Ses amis",
        "Ses enfants",
        "Son chien"
      ],
      correctIndex: 2
    },

    {
      type: "short",
      prompt: "En une phrase, expliquez ce que Marie fait le dimanche.",
      points: 2,
      answer: "Elle se promène dans le parc avec ses enfants."
    },

    // =========================
    // GRAMMAR (8 points)
    // =========================

    {
      type: "mc",
      prompt: "Je ____ français tous les jours.",
      points: 2,
      options: [
        "parle",
        "parles",
        "parlons",
        "parlent"
      ],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Nous ____ au cinéma ce soir.",
      points: 2,
      options: [
        "va",
        "allez",
        "allons",
        "vas"
      ],
      correctIndex: 2
    },

    {
      type: "short",
      prompt: "Complétez : Hier, j'_____ (manger) une pizza.",
      points: 2,
      answer: "ai mangé"
    },

    {
      type: "short",
      prompt: "Écrivez cette phrase au futur : Je travaille demain.",
      points: 2,
      answer: "Je travaillerai demain."
    },

    // =========================
    // VOCABULARY (6 points)
    // =========================

    {
      type: "mc",
      prompt: "Quel est le contraire de 'grand' ?",
      points: 2,
      options: [
        "Petit",
        "Long",
        "Large",
        "Jeune"
      ],
      correctIndex: 0
    },

    {
      type: "mc",
      prompt: "Choisissez le bon mot : Je bois un verre d'____.",
      points: 2,
      options: [
        "pain",
        "eau",
        "chaise",
        "voiture"
      ],
      correctIndex: 1
    },

    {
      type: "short",
      prompt: "Donnez un synonyme de 'content'.",
      points: 2,
      answer: "heureux"
    },

    // =========================
    // SPELLING (4 points)
    // =========================

    {
      type: "mc",
      prompt: "Choisissez l'orthographe correcte.",
      points: 2,
      options: [
        "restorant",
        "restaurant",
        "restaurent",
        "restorent"
      ],
      correctIndex: 1
    },

    {
      type: "short",
      prompt: "Écrivez correctement : 'elefant'.",
      points: 2,
      answer: "éléphant"
    },

    // =========================
    // SENTENCE WRITING (4 points)
    // =========================

    {
      type: "short",
      prompt: "Écrivez une phrase avec le mot 'vacances'.",
      points: 2,
      answer: "Réponse libre (phrase correcte utilisant 'vacances')."
    },

    {
      type: "short",
      prompt: "Présentez-vous en deux phrases (nom, profession, ville).",
      points: 2,
      answer: "Réponse libre."
    }

  ]
};
