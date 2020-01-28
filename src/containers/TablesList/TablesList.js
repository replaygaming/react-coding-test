// TODO this is a just a placeholder, it will be replaced when the tables list api will be ready
import React from 'react';
import TablesList from '../../components/TablesList';

import tablesList from '../../data/tables';

const Container = () => (
  <TablesList tablesList={tablesList} />
);

export default Container;
