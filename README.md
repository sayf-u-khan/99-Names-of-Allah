# 99 Names of Allah Quiz

A simple and interactive web app designed to help you learn and memorize the 99 Names of Allah. This quiz presents multiple-choice questions, tracks your progress, and offers hints to assist your learning journey.

## Features

* **Randomized Questions:** Each quiz session presents up to 20 random questions.
* **Two Question Types:**
    * Guess the meaning from the Arabic name (transliteration provided).
    * Guess the Arabic name (and transliteration) from the meaning.
* **Multiple Choice:** Four options per question, with only one correct answer.
* **Hint System:** Provides a hint to remove one incorrect option per question.
* **Score Tracking:** See your progress and score as you play.
* **Responsive Design:** Works well on both desktop and mobile devices.

## Demo

To try the quiz locally:
1.  Ensure all project files (`index.html`, `style.css`, `script.js`) are in the same folder.
2.  Open `index.html` directly in your web browser.

*(Once hosted online, this section can be updated with a direct link to your live demo.)*

## Project Structure

The project is organized into three main files:

* `index.html`: The main HTML file that defines the structure and layout of the quiz.
* `style.css`: Contains all the CSS rules to style the quiz interface, making it visually appealing and responsive.
* `script.js`: The core of the application. This file includes all the JavaScript logic for question generation, scoring, interactivity, hints, and managing the 99 Names data.

## How to Use

Follow these steps to use the application:

1.  **Download or Clone:** Obtain a copy of this repository on your local machine.
2.  **Open the Application:** Navigate to the project folder and open `index.html` in your web browser.
3.  **Start Quizzing:**
    * Read each question carefully.
    * Click on the answer you believe is correct from the four available options.
    * Use the "Hint" button if you require assistance (it will remove one incorrect option).
    * Click "Next Question" to proceed through the quiz.
    * After completing the round (default is 20 questions), your final score will be displayed. You can restart for more practice.

## Customisation

The application can be customized in the following ways:

* **Add or Edit Names:** The list of Allah's names, their transliterations, and meanings is stored in the `anNamesOfAllah` array within the `script.js` file. You can add, remove, or edit these entries as needed.
    ```javascript
    // Inside script.js
    const anNamesOfAllah = [
        { id: 1, arabic: "...", transliteration: "...", meaning: "..." },
        // ... more names
    ];
    ```
* **Number of Questions per Round:** Adjust the `MAX_QUESTIONS_PER_SESSION` constant in `script.js` to change the number of questions in each round.

## License

This project is open source and freely available for educational and personal use.

---

Barak Allahu feekum! May this app be a beneficial tool in your learning journey and bring you closer to understanding the beautiful names of Allah.

Developed using `HTML`, `CSS`, and `JavaScript`.
