import { fetchData } from '../../utils/APIUtils';
import APIEndpoints from '../APIEndpoints';

class PokerGameAPI {
  getTableData(request) {
    const tableDataEndpoint = APIEndpoints.tableData(request.tableId);
    return fetchData(tableDataEndpoint);
  }
}

export default PokerGameAPI;
