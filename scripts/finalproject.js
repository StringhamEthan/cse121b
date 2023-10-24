const url = 'https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2d453e51fdmsh64a040372ff70fdp11a3ebjsn3a67842bd9a5',
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	}
};

let stockPriceList = [];
const StockLister = document.getElementById('stockprices');
const getStockMarket = async () =>{
    try {
        const response = await fetch(url, options);
        const jsonResult = await response.json();
        //const textResult = JSON.parse(jsonResult);
        //console.log(textResult);
        if (jsonResult && jsonResult["Time Series (5min)"]) {
            const timeSeries = jsonResult["Time Series (5min)"];
            displayStockMarket(timeSeries);
        } else {
            console.error("Unable to find 'Time Series (5 min)' in the JSON response.");
        }
    } catch (error) {
        console.error(error);
    }
    
}

function displayStockMarket(results){
    for (const key in results) {
        const dataPoint = results[key];
        let timeTracker = document.createElement('div');
        let stockTracker = document.createElement('div');
        const fullTimeString = `${key}`;
        const timePart = fullTimeString.split(" ")[1];
        const timeOnly = timePart.split(":").slice(0, 2).join(":");
        timeTracker.textContent = `Time: ${timeOnly}`;
        stockTracker.textContent =  `StockPrice: $${dataPoint["1. open"]}`;
        StockLister.appendChild(timeTracker);
        StockLister.appendChild(stockTracker);
    }
}
getStockMarket();