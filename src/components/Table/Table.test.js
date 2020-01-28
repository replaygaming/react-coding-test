import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';
import Seats from '../Seats';
import Pots from '../Pots';
import Cards from '../Cards';
import data from '../../data/table-1';

describe('Table', () => {
  let component;

  it('renders Seats', () => {
    component = shallow(<Table table={data} />);
    expect(component.find(Seats).length).toEqual(1);
  });

  it('renders Pots', () => {
    component = shallow(<Table table={data} />);
    expect(component.find(Pots).length).toEqual(1);
  });

  it('does not render Pots if pots data values is falsy', () => {
    data.currentHand.pots = null;
    component = shallow(<Table table={data} />);
    expect(component.find(Pots).length).toEqual(0);
  });

  it('renders Cards', () => {
    component = shallow(<Table table={data} />);
    expect(component.find(Cards).length).toEqual(1);
  });

  it('does not render Cards if communityCards data values is falsy', () => {
    data.currentHand.communityCards = null;
    component = shallow(<Table table={data} />);
    expect(component.find(Cards).length).toEqual(0);
  });
});
