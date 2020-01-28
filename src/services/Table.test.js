import axios from 'axios';
import { fetchTableData } from './Table';

jest.mock('axios');

describe('Table services', () => {
	describe('fetchTableData', () => {
		it('should do a get table data request to the /table/:id endpoint', () => {
			fetchTableData(124);
			expect(axios.get).toHaveBeenCalledWith('/tables/124.json');
		});
	});
});
