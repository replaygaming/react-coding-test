import React from 'react';
import { tableShape } from '../../types';

import Seats from '../Seats';
import Cards from '../Cards';
import Pots from '../Pots';

import './Table.css';

const Table = ({ table: { seats, currentHand: { players, communityCards, pots } = {} } }) => {
  return (
    <div className="Table">
      <div>
        <Seats seats={seats} players={players} />
        {communityCards && <Cards values={communityCards} />}
        {pots && <Pots pots={pots} />}
      </div>
    </div>
  );
};

Table.propTypes = {
  table: tableShape.isRequired,
};

export default Table;
