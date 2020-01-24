import React, { Component } from 'react';
import { pokerGameService } from './types';

import Table from './components/Table';
import { TABLE_SIZE } from './constants/GameConstants';

import './App.css';

function Loader() {
  return (
    <div className="Table">
      <h1 className="loader">Setting up the table...</h1>
    </div>
  );
}

class App extends Component {
  static propTypes = {
    pokerGameService: pokerGameService.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      table: null,
      loading: false
    };
  }

  componentDidMount() {
    const { pokerGameService } = this.props;
    this.setState({
      loading: true
    });
    const request = {
      tableId: 3
    };
    const tableDataPromise = pokerGameService.getTableData(request);
    tableDataPromise.then(table => {
      this.setState({
        table: this.formatTableData(table),
        loading: false
      });
    });
  }

  formatSeats = seats => {
    const seatsMap = {};
    seats.forEach(seat => {
      if (seatsMap[seat.id] === undefined) {
        seatsMap[seat.id] = seat;
      }
    });
    for (let i = 0; i < TABLE_SIZE; i++) {
      if (seatsMap[i] === undefined) {
        const seat = {
          id: i,
          state: 'available'
        };
        seatsMap[i] = seat;
      }
    }
    const updatedSeats = Object.values(seatsMap);
    return updatedSeats;
  };

  // In some of the api responses, all the data is not present
  // so we are processing the data as per our requirement
  formatTableData = table => {
    const defaultCurrentHand = {
      players: [],
      communityCards: [],
      pots: []
    };

    const updatedTable = {
      ...table,
      seats: this.formatSeats(table.seats),
      currentHand: table.currentHand ? table.currentHand : defaultCurrentHand
    };
    return updatedTable;
  };

  isLoading = () => {
    const { table, loading } = this.state;
    return loading || table === null;
  };

  render() {
    const { table } = this.state;

    return (
      <div className="App">
        {this.isLoading() ? <Loader /> : <Table table={table} />}
      </div>
    );
  }
}

export default App;
