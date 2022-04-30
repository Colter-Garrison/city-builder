// import functions and grab DOM elements
const building = document.getElementById('building-dropdown');
const nature = document.getElementById('nature-dropdown');
const known = document.getElementById('known-dropdown');
const buildingEl = document.getElementById('building');
const climateEl = document.getElementById('climate');
const knownEl = document.getElementById('known');
const reportEl = document.getElementById('report');
const sloganInput = document.getElementById('city-slogan-input');
const sloganButton = document.getElementById('city-slogan-button');

// let state
let architectureCount = 0;
let climateCount = 0;
let knownCount = 0;

let homeSlogan = [];

// set event listeners 
building.addEventListener('change', () => {
    console.log('changing select', building.value);
    architectureCount++;
    buildingEl.style.backgroundImage = `url('./assets/${building.value}.jpeg')`;
    displayStats();
});

nature.addEventListener('change', () => {
    console.log('changing select', nature.value);
    climateCount++;
    climateEl.style.backgroundImage = `url('./assets/${nature.value}.jpeg')`;
    displayStats();
});

known.addEventListener('change', () => {
    console.log('changing select', known.value);
    knownCount++;
    knownEl.style.backgroundImage = `url('./assets/${known.value}.jpeg')`;
    displayStats();
});

sloganButton.addEventListener('click', () => {
    console.log('clicking add', sloganInput.value);
    homeSlogan.push(sloganInput.value);
    displayHomeSlogan();
});

function displayStats() {
    reportEl.textContent = `You have changed the architecture ${architectureCount} times, the climate ${climateCount} times and what your town is known for ${knownCount} times. And don't forget your homes classic catchphrases: `;
}

function displayHomeSlogan() {
    const homeSloganList = document.getElementById('slogan-report');
    homeSloganList.textContent = ' ';

    for (let phrase of homeSlogan) {
        const thePhrase = document.createElement('div');
        thePhrase.textContent = phrase;
        homeSloganList.append(thePhrase);
    }
}