import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pdfSrc: '',
  fileName: '',
};

const croSlice = createSlice({
  name: 'cro',
  initialState,
  reducers: {
    setCroDocument(state, action) {
      const { croNumber, id, baseUrl } = action.payload;
      state.fileName = `CRO-${croNumber}`;
      state.pdfSrc = `${baseUrl}api/booking/document/cro/download/${id}/HASTIN`;
    },
    resetCroDocument(state) {
      state.pdfSrc = '';
      state.fileName = '';
    }
  }
});

export const { setCroDocument, resetCroDocument } = croSlice.actions;
export default croSlice.reducer;