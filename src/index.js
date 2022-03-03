import './index.scss';
import Game from './modules/api.js';
import renderScores from './modules/display.js';

const scoreBoard = document.querySelector('.board-scores');
const refreshBtn = document.querySelector('.board-refresh-btn');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const scoreForm = document.querySelector('.score-form');

const sudoku = new Game('Sudoku');

document.addEventListener('DOMContentLoaded', () => {
  const scores = sudoku.getScores();
  renderScores(scoreBoard, scores);
})

refreshBtn.onclick = () => {
  const scores = sudoku.getScores();
  renderScores(scoreBoard, scores);
};

scoreForm.onsubmit = (e) => {
  e.preventDefault();
  if (nameInput.value && scoreInput.value) {
    sudoku.addScore({user: nameInput.value, score: scoreInput.value});
    scoreForm.reset();
  }
}