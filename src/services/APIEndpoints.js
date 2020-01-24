// TODO: Add env files support and move API_BASE_URL to .env files
const API_BASE_URL = 'https://storage.googleapis.com/replaypoker-dummy-api';

export default {
  tableData: id => `${API_BASE_URL}/tables/${id}.json`
};
