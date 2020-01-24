import { resolveWithTimeout } from '../../utils/APIUtils';
import table from '../../data/table-1';

class PokerGameFixture {
  getTableData() {
    return resolveWithTimeout(table);
  }
}

export default PokerGameFixture;
