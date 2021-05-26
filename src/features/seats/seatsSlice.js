import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    chosenSeats: []
  };
  
  export const seatsSlice = createSlice({
    name: 'seats',
    initialState,
    reducers: {
     
        setChosenSeats(state) {

        }
  
    },
   
  });


export const selectTicketNumbers = (state) => state.tickets.numberOfSeats;
export const selectNextTo = (state) => state.tickets.nextTo;

export default seatsSlice.reducer;
