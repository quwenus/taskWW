export const goToQuiz = document.getElementById('goToQuiz');
export const inputName = document.getElementById('inputName');
export const register = document.getElementById('register');

import { buttonDisabled } from "../module/buttonDisabled.js";
import { displayNone } from "../module/displayNone.js";

inputName.addEventListener('input', buttonDisabled)
goToQuiz.addEventListener('click', displayNone)


const questions = [
    {
        question: 'Какая планета Солнечной системы самая большая по размеру?',
        options: ['Земля', 'Сатурн', 'Юпитер', 'Нептун'],
        correctAnswer: 2 //Юпитер
    },
    {
        question: 'Что такое «красный гигант»?',
        options: ['Тип чёрной дыры', 'Поздняя стадия эволюции звезды', 
            'Большой астероид из железа', 'Галактика с красным смещением'],
        correctAnswer: 1 //Поздняя стадия эволюции звезды
    }, 
    {
        question: 'Как называется ближайшая к Земле звезда (после Солнца)?',
        options: ['Сириус', 'Альфа Центавра', 'Проксима Центавра', 'Бетельгейзе'],
        correctAnswer: 2 //Проксима Центавра
    }
]

