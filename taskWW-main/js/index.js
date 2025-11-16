let currentQuestionIndex = 0;
let test;
let counter = 0;
let shuffledQuestions = [];

// Экспорты (если нужны другим модулям)
export const goToQuiz = document.getElementById('goToQuiz');
export const inputName = document.getElementById('inputName');
export const register = document.getElementById('register');

import { buttonDisabled } from "../module/buttonDisabled.js";
import { displayNone } from "../module/displayNone.js";

// Ваши вопросы — без изменений
const questions = [
    {
        question: 'Какая планета Солнечной системы самая большая по размеру?',
        options: ['Земля', 'Сатурн', 'Юпитер', 'Нептун'],
        correctAnswer: 2 // Юпитер
    },
    {
        question: 'Что такое «красный гигант»?',
        options: ['Тип чёрной дыры', 'Поздняя стадия эволюции звезды',
            'Большой астероид из железа', 'Галактика с красным смещением'],
        correctAnswer: 1 // Поздняя стадия эволюции звезды
    },
    {
        question: 'Как называется ближайшая к Земле звезда (после Солнца)?',
        options: ['Сириус', 'Альфа Центавра', 'Проксима Центавра', 'Бетельгейзе'],
        correctAnswer: 2 // Проксима Центавра
    }
];

// Функция перемешивания массива (Fisher-Yates)
function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function renderQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    test.innerHTML = '';

    const questionEl = document.createElement('h2');
    questionEl.textContent = question.question;
    test.appendChild(questionEl);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options';

    question.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = optionText;

        button.addEventListener('click', () => {
            const allButtons = optionsContainer.querySelectorAll('button');
            allButtons.forEach(btn => {
                btn.disabled = true;
            });

            if (index === question.correctAnswer) {
                button.style.backgroundColor = 'green';
                button.style.color = 'white';
            } else {
                button.style.backgroundColor = 'red';
                button.style.color = 'white';
                counter++;
            }

            const nextButton = document.getElementById('next-btn');
            if (nextButton) {
                nextButton.style.display = 'inline-block';
            }
        });

        optionsContainer.appendChild(button);
    });

    test.appendChild(optionsContainer);

    const nextButton = document.createElement('button');
    nextButton.id = 'next-btn';
    nextButton.textContent = 'Следующий вопрос';
    nextButton.type = 'button';
    nextButton.style.display = 'none';

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            renderQuestion();
        } else {
            const total = shuffledQuestions.length;
            const correct = total - counter;
            test.innerHTML = `
        <h2>Квиз завершён, ${inputName.value || 'друг'}! 🌟</h2>
        <p>Правильных ответов: <strong>${correct}</strong> из ${total}</p>
        `;
        }
    });

    test.appendChild(nextButton);
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    test = document.getElementById('test');

    inputName.addEventListener('input', buttonDisabled);
    goToQuiz.addEventListener('click', () => {
        displayNone();
        shuffledQuestions = shuffle(questions); // ← каждый раз новый порядок
        currentQuestionIndex = 0;
        counter = 0;
        renderQuestion();
    });
});