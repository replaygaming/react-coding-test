import React from 'react';
import { shallow } from 'enzyme';

import TablesList from './TablesList';
import data from '../../data/tables';

describe('TablesList', () => {
  let component;

  it('should render a list of tables links', () => {
    component = shallow(<TablesList tablesList={data} />);
    const links = component.find('Link');
    const linksListLength = links.length;
    expect(linksListLength).toEqual(9);
    for (let i= 0; i < linksListLength; i += 1) {
      expect(links.at(i).props().to).toEqual(`/table/${data[i].id}`);
    }
  });
});
