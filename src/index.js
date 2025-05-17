fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.countries-cards');

    data.forEach(element => {
      const languagesList = element.languages
        .map(lang => `<li>${lang.name}</li>`)
        .join('');

      const countryHTML = `
        <div class="country-card">
          <h2>${element.name}</h2>
          <div class="country-content">
            <div class="country-text">
              <p><span class="label">Capital:</span> ${element.capital}</p>
              <p><span class="label">Population:</span> ${element.population.toLocaleString()}</p>
              <p class="label">Languages:</p>
              <ul>${languagesList}</ul>
            </div>
            <img src="${element.flags.png}" alt="Flag of ${element.name}">
          </div>
        </div>
      `;

      container.innerHTML += countryHTML;
    });
  })
  .catch(error => {
  console.error(error); 
  });
