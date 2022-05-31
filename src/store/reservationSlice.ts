import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReservationsState {
  value: number[];
}
const initialState: ReservationsState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<number>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state) => {
      state.value.pop();
    },
  },
});
export const { addReservation, removeReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
