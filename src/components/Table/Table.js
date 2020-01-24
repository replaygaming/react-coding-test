import React from 'react';
import { tableShape } from '../../types';

import Seats from '../Seats';
import Cards from '../Cards';
import Pots from '../Pots';

import './Table.css';

const Table = ({ table }) => {
  let currentHand = table.currentHand;
  const defaultCurrentHand = {
    players: [],
    communityCards: [],
    pots: []
  };
  if (currentHand === undefined) {
    currentHand = defaultCurrentHand;
  }
  return (
    <div className="Table">
      <div>
        <Seats seats={table.seats} players={currentHand.players} />
        <Cards values={currentHand.communityCards} />
        <Pots pots={currentHand.pots} />
      </div>
    </div>
  );
};

Table.propTypes = {
  table: tableShape.isRequired
};

export default Table;
