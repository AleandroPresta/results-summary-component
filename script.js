const dataUrl = 'https://raw.githubusercontent.com/AleandroPresta/results-summary-component/master/data.json';

// Getting the icons and putting them in an array
const icon1 = document.getElementById('icon-reaction');
const icon2 = document.getElementById('icon-memory');
const icon3 = document.getElementById('icon-verbal');
const icon4 = document.getElementById('icon-visual');

const icons = [icon1, icon2, icon3, icon4];

// Same for the category
const category1 = document.getElementById('reaction-text');
const category2 = document.getElementById('memory-text');
const category3 = document.getElementById('verbal-text');
const category4 = document.getElementById('visual-text');

const categories = [category1, category2, category3, category4];

// And for the score
const score1 = document.getElementById('reaction-p');
const score2 = document.getElementById('memory-p');
const score3 = document.getElementById('verbal-p');
const score4 = document.getElementById('visual-p');

const scoreElements = [score1, score2, score3, score4];

const totalScoreElement = document.querySelector('.total-score-text');

// Array containing the numeral scores, filled in the fetch
let scores = [];
let meanScore = 0;

fetch(dataUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Work with your JSON data here

        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            icons[i].src = item.icon;
            categories[i].textContent = item.category;
            scoreElements[i].innerHTML = `<b>${item.score}</b>/100`;
            scores.push(item.score);
        }

        meanScore = calculateMean(scores);

        totalScoreElement.textContent = meanScore;
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });

function calculateMean(array) {
    // Calculate the sum of all elements in the array
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // Calculate the mean
    const mean = sum / array.length;

    // Round the mean to the nearest integer
    const roundedMean = Math.round(mean);

    return roundedMean;
}