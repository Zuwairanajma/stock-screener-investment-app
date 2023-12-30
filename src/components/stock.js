import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/stock.css';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchStocks, select, search } from '../redux/stockSlice';

const Stock = () => {
  const stocks = useSelector((state) => state.stocks.stocks);
  const loading = useSelector((state) => state.stocks.loading);
  const searchTerm = useSelector((state) => state.stocks.searchTerm);
  const dispatch = useDispatch();
  useEffect(() => {
    if (stocks.length === 0) dispatch(fetchStocks());
  }, [dispatch, stocks.length]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="h1">Stocks</h1>
        <div className="searchbar">
          <label htmlFor="search">
            Search
            <input
              id="search"
              className="search"
              onChange={(event) => dispatch(search(event.target.value))}
              type="text"
            />
          </label>
        </div>
      </nav>
      <div className="header">
        <p>$$$</p>
      </div>
      <ul className="companyList">
        {
          stocks.map((stock) => (
            stock.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ? (
              <NavLink to={`/details/${stock.id}`} onClick={() => dispatch(select(stock.id))} key={stock.id} className="companyListItem">
                <div className="namePrice">
                  <div className="bottom">
                    <span className="arrow">
                      {BsArrowRightCircle > 0
                        ? <BsArrowRightCircle className="arrow" /> : <BsArrowRightCircle className="arrow" />}
                    </span>
                    <h3 className="company-name">{stock.companyName}</h3>
                    <span className="price">
                      Price: $
                      {stock.price}
                    </span>
                  </div>
                </div>
              </NavLink>
            ) : ''
          ))
        }
      </ul>
    </div>
  );
};

export default Stock;
