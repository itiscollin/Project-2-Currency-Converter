import { apiKey } from "./config.js";

// const url = 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=EUR&amount=5000';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
	}
};

async function convertCurrency(inputCurrency, outputCurrency, amount){
try {
	const response = await fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${inputCurrency}&want=${outputCurrency}&amount=${amount}`, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

convertCurrency("USD", "MYR", "1000")