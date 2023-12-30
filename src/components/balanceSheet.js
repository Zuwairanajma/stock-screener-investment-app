// src/components/BalanceSheet.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBalanceSheets, fetchDataStart } from '../redux/balanceSheetSlice';
import './styles/stock.css';

const BalanceSheet = () => {
  const dispatch = useDispatch();
  const { balanceSheets, loading, error } = useSelector((state) => state.balanceSheets);

  useEffect(() => {
    dispatch(fetchDataStart());
    dispatch(fetchBalanceSheets());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className='Error-message'>
        <h2>Balance Sheets</h2>
        <p>Apologies, there was an error fetching the data.</p>
        <p>We&apos;re working to resolve this issue, </p>
        <p>and the company&apos;s data will be available soon.</p>
        <p>Please check back later to access the updated information.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Balance Sheets</h2>
      {balanceSheets.map((company) => (
        <div key={company.id}>
          <h3>{company.companyName}</h3>
          {company.balanceSheetData.map((balanceSheet) => (
            <div key={`${company.id}-${balanceSheet.id}`}>
              <p>
                Liabilities:
                {balanceSheet.liabilities}
              </p>
              <p>
                Assets:
                {balanceSheet.assets}
              </p>
              <p>
                Stockholders&apos; Equity:
                {balanceSheet.stockholdersequity}
              </p>
              <p>
                Inventory Net:
                {balanceSheet.inventorynet}
              </p>
              <p>
                Marketable Securities Current:
                {balanceSheet.marketsecuritiescurrent}
              </p>
              <p>
                Marketable Securities Non-Current:
                {balanceSheet.marketsecuritiesnoncurrent}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BalanceSheet;
