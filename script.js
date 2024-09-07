
function check(buttonName) {
    const appId = '1a85d0d0dd194f5698afc5f700efa9e9';  // Ваш реальный ключ API
    const url = `https://openexchangerates.org/api/latest.json?app_id=${appId}&symbols=${buttonName}`;

    fetch(url)

        .then(response => {
            if (response.ok) {
                return response.json();

            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {


            // Отображаем данные на странице
            const exchangeRatesList = document.getElementById('exchange-rates');
            exchangeRatesList.innerHTML = '';  // Очистка списка перед добавлением новых элементов

            for (const [currency, rate] of Object.entries(data.rates)) {
                const listItem = document.createElement('li');
                listItem.textContent = `1 USD = ${rate} ${currency}`;
                exchangeRatesList.appendChild(listItem);
            }
        })
};




function btn() {

    let bName = prompt("Enter Currency.  Ex : USD, EUR, PLN");

    if (bName === "") {
        alert("You must enter the name of the currency!")
        return;
    } if (Object.keys(vBase).includes(bName)) {
        var name = vBase.bName
        alert(name)
    } else {
        check(bName);
    }

};


function inCheck() {
    var bName;
    let inputElement = document.getElementById("val");
    let inputValue = inputElement.value;
    bName = inputValue;
    if (bName === "") {
        alert("You must enter the name of the currency!")
        return;
    } else {
        check(bName);
    }
}

