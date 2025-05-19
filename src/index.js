const input = document.querySelector('.userInput');
const container = document.querySelector('.countries-cards');

let allCountries = [];

fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    allCountries = data;
    renderCountries(allCountries);
  })
  .catch(console.error);

function renderCountries(countries) {
  const countriesHTML = countries.map(element => {
    const languagesList = element.languages
      .map(lang => `<li>${lang.name}</li>`)
      .join('');

    return `
      <div class="country-card">
        <h2>${element.name}</h2>
        <div class="country-content">
          <div class="country-text">
            <p><span class="label">Capital:</span> ${element.capital}</p>
            <p><span class="label">Population:</span> ${element.population}</p>
            <p class="label">Languages:</p>
            <ul>${languagesList}</ul>
          </div>
          <img src="${element.flags.png}" alt="Flag of ${element.flags.alt}">
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = countriesHTML;
}

input.addEventListener('input', () => {
  const searchTerm = input.value.trim().toLowerCase();
  const filteredCountries = allCountries.filter(country =>
    country.name.toLowerCase().includes(searchTerm)
  );
  renderCountries(filteredCountries);
});
