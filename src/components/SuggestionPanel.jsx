import React from 'react'
import './SuggestionPanel.css'
import StockOption from './StockOption'

const SuggestionPanel = ({ stocks, inputUser }) => {
  return (
    <div className="suggestion-panel">
      <div className="market-name">Stock</div>

      {stocks.map((stock, i) => (
        <StockOption key={i} symbol={stock.symbol} inputUser={inputUser} stockName={stock.name} />
      ))}
    </div>
  )
}

export default SuggestionPanel
