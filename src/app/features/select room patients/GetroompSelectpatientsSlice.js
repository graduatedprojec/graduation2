import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
 selctedPatients:[]
};

const getSelectedPatients = createSlice({
  name: "getselcetedpatients",
  initialState,
  reducers: {
   fetchSelectPatients:(state , action)=>{
     state.selctedPatients = action.payload
   }
  },
});

export const { fetchSelectPatients } =getSelectedPatients.actions;
export default getSelectedPatients.reducer;
