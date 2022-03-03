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
;// CONCATENATED MODULE: ./src/index.js




const scoreBoard = document.querySelector('.board-scores');
const refreshBtn = document.querySelector('.board-refresh-btn');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const scoreForm = document.querySelector('.score-form');

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
/******/ })()
;