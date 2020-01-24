import React from 'react';
import ReactDOM from 'react-dom';

import PokerGameFixture from './services/PokerGameService/index.fixture';
import App from './App';

const pokerGameFixture = new PokerGameFixture();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App pokerGameService={pokerGameFixture} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
