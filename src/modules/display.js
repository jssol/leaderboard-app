export default (list, data) => {
  data.then((games) => {
    list.innerHTML = '';
    games = games.sort((a, b) => b.score - a.score);
    games.forEach(game => {
      const li = document.createElement('li');
      li.className = 'score-item';
      li.textContent = `${game.user}: ${game.score}`;
      list.appendChild(li);
    });
  });
}