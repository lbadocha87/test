import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from '../features/tickerts/ticketSlice';
import seatsReducer from '../features/seats/seatsSlice';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    seats: seatsReducer
  },
});
