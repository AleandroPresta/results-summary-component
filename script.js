const dataUrl = 'https://raw.githubusercontent.com/AleandroPresta/results-summary-component/master/data.json';

// Getting the icons and putting them in an array
const icon1 = document.getElementById('icon-reaction');
const icon2 = document.getElementById('icon-memory');
const icon3 = document.getElementById('icon-verbal');
const icon4 = document.getElementById('icon-visual');

const icons = [icon1, icon2, icon3, icon4];

// Same for the text
const text1 = document.getElementById('reaction-text');

const texts = [text1];

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
            texts[0].textContent = item.
          }
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });