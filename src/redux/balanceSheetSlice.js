import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  balanceSheets: [],
  loading: false,
  error: '',
};

export const fetchBalanceSheets = createAsyncThunk(
  'balanceSheets/fetchBalanceSheets',
  async () => {
    try {
      const companySymbols = ['AAPL', 'GOOGL', 'MSFT', 'BDX', 'NOC'];

      const balanceSheetsData = await Promise.all(
        companySymbols.map(async (symbol) => {
          const response = await fetch(
            `'http://localhost:3000/api/v1/balancesheet`,
          );
          if (!response.ok) {
            throw new Error(`Network response was not ok for ${symbol}`);
          }

          const data = await response.json();

          return {
            id: symbol, // Use the company symbol as the ID
            companyName: symbol,
            balanceSheetData: data.map((balanceSheet) => ({
              id: balanceSheet.symbol,
              liabilities: balanceSheet.liabilities,
              assets: balanceSheet.assets,
              stockholdersequity: balanceSheet.stockholdersequity,
              inventorynet: balanceSheet.inventorynet,
              marketsecuritiescurrent: balanceSheet.marketablesecuritiescurrent,
              marketsecuritiesnoncurrent: balanceSheet.marketablesecuritiesnoncurrent,
            })),
          };
        }),
      );

      return balanceSheetsData;
    } catch (error) {
      throw new Error('An error occurred while fetching the data');
    }
  },
);

export const balanceSheetSlice = createSlice({
  name: 'balanceSheets',
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBalanceSheets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBalanceSheets.fulfilled, (state, action) => {
      state.loading = false;
      state.balanceSheets = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBalanceSheets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred.';
    });
  },
});

export const { fetchDataStart } = balanceSheetSlice.actions;
export default balanceSheetSlice.reducer;
