import TablesList from '../containers/TablesList';
import Table from '../containers/Table';

export const DASHBOARD_PATH = '/';
export const TABLE_PATH = '/table/';

export default [
  {
    path: DASHBOARD_PATH,
    exact: true,
    component: TablesList,
  },
  {
    path: `${TABLE_PATH}:id`,
    component: Table,
  },
  {
    path: '*',
    component: TablesList,
  },
];
