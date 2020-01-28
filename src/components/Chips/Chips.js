import React from 'react';
import numeral from 'numeral';

import './Chips.css';

// TODO: Show actual chips rather than just text
const Chips = ({ amount }) => {
  if (!amount) return null;

  return (
    <div className="Chips">
      {numeral(amount).format('0,0')}
    </div>
  );
}

export default Chips;
