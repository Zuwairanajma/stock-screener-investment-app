//  import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/details.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Detail = () => {
  const selectedStockId = useSelector((state) => state.stocks.selectedStock);
  const stock = useSelector((state) => state.stocks.stocks)
    .filter((elem) => elem.id === selectedStockId)[0];

  return (

    <div className="flex">
      <nav className="detnav">
        <NavLink to="/stock" className="back"><AiOutlineArrowLeft style={{ color: 'seashell' }} /></NavLink>
      </nav>
      {
                selectedStockId ? (
                  <div className="details">
                    <div className="detHeader">
                      <h1>{stock.companyName}</h1>
                    </div>
                    <div className="financial">
                      <p className="detdesc">Company financial information</p>
                    </div>
                    <div className="barContainer">
                      <div className="infobar">
                        <span className="infoname">Price  </span>
                        <span className="infonumeric">{stock.price}</span>
                      </div>
                      <div className="infobar">
                        <span className="infoname">Volume  </span>
                        <span className="infonumeric">{stock.volume}</span>
                      </div>
                      <div className="infobar">
                        <span className="infoname">Beta  </span>
                        <span className="infonumeric">{stock.beta}</span>
                      </div>
                      <div className="infobar">
                        <span className="infoname">Dividend  </span>
                        <span className="infonumeric">{stock.lastAnnualDividend}</span>
                      </div>
                      <div className="infobar">
                        <span className="infoname">Market Cap  </span>
                        <span className="infonumeric">{stock.marketCap}</span>
                      </div>
                    </div>
                  </div>
                ) : <div>Data not loaded </div>
            }
      <nav className="detnav">
        <NavLink to="/balanceSheet/:id" className="back">
          <AiOutlineArrowRight style={{ color: 'seashell' }} />
          View Company&apos;s Balance Sheet
        </NavLink>
      </nav>
    </div>
  );
};

export default Detail;
