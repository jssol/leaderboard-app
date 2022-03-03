export default class {
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
}
