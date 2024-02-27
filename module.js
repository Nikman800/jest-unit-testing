function sum(a, b) {
    return a + b;
  }

function div (a, b){
    return a / b;
}
  
function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(text.charAt(i)))
        return true;
    }
    return false;
}


class Portfolio {
    constructor() {
        this._stocks = [];
    }

    // Function to add a stock to the portfolio
    addStockToPortfolio(symbol, shares) {
        // Check if the stock is already in the portfolio
        const existingStock = this._stocks.find(stock => stock.symbol === symbol);
    
        if (existingStock) {
            // If the stock is already in the portfolio, increase the number of shares
            existingStock.shares += shares;
        } else {
            // If the stock is not in the portfolio, add it
            this._stocks.push({ symbol, shares });
        }
    }

    // Function to retrieve the portfolio contents
    getPortfolioContents() {
        // Return a copy of the stocks array to prevent direct manipulation of the internal array
        return [...this._stocks];
    }

    // Function to remove a certain amount of a stock from the portfolio
    removeStocksFromPortfolio(symbol, shares) {
        // Implementation to remove the stock from the portfolio
        this._stocks.forEach(stock => {
            if (stock.symbol === symbol) {
                if (stock.shares < shares) {
                    throw new Error('ShareSaleException');
                }
                stock.shares -= shares;
            }
        });
    
        // Remove the stock if the number of shares is less than or equal to 0
        this._stocks = this._stocks.filter(stock => stock.shares > 0);
    }

    // Function to remove a stock from the portfolio
    removeEntireStockFromPortfolio(symbol) {
        // Implementation to remove the stock from the portfolio
        this._stocks = this._stocks.filter(stock => stock.symbol !== symbol);
    }

    // function to check if the portfolio is empty
    isPortfolioEmpty() {
        return this._stocks.length === 0;
    }

    // function to check the number of unique stocks in the portfolio
    uniqueSymbolCount() {
        return new Set(this._stocks.map(stock => stock.symbol)).size;
    }

    // function to check the number of shares of a stock in the portfolio
    numberOfShares(symbol) {
        return this._stocks.reduce((acc, stock) => {
            if (stock.symbol === symbol) {
                acc += stock.shares;
            }
            return acc;
        }, 0);
    }
}





export default { sum, div, containsNumbers, createPortfolio, addStockToPortfolio, Portfolio};