
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

// const vBase = {
//     UnitedArabEmirates: "AED",
//     Afghanistan: "AFN",
//     Albania: "ALL",
//     Armenia: "AMD",
//     NetherlandsAntilles: "ANG",
//     Angola: "AOA",
//     Argentina: "ARS",
//     Australia: "AUD",
//     Aruba: "AWG",
//     Azerbaijan: "AZN",
//     BosniaandHerzegovina: "BAM",
//     Barbados: "BBD",
//     Bangladesh: "BDT",
//     Bulgaria: "BGN",
//     Bahrain: "BHD",
//     Burundi: "BIF",
//     Bermuda: "BMD",
//     Brunei: "BND",
//     Bolivia: "BOB",
//     Brazil: "BRL",
//     Bahamas: "BSD",
//     Bitcoin: "BTC",
//     Bhutan: "BTN",
//     Botswana: "BWP",
//     Belarus: "BYN",
//     Belize: "BZD",
//     Canada: "CAD",
//     DemocraticRepublicoftheCongo: "CDF",
//     Switzerland: "CHF",
//     Chile: "CLF",
//     Chile: "CLP",
//     China: "CNH",
//     China: "CNY",
//     Colombia: "COP",
//     CostaRica: "CRC",
//     Cuba: "CUC",
//     Cuba: "CUP",
//     CapeVerde: "CVE",
//     CzechRepublic: "CZK",
//     Djibouti: "DJF",
//     Denmark: "DKK",
//     DominicanRepublic: "DOP",
//     Algeria: "DZD",
//     Egypt: "EGP",
//     Eritrea: "ERN",
//     Ethiopia: "ETB",
//     Eurozone: "EUR",
//     Fiji: "FJD",
//     FalklandIslands: "FKP",
//     UnitedKingdom: "GBP",
//     Georgia: "GEL",
//     Guernsey: "GGP",
//     Ghana: "GHS",
//     Gibraltar: "GIP",
//     Gambia: "GMD",
//     Guinea: "GNF",
//     Guatemala: "GTQ",
//     Guyana: "GYD",
//     HongKong: "HKD",
//     Honduras: "HNL",
//     Croatia: "HRK",
//     Haiti: "HTG",
//     Hungary: "HUF",
//     Indonesia: "IDR",
//     Israel: "ILS",
//     IsleofMan: "IMP",
//     India: "INR",
//     Iraq: "IQD",
//     Iran: "IRR",
//     Iceland: "ISK",
//     Jersey: "JEP",
//     Jamaica: "JMD",
//     Jordan: "JOD",
//     Japan: "JPY",
//     Kenya: "KES",
//     Kyrgyzstan: "KGS",
//     Cambodia: "KHR",
//     Comoros: "KMF",
//     NorthKorea: "KPW",
//     SouthKorea: "KRW",
//     Kuwait: "KWD",
//     CaymanIslands: "KYD",
//     Kazakhstan: "KZT",
//     Laos: "LAK",
//     Lebanon: "LBP",
//     SriLanka: "LKR",
//     Liberia: "LRD",
//     Lesotho: "LSL",
//     Libya: "LYD",
//     Morocco: "MAD",
//     Moldova: "MDL",
//     Madagascar: "MGA",
//     NorthMacedonia: "MKD",
//     Myanmar: "MMK",
//     Mongolia: "MNT",
//     Macau: "MOP",
//     Mauritania: "MRU",
//     Mauritius: "MUR",
//     Maldives: "MVR",
//     Malawi: "MWK",
//     Mexico: "MXN",
//     Malaysia: "MYR",
//     Mozambique: "MZN",
//     Namibia: "NAD",
//     Nigeria: "NGN",
//     Nicaragua: "NIO",
//     Norway: "NOK",
//     Nepal: "NPR",
//     NewZealand: "NZD",
//     Oman: "OMR",
//     Panama: "PAB",
//     Peru: "PEN",
//     PapuaNewGuinea: "PGK",
//     Philippines: "PHP",
//     Pakistan: "PKR",
//     Poland: "PLN",
//     Paraguay: "PYG",
//     Qatar: "QAR",
//     Romania: "RON",
//     Serbia: "RSD",
//     Russia: "RUB",
//     Rwanda: "RWF",
//     SaudiArabia: "SAR",
//     SolomonIslands: "SBD",
//     Seychelles: "SCR",
//     Sudan: "SDG",
//     Sweden: "SEK",
//     Singapore: "SGD",
//     SaintHelena: "SHP",
//     SierraLeone: "SLL",
//     Somalia: "SOS",
//     Suriname: "SRD",
//     SouthSudan: "SSP",
//     SãoToméandPríncipe: "STD",
//     ElSalvador: "SVC",
//     Syria: "SYP",
//     Eswatini: "SZL",
//     Thailand: "THB",
//     Tajikistan: "TJS",
//     Turkmenistan: "TMT",
//     Tunisia: "TND",
//     Tonga: "TOP",
//     Turkey: "TRY",
//     TrinidadandTobago: "TTD",
//     Taiwan: "TWD",
//     Tanzania: "TZS",
//     Ukraine: "UAH",
//     Uganda: "UGX",
//     UnitedStates: "USD",
//     Uruguay: "UYU",
//     Uzbekistan: "UZS",
//     Venezuela: "VES",
//     Vietnam: "VND",
//     Vanuatu: "VUV",
//     Samoa: "WST",
//     CentralAfricanCFAfranc: "XAF",
//     Silver: "XAG",
//     Gold: "XAU",
//     EastCaribbeanDollar: "XCD",
//     SpecialDrawingRights: "XDR",
//     WestAfricanCFAfranc: "XOF",
//     Palladium: "XPD",
//     CFPfranc: "XPF",
//     Platinum: "XPT",
//     Yemen: "YER",
//     SouthAfrica: "ZAR",
//     Zambia: "ZMW",
//     Zimbabwe: "ZWL"
// }
