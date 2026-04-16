const form = document.getElementById("search-form");
const input = document.getElementById("word-input");

const wordEl = document.getElementById("word");
const phoneticEl = document.getElementById("phonetic");
const definitionEl = document.getElementById("definition");
const synonymsEl = document.getElementById("synonyms");
const audioEl = document.getElementById("audio");
const errorEl = document.getElementById("error");

// Handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const word = input.value.trim();

  if (!word) return;

  try {
    errorEl.textContent = "";

    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!response.ok) {
      throw new Error("Word not found");
    }

    const data = await response.json();
    const entry = data[0];

    // Extract data
    const phonetic = entry.phonetic || "";
    const definition =
      entry.meanings[0].definitions[0].definition || "";
    const synonyms =
      entry.meanings[0].definitions[0].synonyms || [];

    const audioObj = entry.phonetics.find(p => p.audio);

    // Update DOM
    wordEl.textContent = entry.word;
    phoneticEl.textContent = phonetic;
    definitionEl.textContent = definition;
    synonymsEl.textContent = synonyms.length
      ? "Synonyms: " + synonyms.join(", ")
      : "No synonyms available";

    if (audioObj && audioObj.audio) {
      audioEl.src = audioObj.audio;
    } else {
      audioEl.removeAttribute("src");
    }

  } catch (error) {
    wordEl.textContent = "";
    phoneticEl.textContent = "";
    definitionEl.textContent = "";
    synonymsEl.textContent = "";
    audioEl.removeAttribute("src");

    errorEl.textContent = "Word not found. Please try again.";
  }
});