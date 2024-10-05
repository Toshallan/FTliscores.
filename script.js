
function updateScores() {
    const scores = document.querySelectorAll('.score');
    scores.forEach(score => {
        const randomScore = Math.floor(Math.random() * 5);
        score.textContent = randomScore + ' - ' + randomScore;
    });
}
