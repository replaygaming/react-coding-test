import React from 'react';
import { Link } from 'react-router-dom';
import { TABLE_PATH } from '../../routes';
import { tablesListShape } from '../../types';

import './TablesList.css';

const TablesList = ({ tablesList }) => (
  <ul className="TablesList">
    {tablesList.map((table) => (
      <li key={table.id}>
        <Link to={`${TABLE_PATH}${table.id}`} title={table.name}>
          {table.name}
        </Link>
      </li>
    ))}
  </ul>
);

TablesList.propTypes = {
  ...tablesListShape,
};

export default TablesList;
