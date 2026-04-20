##  Wordly Dictionary SPA

## Project Overview

Wordly Dictionary SPA is a Single Page Application (SPA) that allows users to search for English words and instantly retrieve their meanings, pronunciations, synonyms, and audio pronunciation. The application fetches real-time data from a public dictionary API and dynamically updates the page without requiring a refresh.

This project demonstrates practical skills in modern frontend development, including API integration, asynchronous JavaScript, DOM manipulation, and SPA design principles.

---

##  Features

-  Word search functionality
-  Displays word definitions and meanings
-  Shows phonetic pronunciation
-  Audio pronunciation playback (when available)
-  Real-time API fetching using fetch/async-await
-  Dynamic updates without page reload
-  Error handling for invalid or empty inputs
-  Clean and responsive user interface

---

##  API Used

This project uses the **Free Dictionary API**:

 https://api.dictionaryapi.dev/

### The API provides:
- Word definitions
- Phonetic pronunciation
- Audio pronunciation links
- Synonyms
- Example sentences

---

## Project Structure

---

## How the Application Works

1. User enters a word in the search input field
2. JavaScript listens for form submission
3. A fetch request is sent to the Free Dictionary API
4. API returns word data in JSON format
5. JavaScript extracts required information:
   - word meaning
   - phonetics
   - synonyms
   - audio pronunciation
6. The DOM is updated dynamically without reloading the page
7. If the word is not found or an error occurs, a message is displayed

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- Async/Await
- REST API integration

---

##  Key Concepts Demonstrated

- Single Page Application (SPA) development
- Asynchronous JavaScript (fetch API)
- DOM manipulation and dynamic rendering
- Event handling (form submission)
- Error handling and input validation
- Working with external APIs

---

## Error Handling

The application handles multiple edge cases:

- Empty input → prompts user to enter a word
- Invalid word → shows "Word not found" message
- Missing synonyms → fallback message displayed
- Missing audio → audio playback disabled safely

---

## Future Improvements

-  Dark mode toggle
-  Save favorite words using localStorage
-  Search history feature
- Multi-language support
- Improved UI animations and transitions

---

##  Author

Developed as part of a JavaScript SPA lab focused on API integration and modern frontend development skills.

---

## License

This project is for educational purposes only.
