export default (country, state, deaths, confirmed) => {
    const countryHTML = country ? `<p>Country: <b>${country}</b></p>` : '';
    const stateHTML = state ? `<p>State/Province: <b>${state}</b></p>` : '';

    const mortalityRate = ((deaths / confirmed) * 100).toFixed(2);

    const mortalityRateHTML =
        deaths && confirmed
            ? `<p>Mortality Rate: <b>${mortalityRate}%</b></p>`
            : '';
    const confirmedHTML = confirmed ? `<p>Cases: <b>${confirmed}</b></p>` : '';

    const deathsHTML = deaths ? `<p>Deaths: <b>${deaths}</b></p>` : '';

    const HTML = `${countryHTML}
                  ${stateHTML}
                  ${confirmedHTML}
                  ${deathsHTML}
                  ${mortalityRateHTML}`;
    return HTML;
};
