import axios from 'axios';

export const GET_TABLE_URL = '/tables';

export const fetchTableData = (id) => axios.get(`${GET_TABLE_URL}/${id}.json`);
