import React from 'react';

import { formatNumber } from '../../utils/NumberUtils';

import './Chips.css';

const Chips = ({ amount }) => {
  if (!amount) return null;

  return <div className="Chips">{formatNumber(amount)}</div>;
};

export default Chips;
