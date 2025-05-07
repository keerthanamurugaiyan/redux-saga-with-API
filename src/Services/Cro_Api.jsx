import axios from "axios";

const BASE_URL = "https://hastin-container.com/staging/";

export const fetchCroDocumentUrl = ({ croId }) => {
  return axios.get(`${BASE_URL}/api/booking/document/cro/download/${croId}/HASTIN`, {
    responseType: 'blob'
  });
};