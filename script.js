const buttonSearch = document.getElementById("input_Button");
const SearchInput = document.getElementById("input_Search");
const containerContent = document.querySelector(".content");

buttonSearch.addEventListener('click', () => {

    let valueKeyboard = SearchInput.value
    console.log(valueKeyboard)

    let url = `https://restcountries.com/v3.1/name/${valueKeyboard}?fullText=true`

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            containerContent.innerHTML = `
        <img class="info" src=${data[0].flags.png}>
        <p class="info center">${data[0].name.official}</p>
        <p class="info">Nome: ${data[0].name.common}</p>
        <p class="info">Lingua: ${data[0].languages[Object.keys(data[0].languages)]}</p>
        <p class="info">Continente: ${data[0].continents[0]}</p>
        <p class="info">Capital: ${data[0].capital[0]}</p>
        <p class="info">População: ${data[0].population}</p>
        <p class="info">Moeda: ${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
        <p class="info">symbol: ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</p>
        <div class="brazao">
            <img src=${data[0].coatOfArms.png}>
        </div>
        
        `
        })
            .catch(() => {
                if (valueKeyboard.lenght == 0) {
                    containerContent.innerHTML = `<h3>O país não pode ser encontrado</h3>`;
                }else {
                    containerContent.innerHTML = `<h3>Enter a valid country name</h3>`;
                }
            })
})

console.log(fetchAPI())