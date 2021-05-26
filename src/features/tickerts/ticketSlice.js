import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfSeats: 1,
  nextTo: false
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setNumberOfSeats: (state, action) => {
      state.numberOfSeats = action.payload.value;
    },
   
    setNextTo: (state) => {
      state.nextTo = !state.nextTo;
    }

  },
 
});

export const {setNumberOfSeats, setNextTo} = ticketSlice.actions;

export const selectTicketNumbers = (state) => state.tickets.numberOfSeats;
export const selectNextTo = (state) => state.tickets.nextTo;

export default ticketSlice.reducer;
