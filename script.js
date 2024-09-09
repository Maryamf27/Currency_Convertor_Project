const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
};
// const host = 'api.frankfurter.app';
// const host = "https://api.exchangerate-api.com/v4/latest";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromC = document.querySelector(".from select");
// const toc = document.querySelector(".to select");
// const msg = document.querySelector(".msg");


// for (let select of dropdowns) {
//     for (code in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = code;
//         newOption.value = code;
//         if (select.name === "From" && code === "USD") {
//             newOption.selected = "selected";
//         } else if (select.name === "To" && code === "INR") {
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
//     }



//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     })
// }
// const updateMsg = async () => {

//     let amount = document.querySelector(".amount input");
//     let amtVal = amount.value;
//     if (amtVal === "" || amtVal < 1) {
//         amtVal = 1;
//         amount.value = "1";
//     }
//     // const URL = `https://${host}/latest?from=${fromC.value}&to=${toc.value}`;
//     const APIKey = "cur_live_Jvj0GsdkmTdGrkDqVZ6IV9IJuMTVmcu7Ct0crn7P"
//     const URL = `https://api.exchangerate-api.com/v4/latest/${fromC}`;
//     let r = await fetch(URL);
//     let data = await r.json();
//     let rate = data.rates[toc.value];
//     let famt = amtVal * rate;
//     msg.innerText = `${amtVal} ${fromC.value} = ${famt} ${toc.value}`
// }

// const updateFlag = (element) => {
//     let code = element.value;
//     let countryCode = countryList[code];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// }
// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateMsg();
// })

// window.addEventListener("load", () => {
//     updateMsg();
// })
// const host = "https://api.currencyapi.com/v3/latest";  // API base URL for currencyapi.com

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromC = document.querySelector(".from select");
// const toc = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// const APIKey = "cur_live_Jvj0GsdkmTdGrkDqVZ6IV9IJuMTVmcu7Ct0crn7P";  // Your currencyapi.com API Key
// // Function to update country flags
// const updateFlag = (element) => {
//     let code = element.value;
//     let countryCode = countryList[code];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };
// // Populating dropdowns with country codes
// for (let select of dropdowns) {
//     for (code in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = code;
//         newOption.value = code;
//         if (select.name === "From" && code === "USD") {
//             newOption.selected = "selected";
//         } else if (select.name === "To" && code === "INR") {
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
//     }

//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     });
// }

// // Function to fetch conversion rates and update the message
// const updateMsg = async () => {
//     let amount = document.querySelector(".amount input");
//     let amtVal = amount.value;
//     if (amtVal === "" || amtVal < 1) {
//         amtVal = 1;
//         amount.value = "1";
//     }

//     const fromCurrency = fromC.value;  // Getting selected 'from' currency
//     const toCurrency = toc.value;      // Getting selected 'to' currency

//     // Fetching conversion rate from currencyapi.com
//     const URL = `${host}?apikey=${APIKey}&base_currency=${fromCurrency}&currencies=${toCurrency}`;
    
//     // try {
//         let response = await fetch(URL);
//         // if (!response.ok) throw new Error("Failed to fetch data");
        
//         let data = await response.json();
//         let rate = data.data[toCurrency].value;  // Extracting the exchange rate
//         let convertedAmount = amtVal * rate;
        
//         msg.innerText = `${amtVal} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
// //     } catch (error) {
// //         msg.innerText = "Error fetching the exchange rate. Please try again later.";
// //         console.error(error);
// //     }
// // };



// // Event listener for the button click
// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateMsg();
// });

// // On window load, update the conversion message
// window.addEventListener("load", () => {
//     updateMsg();
// });
// }

const host = "https://api.currencyapi.com/v3/latest";  // API base URL for currencyapi.com

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromC = document.querySelector(".from select");
const toc = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const APIKey = "cur_live_Jvj0GsdkmTdGrkDqVZ6IV9IJuMTVmcu7Ct0crn7P";  // Your currencyapi.com API Key
const updateFlag = (element) => {
    let code = element.value;
    let countryCode = countryList[code];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};
// Populating dropdowns with country codes
for (let select of dropdowns) {
    for (code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if (select.name === "From" && code === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "To" && code === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Function to fetch conversion rates and update the message
const updateMsg = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const fromCurrency = fromC.value;  // Getting selected 'from' currency
    const toCurrency = toc.value;      // Getting selected 'to' currency

    // Fetching conversion rate from currencyapi.com
    const URL = `${host}?apikey=${APIKey}&base_currency=${fromCurrency}&currencies=${toCurrency}`;
    
    // try {
        let response = await fetch(URL);
        console.log("Response status:", response.status);  // Check if the response status is OK
        // if (!response.ok) throw new Error("Failed to fetch data");

        let data = await response.json();
        console.log("API Response Data:", data);  // Log the full API response for debugging

        // if (data.data && data.data[toCurrency]) {
            let rate = data.data[toCurrency].value;  // Extracting the exchange rate
            let convertedAmount = amtVal * rate;
            msg.innerText = `${amtVal} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
//         } else {
//             msg.innerText = `Error: Unable to find exchange rate for ${toCurrency}`;
//             console.error("Missing currency data:", data);
//         }
//     } catch (error) {
//         msg.innerText = "Error fetching the exchange rate. Please try again later.";
//         console.error("Error:", error);
//     }
// };

// Function to update country flags


// Event listener for the button click
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateMsg();
});

// On window load, update the conversion message
window.addEventListener("load", () => {
    updateMsg();
});

