// --- 1. DOM Element References ---
const questionTextElement = document.getElementById('question-text');
const transliterationTextElement = document.getElementById('transliteration-text');
const optionsAreaElement = document.getElementById('options-area');
const feedbackTextElement = document.getElementById('feedback-text');
const hintButtonElement = document.getElementById('hint-btn');
const nextQuestionButtonElement = document.getElementById('next-question-btn');
const progressTextElement = document.getElementById('progress-text');
const scoreTextElement = document.getElementById('score-text');


// --- 2. The Data ---
const anNamesOfAllah = [
    { id: 1, arabic: "الرَّحْمَنُ", transliteration: "Ar-Rahman", meaning: "The Beneficent" },
    { id: 2, arabic: "الرَّحِيمُ", transliteration: "Ar-Raheem", meaning: "The Merciful" },
    { id: 3, arabic: "الْمَلِكُ", transliteration: "Al-Malik", meaning: "The Eternal Lord" },
    { id: 4, arabic: "الْقُدُّوسُ", transliteration: "Al-Qaddus", meaning: "The Most Sacred" },
    { id: 5, arabic: "السَّلاَمُ", transliteration: "As-Salam", meaning: "The embodiment of Peace" },
    { id: 6, arabic: "الْمُؤْمِنُ", transliteration: "Al-Mu'min", meaning: "The Infuser of Faith" },
    { id: 7, arabic: "الْمُهَيْمِنُ", transliteration: "Al-Muhaymin", meaning: "The Preserver of Safety" },
    { id: 8, arabic: "الْعَزِيزُ", transliteration: "Al-Aziz", meaning: "All Mighty" },
    { id: 9, arabic: "الْجَبَّارُ", transliteration: "Al-Jabbar", meaning: "The Compeller" },
    { id: 10, arabic: "الْمُتَكَبِّر", transliteration: "Al-Mutakabbir", meaning: "The Supreme" },
    { id: 11, arabic: "الْخَالِقُ", transliteration: "Al-Khaliq", meaning: "The Creator" },
    { id: 12, arabic: "الْبَارِئُ", transliteration: "Al-Bari", meaning: "The Evolver" },
    { id: 13, arabic: "الْمُصَوِّرُ", transliteration: "Al-Musawwir", meaning: "The Fashioner" },
    { id: 14, arabic: "الْغَفَّارُ", transliteration: "Al-Ghaffar", meaning: "The Great Forgiver" },
    { id: 15, arabic: "الْقَهَّارُ", transliteration: "Al-Qahhar", meaning: "The All-Prevailing One" },
    { id: 16, arabic: "الْوَهَّابُ", transliteration: "Al-Wahhab", meaning: "The Supreme Bestower" },
    { id: 17, arabic: "الرَّزَّاقُ", transliteration: "Ar-Razzaq", meaning: "The Provider" },
    { id: 18, arabic: "الْفَتَّاحُ", transliteration: "Al-Fattah", meaning: "The Opener / The Judge" },
    { id: 19, arabic: "اَلْعَلِيْمُ", transliteration: "Al-Aleem", meaning: "The All-Knowing" },
    { id: 20, arabic: "الْقَابِضُ", transliteration: "Al-Qabid", meaning: "The Withholder" },
    { id: 21, arabic: "الْبَاسِطُ", transliteration: "Al-Basit", meaning: "The Extender" },
    { id: 22, arabic: "الْخَافِضُ", transliteration: "Al-Khafid", meaning: "The Reducer" },
    { id: 23, arabic: "الرَّافِعُ", transliteration: "Ar-Rafi", meaning: "The Exalter" },
    { id: 24, arabic: "الْمُعِزُّ", transliteration: "Al-Muʿizz", meaning: "The Honourer" },
    { id: 25, arabic: "ٱلْمُذِلُّ", transliteration: "Al-Muzill", meaning: "The Dishonourer" },
    { id: 26, arabic: "السَّمِيعُ", transliteration: "As-Sami", meaning: "The All-Hearing" },
    { id: 27, arabic: "الْبَصِيرُ", transliteration: "Al-Basir", meaning: "The All-Seeing" },
    { id: 28, arabic: "الْحَكَمُ", transliteration: "Al-Hakam", meaning: "The Impartial Judge" },
    { id: 29, arabic: "الْعَدْلُ", transliteration: "Al-Adl", meaning: "The Utterly Just" },
    { id: 30, arabic: "اللَّطِيفُ", transliteration: "Al-Lateef", meaning: "The Subtle One" },
    { id: 31, arabic: "الْخَبِيرُ", transliteration: "Al-Khabir", meaning: "The All-Aware" },
    { id: 32, arabic: "الْحَلِيمُ", transliteration: "Al-Haleem", meaning: "The Most Forbearing" },
    { id: 33, arabic: "الْعَظِيمُ", transliteration: "Al-Azeem", meaning: "The Magnificent" },
    { id: 34, arabic: "الْغَفُور", transliteration: "Al-Ghafur", meaning: "The Great Forgiver" },
    { id: 35, arabic: "الشَّكُورُ", transliteration: "Ash-Shakur", meaning: "The Most Appreciative" },
    { id: 36, arabic: "الْعَلِيُّ", transliteration: "Al-Ali", meaning: "The Most High" },
    { id: 37, arabic: "الْكَبِيرُ", transliteration: "Al-Kabir", meaning: "The High" },
    { id: 38, arabic: "الْحَفِيظُ", transliteration: "Al-Hafiz", meaning: "The Preserver" },
    { id: 39, arabic: "المُقيِت", transliteration: "Al-Muqit", meaning: "The Nourisher" },
    { id: 40, arabic: "الْحسِيبُ", transliteration: "Al-Hasib", meaning: "The Reckoner" },
    { id: 41, arabic: "الْجَلِيلُ", transliteration: "Al-Jalil", meaning: "The Majestic" },
    { id: 42, arabic: "الْكَرِيمُ", transliteration: "Al-Karim", meaning: "The Most Generous" },
    { id: 43, arabic: "الرَّقِيبُ", transliteration: "Ar-Raqib", meaning: "The Watchful" },
    { id: 44, arabic: "ٱلْمُجِيبُ", transliteration: "al-Mujib", meaning: "The Responsive One" },
    { id: 45, arabic: "الْوَاسِعُ", transliteration: "Al-Wasi", meaning: "The All-Encompassing" },
    { id: 46, arabic: "الْحَكِيمُ", transliteration: "Al-Hakim", meaning: "The All-Wise" },
    { id: 47, arabic: "الْوَدُودُ", transliteration: "Al-Wadud", meaning: "The Most Loving" },
    { id: 48, arabic: "الْمَجِيدُ", transliteration: "Al-Majid", meaning: "The Glorious" },
    { id: 49, arabic: "الْبَاعِثُ", transliteration: "Al-Ba'ith", meaning: "The Infuser of New Life" },
    { id: 50, arabic: "الشَّهِيدُ", transliteration: "Ash-Shahid", meaning: "The All Observing Witnessing" },
    { id: 51, arabic: "الْحَقُ", transliteration: "Al-Haqq", meaning: "The Absolute Truth" },
    { id: 52, arabic: "الْوَكِيلُ", transliteration: "Al-Wakeel", meaning: "The Trustee" },
    { id: 53, arabic: "الْقَوِيُ", transliteration: "Al-Qawi", meaning: "The All-Strong" },
    { id: 54, arabic: "الْمَتِينُ", transliteration: "Al-Matin", meaning: "The Firm" },
    { id: 55, arabic: "الْوَلِيُّ", transliteration: "Al-Waliyy", meaning: "The Protecting Associatey" },
    { id: 56, arabic: "الْحَمِيدُ", transliteration: "Al-Hamid", meaning: "The Praiseworthy" },
    { id: 57, arabic: "الْمُحْصِي", transliteration: "Al-Muhsi", meaning: "The All-Enumerating" },
    { id: 58, arabic: "الْمُبْدِئُ", transliteration: "Al-Mubdi", meaning: "The Originator" },
    { id: 59, arabic: "ٱلْمُعِيدُ", transliteration: "Al-Mu'id", meaning: "The Restorer" },
    { id: 60, arabic: "الْمُحْيِي", transliteration: "Al-Muhyi", meaning: "The Giver of Life" },
    { id: 61, arabic: "اَلْمُمِيتُ", transliteration: "Al-Mumit", meaning: "The Inflicter of Death" },
    { id: 62, arabic: "الْحَيُّ", transliteration: "Al-Hayy", meaning: "The Ever-Living" },
    { id: 63, arabic: "الْقَيُّومُ", transliteration: "Al-Qayyum", meaning: "The Sustainer" },
    { id: 64, arabic: "الْوَاجِدُ", transliteration: "Al-Wajid", meaning: "The Perceiver" },
    { id: 65, arabic: "الْمَاجِدُ", transliteration: "Al-Majid", meaning: "The Illustrious" },
    { id: 66, arabic: "الْواحِدُ", transliteration: "Al-Wahid", meaning: "The One" },
    { id: 67, arabic: "اَلاَحَدُ", transliteration: "Al-Ahad", meaning: "The Unique" },
    { id: 68, arabic: "الصَّمَدُ", transliteration: "As-Samad", meaning: "The Eternal" },
    { id: 69, arabic: "الْقَادِرُ", transliteration: "Al-Qadir", meaning: "The Omnipotent One" },
    { id: 70, arabic: "الْمُقْتَدِرُ", transliteration: "Al-Muqtadir", meaning: "The Powerful" },
    { id: 71, arabic: "الْمُقَدِّمُ", transliteration: "Al-Muqaddim", meaning: "The Expediter" },
    { id: 72, arabic: "الْمُؤَخِّرُ", transliteration: "Al-Mu'akhkhir", meaning: "The Delayer" },
    { id: 73, arabic: "الأوَّلُ", transliteration: "Al-Awwal", meaning: "The First" },
    { id: 74, arabic: "الآخِرُ", transliteration: "Al-Akhir", meaning: "The Last" },
    { id: 75, arabic: "الظَّاهِرُ", transliteration: "Az-Zahir", meaning: "The Manifest" },
    { id: 76, arabic: "الْبَاطِنُ", transliteration: "Al-Batin", meaning: "The Hidden One" },
    { id: 77, arabic: "الْوَالِي", transliteration: "Al-Wali", meaning: "The Governor" },
    { id: 78, arabic: "الْمُتَعَالِي", transliteration: "Al-Mutaʿali", meaning: "The Self Exalted" },
    { id: 79, arabic: "الْبَرُّ", transliteration: "Al-Barr", meaning: "The Source of All Goodness" },
    { id: 80, arabic: "التَّوَابُ", transliteration: "At-Tawwab", meaning: "The Ever-Pardoning" },
    { id: 81, arabic: "الْمُنْتَقِمُ", transliteration: "Al-Muntaqim", meaning: "The Avenger" },
    { id: 82, arabic: "العَفُوُ", transliteration: "Al-'Afuww", meaning: "The Pardoner" },
    { id: 83, arabic: "الرَّؤُوفُ", transliteration: "Ar-Ra'uf", meaning: "The Most Kind" },
    { id: 84, arabic: "مَالِكُ ٱلْمُلْكُ", transliteration: "Malik ul-Mulk", meaning: "Master of the Kingdom" },
    { id: 85, arabic: "ذُوالْجَلاَلِ وَالإكْرَامِ", transliteration: "Dhul-Jalali wal-Ikram", meaning: "Possessor of Glory and Honour" },
    { id: 86, arabic: "الْمُقْسِطُ", transliteration: "Al-Muqsit", meaning: "The Just One" },
    { id: 87, arabic: "الْجَامِعُ", transliteration: "Al-Jami", meaning: "The Gatherer" },
    { id: 88, arabic: "ٱلْغَنيُّ", transliteration: "Al-Ghani", meaning: "The Self-Sufficient" },
    { id: 89, arabic: "ٱلْمُغْنِيُّ", transliteration: "Al-Mughni", meaning: "The Enricher" },
    { id: 90, arabic: "اَلْمَانِعُ", transliteration: "Al-Mani", meaning: "The Withholder" },
    { id: 91, arabic: "الضَّارَ", transliteration: "Adh-Dharr", meaning: "The Distresser" },
    { id: 92, arabic: "النَّافِعُ", transliteration: "An-Nafi", meaning: "The Propitious" },
    { id: 93, arabic: "النُّورُ", transliteration: "An-Nur", meaning: "The Light" },
    { id: 94, arabic: "الْهَادِي", transliteration: "Al-Hadi", meaning: "The Guide" },
    { id: 95, arabic: "الْبَدِيعُ", transliteration: "Al-Badi", meaning: "The Incomparable Originator" },
    { id: 96, arabic: "اَلْبَاقِي", transliteration: "Al-Baqi", meaning: "The Everlasting" },
    { id: 97, arabic: "الْوَارِثُ", transliteration: "Al-Warith", meaning: "The Inheritor" },
    { id: 98, arabic: "الرَّشِيدُ", transliteration: "Ar-Rashid", meaning: "The Guide" },
    { id: 99, arabic: "الصَّبُورُ", transliteration: "As-Sabur", meaning: "The Forbearing" }
];

// --- 3. Quiz State Variables ---
let currentQuestionDetails = {};
let hintUsed = false;
let availableNames = [...anNamesOfAllah]; // A copy of names to pick from, allows for non-repeating questions until list exhausted.
let questionCount = 0;
const maxQuestions = 20;
let score = 0;

// --- 4. Start Game Function ---
function startGame() {
    if (anNamesOfAllah.length < 4) {
        questionTextElement.textContent = "Not enough names data to start the quiz. Please add more names!";
        transliterationTextElement.textContent = "";
        optionsAreaElement.innerHTML = "";
        feedbackTextElement.textContent = "";
        hintButtonElement.style.display = 'none';
        nextQuestionButtonElement.style.display = 'none';
        if (progressTextElement) progressTextElement.textContent = "";
        if (scoreTextElement) scoreTextElement.textContent = "";
        return;
    }
    score = 0;
    questionCount = 0;
    availableNames = [...anNamesOfAllah];
    updateProgressAndScore();
    generateQuestion();
}

// --- 5. Generate Question Function ---
function generateQuestion() {
    if (questionCount >= maxQuestions || availableNames.length === 0) {
        showFinalScore();
        return;
    }

    hintUsed = false;
    feedbackTextElement.textContent = '';
    transliterationTextElement.textContent = '';
    optionsAreaElement.innerHTML = '';
    hintButtonElement.disabled = false;

    // Pick a random name from the available list
    const randomIndex = Math.floor(Math.random() * availableNames.length);
    const nameObject = availableNames[randomIndex];
    availableNames.splice(randomIndex, 1); // Remove to avoid repetition

    currentQuestionDetails = {
        arabic: nameObject.arabic,
        transliteration: nameObject.transliteration,
        meaning: nameObject.meaning,
        correctAnswer: '',
        questionType: '',
    };

    // Randomly decide question type: Arabic to English or English to Arabic
    const questionType = Math.random() < 0.5 ? 'arToEn' : 'enToAr';
    currentQuestionDetails.questionType = questionType;

    let questionPrompt = '';
    let correctAnswerValue = '';
    let options = [];

    if (questionType === 'arToEn') {
        questionPrompt = `What is the meaning of: ${nameObject.arabic}?`;
        transliterationTextElement.textContent = `(${nameObject.transliteration})`;
        correctAnswerValue = nameObject.meaning;
        currentQuestionDetails.correctAnswer = nameObject.meaning;
        options = generateOptions(nameObject.meaning, 'meaning');
    } else {
        questionPrompt = `Which name of Allah means: "${nameObject.meaning}"?`;
        correctAnswerValue = nameObject.arabic;
        currentQuestionDetails.correctAnswer = nameObject.arabic;
        options = generateOptions(nameObject.arabic, 'arabic');
    }

    questionTextElement.textContent = questionPrompt;
    displayOptions(options, nameObject);

    questionCount++;
    updateProgressAndScore();
}

// --- 6. Update Progress and Score Display ---
function updateProgressAndScore() {
    if (progressTextElement) {
        progressTextElement.textContent = `Question ${questionCount} of ${maxQuestions}`;
    }
    if (scoreTextElement) {
        scoreTextElement.textContent = `Score: ${score}`;
    }
}

// --- 7. Show Final Score ---
function showFinalScore() {
    questionTextElement.textContent = `Quiz Complete! Your final score: ${score} out of ${maxQuestions}`;
    transliterationTextElement.textContent = "";
    optionsAreaElement.innerHTML = "";
    feedbackTextElement.textContent = "";
    hintButtonElement.style.display = 'none';
    if (progressTextElement) progressTextElement.textContent = `Quiz finished.`;
    nextQuestionButtonElement.textContent = "Restart Quiz";
    nextQuestionButtonElement.style.display = '';
    nextQuestionButtonElement.onclick = () => location.reload();
}

// --- 8. Generate Options Function ---
function generateOptions(correctAnswer, type) {
    let choices = [correctAnswer];
    let distractors = [];
    const tempNames = [...anNamesOfAllah]; // Use a copy to pick distractors

    while (distractors.length < 3 && tempNames.length > 0) {
        const randomIndex = Math.floor(Math.random() * tempNames.length);
        const randomNameObject = tempNames.splice(randomIndex, 1)[0]; // Get and remove
        let potentialDistractor;

        if (type === 'meaning') {
            potentialDistractor = randomNameObject.meaning;
        } else { // type === 'arabic'
            potentialDistractor = randomNameObject.arabic;
        }

        if (potentialDistractor !== correctAnswer && !choices.includes(potentialDistractor)) {
            distractors.push(potentialDistractor);
            choices.push(potentialDistractor);
        }
    }
    
    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]]; // Swap!
    }
    return choices;
}

// --- 9. Display Options Function ---
function displayOptions(options, nameObject) {
    optionsAreaElement.innerHTML = ''; // Clear old options
    options.forEach(optionValue => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        
        if (currentQuestionDetails.questionType === 'enToAr') {
            const optionNameObject = anNamesOfAllah.find(n => n.arabic === optionValue);
            if (optionNameObject) {
                button.textContent = `${optionNameObject.arabic} (${optionNameObject.transliteration})`;
                button.dataset.value = optionNameObject.arabic; // Store original Arabic value for checking
            } else {
                 button.textContent = optionValue; // Fallback
                 button.dataset.value = optionValue;
            }
        } else {
            button.textContent = optionValue; // This is a meaning
            button.dataset.value = optionValue;
        }
        
        button.addEventListener('click', handleOptionClick);
        optionsAreaElement.appendChild(button);
    });
}

// --- 10. Handle Option Click Function ---
function handleOptionClick(event) {
    const selectedValue = event.target.dataset.value;
    checkAnswer(selectedValue);
}

// --- 11. Check Answer Function ---
function checkAnswer(selectedValue) {
    let isCorrect = false;
    if (currentQuestionDetails.questionType === 'arToEn') {
        isCorrect = selectedValue === currentQuestionDetails.meaning;
    } else {
        isCorrect = selectedValue === currentQuestionDetails.arabic;
    }

    showFeedback(isCorrect);

    // Update score if correct
    if (isCorrect) {
        score++;
        updateProgressAndScore();
    }

    // Disable all option buttons after an answer
    const optionButtons = optionsAreaElement.getElementsByClassName('option-btn');
    for (let btn of optionButtons) {
        btn.disabled = true;
        if(btn.dataset.value === currentQuestionDetails.correctAnswer) {
            btn.style.backgroundColor = '#a7d7c5';
        } else if (btn.dataset.value === selectedValue && !isCorrect) {
            btn.style.backgroundColor = '#f67280';
        }
    }
    hintButtonElement.disabled = true;
}

// --- 12. Show Feedback Function ---
function showFeedback(isCorrect) {
    if (isCorrect) {
        feedbackTextElement.textContent = "Correct! Masha'Allah! 🎉";
        feedbackTextElement.style.color = 'green';
    } else {
        let correctAnswerDisplay = currentQuestionDetails.correctAnswer;
        if (currentQuestionDetails.questionType === 'enToAr') {
            const correctNameObj = anNamesOfAllah.find(n => n.arabic === currentQuestionDetails.correctAnswer);
            if (correctNameObj) {
                correctAnswerDisplay = `${correctNameObj.arabic} (${correctNameObj.transliteration})`;
            }
        }
        feedbackTextElement.textContent = `Not quite. The correct answer was: ${correctAnswerDisplay}. Keep trying, you've got this! 💪`;
        feedbackTextElement.style.color = 'red';
    }
}

// --- 13. Next Question Button Event Listener ---
nextQuestionButtonElement.addEventListener('click', function() {
    if (questionCount < maxQuestions && availableNames.length > 0) {
        generateQuestion();
    } else {
        showFinalScore();
    }
});

// --- 14. Hint Button Event Listener ---
hintButtonElement.addEventListener('click', showHint);

// --- 15. Show Hint Function ---
function showHint() {
    if (hintUsed || !currentQuestionDetails.correctAnswer) return;

    // Find all option buttons
    const optionButtons = optionsAreaElement.getElementsByClassName('option-btn');
    let wrongOptions = [];

    // Collect all buttons that are NOT the correct answer and are not disabled
    for (let btn of optionButtons) {
        if (btn.dataset.value !== currentQuestionDetails.correctAnswer && !btn.disabled) {
            wrongOptions.push(btn);
        }
    }

    // Randomly pick one wrong option to disable
    if (wrongOptions.length > 0) {
        const randomIndex = Math.floor(Math.random() * wrongOptions.length);
        const btnToDisable = wrongOptions[randomIndex];
        btnToDisable.disabled = true;
        btnToDisable.style.opacity = "0.5";
        btnToDisable.style.backgroundColor = "#eee";
    }

    feedbackTextElement.textContent = "Hint used: One incorrect option has been removed.";
    feedbackTextElement.style.color = 'blue';
    hintUsed = true;
    hintButtonElement.disabled = true;
}

// --- 16. Initial Call to Start the Game ---
window.onload = startGame;