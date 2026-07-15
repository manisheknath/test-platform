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

  // Optional — if set, blocks starting the test until this moment.
  // Unlike the deadline, this isn't shown as a permanent label —
  // someone who opens the link early just sees a live countdown to
  // when it opens. Leave this line out entirely for no restriction.
  // Same format as deadline: YYYY-MM-DD with leading zeros.
  // startDate: "2026-07-20T09:00:00",

  // Hard deadline — nobody can START the test after this moment.
  // Format: "YYYY-MM-DD" with leading zeros, e.g. 2026-06-25T23:59:59.
  deadline: "2026-12-31T23:59:59",

  // Optional — both default to false if omitted.
  // shuffleQuestions: randomizes question order per taker.
  //   Leave this OFF for tests where a question depends on shared
  //   context from an earlier question (e.g. a reading passage
  //   embedded in Q1 with follow-up questions about it) — shuffling
  //   could separate them and confuse the taker.
  // shuffleOptions: randomizes multiple-choice option order per taker.
  shuffleQuestions: false,
  shuffleOptions: false,

  // Questions: type "mc" (multiple choice, auto-graded) or
  // "short" (free-text — never auto-graded, but if you add an
  // "answer" field with a model answer, it'll show up next to
  // the taker's response on the results screen and in the Word
  // doc, so you have something to grade against at a glance).
  questions: [
    {
      type: "mc",
      prompt: "Which planet is closest to the sun?",
      points: 1,
      options: ["Venus", "Mercury", "Earth", "Mars"],
      correctIndex: 1
    },
    {
      type: "mc",
      prompt: "What is 12 × 8?",
      points: 1,
      options: ["96", "84", "108", "88"],
      correctIndex: 0
    },
    {
      type: "short",
      prompt: "In two or three sentences, explain why the sky appears blue.",
      points: 2
    }
  ]
};
