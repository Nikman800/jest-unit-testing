import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing sum -- success', () => {
    const expected = 6;
    const got = mut.sum(-12, 18);
    expect(got).toBe(expected);
  });

test('Testing containsNumbers -- success', () => {
    const text = 'This is a string with 123 numbers';
    const result = mut.containsNumbers(text);
    expect(result).toBe(true);
});

// test('Testing containsNumbers -- failure', () => {
//     const text = 'This is a string without numbers';
//     const result = mut.containsNumbers(text);
//     expect(result).toBe(false);
// });

// test('Testing containsNumbers -- failure', () => {
//     const text = ' ';
//     const result = mut.containsNumbers(text);
//     expect(result).toBe(false);
// });

// Spaces are converted to zero

test('Testing div -- success', () => {
    const a = 10;
    const b = 2;
    const expected = 5;
    const result = mut.div(a, b);
    expect(result).toBe(expected);
});

test('Testing div -- division by zero', () => {
    const a = 10;
    const b = 0;
    const result = mut.div(a, b);
    expect(result).toBe(Infinity);
});



test('testing createPortfolio -- success', () => {
    const portfolio = new mut.Portfolio();
    expect(portfolio).toEqual({ _stocks: []});
});

test('testing addStockToPortfolio -- success', () => {
    const portfolio = new mut.Portfolio();
    portfolio.addStockToPortfolio('AAPL', 100);
    expect(portfolio).toEqual({ _stocks: [{ symbol: 'AAPL', shares: 100}]});
});

test('testing addStockToPortfolio -- success', () => {
    const portfolio = new mut.Portfolio();
    portfolio.addStockToPortfolio('AAPL', 100);
    portfolio.addStockToPortfolio('AAPL', 100);
    expect(portfolio).toEqual({ _stocks: [{ symbol: 'AAPL', shares: 200}]});
});

// test('testing addStockToPortfolio -- failure', () => {
//     const portfolio = new mut.Portfolio();
//     portfolio.addStockToPortfolio('AAPL', 100);
//     expect(portfolio).toEqual({ _stocks: [{ symbol: 'AAPL', shares: 1}]});
// });

test('testing getPortfolioContents -- success', () => {
    const portfolio = new mut.Portfolio();
    portfolio.addStockToPortfolio('AAPL', 100);
    const result = portfolio.getPortfolioContents();
    expect(result).toEqual([{ symbol: 'AAPL', shares: 100}]);
});

test('testing removeStocksFromPortfolio -- success', () => {
    const portfolio = new mut.Portfolio();
    portfolio.addStockToPortfolio('AAPL', 100);
    portfolio.removeStocksFromPortfolio('AAPL', 40);
    const result = portfolio.getPortfolioContents();
    expect(result).toEqual([{ symbol: 'AAPL', shares: 60}]);
});

test('testing removeStocksFromPortfolio -- success', () => {
    const portfolio = new mut.Portfolio();
    portfolio.addStockToPortfolio('AAPL', 100);
    portfolio.removeStocksFromPortfolio('AAPL', 100);
    const result = portfolio.getPortfolioContents();
    expect(result).toEqual([]);
});


test('testing numberOfShares -- success', () => {
    const portfolio = new mut.Portfolio();
    portfolio.addStockToPortfolio('AAPL', 100);
    const result = portfolio.numberOfShares('AAPL');
    expect(result).toBe(100);
});

test('testing removeEntireStockFromPortfolio -- success', () => {
    const portfolio = new mut.Portfolio();
    portfolio.addStockToPortfolio('AAPL', 100);
    portfolio.removeEntireStockFromPortfolio('AAPL');
    const result = portfolio.getPortfolioContents();
    expect(result).toEqual([]);
});

test('testing isPortfolioEmpty -- success', () => {
    const portfolio = new mut.Portfolio();
    const result = portfolio.isPortfolioEmpty();
    expect(result).toBe(true);
});

test('testing uniqueSymbolCount -- success', () => {
    const portfolio = new mut.Portfolio();
    portfolio.addStockToPortfolio('AAPL', 100);
    portfolio.addStockToPortfolio('AAPL', 100);
    portfolio.addStockToPortfolio('GOOGL', 100);
    const result = portfolio.uniqueSymbolCount();
    expect(result).toBe(2);
});

test('testing removeStocksFromPortfolio -- failure', () => {
    const portfolio = new mut.Portfolio();
    portfolio.addStockToPortfolio('AAPL', 100);
    expect(() => {
        portfolio.removeStocksFromPortfolio('AAPL', 200);
    }).toThrow('ShareSaleException');
});

