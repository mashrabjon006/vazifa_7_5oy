const showImageButton = document.getElementById('showImageButton');
const randomImage = document.getElementById('randomImage');

showImageButton.addEventListener('click', function () {
    const imageUrl = 'https://picsum.photos/200/300';
    randomImage.src = imageUrl;
});//htmldagi imgni srcini linka tenglawtrb qoydim
// 333333333333333333333333333333
const generateFactButton = document.getElementById('generateFactButton');
const factDisplay = document.getElementById('factDisplay');

generateFactButton.addEventListener('click', function () {
    fetch('http://numbersapi.com/random/trivia', {
        method: 'GET'
    })
        .then(response => {
            if (!response.status == '200') {
                return error
            }
            return response.text()
        })
        .then(fact => {
            factDisplay.innerHTML = fact
        })
        .catch(error => {
            console.log('Xato:', error)
            factDisplay.innerHTML = 'Faktni olishda xato yuz berdi.'
        });
});
// 44444444444444444444444444444444444444444444444444
const convertButton = document.getElementById('convertButton');
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const resultDisplay = document.getElementById('resultDisplay');

convertButton.addEventListener('click', function () {
    const amount = amountInput.value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    fetch(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`, {
        method: 'GET'
    })
        .then(response => {
            if (!response.status == '200') {
                return error
            }
            return response.json();
        })
        .then(data => {
            const result = data.result;
            resultDisplay.innerHTML = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Xato:', error);
            resultDisplay.innerHTML = 'Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.';
        });
});

// 55555555555555555555555555555555555555555555555

const factButton = document.getElementById('factButton');
const birthDateInput = document.getElementById('birthDate');
const factdisp = document.getElementById('factdisp');

factButton.addEventListener('click', function () {
    const birthDate = new Date(birthDateInput.value);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();

    fetch(`http://numbersapi.com/${month}/${day}/date`, {
        method: 'GET'
    })
    .then(response => {
        if (!response.status == '200') { 
            return error
        }
        return response.text()
    })
    .then(fact => {
        factdisp.innerHTML = fact
    })
    .catch(error => {
        console.log('Xato:', error)
        factdisp.innerHTML = 'Xatolik yuz berdi.'
    });
});