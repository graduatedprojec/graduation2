import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 roomId:null,
 roomPatients:[]
};

const getRoomPatients = createSlice({
  name: "getroompatients",
  initialState,
  reducers: {
   fetchRoompatients:(state , action)=>{
     state.roomPatients = action.payload
    //  console.log(state.roomPatients , 'test slice');
   },getRoomId:(state , action)=>{
     state.roomId = action.payload

   }
  },
});

export const { fetchRoompatients , getRoomId } =getRoomPatients.actions;
export default getRoomPatients.reducer;
