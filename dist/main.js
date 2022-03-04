/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/modules/api.js
/* harmony default export */ const api = (class {
  constructor(name = '') {
    this.name = name;
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BFkd229nJXTY7OePKM7l/scores/';
  }

  getScores = async () => {
    const { result } = await fetch(this.url)
      .then((response) => response.json());

    return result;
  }

  addScore = async (score) => {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(score),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
  }
});

;// CONCATENATED MODULE: ./src/modules/display.js
/* harmony default export */ const display = ((list, data) => {
  data.then((games) => {
    list.innerHTML = '';
    games = games.sort((a, b) => b.score - a.score);
    games.forEach((game) => {
      const li = document.createElement('li');
      li.className = 'score-item';
      li.textContent = `${game.user}: ${game.score}`;
      list.appendChild(li);
    });
  });
});
;// CONCATENATED MODULE: ./src/modules/darkMode.js
/* harmony default export */ const darkMode = ((document, btn) => {
  const light = 'light';
  const dark = 'dark';
  if (document.classList.contains(light)) {
    document.classList.remove(light);
    document.classList.add(dark);
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
    </svg>`;
  } else if (document.classList.contains(dark)) {
    document.classList.remove(dark);
    document.classList.add(light);
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>`;
  }
});

;// CONCATENATED MODULE: ./src/index.js





const scoreBoard = document.querySelector('.board-scores');
const refreshBtn = document.querySelector('.board-refresh-btn');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const scoreForm = document.querySelector('.score-form');
const themeBtn = document.querySelector('.dark-toggle');

const sudoku = new api('Sudoku');

document.addEventListener('DOMContentLoaded', () => {
  const scores = sudoku.getScores();
  display(scoreBoard, scores);
});

refreshBtn.onclick = () => {
  const scores = sudoku.getScores();
  display(scoreBoard, scores);
};

scoreForm.onsubmit = (e) => {
  e.preventDefault();
  if (nameInput.value && scoreInput.value) {
    sudoku.addScore({ user: nameInput.value, score: scoreInput.value });
    scoreForm.reset();
  }
};

themeBtn.addEventListener('click', (e) => {
  darkMode(document.documentElement, e.target);
});

/******/ })()
;